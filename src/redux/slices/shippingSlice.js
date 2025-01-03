import { SHIPPING_INFO_URL } from '../constants'
import { apiSlice } from './apiSlice'

export const shippingApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getShippingInfoByVendorId: builder.query({
            query: (id) => ({
                url: `${SHIPPING_INFO_URL}/vendor/${id}`,
            }),
            keepUnusedDataFor: 5,
        }),
        calculateShippingPrice: builder.mutation({
            query: (data) => ({
                url: `/transaction/shipping/calculate-price`,
                method: 'POST',
                body: data,
            }),
        }),
    }),
})

export const {
    useGetShippingInfoByVendorIdQuery,
    useCalculateShippingPriceMutation,
} = shippingApiSlice
