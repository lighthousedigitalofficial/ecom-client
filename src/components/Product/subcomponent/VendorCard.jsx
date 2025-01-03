/* eslint-disable react/prop-types */
import PropTypes from 'prop-types'
import { FaStar, FaBoxOpen, FaStore } from 'react-icons/fa'
import { useGetVendorDetailsQuery } from '../../../redux/slices/vendorsApiSlice'
import Loader from '../../Loader'
import { Link } from 'react-router-dom'
// import { LazyLoadImage } from 'react-lazy-load-image-component'
import keys from '../../../config/keys'
import { FcApproval } from 'react-icons/fc'

const VendorCard = ({ vendorId }) => {
    const { data: vendor, isLoading } = useGetVendorDetailsQuery(vendorId, {
        skip: !vendorId,
    })

    return isLoading ? (
        <Loader />
    ) : vendor && vendor?.doc ? (
        <div
            key={vendor?.doc?._id}
            className="bg-white p-4 rounded shadow flex flex-col gap-2"
        >
            <div className="flex items-center gap-3">
                <img
                    src={
                        vendor?.doc?.logo
                            ? vendor?.doc?.logo.startsWith('vendors')
                                ? `${keys.BUCKET_URL}${vendor?.doc?.logo}`
                                : vendor?.doc?.logo
                            : keys.DEFAULT_IMG
                    }
                    loading="lazy"
                    alt={vendor?.doc?.shopName}
                    className="w-16 h-16 rounded-full border-2 border-primary-300 object-cover"
                />

                <div className="group-hover:text-primary-500 text-gray-80 ">
                    <h3 className="flex items-center gap-2">
                        {vendor?.doc?.shopName}
                        <FcApproval />
                    </h3>
                    <div className="text-gray-600 text-sm truncate w-3/4">
                        {vendor?.doc?.address}
                    </div>
                </div>
            </div>

            <div className="mt-2">
                <div className="flex text-gray-600 mx-auto justify-center items-center">
                    <div className="flex flex-col gap-2 justify-center items-center pr-4 border-r border-gray-300">
                        <FaStar className="text-yellow-800 text-lg" />{' '}
                        {vendor?.doc?.totalReviews || 0} Reviews
                    </div>
                    <div className="flex flex-col gap-2 justify-center items-center pl-4">
                        <FaBoxOpen className="text-green-800 text-lg" />{' '}
                        {vendor?.doc?.approvedProducts || 0} Products
                    </div>
                </div>
            </div>
            <Link
                to={`/shop-view/${vendor?.doc?.slug}`}
                className="btn primary-btn mt-4 w-full flex justify-center gap-2 items-center"
            >
                <FaStore size={20} />

                <span>Visit store</span>
            </Link>
        </div>
    ) : null
}

VendorCard.propTypes = {
    vendor: PropTypes.object,
}

export default VendorCard
