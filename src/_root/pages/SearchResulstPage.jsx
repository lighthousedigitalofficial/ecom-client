import React, { useState, useMemo, useCallback, useTransition } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useSearchProductsQuery } from '../../redux/slices/productsApiSlice'
import Loader from '../../components/Loader'
import ProductCard from '../../components/Product/ProductCard'
import TablePagination from '@mui/material/TablePagination'

const SearchResultPage = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const [currentPage, setCurrentPage] = useState(0)
    const [rowsPerPage, setRowsPerPage] = useState(15)
    const [isPending, startTransition] = useTransition()

    // Extract search parameters
    const query = searchParams.get('query') || ''
    const category = searchParams.get('category') || ''
    const brand = searchParams.get('brand') || ''
    const slug = searchParams.get('product') || ''

    // Memoized filters to avoid unnecessary recalculations
    const filters = useMemo(() => {
        const newFilters = {}
        if (category) newFilters.category = category
        if (brand) newFilters.brand = brand
        if (query) newFilters.query = query
        if (slug) newFilters.slug = slug
        return newFilters
    }, [category, brand, query, slug])

    // API query with caching and deduplication
    const { data, isFetching } = useSearchProductsQuery(
        { ...filters, page: currentPage + 1, limit: rowsPerPage },
        { keepPreviousData: true }
    )

    const totalProducts = data?.totalProducts || 0

    // Handle page changes
    const handleChangePage = useCallback(
        (_, newPage) => {
            startTransition(() => {
                setCurrentPage(newPage)
                setSearchParams((prev) => {
                    const updatedParams = new URLSearchParams(prev)
                    updatedParams.set('page', newPage + 1) // Sync page to URL (1-based indexing)
                    return updatedParams
                })
            })
            window.scrollTo({ top: 0, behavior: 'smooth' }) // Smooth scroll to top
        },
        [setSearchParams]
    )

    // Handle rows per page change
    const handleChangeRowsPerPage = useCallback(
        (event) => {
            const newRowsPerPage = parseInt(event.target.value, 10)
            startTransition(() => {
                setRowsPerPage(newRowsPerPage)
                setCurrentPage(0)
                setSearchParams((prev) => {
                    const updatedParams = new URLSearchParams(prev)
                    updatedParams.set('page', '1') // Reset to first page
                    updatedParams.set('limit', newRowsPerPage)
                    return updatedParams
                })
            })
        },
        [setSearchParams]
    )

    console.log(data)

    return (
        <div className="container mx-auto p-4">
            {/* Loader for API fetching or transitions */}
            {(isFetching || isPending) && <Loader />}

            {/* Search Results */}
            {!isFetching && !isPending && (
                <>
                    <div className="py-2">
                        <h1 className="text-xl font-bold">Search Results</h1>
                        <h1 className="text-base text-gray-600 mb-4">
                            {totalProducts > 0
                                ? `${totalProducts} items found for "${query}"`
                                : 'No products found'}
                        </h1>
                    </div>

                    {/* Product List */}
                    {totalProducts > 0 ? (
                        <>
                            <div className="grid w-full lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-4">
                                {data.results?.map((product) => (
                                    <ProductCard
                                        key={product._id}
                                        data={product}
                                    />
                                ))}
                            </div>

                            {/* Pagination Controls */}
                            {totalProducts > rowsPerPage && (
                                <TablePagination
                                    component="div"
                                    count={totalProducts}
                                    page={currentPage}
                                    onPageChange={handleChangePage}
                                    rowsPerPage={rowsPerPage}
                                    onRowsPerPageChange={
                                        handleChangeRowsPerPage
                                    }
                                    rowsPerPageOptions={[15, 30, 60]} // Customizable options
                                />
                            )}
                        </>
                    ) : (
                        <p className="text-center mt-12 py-8 text-lg text-gray-600">
                            {`There is no product! for this "${query}".`}
                        </p>
                    )}
                </>
            )}
        </div>
    )
}

export default React.memo(SearchResultPage)
