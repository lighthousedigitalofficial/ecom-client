import FilterSidebar from '../../../components/Sort/FilterSidebar'
import Loader from '../../../components/Loader'
import ProductCard from '../../../components/Product/ProductCard'
import { useParams, useSearchParams } from 'react-router-dom'
import { useGetSubCategoryBySlugQuery } from '../../../redux/slices/categoriesApiSlice'
import { capitalizeFirstLetter } from '../../../utils'
import img from '../../../assets/no-product-found.png'
import { useGetProductsQuery } from '../../../redux/slices/productsApiSlice'
import { useState } from 'react'
import { TablePagination } from '@mui/material'
import keys from '../../../config/keys'

export const SubCategoryProductsPage = () => {
    const { subCategory: slug, category } = useParams()

    const [searchParams, setSearchParams] = useSearchParams()
    const [currentPage, setCurrentPage] = useState(
        parseInt(searchParams.get('page'), 10) - 1 || 0
    ) // Sync with URL, 0-based index
    const [rowsPerPage, setRowsPerPage] = useState(12)

    // Construct filters from search parameters
    let filters = Array.from(searchParams.entries()).reduce(
        (acc, [param, value]) => {
            acc[param] = value
            return acc
        },
        {}
    )

    // Fetch products based on query parameters
    const { data: subCategory, isLoading } = useGetSubCategoryBySlugQuery(slug)

    const { data, isFetching: productsFetching } = useGetProductsQuery({
        subCategory: subCategory?.doc?._id,
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
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    // Handle rows per page change
    const handleChangeRowsPerPage = (event) => {
        const newRowsPerPage = parseInt(event.target.value, 10)
        setRowsPerPage(newRowsPerPage)
        setCurrentPage(0)
        setSearchParams({
            ...filters,
            page: 1,
        })
    }

    return isLoading || productsFetching ? (
        <Loader />
    ) : subCategory && subCategory?.doc ? (
        <>
            <div className="mt-4 w-[95vw] mx-auto py-4">
                {/* <div className="bg-primary-50 p-6 flex items-center gap-2 rounded-lg shadow-sm">
                    <img
                        src={
                            subCategory?.doc?.logo
                                ? subCategory?.doc?.logo.startsWith(
                                      'subcategory'
                                  )
                                    ? `${keys.BUCKET_URL}${subCategory?.doc?.logo}`
                                    : subCategory?.doc?.logo
                                : keys.DEFAULT_IMG
                        }
                        alt={subCategory.name}
                        className="lg:w-20 lg:h-20 md:w-16 md:h-16 h-10 w-10 object-cover rounded-full"
                    />
                    <div>
                        <h1 className="text-2xl font-bold text-gray-800 mb-2">
                            {capitalizeFirstLetter(category)} (
                            {capitalizeFirstLetter(subCategory?.doc?.name)})
                        </h1>
                        <p className="text-lg text-gray-600">
                            {totalProducts} Items found
                        </p>
                    </div>
                </div> */}
                <div className="bg-primary-500 text-gray-100 p-6 flex items-center gap-4 rounded-lg shadow-sm flex-wrap lg:flex-nowrap">
                    {/* Logo Section */}
                    <img
                        src={
                            subCategory?.doc?.logo
                                ? subCategory?.doc?.logo.startsWith(
                                      'subcategory'
                                  )
                                    ? `${keys.BUCKET_URL}${subCategory?.doc?.logo}`
                                    : subCategory?.doc?.logo
                                : keys.DEFAULT_IMG
                        }
                        alt={subCategory?.doc?.name || 'Default'}
                        className="h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24 bg-white object-cover rounded-full"
                    />

                    {/* Text Section */}
                    <div className="flex-1">
                        <h1 className="text-lg md:text-xl lg:text-2xl font-bold mb-2">
                            {capitalizeFirstLetter(category)} (
                            {capitalizeFirstLetter(
                                subCategory?.doc?.name || ''
                            )}
                            )
                        </h1>
                        <p className="text-sm md:text-base  lg:text-lg">
                            {totalProducts} Items found
                        </p>
                    </div>
                </div>

                <div className="flex justify-between items-start gap-4 my-4">
                    <FilterSidebar filters={filters} />
                    {productsFetching ? (
                        <Loader />
                    ) : data?.doc?.length > 0 ? (
                        <div className="grid w-full lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4 py-2 transition-all ease-in duration-300">
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
                {/* Pagination Controls */}
                {totalProducts > rowsPerPage && (
                    <TablePagination
                        component="div"
                        count={totalProducts}
                        page={currentPage}
                        onPageChange={handleChangePage}
                        rowsPerPage={rowsPerPage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                        rowsPerPageOptions={[12, 24, 36, 60]} // You can customize this
                    />
                )}
            </div>
        </>
    ) : (
        <p className="text-center p-12">Sub Category not found!</p>
    )
}

export default SubCategoryProductsPage
