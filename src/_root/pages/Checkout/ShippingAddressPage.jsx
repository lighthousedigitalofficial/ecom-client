import { useDispatch, useSelector } from 'react-redux'
import ShippingAddress from '../../../components/Checkout/ShippingAddress'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import useAuth from '../../../hooks/useAuth'
import { z } from 'zod'
import { phoneValidation } from '../../../utils'
import { saveShippingAddress } from '../../../redux/slices/shippingAddressSlice'
import {
    useGetCustomerDetailsQuery,
    useUpdateCustomerMutation,
} from '../../../redux/slices/customersApiSlice'
import toast from 'react-hot-toast'
import Loader from '../../../components/Loader'

const shippingAddressSchema = z.object({
    name: z
        .string()
        .min(1, 'Full Name is required')
        .max(100, 'Full Name cannot exceed 100 characters')
        .regex(
            /^[a-zA-Z\s]+$/,
            'Name must not contain numbers or special characters'
        ),
    phoneNumber: phoneValidation,
    country: z
        .string()
        .min(1, 'Country is required')
        .max(50, 'Country cannot exceed 50 characters')
        .regex(
            /^[a-zA-Z\s]+$/,
            'Country must not contain numbers or special characters'
        ),
    city: z.string().min(1, 'City is required'),
    state: z
        .string()
        .min(1, 'State is required')
        .max(50, 'State cannot exceed 50 characters')
        .regex(
            /^[a-zA-Z\s]+$/,
            'State must not contain numbers or special characters'
        ),
    zipCode: z
        .number()
        .min(5, 'Zip Code must be at least 5 digits')

        .or(
            z.string().regex(/\d+/).transform(Number),
            'Zip Code must contain only digits'
        )
        .refine((n) => n >= 0),
    address: z
        .string()
        .min(1, 'Address is required')
        .max(200, 'Address cannot exceed 200 characters'),
})

const ShippingAddressPage = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const cart = useSelector((state) => state.cart)
    const user = useAuth()

    const [updateCustomer, { isLoading: isUserUpdating }] =
        useUpdateCustomerMutation()

    const { data, isLoading: userLoading } = useGetCustomerDetailsQuery(
        user?._id,
        { skip: !user?._id }
    )

    useEffect(() => {
        if (!user) {
            navigate('/customer/auth/sign-in')
        } else if (!cart) {
            navigate('/products')
        }
    }, [cart, navigate, user])

    const handleSubmit = async (data) => {
        const { city } = data
        const { cityId, cityName } = JSON.parse(city)

        const addressData = {
            name: data.name,
            phoneNumber: data.phoneNumber,
            address: data.address,
            city: cityName,
            cityId: cityId,
            state: data.state,
            zipCode: data.zipCode,
            country: data.country,
        }

        try {
            await updateCustomer({
                shippingAddress: addressData,
                customerId: user?._id,
            }).unwrap()
            dispatch(saveShippingAddress(addressData))
            navigate('/checkout/payment-methods')
        } catch (error) {
            console.error(error)
            toast.error('Customer shipping address is not updated')
        }
    }

    return userLoading ? (
        <Loader />
    ) : (
        user && cart && (
            <div className="lg:p-8 md:p-6 p-4 md:w-4/5 w-full mx-auto">
                <ShippingAddress
                    onSubmit={handleSubmit}
                    user={data?.doc}
                    address={cart?.shippingAddress}
                    shippingAddressSchema={shippingAddressSchema}
                    isUserUpdating={isUserUpdating}
                />
            </div>
        )
    )
}

export default ShippingAddressPage
