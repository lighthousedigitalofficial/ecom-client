import { UPLOAD_URL } from '../constants'
import { apiSlice } from './apiSlice'

export const uploadApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getUploadUrl: builder.query({
            query: ({ type, folder }) => ({
                url: `${UPLOAD_URL}/upload`,
                method: 'GET',
                params: {
                    fileType: type.split('/')[1],
                    folder,
                },
            }),
        }),
        uploadImageToS3: builder.mutation({
            query: ({ uploadUrl, file }) => ({
                url: uploadUrl,
                method: 'PUT',
                body: file,
                headers: {
                    'Content-Type': file.type,
                },
            }),
        }),
        deleteUploadedImages: builder.mutation({
            query: (keys) => ({
                url: `${UPLOAD_URL}/delete-images`,
                method: 'DELETE',
                body: { keys },
            }),
        }),
        deleteUploadedImage: builder.mutation({
            query: (key) => ({
                url: `${UPLOAD_URL}/delete-image`,
                method: 'DELETE',
                body: { key },
            }),
        }),
    }),
})

export const {
    useGetUploadUrlQuery,
    useUploadImageToS3Mutation,
    useDeleteUploadedImagesMutation,
    useDeleteUploadedImageMutation,
} = uploadApiSlice
