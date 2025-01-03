import { useEffect, useState } from 'react'
import axios from 'axios'
import encryptionManager from '../utils/encryptionManager'
import keys from '../config/keys'

const useCities = () => {
    const [cities, setCities] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchCities = async () => {
            const storedCities = localStorage.getItem('cities')
            const storedTimestamp = localStorage.getItem('citiesTimestamp')

            // Decrypt cities data from localStorage
            const decryptedCities = storedCities
                ? encryptionManager.decrypt(storedCities)
                : null

            // If cities exist in localStorage and are not expired
            const isExpired =
                !decryptedCities ||
                !storedTimestamp ||
                Date.now() - storedTimestamp > 86400000 // 1 day expiry

            if (decryptedCities && !isExpired) {
                setCities(decryptedCities)
                setLoading(false)
            } else {
                try {
                    const { data } = await axios.get(
                        `${keys.TRAX_API}/cities?business_category=1`,
                        {
                            headers: {
                                Authorization: keys.TRAX_AUTH,
                            },
                        }
                    )

                    const fetchedCities = data.cities || []

                    // Encrypt cities and store them in localStorage
                    const encryptedCities =
                        encryptionManager.encrypt(fetchedCities)

                    localStorage.setItem('cities', encryptedCities)
                    localStorage.setItem(
                        'citiesTimestamp',
                        Date.now().toString()
                    )

                    setCities(fetchedCities)
                    setLoading(false)
                } catch (err) {
                    setError('Failed to load cities.')
                    setLoading(false)
                    console.error(
                        'Error fetching shipping cities:',
                        err.response?.data || err.message
                    )
                }
            }
        }

        fetchCities()
    }, [])

    return { cities, loading, error }
}

export default useCities
