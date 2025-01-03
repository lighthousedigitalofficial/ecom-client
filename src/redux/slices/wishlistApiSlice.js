import { WISHLIST_URL } from '../constants'
import { apiSlice } from './apiSlice'

export const wishlistsApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getWishListById: builder.query({
            query: (userId) => ({
                url: `${WISHLIST_URL}/${userId}`,
            }),
            keepUnusedDataFor: 300,
        }),
        addWishList: builder.mutation({
            query: (data) => ({
                url: `${WISHLIST_URL}/add`,
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['WishList'],
        }),
        removeWishList: builder.mutation({
            query: (productId) => ({
                url: `${WISHLIST_URL}/remove/product/${productId}`,
                method: 'PUT',
            }),
            providesTags: ['WishList'],
        }),
        deleteWishlistProduct: builder.mutation({
            query: (data) => ({
                url: `${WISHLIST_URL}/products/${data.productId}`,
                method: 'DELETE',
                body: data,
            }),
            providesTags: ['WishList'],
        }),
    }),
})

export const {
    useAddWishListMutation,
    useGetWishListByIdQuery,
    useRemoveWishListMutation,
    useDeleteWishlistProductMutation,
} = wishlistsApiSlice
