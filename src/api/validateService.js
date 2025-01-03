import axios from 'axios'
import keys from '../config/keys'

export const validateSession = async (token, setModalOpen) => {
    try {
        const { data } = await axios.post(
            `${keys.BASE_URL}/api/v1/validate-session`,
            {
                token,
            }
        )

        if (data.status === 'expired') {
            setModalOpen(true) // Open modal for expired session
        } else {
            console.log('Session valid')
        }
    } catch (error) {
        console.error('Session validation failed:', error)
        setModalOpen(true) // Open modal on validation error
    }
}
