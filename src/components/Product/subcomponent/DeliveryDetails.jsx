/* eslint-disable react/prop-types */
import {
    FaMapMarkerAlt,
    FaTruck,
    FaUndoAlt,
    FaMoneyBillAlt,
} from 'react-icons/fa'
import { useGetShippingInfoByVendorIdQuery } from '../../../redux/slices/shippingSlice'

import { useEffect, useState } from 'react'
import axios from 'axios'
import keys from '../../../config/keys'
// import { CircularProgress } from '@mui/material'

// const DeliveryDetails = ({ product }) => {
//     const vendorId = product.userId
//     const { data: vendorShippingInfo } = useGetShippingInfoByVendorIdQuery(
//         vendorId,
//         {
//             skip: !vendorId,
//         }
//     )
//     console.log(vendorShippingInfo)

//     const shippingData = {
//         service_type_id: 1,
//         origin_city_id: vendorShippingInfo?.doc?.pickingAddressId,
//         destination_city_id: 202,
//         estimated_weight: product?.weight,
//         shipping_mode_id: 1,
//         amount: product?.price,
//     }

//     console.log(shippingData)

//     return (
//         <div className="max-w-md mx-auto bg-white shadow-sm my-2 rounded-lg p-6 space-y-4">
//             {/* Delivery Options */}
//             <div className="border-b pb-4">
//                 <h3 className="text-gray-500 text-sm font-semibold mb-2">
//                     Delivery Options
//                 </h3>
//                 <div className="flex items-center justify-between">
//                     <div className="flex items-center gap-2">
//                         <FaMapMarkerAlt className="text-primary-500 text-lg" />
//                         <p className="text-gray-700 text-sm">
//                             Sindh, Karachi - Gulshan-e-Iqbal, Block 15
//                         </p>
//                     </div>
//                     <a
//                         href="#change"
//                         className="text-blue-500 text-sm hover:underline"
//                     >
//                         Change
//                     </a>
//                 </div>
//             </div>

//             {/* Standard Delivery */}
//             <div className="border-b pb-4">
//                 <div className="flex items-center justify-between">
//                     <div className="flex items-center gap-2">
//                         <FaTruck className="text-primary-500 text-lg" />
//                         <div>
//                             <p className="text-gray-700 font-medium">
//                                 Standard Delivery
//                             </p>
//                             <p className="text-gray-500 text-xs">
//                                 Guaranteed by 22-26 Dec
//                             </p>
//                         </div>
//                     </div>
//                     <p className="text-gray-900 font-semibold">Rs. 135</p>
//                 </div>
//             </div>

//             {/* Cash on Delivery */}
//             <div className="border-b pb-4">
//                 <div className="flex items-center gap-2">
//                     <FaMoneyBillAlt className="text-primary-500 text-lg" />
//                     <p className="text-gray-700 font-medium">
//                         Cash on Delivery Available
//                     </p>
//                 </div>
//             </div>

//             {/* Return & Warranty */}
//             <div className="pt-2">
//                 <h3 className="text-gray-500 text-sm font-semibold mb-2">
//                     Return & Warranty
//                 </h3>
//                 <div className="flex items-center gap-2">
//                     <FaUndoAlt className="text-primary-500 text-lg" />
//                     <p className="text-gray-700 font-medium">
//                         14 days easy return
//                     </p>
//                 </div>
//             </div>
//         </div>
//     )
// }

const DeliveryDetails = ({ product }) => {
    const [shippingCharges, setShippingCharges] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const vendorId = product?.userId

    // Fetch vendor shipping info (you can replace this with your existing query logic)
    const { data: vendorShippingInfo } = useGetShippingInfoByVendorIdQuery(
        vendorId,
        { skip: !vendorId }
    )

    const fetchShippingCharges = async () => {
        if (!vendorShippingInfo?.doc?.originCityId || !product) return

        const shippingData = {
            service_type_id: 1,
            origin_city_id: vendorShippingInfo.doc.originCityId,
            // origin_city_id: 202,
            destination_city_id: 202,
            estimated_weight: product.weight,
            shipping_mode_id: 1,
            amount: product.price - product.discount + product.taxAmount,
        }

        try {
            setLoading(true)
            const { data } = await axios.post(
                `${keys.TRAX_API}/charges_calculate`,
                shippingData,
                {
                    headers: {
                        Authorization: keys.TRAX_AUTH,
                    },
                }
            )
            setShippingCharges(data)
        } catch (err) {
            setError('Failed to fetch shipping charges')
            console.error(err)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        if (vendorShippingInfo?.doc) {
            fetchShippingCharges()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [vendorShippingInfo?.doc])

    return (
        <div className="max-w-md mx-auto bg-white shadow-sm my-2 rounded-lg p-6 space-y-4">
            {/* Delivery Options */}
            <DeliveryOptions />

            {/* Standard Delivery */}
            <StandardDelivery
                charges={shippingCharges?.information?.charges?.total_charges}
                shippingCost={product.shippingCost}
                loading={loading}
                error={error}
            />

            {/* Cash on Delivery */}
            <CashOnDelivery />

            {/* Return & Warranty */}
            <ReturnAndWarranty />
        </div>
    )
}

const DeliveryOptions = () => (
    <div className="border-b pb-4">
        <h3 className="text-gray-500 text-sm font-semibold mb-2">
            Delivery Options
        </h3>
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-primary-500 text-lg" />
                <p className="text-gray-700 text-sm">
                    Sindh, Karachi - Gulshan-e-Iqbal, Block 15
                </p>
            </div>
            {/* <a href="#change" className="text-blue-500 text-sm hover:underline">
                Change
            </a> */}
        </div>
    </div>
)

const StandardDelivery = ({ charges, loading, error, shippingCost }) => (
    <div className="border-b pb-4">
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
                <FaTruck className="text-primary-500 text-lg" />
                <div>
                    <p className="text-gray-700 font-medium">
                        Standard Delivery
                    </p>
                    <p className="text-gray-500 text-xs">
                        Guaranteed by 22-26 Dec
                    </p>
                </div>
            </div>
            {/* {loading ? (
                <p className="text-gray-900">
                    <CircularProgress size={20} />
                </p>
            ) : error ? (
                <p className="text-red-500 font-semibold">{error}</p>
            ) : (
                <p className="text-gray-800 text-sm font-semibold">
                    Rs. {charges || '200'}
                </p>
            )} */}

            <p className="text-gray-800 text-sm font-semibold">
                Rs. {charges || shippingCost}
            </p>
        </div>
    </div>
)

const CashOnDelivery = () => (
    <div className="border-b pb-4">
        <div className="flex items-center gap-2">
            <FaMoneyBillAlt className="text-primary-500 text-lg" />
            <p className="text-gray-700 font-medium">
                Cash on Delivery Available
            </p>
        </div>
    </div>
)

const ReturnAndWarranty = () => (
    <div className="pt-2">
        <h3 className="text-gray-500 text-sm font-semibold mb-2">
            Return & Warranty
        </h3>
        <div className="flex items-center gap-2">
            <FaUndoAlt className="text-primary-500 text-lg" />
            <p className="text-gray-700 font-medium">14 days easy return</p>
        </div>
    </div>
)

export default DeliveryDetails
