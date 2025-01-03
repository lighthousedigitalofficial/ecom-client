/* eslint-disable react/prop-types */
import Loader from '../../../components/Loader'
import ProductCard from '../../../components/Product/ProductCard'
import { useGetProductsQuery } from '../../../redux/slices/productsApiSlice'

const SuggestionProducts = ({ brand }) => {
    const { data: products, isFetching: isProductsLoading } =
        useGetProductsQuery(
            {
                brand: brand,
                limit: 10,
            },
            { skip: !brand }
        )

    return (
        <div>
            {' '}
            {isProductsLoading ? (
                <Loader />
            ) : products && products.doc?.length ? (
                <div className="w-full">
                    <h3 className="text-2xl font-bold mb-4">
                        Similar Products
                    </h3>
                    <div className="grid lg:grid-cols-5 md:grid-cols-4 grid-cols-2 gap-2">
                        {products?.doc?.map((product, index) => {
                            return <ProductCard key={index} data={product} />
                        })}
                    </div>
                </div>
            ) : null}
        </div>
    )
}

export default SuggestionProducts
