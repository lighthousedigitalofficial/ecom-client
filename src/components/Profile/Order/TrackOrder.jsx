import { useState } from 'react'
import TrackOrderForm from './TrackOrderForm'
// import OrderProgress from './OderProgress'
// import TrackingShippingOrder from './TrackingShippingOrder'
import axios from 'axios'
import keys from '../../../config/keys'
import Loader from './../../Loader'
import OrderTrackingHistory from './OrderTrackingHistory'

// const TrackOrder = () => {
//     const [orderId, setOrderId] = useState(null)
//     const [orderDetails, setOrderDetails] = useState(null)

//     const handleTrackOrderSubmit = (orderId) => {
//         setOrderId(orderId)
//     }

//     const getTrackOrderDetails = async (orderId) => {
//         const { data } = await axios.get(
//             `${keys.TRAX_API}/shipment/track?tracking_number=${orderId}&type=0`,
//             {
//                 headers: {
//                     Authorization: keys.TRAX_AUTH,
//                 },
//             }
//         )

//         setOrderDetails(data.details)
//     }

//     // getTrackOrderDetails(288105116700)

//     return (
//         <div className="xl:w-full mx-auto p-8 bg-white shadow-sm shadow-primary-100 items-center rounded-lg">
//             <TrackOrderForm onSubmit={handleTrackOrderSubmit} />

//             {orderId && <TrackingShippingOrder details={orderDetails} />}
//             {/* {orderId ? (
//                 <OrderProgress orderId={orderId} />
//             ) : (
//                 <div className="text-center">
//                     <img
//                         src={TrackOrderImg}
//                         alt="Truck"
//                         className="mb-2 object-contain"
//                     />
//                     <p className="text-gray-600">
//                         Enter your order ID & phone number to get delivery
//                         updates
//                     </p>
//                 </div>
//             )} */}
//         </div>
//     )
// }

const TrackOrder = () => {
    const [orderDetails, setOrderDetails] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    const handleTrackOrderSubmit = async (id) => {
        setOrderDetails(null)
        setError(null)
        setIsLoading(true)

        try {
            const { data } = await axios.get(
                `${keys.TRAX_API}/shipment/track`,
                {
                    headers: {
                        Authorization: keys.TRAX_AUTH,
                    },
                    params: {
                        tracking_number: id,
                        type: 1,
                    },
                }
            )
            setOrderDetails(data.details)
        } catch (err) {
            setError('Unable to fetch order details. Please try again later.')
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="md:w-full mx-auto p-8 bg-white shadow-md shadow-primary-50 items-center rounded-lg">
            {/* Track Order Form */}
            <TrackOrderForm onSubmit={handleTrackOrderSubmit} />

            {/* Display Tracking Details */}
            {isLoading ? (
                <Loader />
            ) : orderDetails ? (
                <OrderTrackingHistory trackingDetails={orderDetails} />
            ) : (
                <p className="text-center text-gray-600"></p>
            )}

            {/* Error Message */}
            {error && (
                <div className="text-red-500 text-center mt-6">{error}</div>
            )}
        </div>
    )
}

export default TrackOrder
