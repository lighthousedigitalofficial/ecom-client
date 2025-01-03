/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import { useFormContext } from 'react-hook-form'
import { PhoneInput } from 'react-international-phone'
import 'react-international-phone/style.css'
import './../../styles/customPhoneInput.css'

import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa'
import { useState } from 'react'

const SellerRegForm1 = ({ errors, handleNext }) => {
    const { register } = useFormContext()

    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)

    const handleTogglePassword = () => {
        setShowPassword(!showPassword)
    }
    const handleToggleConfirmPassword = () => {
        setShowConfirmPassword(!showConfirmPassword)
    }

    return (
        <div className="flex flex-col p-4  gap-6">
            <h2 className="text-3xl font-bold text-primary-600 ">
                Create your own Store
            </h2>
            <div className="flex flex-col justify-center items-center mb-6 lg:mb-0">
                <h2 className="text-2xl lg:text-3xl text-center lg:text-left">
                    Vendor Registration
                </h2>
                <div className="text-center lg:text-left">
                    <span className="text-sm text-gray-800">
                        Already have store?
                    </span>
                    <Link
                        to="https://seller.vistamart.biz"
                        className="text-primary-500 text-lg font-bold ml-2 hover:text-primary-400 hover:underline transition-all ease-in delay-100"
                    >
                        Login
                    </Link>
                </div>
                {/* <img
                    src="https://6valley.6amtech.com/public/assets/front-end/img/media/seller-registration.png"
                    alt="vendor"
                    className="h-40 w-40 lg:h-64 lg:w-64 object-contain mt-4 lg:mt-0"
                /> */}
            </div>
            <div className=" bg-white p-4 md:p-8 lg:p-12 rounded-lg flex-grow">
                <h2 className="text-xl lg:text-2xl font-semibold mb-4 lg:mb-6 text-center lg:text-left">
                    Account Information
                </h2>
                <div className=" w-full grid md:grid-cols-2 grid-cols-1 gap-4">
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
                                errors.password ? 'border-red-500' : ''
                            }`}
                            inputClassName="custom-phone-input"
                        />
                        {errors.phoneNumber && (
                            <p className="text-red-500 text-xs italic">
                                {errors.phoneNumber.message}
                            </p>
                        )}
                    </div>
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
                        {errors.password && (
                            <p className="text-red-500 text-xs italic">
                                {errors.password.message}
                            </p>
                        )}
                    </div>
                </div>
                <div className="flex justify-end">
                    <button
                        className="btn primary-btn cursor-pointer "
                        type="button"
                        onClick={handleNext}
                    >
                        Proceed to Next
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SellerRegForm1
