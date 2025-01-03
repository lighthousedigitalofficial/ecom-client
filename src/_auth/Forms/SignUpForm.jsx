import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { PhoneInput } from 'react-international-phone'
import 'react-international-phone/style.css'
import './../../styles/customPhoneInput.css'

import { Link, useNavigate } from 'react-router-dom'
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa'
import { useCustomerRegisterMutation } from '../../redux/slices/customersApiSlice'
import { useSelector } from 'react-redux'
import toast from 'react-hot-toast'

const schema = z.object({
    firstName: z
        .string()
        .min(1, 'First name is required')
        .regex(/^[a-zA-Z]+$/, 'First name can only contain letters'),
    lastName: z
        .string()
        .min(1, 'Last name is required')
        .regex(/^[a-zA-Z]+$/, 'Last name can only contain letters'),
    email: z.string().email('Invalid email address'),
    password: z
        .string()
        .min(8, 'Password must be at least 8 characters long')
        .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
        .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
        .regex(/[0-9]/, 'Password must contain at least one number')
        .regex(
            /[^a-zA-Z0-9]/,
            'Password must contain at least one special character'
        ),
    confirmPassword: z
        .string()
        .min(8, 'Password must be at least 8 characters')
        .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
        .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
        .regex(/[0-9]/, 'Password must contain at least one number')
        .regex(
            /[^a-zA-Z0-9]/,
            'Password must contain at least one special character'
        ),
    phoneNumber: z.string().min(10, 'Phone number is required'),
    referCode: z.string().optional(),
})

const SignUpForm = () => {
    const [customerRegister, { isLoading }] = useCustomerRegisterMutation()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(schema),
    })

    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const { userInfo } = useSelector((state) => state.auth)

    const navigate = useNavigate()

    useEffect(() => {
        if (userInfo && userInfo.user) {
            navigate('/')
        }
    }, [userInfo, navigate])

    const onSubmit = async (data) => {
        if (data.password !== data.confirmPassword) {
            toast.error('Passwords do not match')
            return
        }

        // remove confirm password
        data.confirmPassword = undefined

        try {
            const res = await customerRegister(data).unwrap()
            toast.success(res.message || 'OTP send successfully to your email')
            navigate(`/auth/customer/email/verification?email=${data.email}`)
        } catch (err) {
            toast.error(err?.data?.message || err.error)
            console.log(err)
        }
    }

    const handleTogglePassword = () => {
        setShowPassword(!showPassword)
    }
    const handleToggleConfirmPassword = () => {
        setShowConfirmPassword(!showConfirmPassword)
    }

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-3/4 mx-auto p-8 lg:p-12 bg-white my-4"
        >
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
                Create new account
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4">
                <div className="mb-4">
                    <label className="input-label">First Name</label>
                    <input
                        {...register('firstName')}
                        className={`input ${
                            errors.firstName ? 'border-red-500' : ''
                        }`}
                        placeholder="Ex. Jhon"
                    />
                    {errors.firstName && (
                        <p className="text-red-500 text-xs italic">
                            {errors.firstName.message}
                        </p>
                    )}
                </div>
                <div className="mb-4">
                    <label className="input-label">Last Name</label>
                    <input
                        {...register('lastName')}
                        className={`input ${
                            errors.lastName ? 'border-red-500' : ''
                        }`}
                        placeholder="Ex. Doe"
                    />
                    {errors.lastName && (
                        <p className="text-red-500 text-xs italic">
                            {errors.lastName.message}
                        </p>
                    )}
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4">
                <div className="mb-4">
                    <label className="input-label">Email</label>
                    <input
                        {...register('email')}
                        type="email"
                        className={`input ${
                            errors.email ? 'border-red-500' : ''
                        }`}
                        placeholder="Enter email address"
                    />
                    {errors.email && (
                        <p className="text-red-500 text-xs italic">
                            {errors.email.message}
                        </p>
                    )}
                </div>
                <div className="mb-4">
                    <label className="input-label">Phone Number</label>
                    <PhoneInput
                        defaultCountry="pk"
                        {...register('phoneNumber')}
                        className={`custom-phone-input ${
                            errors.phoneNumber ? 'border-red-500' : ''
                        }`}
                        inputClassName="custom-phone-input"
                    />
                    {errors.phoneNumber && (
                        <p className="text-red-500 text-xs italic">
                            {errors.phoneNumber.message}
                        </p>
                    )}
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4">
                <div className="mb-4 relative">
                    <label className="input-label">Password</label>
                    <input
                        {...register('password')}
                        type={showPassword ? 'text' : 'password'}
                        className={`input ${
                            errors.password ? 'border-red-500' : ''
                        }`}
                        placeholder="Minimum 8 characters long"
                    />
                    <button
                        type="button"
                        onClick={handleTogglePassword}
                        className="absolute inset-y-0 right-0 flex items-center pr-4 text-lg"
                    >
                        {showPassword ? (
                            <FaRegEyeSlash className="mt-6" />
                        ) : (
                            <FaRegEye className="mt-6" />
                        )}
                    </button>
                    {errors.password && (
                        <p className="text-red-500 text-xs italic">
                            {errors.password.message}
                        </p>
                    )}
                </div>

                <div className="mb-4 relative">
                    <label className="input-label">Confirm Password</label>
                    <input
                        {...register('confirmPassword')}
                        type={showConfirmPassword ? 'text' : 'password'}
                        className={`input ${
                            errors.confirmPassword ? 'border-red-500' : ''
                        }`}
                        placeholder="Minimum 8 characters long"
                    />
                    <button
                        type="button"
                        onClick={handleToggleConfirmPassword}
                        className="absolute inset-y-0 right-0 flex items-center pr-4 text-lg leading-5"
                    >
                        {showConfirmPassword ? (
                            <FaRegEyeSlash className="mt-6" />
                        ) : (
                            <FaRegEye className="mt-6" />
                        )}
                    </button>
                    {errors.confirmPassword && (
                        <p className="text-red-500 text-xs italic">
                            {errors.confirmPassword.message}
                        </p>
                    )}
                </div>
            </div>

            <div className="mb-4">
                <label className="input-label">Refer Code (Optional)</label>
                <input
                    {...register('referCode')}
                    className={`input ${
                        errors.referCode ? 'border-red-500' : ''
                    }`}
                    placeholder="Use referral code"
                />
                {errors.referCode && (
                    <p className="text-red-500 text-xs italic">
                        {errors.referCode.message}
                    </p>
                )}
            </div>
            {/* <div className="mb-4">
				<ReCAPTCHA sitekey="YOUR_RECAPTCHA_SITE_KEY" />
			</div> */}
            <div className="mb-4">
                <label className="block text-gray-700 text-sm mb-2">
                    <input
                        type="checkbox"
                        {...register('terms', {
                            required:
                                'You must agree to the terms and conditions',
                        })}
                    />{' '}
                    I agree to the{' '}
                    <Link to="/terms" className="text-blue-500">
                        Terms and Conditions
                    </Link>
                </label>
                {errors.terms && (
                    <p className="text-red-500 text-xs italic">
                        {errors.terms.message}
                    </p>
                )}
            </div>
            <div className="flex items-center justify-between ">
                <button type="submit" className="btn primary-btn w-full">
                    {isLoading ? 'Loading...' : 'Sign Up'}
                </button>
            </div>
            <p className="text-center mt-4">
                Already have an account?{' '}
                <Link
                    to="/customer/auth/sign-in"
                    className="text-blue-500 underline hover:no-underline"
                >
                    Sign in
                </Link>
            </p>
        </form>
    )
}

export default SignUpForm
