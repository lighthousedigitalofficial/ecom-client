import { apiSlice } from './apiSlice'
import { VENDORS_URL } from '../constants'

export const vendorsApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        vendorLogin: builder.mutation({
            query: (data) => ({
                url: `${VENDORS_URL}/login`,
                method: 'POST',
                body: data,
            }),
        }),
        vendorRegister: builder.mutation({
            query: (data) => ({
                url: `${VENDORS_URL}/signup`,
                method: 'POST',
                body: data,
            }),
        }),
        vendorOTPVerification: builder.mutation({
            query: (data) => ({
                url: `${VENDORS_URL}/otp/verify`,
                method: 'POST',
                body: data,
            }),
        }),
        vendorLogout: builder.mutation({
            query: (token) => ({
                url: `${VENDORS_URL}/logout`,
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }),
        }),
        getVendors: builder.query({
            query: (query) => ({
                url: `${VENDORS_URL}?status=active`,
                params: query,
            }),
            providesTags: ['Vendor'],
            keepUnusedDataFor: 600,
        }),
        deleteVendor: builder.mutation({
            query: (vendorId) => ({
                url: `${VENDORS_URL}/${vendorId}`,
                method: 'DELETE',
            }),
        }),
        getVendorDetails: builder.query({
            query: (id) => ({
                url: `${VENDORS_URL}/${id}`,
            }),
            keepUnusedDataFor: 5,
        }),
        getVendorBySlug: builder.query({
            query: (slug) => ({
                url: `${VENDORS_URL}/slug/${slug}`,
            }),
            keepUnusedDataFor: 5,
        }),
        updateVendor: builder.mutation({
            query: (data) => ({
                url: `${VENDORS_URL}/${data.vendorId}`,
                method: 'PUT',
                body: data,
            }),
            invalidatesTags: ['Vendor'],
        }),
    }),
})

export const {
    useVendorLoginMutation,
    useVendorLogoutMutation,
    useVendorRegisterMutation,
    useGetVendorsQuery,
    useDeleteVendorMutation,
    useUpdateVendorMutation,
    useGetVendorDetailsQuery,
    useGetVendorBySlugQuery,
    useVendorOTPVerificationMutation,
} = vendorsApiSlice
