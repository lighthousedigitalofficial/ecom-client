/* eslint-disable react/prop-types */
// import { useGetProductsQuery } from '../../redux/slices/productsApiSlice'
// import Loader from '../Loader'
import VendorCard from './../Product/subcomponent/VendorCard'
// import MoreStoreProducts from '../Product/subcomponent/MoreStoreProducts'
import FeatureCard from '../Product/subcomponent/FeatureCard'
import {
    FaCertificate,
    FaLock,
    FaShippingFast,
    FaUndoAlt,
} from 'react-icons/fa'

const features = [
    { Icon: FaShippingFast, text: 'Fast Delivery all across the country' },
    { Icon: FaLock, text: 'Safe Payment' },
    { Icon: FaUndoAlt, text: '7 Days Return Policy' },
    { Icon: FaCertificate, text: '100% Authentic Products' },
]

const VendorRightBar = ({ vendorId }) => {
    // const { data: vendorProducts, isFetching } = useGetProductsQuery(
    //     {
    //         userId: vendorId,
    //         limit: 4,
    //     },
    //     { skip: !vendorId }
    // )

    return (
        <div className="flex flex-col gap-4">
            <VendorCard vendorId={vendorId} />
            <FeatureCard features={features} />
            {/* {vendorProducts && vendorProducts.results > 1 ? (
                <div className="flex flex-col gap-6">
                    <MoreStoreProducts products={vendorProducts?.doc} />
                </div>
            ) : null} */}
        </div>
    )
}

export default VendorRightBar
