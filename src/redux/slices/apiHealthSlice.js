import { apiSlice } from './apiSlice'

export const apiHealthSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        checkHealth: builder.query({
            query: () => '/',
        }),
    }),
})

export const { useCheckHealthQuery } = apiHealthSlice
