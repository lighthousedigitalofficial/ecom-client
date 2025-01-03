import axios from 'axios'
import keys from './../config/keys'

export const fetchProducts = async (query) => {
    try {
        const response = await axios.get(
            `${keys.BASE_URL}/api/v1/user/search/suggestions?query=${query}`
        )
        return response.data
    } catch (error) {
        console.error('Error fetching products:', error)
        throw error
    }
}
