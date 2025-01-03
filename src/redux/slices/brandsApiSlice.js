import { BRANDS_URL } from '../constants'
import { apiSlice } from './apiSlice'

export const brandsApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getBrands: builder.query({
            query: (query) => ({
                url: `${BRANDS_URL}?status=active`,
                params: query,
            }),
            keepUnusedDataFor: 100,
        }),
        getBrandDetails: builder.query({
            query: (id) => ({
                url: `${BRANDS_URL}/${id}?status=active`,
            }),
            keepUnusedDataFor: 100,
        }),
        getBrandBySlug: builder.query({
            query: (slug) => ({
                url: `${BRANDS_URL}/slug/${slug}`,
            }),
            keepUnusedDataFor: 100,
        }),
        createBrand: builder.mutation({
            query: () => ({
                url: `${BRANDS_URL}`,
                method: 'POST',
            }),
            invalidatesTags: ['Brand'],
        }),
        updateBrand: builder.mutation({
            query: (data) => ({
                url: `${BRANDS_URL}/${data.brandId}`,
                method: 'PUT',
                body: data,
            }),
            invalidatesTags: ['Brand'],
        }),
        deleteBrand: builder.mutation({
            query: (brandId) => ({
                url: `${BRANDS_URL}/${brandId}`,
                method: 'DELETE',
            }),
            providesTags: ['Brand'],
        }),
    }),
})

export const {
    useGetBrandsQuery,
    useGetBrandDetailsQuery,
    useCreateBrandMutation,
    useUpdateBrandMutation,
    useDeleteBrandMutation,
    useGetBrandBySlugQuery,
} = brandsApiSlice
