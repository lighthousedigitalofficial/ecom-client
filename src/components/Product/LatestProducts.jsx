import { useGetLatestProductsQuery } from '../../redux/slices/productsApiSlice'
import Loader from '../Loader'
import ProductCard from './ProductCard'

const LatestProducts = () => {
    const { data: products, isLoading } = useGetLatestProductsQuery({})

    return isLoading ? (
        <Loader />
    ) : products && products?.doc ? (
        <div className="bg-white shadow-md rounded-lg p-4 mb-4">
            <h3 className="text-2xl font-bold mb-4">Latest Products</h3>
            <div className="grid lg:grid-cols-5 md:grid-cols-4 grid-cols-2 p-4 gap-2">
                {products?.doc?.map((product, index) => {
                    if (index <= 9)
                        return <ProductCard key={index} data={product} />
                })}
            </div>
        </div>
    ) : (
        <p>Latest products not found!</p>
    )
}

export default LatestProducts
