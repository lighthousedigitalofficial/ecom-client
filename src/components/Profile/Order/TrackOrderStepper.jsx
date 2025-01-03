/* eslint-disable react/prop-types */
import {
    FaBoxOpen,
    FaTruck,
    FaShippingFast,
    FaCheckCircle,
    FaClipboardList,
} from 'react-icons/fa'

const statuses = [
    { label: 'Placed', key: 'pending', icon: FaClipboardList },
    { label: 'Order Confirm', key: 'confirmed', icon: FaBoxOpen },
    { label: 'Processing', key: 'packaging', icon: FaTruck },
    { label: 'Shipped', key: 'out_for_delivery', icon: FaShippingFast },
    { label: 'Delivered', key: 'delivered', icon: FaCheckCircle },
]

const TrackOrderStepper = ({ currentStatus }) => {
    const currentIndex = statuses.findIndex(
        (status) => status.key === currentStatus
    )

    // Handle canceled or failed statuses
    if (currentStatus === 'canceled') {
        return (
            <div className="flex flex-col items-center my-8 w-full">
                <p className="text-lg font-semibold text-red-500">
                    Unfortunately, this order has been canceled. If you have any
                    questions, please contact support.
                </p>
            </div>
        )
    } else if (currentStatus === 'failed_to_deliver') {
        return (
            <div className="flex flex-col items-center my-8 w-full">
                <p className="text-lg font-semibold text-red-500">
                    We regret to inform you that the delivery attempt was
                    unsuccessful. Please check your email or contact support for
                    assistance.
                </p>
            </div>
        )
    }

    return (
        <div className="relative flex flex-col md:flex-row justify-between items-center my-8 w-full">
            {/* Connector Line */}
            <div className="absolute md:top-1/2 md:left-0 transform md:-translate-y-1/2 w-full h-full flex md:flex-row flex-col items-center md:space-x-0">
                {statuses.map(
                    (_, index) =>
                        index < statuses.length - 1 && (
                            <div
                                key={index}
                                className={`flex-1 h-1 md:h-1 md:w-full ${
                                    index < currentIndex
                                        ? 'bg-primary-500'
                                        : 'bg-gray-300'
                                }`}
                            ></div>
                        )
                )}
            </div>

            {/* Status Steps */}
            {statuses.map((status, index) => {
                const isActive = index <= currentIndex
                const Icon = status.icon

                return (
                    <div
                        key={status.key}
                        className="relative flex flex-col items-center text-center md:w-1/5 w-full"
                    >
                        {/* Step Icon */}
                        <div
                            className={`flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full 
                            ${
                                isActive
                                    ? 'bg-primary-500 text-white'
                                    : 'bg-gray-300 text-gray-500'
                            } 
                            transition-all duration-500 ease-in-out shadow-lg text-4xl`}
                        >
                            <Icon />
                        </div>

                        {/* Step Label */}
                        <p
                            className={`mt-2 text-xs md:text-sm ${
                                isActive
                                    ? 'text-primary-600 font-semibold'
                                    : 'text-gray-500'
                            }`}
                        >
                            {status.label}
                        </p>
                    </div>
                )
            })}
        </div>
    )
}

export default TrackOrderStepper
