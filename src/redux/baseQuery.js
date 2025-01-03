import { fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import keys from '../config/keys'
import { setAuthHeader } from './apiHelpers'

const baseQuery = fetchBaseQuery({
    baseUrl: `${keys.BASE_URL}/api/v1`,
    prepareHeaders: (headers) => {
        // Use setAuthHeader to securely set the Authorization header
        return setAuthHeader(headers)
    },
})

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
//             // Encrypt and store the new token
//             const encryptedRefreshData = encryptionManager.encrypt(
//                 refreshResult.data
//             )
//             localStorage.setItem('userInfo', encryptedRefreshData)

//             // Retry the original query with the new token
//             result = await baseQuery(args, api, extraOptions)
//         }
//     }

//     return result
// }

export default baseQuery
