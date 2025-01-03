/* eslint-disable no-unused-vars */
import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react'
import baseQuery from '../baseQuery'

// const baseQuery = fetchBaseQuery({
//     baseUrl: `${keys.BASE_URL}/api/v1`,
//     prepareHeaders: (headers, { getState }) => {
//         const userInfo = localStorage.getItem('userInfo')
//         const user = JSON.parse(userInfo)

//         if (user) {
//             headers.set('Authorization', `Bearer ${user?.accessToken}`)
//         }

//         return headers
//     },
// })

// export const apiSlice = createApi({
//     baseQuery,
//     credentials: 'include',
//     tagTypes: [
//         'Product',
//         'Category',
//         'Brand',
//         'Order',
//         'User',
//         'Customer',
//         'Vendor',
//         'WishList',
//         'Transaction',
//     ],
//     // eslint-disable-next-line no-unused-vars
//     endpoints: (builder) => ({}),
// })

// const baseQueryWithReauth = async (args, api, extraOptions) => {
//     let result = await baseQuery(args, api, extraOptions)

//     if (result?.error?.status === 401) {
//         // Attempt to refresh the token
//         const refreshResult = await baseQuery(
//             '/auth/refresh',
//             api,
//             extraOptions
//         )
//         if (refreshResult?.data) {
//             // Store the new token and retry the original query
//             localStorage.setItem('userInfo', JSON.stringify(refreshResult.data))
//             result = await baseQuery(args, api, extraOptions)
//         }
//     }

//     return result
// }

// const baseQuery = fetchBaseQuery({
//     baseUrl: `${keys.BASE_URL}/api/v1`,
//     prepareHeaders: (headers) => {
//         const userInfo = localStorage.getItem('userInfo')
//         const user = JSON.parse(userInfo)

//         if (user?.accessToken) {
//             headers.set('Authorization', `Bearer ${user.accessToken}`)
//         }

//         return headers
//     },
// })

export const apiSlice = createApi({
    baseQuery: baseQuery,
    credentials: 'include',
    tagTypes: [
        'Product',
        'Category',
        'Brand',
        'Order',
        'User',
        'Customer',
        'Vendor',
        'WishList',
        'Transaction',
    ],
    endpoints: (builder) => ({}),
})
