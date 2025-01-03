import { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import {
    useCustomerLogoutMutation,
    useCustomerUpdatePasswordMutation,
} from '../../../redux/slices/customersApiSlice'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import { logout } from '../../../redux/slices/authSlice'
import Loader from '../../Loader'

const passwordSchema = z.object({
    passwordCurrent: z
        .string()
        .min(8, 'Password must be at least 8 characters')
        .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
        .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
        .regex(/[0-9]/, 'Password must contain at least one number')
        .regex(
            /[^a-zA-Z0-9]/,
            'Password must contain at least one special character'
        ),
    passwordNew: z
        .string()
        .min(8, 'Password must be at least 8 characters')
        .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
        .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
        .regex(/[0-9]/, 'Password must contain at least one number')
        .regex(
            /[^a-zA-Z0-9]/,
            'Password must contain at least one special character'
        ),
})

const PasswordUpdate = () => {
    const [showCurrentPassword, setShowCurrentPassword] = useState(false)
    const [showPasswordNew, setShowPasswordNew] = useState(false)

    const [customerUpdatePassword, { isLoading: isUpdating }] =
        useCustomerUpdatePasswordMutation()

    const [customerLogout, { isLoading }] = useCustomerLogoutMutation()

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        resolver: zodResolver(passwordSchema),
    })

    const toggleCurrentPasswordVisibility = () => {
        setShowCurrentPassword(!showCurrentPassword)
    }

    const togglepasswordNewVisibility = () => {
        setShowPasswordNew(!showPasswordNew)
    }

    const dispatch = useDispatch()

    const logoutHandler = () => {
        try {
            // Get accessToken from localStorage
            const userInfo = localStorage.getItem('userInfo')
            const user = JSON.parse(userInfo)

            dispatch(logout())
            customerLogout(user?.accessToken)
            reset()

            window.location.reload()
        } catch (err) {
            toast.error(err?.data?.message || err.error)
        }
    }

    const onSubmit = async (data) => {
        try {
            await customerUpdatePassword(data).unwrap()
            toast.success('Password updated successfully!')
            logoutHandler()
        } catch (error) {
            console.error('Password update failed:', error)
            toast.error('Failed to update password.')
        }
    }

    return isLoading ? (
        <Loader />
    ) : (
        <div className="bg-white shadow-md rounded-md mt-4 p-4">
            <h1 className="mb-4 font-semibold">Update Password</h1>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
                {/* Current Password */}
                <div className="relative">
                    <label className="input-label">Current Password</label>
                    <input
                        type={showCurrentPassword ? 'text' : 'password'}
                        className={`input ${
                            errors.passwordCurrent ? 'input-error' : ''
                        }`}
                        {...register('passwordCurrent')}
                    />
                    <button
                        type="button"
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 mt-3"
                        onClick={toggleCurrentPasswordVisibility}
                    >
                        {showCurrentPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                    {errors.passwordCurrent && (
                        <p className="text-red-500">
                            {errors.passwordCurrent.message}
                        </p>
                    )}
                </div>

                {/* New Password */}
                <div className="relative">
                    <label className="input-label">New Password</label>
                    <input
                        type={showPasswordNew ? 'text' : 'password'}
                        className={`input ${
                            errors.passwordNew ? 'input-error' : ''
                        }`}
                        {...register('passwordNew')}
                    />
                    <button
                        type="button"
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 mt-3"
                        onClick={togglepasswordNewVisibility}
                    >
                        {showPasswordNew ? <FaEyeSlash /> : <FaEye />}
                    </button>
                    {errors.passwordNew && (
                        <p className="text-red-500">
                            {errors.passwordNew.message}
                        </p>
                    )}
                </div>

                {/* Submit Button */}
                <div className="flex justify-end items-center px-4 py-2 mt-4 md:col-span-2">
                    <button
                        type="submit"
                        className="btn primary-btn"
                        disabled={isUpdating}
                    >
                        {isUpdating
                            ? 'Password Updating...'
                            : 'Update Password'}
                    </button>
                </div>
            </form>
        </div>
    )
}

export default PasswordUpdate
