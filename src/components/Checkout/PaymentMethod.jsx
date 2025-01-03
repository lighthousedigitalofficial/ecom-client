/* eslint-disable react/prop-types */
import { useState } from 'react'
import JazzCashMobileWalletModal from './JazzCashMobileWalletModal'
import { FaArrowCircleLeft } from 'react-icons/fa'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import JazzCashCard from './JazzCashCard'

const PaymentMethod = ({ onSubmit, setPaymentMethod }) => {
    // Initialize useForm for this component
    const { register, setValue, trigger } = useForm({
        defaultValues: {
            paymentMethod: '',
        },
    })

    const [selectedMethod, setSelectedMethod] = useState('')
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isPaid, setIsPaid] = useState(false)

    const cart = useSelector((state) => state.cart)

    const navigate = useNavigate()

    const handleSelectMethod = async (value) => {
        setSelectedMethod(value)
        setValue('paymentMethod', value)
        setPaymentMethod(value)

        if (value === 'jazzCash') {
            setIsModalOpen(true)
        } else if (value === 'COD') {
            setIsPaid(true) // For 'Cash on Delivery', mark as paid without further checks
            await trigger('paymentMethod') // Validate selection
        }
    }

    const closeModal = async () => {
        setIsModalOpen(false)
        setIsPaid(false)
        cart?.paymentStatus === 'Paid' ? setIsPaid(true) : setIsPaid(false) // Mark as paid for 'Jazz Cash'
        await trigger('paymentMethod')
    }

    const handlePaymentSuccess = async () => {
        setIsModalOpen(false)
        cart?.paymentStatus === 'Paid' ? setIsPaid(true) : setIsPaid(false) // Mark as paid for 'Jazz Cash'
        await trigger('paymentMethod') // Trigger validation to allow proceeding
    }

    return (
        <div className="p-6 bg-white rounded-md shadow-md">
            <div className="flex justify-between items-start">
                <div>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                        Payment method
                    </h2>
                    <p className="text-xl text-gray-600 mb-10">
                        Select A Payment Method To Proceed
                    </p>
                </div>
                <button
                    type="button"
                    className="text-base text-gray-600 mt-4 flex items-center gap-2 hover:text-gray-700"
                    onClick={() => navigate('/checkout/shipping-address')}
                >
                    <FaArrowCircleLeft />
                    <span>Go back</span>
                </button>
            </div>

            <div className="mb-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div
                        className={`flex items-center p-4 border rounded-lg cursor-pointer transition-all duration-200 ${
                            selectedMethod === 'COD'
                                ? 'border-primary-500 bg-primary-50'
                                : 'border-gray-200'
                        } hover:shadow-md`}
                        onClick={() => handleSelectMethod('COD')}
                    >
                        <input
                            type="radio"
                            {...register('paymentMethod', {
                                required: 'Please select a payment method',
                                validate: () =>
                                    selectedMethod !== 'jazzCash' ||
                                    isPaid ||
                                    'Payment must be completed to proceed',
                            })}
                            value="COD"
                            checked={selectedMethod === 'COD'}
                            onChange={() => handleSelectMethod('COD')}
                            className="mr-3 cursor-pointer"
                        />
                        <img
                            src="https://img.freepik.com/premium-vector/cash-delivery_569841-175.jpg?semt=ais_hybrid"
                            alt="cash on delivery"
                            className="w-8 h-8 mr-3 object-contain"
                        />
                        <span className="text-gray-700">Cash On Delivery</span>
                    </div>
                </div>
            </div>

            {/* Mobile Wallet */}
            {/* <div>
                <h2 className="text-xl mb-4">Mobile Wallet</h2>
                <div
                    className={`flex items-center p-4 border rounded-lg cursor-pointer transition-all duration-200 ${
                        selectedMethod === 'jazzCash'
                            ? 'border-primary-500 bg-primary-50'
                            : 'border-gray-200'
                    } hover:shadow-md`}
                    onClick={() => handleSelectMethod('jazzCash')}
                >
                    <input
                        type="radio"
                        {...register('paymentMethod', {
                            required: 'Please select a payment method',
                            validate: () =>
                                selectedMethod !== 'jazzCash' ||
                                isPaid ||
                                'Payment must be completed to proceed',
                        })}
                        value="jazzCash"
                        checked={selectedMethod === 'jazzCash'}
                        onChange={() => handleSelectMethod('jazzCash')}
                        className="mr-3 cursor-pointer"
                    />
                    <img
                        src="https://www.jazzcash.com.pk/assets/themes/jazzcash/img/mobilink_logo.png"
                        alt="jazz cash"
                        className="w-8 h-8 mr-3 object-contain"
                    />
                    <span className="text-gray-700">Jazz Cash Wallet</span>
                </div>
            </div> */}

            <div className="mb-6">
                <h2 className="text-xl font-semibold mb-4 text-gray-900">
                    Online Payment
                </h2>
                <div className="grid grid-cols-1 gap-4 mt-4 w-1/2">
                    <JazzCashCard totalPrice={cart?.totalPrice} />
                </div>
            </div>

            {/* JazzCash Payment Modal */}
            {selectedMethod === 'jazzCash' && (
                <JazzCashMobileWalletModal
                    isOpen={isModalOpen}
                    handleClose={closeModal}
                    onSuccess={handlePaymentSuccess}
                />
            )}

            <div className="flex justify-end">
                <button
                    onClick={onSubmit}
                    className="btn primary-btn"
                    disabled={
                        !selectedMethod ||
                        (selectedMethod === 'jazzCash' && !isPaid)
                    }
                >
                    Proceed to Place Order
                </button>
            </div>
        </div>
    )
}

export default PaymentMethod
