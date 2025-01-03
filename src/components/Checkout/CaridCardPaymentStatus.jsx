import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaCheckCircle, FaSpinner, FaTimesCircle } from 'react-icons/fa'

import jazzCashLogo from './../../assets/payment-gateway/jazzcash.png'
import { useDispatch } from 'react-redux'
import {
    savePaymentMethod,
    updatePaymentStatus,
} from '../../redux/slices/cartSlice'

const CardPaymentStatus = () => {
    const [status, setStatus] = useState('')
    const location = useLocation()
    const dispatch = useDispatch()

    useEffect(() => {
        const params = new URLSearchParams(location.search)
        const paymentStatus = params.get('paymentStatus')

        if (paymentStatus === 'Successful') {
            dispatch(savePaymentMethod('JazzCash'))
            dispatch(updatePaymentStatus('Paid'))
        }

        setStatus(paymentStatus)
    }, [dispatch, location])

    return (
        <div className="flex flex-col items-center justify-center p-12 my-4 bg-primary-100 rounded-lg shadow-lg max-w-md mx-auto text-center">
            {status === 'Successful' && (
                <div className="text-green-600 flex flex-col justify-between items-center">
                    <FaCheckCircle className="text-6xl mb-4" />
                    <h2 className="text-2xl font-bold mb-2">
                        Payment Succeeded!
                    </h2>
                    <img src={jazzCashLogo} alt="Jazz Cash" className="h-24" />
                    <p className="text-gray-800 mb-6 font-semibold">
                        Your transaction was completed successfully. Thank you
                        for your purchase!
                    </p>
                    <Link
                        to="/checkout/order-summary?paymentMethod=card"
                        className="btn primary-btn"
                    >
                        Go to Your Order
                    </Link>
                </div>
            )}
            {status === 'Fail' && (
                <div className="text-red-400 flex flex-col justify-between items-center">
                    <FaTimesCircle className="text-6xl mb-4" />
                    <h2 className="text-2xl font-bold mb-2">Payment Failed</h2>
                    <p className="text-gray-800 mb-6 font-semibold">
                        We’re sorry, but your payment could not be processed.
                        Please try again.
                    </p>
                    <Link
                        to="/checkout/payment-methods"
                        className="btn primary-btn"
                    >
                        Try Again
                    </Link>
                </div>
            )}
            {status === 'Error' && (
                <div className="text-red-600 flex flex-col justify-between items-center">
                    <FaTimesCircle className="text-6xl mb-4 animate-pulse" />

                    <h2 className="text-3xl font-semibold mb-2">
                        Server Error
                    </h2>

                    <p className="text-gray-800 text-center max-w-md mb-6 font-bold">
                        We encountered a technical issue on our end while
                        processing your payment. Please wait a few moments and
                        try again, or contact support if the issue persists.
                    </p>

                    <Link
                        to="/checkout/payment-methods"
                        className="btn primary-btn "
                    >
                        Retry Payment
                    </Link>
                </div>
            )}

            {!status && (
                <div className="text-gray-500 flex flex-col justify-between items-center">
                    <FaSpinner className="text-6xl mb-4" />
                    <h2 className="text-2xl font-bold mb-2">
                        Checking Payment Status...
                    </h2>
                    <p className="text-gray-300">
                        Please wait while we verify your payment.
                    </p>
                </div>
            )}
        </div>
    )
}

export default CardPaymentStatus
