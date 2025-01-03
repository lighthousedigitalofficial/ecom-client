import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from 'react-router-dom'
import {
    savePaymentMethod,
    clearCartItems,
} from '../../../redux/slices/cartSlice'
import { addressSchema, paymentSchema } from '../../../utils/schema'
import PaymentMethod from '../../../components/Checkout/PaymentMethod'
import BillingAddressForm from '../../../components/Checkout/BillingAddressForm'
import { useCreateOrderMutation } from '../../../redux/slices/ordersApiSlice'
import CartSummary from '../../../components/Cart/CartSummery'
import toast from 'react-hot-toast'
// import ShippingMethod from "../../components/Checkout/ShippingMethod";

// const CheckoutPage = () => {
//     const [step, setStep] = useState(0)

//     const { userInfo } = useSelector((state) => state.auth)
//     const cart = useSelector((state) => state.cart)

//     const dispatch = useDispatch()
//     const navigate = useNavigate()

//     useEffect(() => {
//         if (!userInfo || !userInfo?.user) {
//             navigate('/customer/auth/sign-in')
//         }
//     }, [navigate, userInfo])

//     const [createOrder, { isLoading }] = useCreateOrderMutation()

//     const methods = useForm({
//         resolver: zodResolver(step === 0 ? addressSchema : paymentSchema),
//         mode: 'onSubmit', // Validates only on form submission
//         reValidateMode: 'onChange', // Validates on each change after initial submission
//     })

//     const [isSubmitting, setIsSubmitting] = useState(false)

//     const handleNext = async () => {
//         if (isSubmitting) return // Prevent running the function again if it's already running
//         setIsSubmitting(true) // Set flag to true when function starts

//         try {
//             const isValid = await methods.trigger()

//             if (!isValid) {
//                 toast.error('Please fill all the required fields.')
//                 setIsSubmitting(false) // Reset flag when validation fails
//                 return
//             }

//             if (step === 0) {
//                 const shippingAddress = methods.getValues()
//                 dispatch(saveShippingAddress(shippingAddress))
//                 dispatch(saveBillingAddress(shippingAddress))
//                 setStep(step + 1)
//             } else {
//                 try {
//                     const { paymentMethod } = methods.getValues()
//                     dispatch(savePaymentMethod(paymentMethod))

//                     // Collect product IDs
//                     let productIds = cart?.cartItems.map((item) => item._id)

//                     // Create the order
//                     const order = {
//                         products: productIds,
//                         customerId: userInfo?.user?._id,
//                         shippingAddress: cart?.shippingAddress,
//                         billingAddress: cart?.billingAddress,
//                         paymentMethod,
//                         totalAmount: cart?.totalPrice,
//                         vendors: cart?.vendors,
//                         paymentStatus: 'paid',
//                     }

//                     // Call the createOrder API
//                     const res = await createOrder(order).unwrap()
//                     toast.success('Order created successfully')

//                     // Clear the cart and navigate
//                     dispatch(clearCartItems())
//                     navigate(`/order-confirmation/${res?.data?._id}`)
//                 } catch (err) {
//                     console.error(err?.data)
//                     toast.error(err?.data?.message || 'Something went wrong')
//                 }
//             }
//         } catch (err) {
//             console.error(err)
//             toast.error(err.message || 'Something went wrong')
//         } finally {
//             setIsSubmitting(false) // Reset flag after the function completes
//         }
//     }

//     return (
//         userInfo &&
//         userInfo?.user && (
//             <div className="w-full p-4 sm:p-6 md:p-8">
//                 <FormProvider {...methods}>
//                     <form
//                         onSubmit={methods.handleSubmit(handleNext)}
//                         className="flex flex-col lg:flex-row gap-8"
//                     >
//                         {step === 0 && (
//                             <BillingAddressForm
//                                 onClick={handleNext}
//                                 disabled={isLoading}
//                             />
//                         )}
//                         {step === 1 && (
//                             <PaymentMethod
//                                 onClick={handleNext}
//                                 disabled={isLoading}
//                             />
//                         )}
//                         <CartSummary
//                             cart={cart}
//                             handleNext={handleNext}
//                             isLoading={isLoading}
//                             step={step}
//                         />
//                     </form>
//                 </FormProvider>
//             </div>
//         )
//     )
// }

import { LinearProgress, Stepper, Step, StepLabel } from '@mui/material'
const CheckoutPage = () => {
    const [step, setStep] = useState(0)
    const { userInfo } = useSelector((state) => state.auth)
    const cart = useSelector((state) => state.cart)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        if (!userInfo || !userInfo?.user) {
            navigate('/customer/auth/sign-in')
        }
    }, [navigate, userInfo])

    const [createOrder, { isLoading }] = useCreateOrderMutation()
    const [isSubmitting, setIsSubmitting] = useState(false)

    const methods = useForm({
        resolver: zodResolver(step === 0 ? addressSchema : paymentSchema),
        mode: 'onSubmit',
        reValidateMode: 'onChange',
    })

    const handleNext = async () => {
        if (isSubmitting) return
        setIsSubmitting(true)

        try {
            let isValid = await methods.trigger()

            const isPaymentPaid = cart.paymentStatus === 'Paid'

            isPaymentPaid ? (isValid = true) : (isValid = false)

            if (!isValid) {
                toast.error('Please fill all the required fields.')
                setIsSubmitting(false)
                return
            }

            if (step === 0) {
                const shippingAddress = methods.getValues()
                // dispatch(saveShippingAddress(shippingAddress))
                // dispatch(saveBillingAddress(shippingAddress))
                setStep(step + 1)
            } else {
                const { paymentMethod } = methods.getValues()
                dispatch(savePaymentMethod(paymentMethod))

                // Collect product IDs
                let products = cart?.cartItems.map((item) => {
                    return { product: item._id, quantity: item.qty }
                })

                const order = {
                    products,
                    customerId: userInfo?.user?._id,
                    shippingAddress: cart?.shippingAddress,
                    billingAddress: cart?.billingAddress,
                    paymentMethod,
                    totalAmount: cart?.totalPrice,
                    vendors: cart?.vendors,
                    paymentStatus:
                        paymentMethod === 'cash_on_delivery'
                            ? 'Unpaid'
                            : 'Paid',
                }

                console.log(order)

                const res = await createOrder(order).unwrap()
                toast.success('Order created successfully')

                dispatch(clearCartItems())
                navigate(`/order-confirmation/${res?.data?._id}`)
            }
        } catch (err) {
            console.error(err)
            toast.error(err?.data?.message || 'Something went wrong')
        } finally {
            setIsSubmitting(false)
        }
    }

    const steps = ['Shipping Address', 'Payment Method']

    return (
        userInfo &&
        userInfo?.user && (
            <div className="w-full p-4 md:p-4">
                <FormProvider {...methods}>
                    <form
                        onSubmit={methods.handleSubmit(handleNext)}
                        className="flex flex-col lg:flex-row gap-8"
                    >
                        <div className="flex-grow w-4/5 mx-auto">
                            <div className="py-4">
                                {/* Stepper */}
                                <Stepper activeStep={step} alternativeLabel>
                                    {steps.map((label) => (
                                        <Step key={label}>
                                            <StepLabel>{label}</StepLabel>
                                        </Step>
                                    ))}
                                </Stepper>

                                {/* Progress Bar */}

                                <div className="my-4">
                                    <LinearProgress
                                        variant="determinate"
                                        value={
                                            (step / (steps.length - 1)) * 100
                                        }
                                    />
                                </div>
                            </div>

                            {/* Step 1: Billing Address */}
                            {step === 0 && <BillingAddressForm />}

                            {/* Step 2: Payment Method */}
                            {step === 1 && <PaymentMethod setStep={setStep} />}
                        </div>

                        {/* Cart Summary */}
                        <CartSummary
                            cart={cart}
                            handleNext={handleNext}
                            isLoading={isLoading}
                            step={step}
                        />
                    </form>
                </FormProvider>
            </div>
        )
    )
}

export default CheckoutPage
