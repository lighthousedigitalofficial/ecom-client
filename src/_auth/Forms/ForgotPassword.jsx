import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import toast from 'react-hot-toast'

import { useCustomerForgotPasswordMutation } from '../../redux/slices/customersApiSlice'

const schema = z.object({
    email: z.string().email('Invalid email address'),
})

const ForgotPassword = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(schema),
    })

    const [customerForgotPassword, { isLoading }] =
        useCustomerForgotPasswordMutation()

    const onSubmit = async (data) => {
        try {
            await customerForgotPassword({ email: data.email }).unwrap()
            toast.success(
                'Please check your email inbox for a link to complete the reset.'
            )
        } catch (error) {
            toast.error(error.data.message)
        }
    }

    return (
        <div className="max-w-md mx-auto mt-16 p-8 rounded-md shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-center">
                Reset your password
            </h2>
            <p className="text-gray-900 mb-4">
                Enter the email address associated with your Vista Mart account.
            </p>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                    <label
                        htmlFor="email"
                        className="block text-sm font-medium"
                    >
                        Email Address
                    </label>
                    <input
                        id="email"
                        type="email"
                        {...register('email', { required: true })}
                        className={`input mt-1 block w-full px-3 py-2 border ${
                            errors.email ? 'border-red-500' : 'border-gray-300'
                        } rounded-md`}
                        placeholder="Enter your email"
                    />
                    {errors.email && (
                        <p className="text-red-500 text-xs mt-1">
                            {errors.email.message}
                        </p>
                    )}
                </div>

                <button type="submit" className="btn primary-btn w-full">
                    {isLoading ? 'Sending...' : 'Reset Password'}
                </button>
            </form>
        </div>
    )
}

export default ForgotPassword
