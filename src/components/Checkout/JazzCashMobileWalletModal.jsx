/* eslint-disable react/prop-types */
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { updatePaymentStatus } from './../../redux/slices/cartSlice'

import { Dialog } from '@material-tailwind/react'
import { useSelector } from 'react-redux'
import { formatPrice } from '../../utils/helpers'
import { useJazzCashMobileWalletMutation } from '../../redux/slices/transactionSlice'

const schema = z.object({
    cnic: z.string().min(1, 'CNIC is required'),
    phone: z.string().min(1, 'Phone number is required'),
    description: z.string().min(1, 'Description is required'),
})

const JazzCashMobileWalletModal = ({ isOpen, handleClose }) => {
    const dispatch = useDispatch() // Get dispatch function from Redux
    const [successMessage, setSuccessMessage] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const [totalAmount, setTotalAmount] = useState(0)

    const cart = useSelector((state) => state.cart)

    const [jazzCashMobileWallet, { isLoading }] =
        useJazzCashMobileWalletMutation()

    useEffect(() => {
        if (cart?.totalPrice) setTotalAmount(cart?.totalPrice)
        setErrorMessage('')
        setSuccessMessage('')
    }, [cart?.totalPrice])

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(schema),
    })

    const handleSubmitForm = async (formData) => {
        try {
            setErrorMessage('')
            setSuccessMessage('')

            const paymentData = {
                ...formData,
                amount: totalAmount,
            }

            const res = await jazzCashMobileWallet(paymentData).unwrap()

            console.log(res)

            // If payment is successful, update success message
            setSuccessMessage(res.message)

            // Update payment status
            dispatch(updatePaymentStatus('Paid'))
        } catch (error) {
            console.log(error.data.message)
            setErrorMessage(error.data.message)
        }
    }

    return (
        <Dialog open={isOpen} onClose={handleClose} className="p-6 rounded-md">
            <div className="p-4">
                <h1 className="text-2xl font-bold text-primary-700 text-center mb-4">
                    JazzCash Mobile Wallet
                </h1>

                <p className="text-lg font-semibold text-center mb-4">
                    Total Amount:{' '}
                    <span className="font-bold">
                        {formatPrice(totalAmount)} PKR
                    </span>
                </p>

                {successMessage && (
                    <div className="bg-primary-50 p-4 mb-4">
                        <p className="text-primary-500 text-center font-bold mb-4">
                            {successMessage}
                        </p>
                    </div>
                )}
                {errorMessage && (
                    <div className="bg-red-50 p-4 mb-4">
                        <p className="text-red-500 text-center font-bold mb-4">
                            {errorMessage}
                        </p>
                    </div>
                )}

                <form onSubmit={handleSubmit(handleSubmitForm)}>
                    <div className="grid gap-4 mb-4">
                        {/* CNIC Input */}
                        <div>
                            <label className="input-label">CNIC</label>
                            <input
                                {...register('cnic')}
                                type="text"
                                className={`input ${
                                    errors.cnic ? 'border-red-500' : ''
                                }`}
                                placeholder="Enter CNIC"
                            />
                            {errors.cnic && (
                                <p className="text-red-500 text-xs italic">
                                    {errors.cnic.message}
                                </p>
                            )}
                        </div>

                        {/* Phone Input */}
                        <div>
                            <label className="input-label">Phone Number</label>
                            <input
                                {...register('phone')}
                                type="text"
                                className={`input ${
                                    errors.phone ? 'border-red-500' : ''
                                }`}
                                placeholder="Enter Phone Number"
                            />
                            {errors.phone && (
                                <p className="text-red-500 text-xs italic">
                                    {errors.phone.message}
                                </p>
                            )}
                        </div>

                        {/* Payment Note Input */}
                        <div>
                            <label className="input-label">Payment Note</label>
                            <textarea
                                {...register('description')}
                                className={`input ${
                                    errors.description ? 'border-red-500' : ''
                                }`}
                                placeholder="Enter Payment Note"
                            />
                            {errors.description && (
                                <p className="text-red-500 text-xs italic">
                                    {errors.description.message}
                                </p>
                            )}
                        </div>
                    </div>
                    <div className="flex justify-center items-center gap-8">
                        <button
                            onClick={handleClose}
                            className="btn secondary-btn"
                        >
                            Close
                        </button>
                        <button
                            onClick={handleSubmitForm}
                            className="btn primary-btn"
                        >
                            {isLoading ? 'is Loading...' : 'Pay Now'}
                        </button>
                    </div>
                </form>
            </div>
        </Dialog>
    )
}

export default JazzCashMobileWalletModal
