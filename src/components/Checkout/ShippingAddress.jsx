/* eslint-disable react/prop-types */
import { useEffect } from 'react'
import { useForm, FormProvider, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import CityInput from './Shipping/CityInput'

import { PhoneInput } from 'react-international-phone'
import 'react-international-phone/style.css'
import './../../styles/customPhoneInput.css'

const ShippingAddressForm = ({
    onSubmit,
    user,
    // address,
    shippingAddressSchema,
    isUserUpdating,
}) => {
    const address = user.shippingAddress

    const methods = useForm({
        resolver: zodResolver(shippingAddressSchema),
        defaultValues: {
            name: '',
            phoneNumber: '',
            country: '',
            city: '',
            state: '',
            zipCode: '',
            address: '',
        },
    })

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = methods

    // Update default values when address data changes
    useEffect(() => {
        if (address) {
            reset({
                name: address.name || '',
                phoneNumber: address.phoneNumber || '',
                country: address.country || '',
                // city: address.city || '',
                state: address.state || '',
                zipCode: address.zipCode || '',
                address: address.address || '',
            })
        }
    }, [address, reset])

    return (
        <FormProvider {...methods}>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col w-full"
            >
                <div className="w-full">
                    <h2 className="text-gray-900 font-bold text-xl md:text-2xl mb-6">
                        Shipping Address
                    </h2>
                    <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 w-full">
                        <div>
                            <label className="input-label">Full Name</label>
                            <input
                                type="text"
                                {...register('name', {
                                    required: 'Full Name is required',
                                })}
                                className={`input ${
                                    errors.name
                                        ? 'border-red-500'
                                        : 'border-gray-300'
                                }`}
                            />
                            {errors.name && (
                                <p className="text-red-500 text-xs mt-1">
                                    {errors.name.message}
                                </p>
                            )}
                        </div>

                        <div className="mb-4">
                            <label className="input-label">Phone Number</label>
                            <Controller
                                name="phoneNumber"
                                control={methods.control}
                                render={({ field }) => (
                                    <PhoneInput
                                        {...field}
                                        defaultCountry="pk"
                                        className={`custom-phone-input ${
                                            errors.phoneNumber
                                                ? 'border-red-500'
                                                : ''
                                        }`}
                                        inputClassName="custom-phone-input"
                                    />
                                )}
                            />
                            {/* <PhoneInput
                                defaultCountry="pk"
                                {...register('phoneNumber')}
                                className={`custom-phone-input ${
                                    errors.phoneNumber ? 'border-red-500' : ''
                                }`}
                                inputClassName="custom-phone-input"
                            /> */}
                            {errors.phoneNumber && (
                                <p className="text-red-500 text-xs mt-1">
                                    {errors.phoneNumber.message}
                                </p>
                            )}
                        </div>

                        <div>
                            <label className="input-label">Country</label>
                            <input
                                type="text"
                                {...register('country', {
                                    required: 'Country is required',
                                })}
                                className={`input ${
                                    errors.country
                                        ? 'border-red-500'
                                        : 'border-gray-300'
                                }`}
                            />
                            {errors.country && (
                                <p className="text-red-500 text-xs mt-1">
                                    {errors.country.message}
                                </p>
                            )}
                        </div>

                        {/* <CountrySelect
                            register={register}
                            setValue={setValue}
                            errors={errors}
                        /> */}
                        <CityInput register={register} errors={errors} />

                        <div>
                            <label className="input-label">State</label>
                            <input
                                type="text"
                                {...register('state', {
                                    required: 'State is required',
                                })}
                                className={`input ${
                                    errors.state
                                        ? 'border-red-500'
                                        : 'border-gray-300'
                                }`}
                            />
                            {errors.state && (
                                <p className="text-red-500 text-xs mt-1">
                                    {errors.state.message}
                                </p>
                            )}
                        </div>

                        <div>
                            <label className="input-label">Zip Code</label>
                            <input
                                type="text"
                                {...register('zipCode', {
                                    required: 'Zip Code is required',
                                })}
                                className={`input ${
                                    errors.zipCode
                                        ? 'border-red-500'
                                        : 'border-gray-300'
                                }`}
                            />
                            {errors.zipCode && (
                                <p className="text-red-500 text-xs mt-1">
                                    {errors.zipCode.message}
                                </p>
                            )}
                        </div>

                        <div className="lg:col-span-2 col-span-1">
                            <label className="input-label">Address</label>
                            <input
                                type="text"
                                {...register('address', {
                                    required: 'Address is required',
                                })}
                                className={`input ${
                                    errors.address
                                        ? 'border-red-500'
                                        : 'border-gray-300'
                                }`}
                            />
                            {errors.address && (
                                <p className="text-red-500 text-xs mt-1">
                                    {errors.address.message}
                                </p>
                            )}
                        </div>
                    </div>
                </div>

                {/* Disable the submit button if the form is invalid */}
                <button type="submit" className="btn primary-btn mt-4">
                    {isUserUpdating ? 'Address Updating...' : ' Submit'}
                </button>
            </form>
        </FormProvider>
    )
}

export default ShippingAddressForm
