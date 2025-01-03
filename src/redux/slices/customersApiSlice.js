import { apiSlice } from './apiSlice'
import { CUSTOMERS_URL, OTP_URL } from '../constants'

export const customerApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        customerLogin: builder.mutation({
            query: (data) => ({
                url: `${CUSTOMERS_URL}/login`,
                method: 'POST',
                body: data,
            }),
        }),
        customerRegister: builder.mutation({
            query: (data) => ({
                url: `${CUSTOMERS_URL}/register`,
                method: 'POST',
                body: data,
            }),
        }),
        resendEmailOTP: builder.mutation({
            query: (data) => ({
                url: `${OTP_URL}/send-email`,
                method: 'POST',
                body: data,
            }),
        }),
        customerOTPVerification: builder.mutation({
            query: (data) => ({
                url: `${CUSTOMERS_URL}/otp/verify`,
                method: 'POST',
                body: data,
            }),
        }),
        customerSubscribe: builder.mutation({
            query: (email) => ({
                url: `/user/subscribers`,
                method: 'POST',
                body: email,
            }),
        }),
        customerForgotPassword: builder.mutation({
            query: (email) => ({
                url: `${CUSTOMERS_URL}/forgot-password`,
                method: 'POST',
                body: email,
            }),
        }),
        customerUpdatePassword: builder.mutation({
            query: (data) => ({
                url: `${CUSTOMERS_URL}/update-password`,
                method: 'PUT',
                body: data,
            }),
        }),
        customerResetPassword: builder.mutation({
            query: ({ data, hash }) => ({
                url: `${CUSTOMERS_URL}/reset-password/${hash}`,
                method: 'PUT',
                body: data,
            }),
        }),
        customerLogout: builder.mutation({
            query: (token) => ({
                url: `${CUSTOMERS_URL}/logout`,
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }),
        }),
        customerProfile: builder.mutation({
            query: (data) => ({
                url: `${CUSTOMERS_URL}/profile`,
                method: 'PUT',
                body: data,
            }),
        }),
        getCustomers: builder.query({
            query: () => ({
                url: CUSTOMERS_URL,
            }),
            providesTags: ['Customer'],
            keepUnusedDataFor: 5,
        }),
        getCustomerCart: builder.query({
            query: (customerId) => ({
                url: `/user/cart/customer/${customerId}`,
            }),
            providesTags: ['Customer'],
            keepUnusedDataFor: 5,
        }),
        getCustomerDetails: builder.query({
            query: (id) => ({
                url: `${CUSTOMERS_URL}/${id}`,
            }),
            keepUnusedDataFor: 5,
        }),
        updateCustomer: builder.mutation({
            query: (data) => {
                return {
                    url: `${CUSTOMERS_URL}/${data.customerId}`,
                    method: 'PUT',
                    body: data,
                }
            },
            invalidatesTags: ['Customer'],
        }),
    }),
})

export const {
    useGetCustomerCartQuery,
    useCustomerLoginMutation,
    useCustomerLogoutMutation,
    useCustomerRegisterMutation,
    useCustomerProfileMutation,
    useCustomerOTPVerificationMutation,
    useResendEmailOTPMutation,
    useGetCustomersQuery,
    useDeleteCustomerMutation,
    useUpdateCustomerMutation,
    useGetCustomerDetailsQuery,
    useCustomerSubscribeMutation,
    useCustomerForgotPasswordMutation,
    useCustomerResetPasswordMutation,
    useCustomerUpdatePasswordMutation,
} = customerApiSlice
