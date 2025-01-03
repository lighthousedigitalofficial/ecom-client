import { TRANSACTIONS_URL } from '../constants'
import { apiSlice } from './apiSlice'

export const transactionApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        jazzCashMobileWallet: builder.mutation({
            query: (data) => ({
                url: `${TRANSACTIONS_URL}/initiate/wallet`,
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['Transaction'],
        }),
        jazzCashCardPageRedirection: builder.mutation({
            query: (data) => ({
                url: `${TRANSACTIONS_URL}/initiate/card`,
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['Transaction'],
        }),
    }),
})

export const {
    useJazzCashMobileWalletMutation,
    useJazzCashCardPageRedirectionMutation,
} = transactionApiSlice
