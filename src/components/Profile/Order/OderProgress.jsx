/* eslint-disable react/prop-types */
import { useGetOrderStatusQuery } from '../../../redux/slices/ordersApiSlice'
import Loader from '../../Loader'
import TrackOrderStepper from './TrackOrderStepper'

const OrderProgress = ({ orderId }) => {
    const { data: order, isLoading } = useGetOrderStatusQuery(orderId, {
        skip: !orderId,
    })

    return isLoading ? (
        <Loader />
    ) : order && order?.doc ? (
        <div className="px-2 py-4">
            <TrackOrderStepper currentStatus={order.doc.status} />
        </div>
    ) : (
        <p className="text-gray-700 text-center p-4">Order details not found</p>
    )
}

export default OrderProgress
