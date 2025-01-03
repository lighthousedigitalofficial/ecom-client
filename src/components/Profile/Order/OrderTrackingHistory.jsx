/* eslint-disable react/prop-types */
import {
    FaTruck,
    FaCheckCircle,
    FaTimesCircle,
    FaWarehouse,
    FaBox,
} from 'react-icons/fa'
import { FiPackage } from 'react-icons/fi'
import 'tailwindcss/tailwind.css'

const OrderTrackingHistory = ({ trackingDetails }) => {
    const { tracking_number, shipper, pickup, consignee, tracking_history } =
        trackingDetails

    // Icon and color mapping based on status
    const statusMapping = {
        'Shipment - Out for Delivery': {
            icon: <FaTruck />,
            color: 'text-blue-500',
        },
        'Shipment - Delivery Unsuccessful': {
            icon: <FaTimesCircle />,
            color: 'text-red-500',
        },
        'Shipment - Arrived at Origin': {
            icon: <FaWarehouse />,
            color: 'text-orange-500',
        },
        'Shipment - Arrival Service Center': {
            icon: <FaWarehouse />,
            color: 'text-purple-500',
        },
        'Shipment - Booked': { icon: <FiPackage />, color: 'text-green-500' },
        Delivered: { icon: <FaCheckCircle />, color: 'text-teal-500' },
    }

    return (
        <div className="max-w-4xl mx-auto my-8 p-4 bg-gray-100 shadow-md rounded-lg">
            {/* Tracking Info Header */}
            <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-800">
                    Tracking Number: {tracking_number}
                </h2>
                <p className="text-gray-700">
                    Shipper: {shipper.name} | Origin: {pickup.origin}
                </p>
                <p className="text-gray-700">
                    Consignee: {consignee.name} | Destination:{' '}
                    {consignee.destination}
                </p>
            </div>

            {/* Tracking Timeline */}
            <div className="border-l-4 border-cyan-300 pl-4">
                {tracking_history.map((event, index) => {
                    const { status, date_time, status_reason } = event
                    const { icon, color } = statusMapping[status] || {
                        icon: <FaBox />,
                        color: 'text-gray-400',
                    }

                    return (
                        <div
                            key={index}
                            className="mb-6 flex items-start space-x-4"
                        >
                            {/* Icon */}
                            <div className={`mt-1 ${color} text-xl`}>
                                {icon}
                            </div>

                            {/* Event Details */}
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800">
                                    {status}
                                </h3>
                                <p className="text-sm text-gray-600">
                                    {date_time}
                                </p>
                                {status_reason && (
                                    <p className="text-sm text-red-500">
                                        Reason: {status_reason}
                                    </p>
                                )}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default OrderTrackingHistory
