import { useState, useEffect } from 'react'
import axios from 'axios'
import encryptionManager from '../utils/encryptionManager'
import keys from '../config/keys'

const useCountries = () => {
    const [countries, setCountries] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchCountries = async () => {
            const storedCountries = localStorage.getItem('countries')
            const storedTimestamp = localStorage.getItem('countriesTimestamp')

            // Decrypt countries data from localStorage
            const decryptedCountries = storedCountries
                ? encryptionManager.decrypt(storedCountries)
                : null

            // Check if the cached data is expired
            const isExpired =
                !decryptedCountries ||
                !storedTimestamp ||
                Date.now() - storedTimestamp > 86400000 // 1 day expiry

            if (decryptedCountries && !isExpired) {
                setCountries(decryptedCountries)
                setLoading(false)
            } else {
                try {
                    const { data } = await axios.get(keys.ALL_COUNTRIES_API)

                    const fetchedCountries = data.map((country) => ({
                        id: country.cca3, // Assuming `cca3` is a unique identifier
                        name: country.name.common,
                    }))

                    // Encrypt countries and store in localStorage
                    const encryptedCountries =
                        encryptionManager.encrypt(fetchedCountries)
                    localStorage.setItem('countries', encryptedCountries)
                    localStorage.setItem(
                        'countriesTimestamp',
                        Date.now().toString()
                    )

                    setCountries(fetchedCountries)
                    setLoading(false)
                } catch (err) {
                    setError('Failed to load countries.')
                    setLoading(false)
                    console.error(
                        'Error fetching countries:',
                        err.response?.data || err.message
                    )
                }
            }
        }

        fetchCountries()
    }, [])

    return { countries, loading, error }
}

export default useCountries
