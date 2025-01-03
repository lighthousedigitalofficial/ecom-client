import { apiSlice } from './apiSlice'

export const systemApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getFaqs: builder.query({
            query: () => ({
                url: `/admin/faqs`,
            }),
        }),
        getPages: builder.query({
            query: () => ({
                url: `/admin/pages`,
            }),
        }),
        getPageBySlug: builder.query({
            query: (slug) => ({
                url: `/admin/pages/slug/${slug}`,
            }),
        }),
        getSocialMediaLinks: builder.query({
            query: () => ({
                url: `/admin/social-media?status=active`,
            }),
        }),
    }),
})

export const {
    useGetFaqsQuery,
    useGetPagesQuery,
    useGetPageBySlugQuery,
    useGetSocialMediaLinksQuery,
} = systemApiSlice
