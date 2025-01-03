import { apiSlice } from './apiSlice'
import { ORDERS_URL } from '../constants'

export const orderApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        createOrder: builder.mutation({
            query: (order) => ({
                url: ORDERS_URL,
                method: 'POST',
                body: order,
            }),
        }),
        getOrderDetails: builder.query({
            query: (orderId) => ({
                url: `${ORDERS_URL}/details/${orderId}`,
            }),
            keepUnusedDataFor: 10,
        }),
        payOrder: builder.mutation({
            query: ({ orderId, details }) => ({
                url: `${ORDERS_URL}/${orderId}/pay`,
                method: 'PUT',
                body: details,
            }),
        }),

        getMyOrders: builder.query({
            //order details by customer order
            query: (id) => ({
                url: `${ORDERS_URL}?customer=${id}`,
            }),
            keepUnusedDataFor: 10,
        }),
        getOrderStatus: builder.query({
            query: (id) => ({
                url: `${ORDERS_URL}/track-order/${id}`,
            }),
            keepUnusedDataFor: 5,
        }),
        trackingOrderStatus: builder.query({
            query: (id) => ({
                url: `https://app.sonic.pk/api/shipment/track?tracking_number=${id}&type=0`,
            }),
            keepUnusedDataFor: 5,
        }),
        getOrders: builder.query({
            query: () => ({
                url: ORDERS_URL,
            }),
            keepUnusedDataFor: 5,
        }),
        deliverOrder: builder.mutation({
            query: (orderId) => ({
                url: `${ORDERS_URL}/${orderId}/deliver`,
                method: 'PUT',
            }),
        }),
    }),
})

export const {
    useCreateOrderMutation,
    useGetOrderDetailsQuery,
    usePayOrderMutation,
    useGetMyOrdersQuery,
    useGetOrdersQuery,
    useDeliverOrderMutation,
    useGetOrderStatusQuery,
    useTrackingOrderStatusQuery,
} = orderApiSlice
