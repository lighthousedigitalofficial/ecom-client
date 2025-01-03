import {
    FLASHDEALS_URL,
    PRODUCT_REVIEW_URL,
    PRODUCTS_URL,
    SEARCH_URL,
} from '../constants'
import { apiSlice } from './apiSlice'

export const productsApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: (query) => {
                return {
                    url: `${PRODUCTS_URL}?status=approved`,
                    params: query,
                }
            },
            keepUnusedDataFor: 600,
        }),
        getDiscountedProducts: builder.query({
            query: (query) => {
                return {
                    url: `${PRODUCTS_URL}?status=approved&discountAmount[gt]=0`,
                    params: query,
                }
            },
        }),
        getProductDetails: builder.query({
            query: (id) => ({
                url: `${PRODUCTS_URL}/${id}?status=approved`,
            }),
            keepUnusedDataFor: 5,
        }),
        getProductBySlug: builder.query({
            query: (slug) => ({
                url: `${PRODUCTS_URL}/slug/${slug}?status=approved`,
            }),
            keepUnusedDataFor: 5,
        }),
        createProduct: builder.mutation({
            query: () => ({
                url: `${PRODUCTS_URL}`,
                method: 'POST',
            }),
            invalidatesTags: ['Product'],
        }),
        updateProduct: builder.mutation({
            query: (data) => ({
                url: `${PRODUCTS_URL}/${data.productId}`,
                method: 'PUT',
                body: data,
            }),
            invalidatesTags: ['Products'],
        }),
        uploadProductImage: builder.mutation({
            query: (data) => ({
                url: `/api/upload`,
                method: 'POST',
                body: data,
            }),
        }),
        deleteProduct: builder.mutation({
            query: (productId) => ({
                url: `${PRODUCTS_URL}/${productId}`,
                method: 'DELETE',
            }),
            providesTags: ['Product'],
        }),
        createReview: builder.mutation({
            query: (data) => ({
                url: PRODUCT_REVIEW_URL,
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['Product'],
        }),
        getTopRatedProducts: builder.query({
            query: (query) => {
                return {
                    url: `${PRODUCTS_URL}?sort=-numOfReviews&rating[gte]=4&status=approved`,
                    params: query,
                }
            },
            keepUnusedDataFor: 300,
        }),
        getBestSellingProducts: builder.query({
            query: (query) => {
                return {
                    url: `${PRODUCTS_URL}?sort=-sold&status=approved`,
                    params: query,
                }
            },
            keepUnusedDataFor: 300,
        }),
        getLatestProducts: builder.query({
            query: () =>
                `${PRODUCTS_URL}?sort=-createdAt&status=approved&limit=8`,
            keepUnusedDataFor: 5,
        }),
        getFeaturedProducts: builder.query({
            query: () => `${PRODUCTS_URL}?isFeatured=true&status=approved`,
            keepUnusedDataFor: 600,
        }),
        getFeaturedDeals: builder.query({
            query: () => `/admin/featured-deals?status=active`,
            keepUnusedDataFor: 5,
        }),
        getProductSuggestions: builder.query({
            query: (query) => `${PRODUCTS_URL}/search?q=${query}`,
            keepUnusedDataFor: 5,
        }),
        getFlashDeals: builder.query({
            query: () => `${FLASHDEALS_URL}`,
            keepUnusedDataFor: 5,
        }),
        getDealOfTheDay: builder.query({
            query: () => `/admin/deal-of-day/latest`,
            keepUnusedDataFor: 5,
        }),
        // searchProducts: builder.query({
        //     query: ({ query, page = 1, limit = 10 }) =>
        //         `/api/search?query=${query}&page=${page}&limit=${limit}`,
        // }),
        searchProducts: builder.query({
            query: (queryParams) => ({
                url: `${SEARCH_URL}/products`,
                params: queryParams,
            }),
            keepUnusedDataFor: 5,
        }),
    }),
})

export const {
    useGetProductsQuery,
    useGetProductDetailsQuery,
    useCreateProductMutation,
    useUpdateProductMutation,
    useUploadProductImageMutation,
    useDeleteProductMutation,
    useCreateReviewMutation,
    useGetTopRatedProductsQuery,
    useGetFeaturedProductsQuery,
    useGetFeaturedDealsQuery,
    useGetLatestProductsQuery,
    useGetProductSuggestionsQuery,
    useGetFlashDealsQuery,
    useGetProductBySlugQuery,
    useGetDiscountedProductsQuery,
    useGetBestSellingProductsQuery,
    useGetDealOfTheDayQuery,
    useSearchProductsQuery,
} = productsApiSlice
