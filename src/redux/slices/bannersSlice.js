import { BANNERS_URL } from '../constants'
import { apiSlice } from './apiSlice'

export const bannersApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getBanners: builder.query({
            query: (params) => ({
                url: `${BANNERS_URL}?sort=-createdAt&publish=true`,
                params,
            }),
            keepUnusedDataFor: 300,
        }),
    }),
})

export const { useGetBannersQuery } = bannersApiSlice
