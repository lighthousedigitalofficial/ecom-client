import { useState, useEffect } from 'react'
import { fetchProducts } from '../api/productService'

const useFetchProducts = (query) => {
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        if (!query) return

        const getProducts = async () => {
            setIsLoading(true)
            setError(null)

            try {
                const result = await fetchProducts(query)
                setData(result)
            } catch (err) {
                setError(err.message || 'Something went wrong')
            } finally {
                setIsLoading(false)
            }
        }

        getProducts()
    }, [query])

    return { data, isLoading, error }
}

export default useFetchProducts
