/* eslint-disable react/prop-types */
import { useFormContext } from 'react-hook-form'
import { PhoneInput } from 'react-international-phone'

const SellerInfoForm = ({ errors }) => {
    const { register } = useFormContext()

    return (
        <div className=" bg-white shadow-md rounded-lg lg:p-8 md:p-6 p-4">
            <h2 className="text-xl lg:text-2xl font-semibold mb-4 lg:mb-6 text-center lg:text-left">
                Seller Information
            </h2>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                <div className="mb-4">
                    <label className="input-label">First Name</label>
                    <input
                        {...register('firstName')}
                        type="text"
                        className={`input ${
                            errors.firstName ? 'border-red-500' : ''
                        }`}
                        placeholder="Ex: John"
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
                        type="text"
                        className={`input ${
                            errors.lastName ? 'border-red-500' : ''
                        }`}
                        placeholder="Ex: Doe"
                    />
                    {errors.lastName && (
                        <p className="text-red-500 text-xs italic">
                            {errors.lastName.message}
                        </p>
                    )}
                </div>

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

                <div className="mb-4">
                    <label className="input-label">Password</label>
                    <input
                        {...register('password')}
                        type="password"
                        className={`input ${
                            errors.password ? 'border-red-500' : ''
                        }`}
                        placeholder="Enter password"
                    />
                    {errors.password && (
                        <p className="text-red-500 text-xs italic">
                            {errors.password.message}
                        </p>
                    )}
                </div>
                <div className="mb-4">
                    <label className="input-label">Confirm Password</label>
                    <input
                        {...register('confirmPassword')}
                        type="password"
                        className={`input ${
                            errors.confirmPassword ? 'border-red-500' : ''
                        }`}
                        placeholder="Confirm password"
                    />
                    {errors.confirmPassword && (
                        <p className="text-red-500 text-xs italic">
                            {errors.password.message}
                        </p>
                    )}
                </div>
            </div>
        </div>
    )
}

export default SellerInfoForm
