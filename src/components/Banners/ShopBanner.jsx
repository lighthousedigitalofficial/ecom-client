/* eslint-disable react/prop-types */
import keys from './../../config/keys'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { FcApproval } from 'react-icons/fc'
// import { Rating } from '@mui/material'

const ShopBanner = ({ vendor }) => {
    return (
        vendor && (
            <div className="relative h-[50vh] mt-4 p-4 rounded-lg shadow-lg max-w-7xl mx-auto py-4 bg-pink-100">
                <img
                    src={
                        vendor.banner
                            ? vendor?.banner.startsWith('vendors')
                                ? `${keys.BUCKET_URL}${vendor.banner}`
                                : vendor.banner
                            : keys.DEFAULT_IMG
                    }
                    alt="Shop Banner"
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover rounded-lg"
                />

                <div className="relative flex items-center h-full">
                    <div className="flex flex-col justify-between w-[500px] z-10">
                        <div className="h-[240px]"></div>
                        <div className="bg-white p-4 rounded-lg shadow-lg flex items-center">
                            <LazyLoadImage
                                src={
                                    vendor.logo
                                        ? vendor.logo.startsWith('vendors')
                                            ? `${keys.BUCKET_URL}${vendor.logo}`
                                            : vendor.logo
                                        : keys.DEFAULT_IMG
                                }
                                effect="blur" // You can use "blur" or "opacity" as lazy load effect
                                alt={vendor.shopName}
                                className="w-16 h-16 object-cover rounded-full border-2 border-primary-300"
                            />
                            <div className="ml-4">
                                <h2 className="text-xl font-semibold flex items-center gap-2">
                                    {vendor.shopName}
                                    <FcApproval />
                                </h2>
                                {/* <div className="flex items-center gap-2">
                                    <Rating
                                        name="half-rating-read"
                                        defaultValue={0}
                                        value={totalVendorRating}
                                        precision={0.5}
                                        readOnly
                                        size="small"
                                    />
                                    <span className="text-sm text-gray-700">
                                        ({productsNumOfReviews || 0})
                                    </span>
                                </div> */}
                                <div className="text-green-600">
                                    <span>
                                        {vendor?.reviews?.length || 0} Reviews
                                    </span>{' '}
                                    |{' '}
                                    <span>
                                        {vendor?.totalOrders || 0} Orders
                                    </span>
                                </div>
                            </div>
                            {/* <button className="ml-auto bg-green-500 text-white py-2 px-4 rounded-lg flex items-center">
								<AiFillMessage className="mr-2" /> Chat
							</button> */}
                        </div>
                    </div>
                </div>
            </div>
        )
    )
}

export default ShopBanner
