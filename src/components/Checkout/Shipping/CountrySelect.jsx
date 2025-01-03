/* eslint-disable react/prop-types */
import useCountries from '../../../hooks/useCountries'
import { useState } from 'react'

const CountrySelect = ({ register, errors }) => {
    const { countries, loading, error } = useCountries()
    const [selectedCountry, setSelectedCountry] = useState('Pakistan')

    if (error) return <p>{error}</p>

    const handleChange = (event) => {
        setSelectedCountry(event.target.value)
    }

    return (
        <div className="relative">
            <label className="input-label">Country</label>
            <select
                {...register('country', { required: 'Country is required' })}
                value={selectedCountry}
                onChange={handleChange}
                className={`input ${
                    errors.country ? 'border-red-500' : 'border-gray-300'
                }`}
            >
                <option value="" disabled className="text-gray-700">
                    Select a country
                </option>
                {loading
                    ? 'is Loading...'
                    : countries.map((country) => (
                          <option
                              key={country.id}
                              value={country.name}
                              defaultValue={'Pakistan'}
                          >
                              {country.name}
                          </option>
                      ))}
            </select>
            {/* Error Message */}
            {errors.country && (
                <div className="text-red-500 text-xs mt-1">
                    <p>{errors.country.message}</p>
                </div>
            )}
        </div>
    )
}

export default CountrySelect
