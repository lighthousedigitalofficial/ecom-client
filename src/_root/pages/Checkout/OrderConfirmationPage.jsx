import { FaArrowLeft, FaCheckCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const OrderConfirmationPage = () => {
    return (
        <div className="max-w-6xl mx-auto p-8 text-center space-y-8">
            {/* Icon Section */}
            <div className="flex justify-center">
                <FaCheckCircle className="text-green-500 text-6xl drop-shadow-md" />
            </div>

            {/* Message Section */}
            <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-2">
                    Order Placed Successfully!
                </h2>
                <p className="text-lg text-gray-600">
                    Thank you for shopping with us! Your order has been
                    successfully placed, and we’re processing it.
                </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col items-center gap-4">
                <Link to="/profile/my-orders" className="btn primary-btn">
                    View My Orders
                </Link>
                <Link
                    to="/"
                    className="flex items-center text-primary-600 font-medium hover:underline"
                >
                    <FaArrowLeft className="mr-2" />
                    Continue Shopping
                </Link>
            </div>
        </div>
    )
}

export default OrderConfirmationPage
