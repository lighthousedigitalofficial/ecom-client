import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useCustomerResetPasswordMutation } from '../../redux/slices/customersApiSlice'
import toast from 'react-hot-toast'
import { useNavigate, useParams } from 'react-router-dom'

const schema = z.object({
    passwordNew: z
        .string()
        .min(8, 'Password must be at least 8 characters long')
        .regex(
            /[a-z]/,
            'New Password must contain at least one lowercase letter'
        )
        .regex(
            /[A-Z]/,
            'New Password must contain at least one uppercase letter'
        )
        .regex(/[0-9]/, 'New Password must contain at least one number')
        .regex(
            /[^a-zA-Z0-9]/,
            'New Password must contain at least one special character'
        ),
    passwordConfirm: z
        .string()
        .min(8, 'Confirm Password must be at least 8 characters long')
        .regex(
            /[a-z]/,
            'Confirm Password must contain at least one lowercase letter'
        )
        .regex(
            /[A-Z]/,
            'Confirm Password must contain at least one uppercase letter'
        )
        .regex(/[0-9]/, 'Confirm Password must contain at least one number')
        .regex(
            /[^a-zA-Z0-9]/,
            'Confirm Password must contain at least one special character'
        ),
})

const ResetPassword = () => {
    const { hash } = useParams()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(schema),
    })

    const [customerResetPassword, { isLoading }] =
        useCustomerResetPasswordMutation()

    const navigate = useNavigate()

    const onSubmit = async (data) => {
        if (data.passwordNew !== data.passwordConfirm) {
            return toast.error('Password do not match')
        }
        try {
            if (hash && data) {
                await customerResetPassword({ data, hash }).unwrap()
                toast.success(
                    'Please check your email inbox for a link to complete the reset.'
                )

                localStorage.removeItem('userInfo')
                navigate('/customer/auth/sign-in')
            } else toast.error('Hash token not found!')
        } catch (error) {
            toast.error(error.data.message)
        }
    }

    return (
        <div className="max-w-md mx-auto mt-16 p-8 shadow-md rounded-md">
            <h2 className="text-2xl font-bold mb-6 text-center">
                Reset Password
            </h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                    <label
                        htmlFor="password"
                        className="block text-sm font-medium"
                    >
                        New Password
                    </label>
                    <input
                        id="passwordNew"
                        type="password"
                        {...register('passwordNew', { required: true })}
                        className={`input mt-1 block w-full px-3 py-2 border ${
                            errors.passwordNew
                                ? 'border-red-500'
                                : 'border-gray-300'
                        } rounded-md`}
                        placeholder="Enter new password"
                    />
                    {errors.passwordNew && (
                        <p className="text-red-500 text-xs mt-1">
                            {errors.passwordNew.message}
                        </p>
                    )}
                </div>
                <div>
                    <label
                        htmlFor="passwordConfirm"
                        className="block text-sm font-medium"
                    >
                        Confirm Password
                    </label>
                    <input
                        id="passwordConfirm"
                        type="password"
                        {...register('passwordConfirm', { required: true })}
                        className={`input mt-1 block w-full px-3 py-2 border ${
                            errors.passwordConfirm
                                ? 'border-red-500'
                                : 'border-gray-300'
                        } rounded-md`}
                        placeholder="Confirm new password"
                    />
                    {errors.passwordConfirm && (
                        <p className="text-red-500 text-xs mt-1">
                            {errors.passwordConfirm.message}
                        </p>
                    )}
                </div>
                <button
                    type="submit"
                    className="w-full py-2 px-4 rounded-md  bg-primary-500 hover:text-gray-100 hover:bg-primary-400 text-white mt-6"
                >
                    {isLoading ? 'Loading...' : 'Reset Password'}
                </button>
            </form>
        </div>
    )
}

export default ResetPassword
