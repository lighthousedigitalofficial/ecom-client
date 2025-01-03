/* eslint-disable react/prop-types */
import { useState } from 'react'
import { FaSearch } from 'react-icons/fa'

const TrackOrderForm = ({ onSubmit }) => {
    const [orderId, setOrderId] = useState('')

    const handleTrackOrder = () => {
        if (orderId) {
            onSubmit(orderId)
        }
    }

    return (
        <div className="w-full max-w-2xl mx-auto p-6 md:p-8">
            {/* Title */}
            <div className="flex flex-col justify-center items-center gap-2 mb-6">
                <h2 className="text-3xl font-bold text-center text-gray-800 ">
                    Track Your Order
                </h2>
                <p className="text-gray-500 text-center text-xs md:text-base">
                    Enter your tracking ID to get delivery updates.
                </p>
            </div>

            {/* Input and Button Section */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                <input
                    type="text" // Change type to text to remove spinner (upper/lower arrows)
                    inputMode="numeric" // Ensures numeric keyboard on mobile
                    pattern="[0-9]*" // Allow only numbers
                    value={orderId}
                    onChange={(e) => {
                        const value = e.target.value.replace(/\D/g, '') // Remove any non-numeric characters
                        setOrderId(value)
                    }}
                    placeholder="Enter tracking ID"
                    className="border border-gray-300 rounded-lg px-4 py-2 w-2/4 md:w-2/3 text-gray-700 focus:ring-2 focus:ring-primary-400 focus:outline-none transition duration-300"
                />

                <button
                    onClick={() => handleTrackOrder(orderId)}
                    className="flex items-center justify-center btn primary-btn"
                >
                    <FaSearch className="mr-2" />
                    Track Order
                </button>
            </div>
        </div>
    )
}

export default TrackOrderForm
