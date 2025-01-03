/* eslint-disable react/prop-types */
import { FaTruck, FaShieldAlt, FaUndo, FaCheckCircle } from 'react-icons/fa'
import { MdOutlineCelebration } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { formatPrice } from '../../utils/helpers'

const CartSummary = ({ cart, handleNext }) => {
    return (
        <div className="lg:w-[30rem] w-full">
            <div className="bg-white shadow-md rounded-lg p-6 mb-6">
                {/* Savings info */}
                {cart?.totalDiscount > 0 && (
                    <div className="bg-green-50 text-green-500  p-4 rounded-lg mb-4">
                        <h2 className="text-sm font-semibold flex items-center justify-center gap-2">
                            <MdOutlineCelebration className="w-6 h-6" />
                            <p>
                                You saved <span className="text-xs">Rs.</span>
                                {formatPrice(cart?.totalDiscount)}
                            </p>
                        </h2>
                    </div>
                )}

                {/* Pricing Details */}
                <div className="space-y-4 mb-10">
                    <div className="text-gray-800 font-semibold">
                        <div className="flex justify-between py-2 border-b border-gray-200">
                            <span>Sub Total</span>
                            <span>
                                <span className="text-xs">Rs.</span>
                                {formatPrice(cart?.subTotal || 0)}
                            </span>
                        </div>
                        <div className="flex justify-between py-2 border-b border-gray-200">
                            <span>Tax</span>
                            <span>
                                <span className="text-xs">Rs.</span>
                                {formatPrice(cart?.taxPrice || 0)}
                            </span>
                        </div>
                        <div className="flex justify-between py-2 border-b border-gray-200">
                            <span>Shipping</span>
                            <span>
                                <span className="text-xs">Rs.</span>
                                {formatPrice(cart?.totalShippingPrice || 0)}
                            </span>
                        </div>
                        <div className="flex justify-between py-2 border-b border-gray-200">
                            <span>Discount</span>
                            <span>
                                -<span className="text-xs">Rs.</span>
                                {formatPrice(cart?.totalDiscount || 0)}
                            </span>
                        </div>

                        <div className="flex justify-between py-3 border-t text-primary-500 border-gray-300">
                            <span className="text-xl font-bold ">Total</span>
                            <span className="text-xl font-bold">
                                <span className="text-xs">Rs.</span>
                                {formatPrice(cart?.totalPrice || 0)}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Trust Signals */}
                <div className="flex justify-between items-center gap-4 text-center">
                    <div className="flex flex-col items-center justify-around">
                        <FaTruck className="text-lg text-blue-500 mb-2" />
                        <span className="text-xs text-green-400 ">
                            Fast Delivery Nationwide
                        </span>
                    </div>
                    <div className="flex flex-col items-center justify-around">
                        <FaShieldAlt className="text-lg text-primary-500 mb-2" />
                        <span className="text-xs text-green-400">
                            100% Safe Payment
                        </span>
                    </div>
                    <div className="flex flex-col items-center justify-around">
                        <FaUndo className="text-lg text-orange-500 mb-2" />
                        <span className="text-xs text-green-400">
                            7 Days Return Policy
                        </span>
                    </div>
                    <div className="flex flex-col items-center justify-around">
                        <FaCheckCircle className="text-lg text-indigo-500 mb-2" />
                        <span className="text-xs text-green-400">
                            100% Authentic Products
                        </span>
                    </div>
                </div>

                {/* Action Button and Links */}
                <div className="mt-6 flex flex-col items-center gap-3">
                    <button
                        onClick={handleNext}
                        type="submit"
                        className={`w-full py-3 text-lg font-semibold rounded-lg transition-all duration-300 bg-primary-500 hover:bg-primary-400 text-white`}
                    >
                        Proceed to Checkout
                    </button>

                    <Link
                        to="/products"
                        className="text-primary-400 text-sm transition duration-300 hover:text-primary-600"
                    >
                        <span className="inline-block">&lt;</span> Continue
                        Shopping
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default CartSummary
