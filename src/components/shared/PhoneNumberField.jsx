/* eslint-disable react/prop-types */
import { Controller } from 'react-hook-form'
import { parsePhoneNumberFromString } from 'libphonenumber-js'
import PhoneInput from 'react-phone-number-input' // Assuming you're using this package
import 'react-phone-number-input/style.css' // Import default styles

export const PhoneNumberField = ({ methods, errors }) => (
    <Controller
        name="phoneNumber"
        control={methods.control}
        rules={{
            validate: (value) => {
                const phoneNumber = parsePhoneNumberFromString(value || '')
                if (!phoneNumber || !phoneNumber.isValid()) {
                    return 'Invalid phone number for the selected country'
                }
                return true
            },
        }}
        render={({ field }) => (
            <PhoneInput
                {...field}
                defaultCountry="PK"
                international
                withCountryCallingCode
                className={`custom-phone-input ${
                    errors.phoneNumber ? 'border-red-500' : ''
                }`}
                inputClassName="custom-phone-input"
            />
        )}
    />
)
