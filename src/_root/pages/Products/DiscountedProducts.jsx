import FilterSidebar from '../../../components/Sort/FilterSidebar'
import Loader from '../../../components/Loader'
import ProductCard from '../../../components/Product/ProductCard'
import { useGetDiscountedProductsQuery } from '../../../redux/slices/productsApiSlice'
import { useSearchParams } from 'react-router-dom'
import { useState } from 'react'
import img from '../../../assets/no-product-found.png'
import { TablePagination } from '@mui/material'
import ProductsHeader from '../../../components/Product/subcomponent/ProductsHeader'

export const DiscountedProductsPage = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const [currentPage, setCurrentPage] = useState(
        parseInt(searchParams.get('page'), 10) - 1 || 0
    ) // Sync with URL, 0-based index
    const [rowsPerPage, setRowsPerPage] = useState(12)

    // Construct filters from search parameters
    const filters = Array.from(searchParams.entries()).reduce(
        (acc, [param, value]) => {
            acc[param] = value
            return acc
        },
        {}
    )

    // Fetch discounted products
    const { data, isFetching } = useGetDiscountedProductsQuery({
        ...filters,
        page: currentPage + 1, // API expects 1-based indexing
        limit: rowsPerPage,
    })

    const totalProducts = data?.totalDocs || 0

    // Handle page change
    const handleChangePage = (_, newPage) => {
        setCurrentPage(newPage)
        setSearchParams({
            ...filters,
            page: newPage + 1,
        })
        window.scrollTo({ top: 0, behavior: 'smooth' }) // Scroll to top
    }

    // Handle rows per page change
    const handleChangeRowsPerPage = (event) => {
        const newRowsPerPage = parseInt(event.target.value, 10)
        setRowsPerPage(newRowsPerPage)
        setCurrentPage(0) // Reset to the first page
        setSearchParams({
            ...filters,
            page: 1, // Reset page to 1
        })
    }

    return isFetching ? (
        <Loader />
    ) : data ? (
        <div className="mt-4 w-full mx-auto py-4">
            <ProductsHeader
                title="Discounted Products"
                totalItems={data?.totalDocs}
            />

            <div className="flex justify-between items-start gap-4 my-4">
                <FilterSidebar filters={filters} />
                {data?.doc?.length ? (
                    <div className="grid w-full lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4 transition-all py-2 ease-in duration-300">
                        {data?.doc?.map((product, index) => (
                            <ProductCard key={index} data={product} />
                        ))}
                    </div>
                ) : (
                    <div className="text-lg flex mt-20 justify-center items-center w-full text-center">
                        <img
                            src={img}
                            alt="NO Product Found"
                            className="w-[60%] mx-auto"
                        />
                    </div>
                )}
            </div>
            {/* Pagination Controls using MUI TablePagination */}
            {totalProducts > rowsPerPage && (
                <TablePagination
                    component="div"
                    count={totalProducts}
                    page={currentPage}
                    onPageChange={handleChangePage}
                    rowsPerPage={rowsPerPage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                    rowsPerPageOptions={[12, 24, 36, 60]} // Customizable
                />
            )}
        </div>
    ) : (
        <p className="text-center p-12">Discounted Products not found!</p>
    )
}

export default DiscountedProductsPage
