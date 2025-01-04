import ShopBanner from '../../../components/Banners/ShopBanner'
import Loader from '../../../components/Loader'
import { useGetVendorBySlugQuery } from '../../../redux/slices/vendorsApiSlice'
import { useParams, useSearchParams } from 'react-router-dom'
import ProductCard from '../../../components/Product/ProductCard'
import img from '../../../assets/no-product-found.png'

import { TablePagination } from '@mui/material'
import { useState } from 'react'
import FilterSidebar from '../../../components/Sort/FilterSidebar'
import { useGetProductsQuery } from '../../../redux/slices/productsApiSlice'
import ProductsHeader from '../../../components/Product/subcomponent/ProductsHeader'

const ShopViewPage = () => {
    const [searchParams] = useSearchParams()

    const { slug } = useParams()
    const [currentPage, setCurrentPage] = useState(0) // MUI uses 0-based indexing
    const [rowsPerPage, setRowsPerPage] = useState(12) // Adjust as needed

    let filters = Array.from(searchParams.entries()).reduce(
        (acc, [param, value]) => {
            acc[param] = value
            return acc
        },
        {}
    )

    const { data: vendor, isLoading } = useGetVendorBySlugQuery(slug)

    const { data: products, isFetching } = useGetProductsQuery(
        {
            userId: vendor?.doc?._id,
            ...filters,
        },
        {
            skip: !vendor?.doc?._id,
        }
    )

    // Calculate current products based on pagination
    const currentProducts =
        products?.doc?.slice(
            currentPage * rowsPerPage,
            currentPage * rowsPerPage + rowsPerPage
        ) || []

    // Handle page change
    const handleChangePage = (event, newPage) => {
        setCurrentPage(newPage)
    }

    // Handle rows per page change
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10))
        setCurrentPage(0) // Reset to the first page when changing rows per page
    }

    return isLoading || isFetching ? (
        <Loader />
    ) : vendor && vendor?.doc ? (
        <div className="mt-4 w-[95vw] mx-auto py-4">
            <ShopBanner vendor={vendor?.doc} />

            {/* Space between banner and brand header */}
            <div className="mt-10 lg:mt-8">
                <ProductsHeader totalItems={products?.results} />
            </div>

            <div className="flex justify-between gap-6 items-start w-full mt-6 lg:mt-8">
                {/* Adjusted sidebar for larger screens */}
                <FilterSidebar filters={filters} />
                <div className="w-full lg:w-3/4 p-4">
                    {vendor && currentProducts?.length > 0 ? (
                        <>
                            <div className="grid w-full lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4 transition-all py-2 ease-in duration-300">
                                {currentProducts.map((product, index) => (
                                    <ProductCard key={index} data={product} />
                                ))}
                            </div>
                            {/* Pagination Controls using MUI TablePagination */}
                            <TablePagination
                                component="div"
                                count={products?.results || 0}
                                page={currentPage}
                                onPageChange={handleChangePage}
                                rowsPerPage={rowsPerPage}
                                onRowsPerPageChange={handleChangeRowsPerPage}
                                rowsPerPageOptions={[12, 24, 36, 60]} // You can customize this
                            />
                        </>
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
            </div>
        </div>
    ) : (
        <p className="text-lg bg-red-50 text-red-500 py-4 px-8 mx-auto">
            Vendor data not found!
        </p>
    )
}

export default ShopViewPage
