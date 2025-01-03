/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useCallback } from 'react'
import axios from 'axios'
import keys from '../config/keys'
import { useSelector } from 'react-redux'

const useFetchShippingCharges = () => {
    const cart = useSelector((state) => state.cart)
    const vendorsShippingInfo = cart?.vendorsShippingInfo || []

    console.log(cart)

    const [shippingChargesList, setShippingChargesList] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const fetchAllShippingCharges = useCallback(async () => {
        if (!vendorsShippingInfo.length) {
            setError('No vendors available for shipping charges calculation')
            return
        }

        setLoading(true)
        setError(null)

        const promises = vendorsShippingInfo.map(async (vendorInfo) => {
            const { vendorId, originCityId } = vendorInfo

            if (!originCityId) {
                console.error(
                    `Missing data for vendor ${vendorId}: originCityId`
                )
                return null
            }

            const shippingData = {
                service_type_id: 1,
                origin_city_id: originCityId,
                destination_city_id: 202, // Static destination
                estimated_weight: cart.totalWeight,
                shipping_mode_id: 1,
                amount: cart?.totalPrice,
            }

            try {
                const { data } = await axios.post(
                    `${keys.TRAX_API}/charges_calculate`,
                    shippingData,
                    {
                        headers: {
                            Authorization: keys.TRAX_AUTH,
                        },
                    }
                )

                const totalCharges =
                    data?.information?.charges?.total_charges || 0
                const gst = data?.information?.charges?.gst || 0
                const netShippingCharges = totalCharges + gst

                return { vendorId, shippingCharges: netShippingCharges }
            } catch (err) {
                console.error(
                    `Error fetching charges for vendor ${vendorId}:`,
                    err
                )
                return null
            }
        })

        try {
            const results = await Promise.all(promises)
            console.log(results)
            setShippingChargesList(results.filter(Boolean)) // Remove null values
        } catch (err) {
            setError('Failed to fetch shipping charges for some vendors')
            console.error('Error in fetching all shipping charges:', err)
        } finally {
            setLoading(false)
        }
    }, [vendorsShippingInfo])

    return {
        shippingChargesList,
        loading,
        error,
        fetchAllShippingCharges,
    }
}

export default useFetchShippingCharges
