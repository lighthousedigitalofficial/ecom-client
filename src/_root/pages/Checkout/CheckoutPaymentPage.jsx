import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { savePaymentMethod } from '../../../redux/slices/cartSlice'
import PaymentMethod from '../../../components/Checkout/PaymentMethod'
import useAuth from '../../../hooks/useAuth'

const CheckoutPaymentPage = () => {
    const user = useAuth()
    const cart = useSelector((state) => state.cart)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [paymentMethod, setPaymentMethod] = useState(null)

    useEffect(() => {
        if (!user) {
            navigate('/customer/auth/sign-in')
        } else if (!cart) {
            navigate('/products')
        }
    }, [cart, navigate, user])

    const placeOrderSubmit = () => {
        if (paymentMethod) {
            dispatch(savePaymentMethod(paymentMethod))
            navigate('/checkout/order-summary')
        }
    }

    return (
        user &&
        cart && (
            <div className="w-full p-4 md:p-4">
                <PaymentMethod
                    onSubmit={placeOrderSubmit}
                    setPaymentMethod={setPaymentMethod}
                />
            </div>
        )
    )
}

export default CheckoutPaymentPage
