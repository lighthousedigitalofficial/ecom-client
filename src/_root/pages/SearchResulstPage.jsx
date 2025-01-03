import { useSearchParams } from 'react-router-dom'
import { useSearchProductsQuery } from '../../redux/slices/productsApiSlice'
import Loader from '../../components/Loader'
import ProductCard from '../../components/Product/ProductCard'
import React from 'react'

const SearchResultPage = () => {
    const [searchParams] = useSearchParams()
    const query = searchParams.get('query') || ''

    console.log(query)

    // API query with caching and deduplication
    const { data, isLoading } = useSearchProductsQuery({ query })

    console.log(data)

    return (
        <div className="container mx-auto p-4">
            {isLoading ? (
                <Loader />
            ) : data && data.results && data.totalResults > 0 ? (
                <>
                    <div>
                        <div className="bg-primary-50 p-6 rounded-lg shadow-sm mb-4">
                            <h1 className="text-2xl font-bold text-gray-800 mb-2">
                                Search Products
                            </h1>
                            <h1 className="text-lg text-gray-600">
                                {data.totalResults} Items found
                            </h1>
                        </div>

                        <div className="grid w-full lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-4">
                            {data?.results?.map((product) => (
                                <ProductCard key={product._id} data={product} />
                            ))}
                        </div>
                    </div>
                </>
            ) : (
                <p className="text-center mt-12 py-8 text-lg text-gray-600">
                    {`There is no product! for this "${query}".`}
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
