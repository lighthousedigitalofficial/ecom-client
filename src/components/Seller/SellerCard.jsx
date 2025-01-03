/* eslint-disable react/prop-types */
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import keys from './../../config/keys'
// import { LazyLoadImage } from 'react-lazy-load-image-component'

import { FcApproval } from 'react-icons/fc'

const SellerCard = ({ data: seller }) => {
    return (
        <>
            <div className="bg-white rounded-lg border border-primary-100 overflow-hidden flex flex-col w-75 mx-2 cursor-pointer">
                <Link to={`/shop-view/${seller?.slug}`}>
                    {/* <LazyLoadImage
                        src={
                            seller.banner
                                ? seller.banner.startsWith('vendors')
                                    ? `${keys.BUCKET_URL}${seller.banner}`
                                    : seller.banner
                                : keys.DEFAULT_IMG
                        }
                        effect="blur" // You can use "blur" or "opacity" as lazy load effect
                        alt={seller.firstName}
                        className="w-svw h-24 object-cover transform transition duration-300 ease-in-out hover:scale-105"
                    /> */}
                    <img
                        src={
                            seller.banner
                                ? seller.banner.startsWith('vendors')
                                    ? `${keys.BUCKET_URL}${seller.banner}`
                                    : seller.banner
                                : keys.DEFAULT_IMG
                        }
                        alt={seller.firstName}
                        loading="lazy"
                        className="w-svw h-24 object-cover transform transition duration-300 ease-in-out hover:scale-105"
                    />

                    <div className="p-4 flex-col items-center">
                        <div className="flex flex-row gap-2">
                            <img
                                src={
                                    seller.logo
                                        ? seller.logo.startsWith('vendors')
                                            ? `${keys.BUCKET_URL}${seller.logo}`
                                            : seller.logo
                                        : keys.DEFAULT_IMG
                                }
                                alt={seller.shopName}
                                loading="lazy"
                                className="w-16 h-16 object-cover bg-white rounded-full -mt-8 border-2 border-primary-300 shadow-md transform transition duration-300 ease-in-out hover:scale-105"
                            />

                            <div className="flex flex-col -mt-2 ">
                                <p className="font-bold text-sm text-gray-800 truncate flex items-center gap-2">
                                    {`${seller.shopName}`}
                                    <FcApproval />
                                </p>

                                {/* <div className="flex flex-row items-center gap-1">
                                    <span className="text-orange-400">★</span>
                                    <span className=" text-gray-600 text-sm">
                                        2.2 Rating
                                    </span>
                                </div> */}
                            </div>
                        </div>

                        {/* <div className="flex mt-2 justify-around">
                            <div className="flex flex-row text-center gap-1 px-3 bg-gray-100 rounded-md">
                                <h4 className="text-lg font-semibold text-primary-400">
                                    {seller?.reviews?.length || 0}
                                </h4>
                                <span className="text-gray-600 text-sm p-1">
                                    Reviews
                                </span>
                            </div>
                            <div className="flex flex-row text-center gap-1 px-3 bg-gray-100 rounded-md">
                                <h4 className="text-lg font-semibold text-primary-400">
                                    {seller.approvedProducts || 0}
                                </h4>
                                <span className="text-gray-600 text-sm p-1">
                                    Products
                                </span>
                            </div>
                        </div> */}
                    </div>
                </Link>
            </div>
        </>
    )
}

// Optional: Adding PropTypes for prop validation
SellerCard.propTypes = {
    seller: PropTypes.object,
}

export default SellerCard
