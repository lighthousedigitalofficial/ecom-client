import { useParams } from 'react-router-dom'
import { useGetProductBySlugQuery } from '../../../redux/slices/productsApiSlice'

import Product from '../../../components/Product/Product'
import Loader from '../../../components/Loader'
import ProductReviews from '../../../components/Product/ProductReviews'
import VendorRightBar from '../../../components/Seller/VendorRightBar'
import Overview from '../../../components/Product/subcomponent/Overview'
import SuggestionProducts from './SuggestionProducts'

const ProductDetailsPage = () => {
    const { slug } = useParams()

    const { data: product, isFetching: isProductFetching } =
        useGetProductBySlugQuery(slug, {
            skip: !slug,
        })

    return isProductFetching ? (
        <Loader />
    ) : product && product.doc ? (
        <div className="w-[95vw] mx-auto flex flex-col space-y-4 sm:space-y-0 mb-8">
            <div className="flex flex-col lg:flex-row gap-4 w-full">
                <div className="flex flex-col w-full">
                    <div className="flex lg:flex-row flex-col justify-between">
                        <Product product={product?.doc} />
                    </div>
                    <div className="flex flex-col-reverse lg:flex-row w-full gap-4">
                        <div className="flex flex-col w-full lg:w-3/4">
                            <Overview product={product?.doc} />
                            <ProductReviews product={product?.doc} />
                            {/* <AddReview
                                productId={product?.doc._id}
                                refetch={refetch}
                            /> */}
                        </div>
                        <div className="w-full lg:w-1/4 mt-8">
                            <VendorRightBar
                                vendorId={product?.doc?.userId}
                                shop
                            />
                        </div>
                    </div>
                </div>
            </div>
            <SuggestionProducts brand={product?.doc?.brand?._id} />
        </div>
    ) : (
        <p>Product details not found!</p>
    )
}

export default ProductDetailsPage
