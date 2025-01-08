import { Link, useSearchParams } from 'react-router-dom'
import { useSearchProductsQuery } from '../../redux/slices/productsApiSlice'
import Loader from '../../components/Loader'
import ProductCard from '../../components/Product/ProductCard'
import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'

const SearchResultPage = () => {
    const [searchParams] = useSearchParams()
    const query = searchParams.get('query') || ''

    console.log(query)

    // API query with caching and deduplication
    const { data, isLoading } = useSearchProductsQuery({ query })

    console.log(data)

    return (
        <div className="mx-auto p-4">
            {isLoading ? (
                <Loader />
            ) : data && data.results ? (
                <>
                    <div className="mt-4 w-[95vw] mx-auto py-4">
                        <div className="bg-primary-50 p-6 rounded-lg shadow-sm mb-4">
                            <h1 className="text-2xl font-bold text-gray-800 mb-2">
                                Search Products
                            </h1>
                            <h1 className="text-lg text-gray-600">
                                {data.totalResults || 0} Items found
                            </h1>
                        </div>
                        {data.totalResults > 0 ? (
                            <div className="grid w-full lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-4">
                                {data?.results?.map((product) => (
                                    <ProductCard
                                        key={product._id}
                                        data={product}
                                    />
                                ))}
                            </div>
                        ) : (
                            <div className="flex justify-center flex-col items-center gap-6 mt-12 py-8 text-gray-800">
                                {/* Icon */}
                                <FaShoppingCart className="text-gray-600 text-6xl" />

                                {/* Message */}
                                <p className="text-xl text-center">
                                    We couldn't find any products matching
                                    <span className="font-semibold text-primary-600">
                                        "{query}"
                                    </span>
                                    .
                                </p>

                                {/* Suggestions */}
                                <p className="text-sm text-gray-500 text-center">
                                    Double-check your spelling, try searching
                                    for something else, or browse our catalog
                                    below.
                                </p>

                                {/* Button to browse all products */}
                                <Link
                                    to="/products"
                                    className="btn primary-btn"
                                >
                                    Browse All Products
                                </Link>
                            </div>
                        )}
                    </div>
                </>
            ) : (
                <p className="text-center mt-12 py-8 text-lg text-gray-800">
                    {`Something went wrong. Please try again!.`}
                </p>
            )}
        </div>
    )
}

export default React.memo(SearchResultPage)

//  <div className="py-2">
//                         <h1 className="text-xl font-bold">Search Results</h1>
//                         <h1 className="text-base text-gray-600 mb-4">
//                             {totalProducts > 0
//                                 ? `${totalProducts} items found for "${query}"`
//                                 : 'No products found'}
//                         </h1>
//                     </div>
