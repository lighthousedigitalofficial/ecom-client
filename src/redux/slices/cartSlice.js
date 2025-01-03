/* eslint-disable no-unused-vars */
import { createSlice } from '@reduxjs/toolkit'
import { updateCart } from './../../utils/cartUtils'
import encryptionManager from '../../utils/encryptionManager'

let initialState = {}

if (typeof localStorage !== 'undefined') {
    const encryptedCart = localStorage.getItem('cart')
    if (encryptedCart) {
        try {
            initialState = encryptionManager.decrypt(encryptedCart)
        } catch (error) {
            initialState = {
                cartItems: [],
                totalQty: 0,
                totalWeight: 0,
                paymentMethod: '',
                paymentStatus: 'Unpaid',
                vendors: [],
                vendorsShippingInfo: [],
            }
        }
    } else {
        initialState = {
            cartItems: [],
            totalQty: 0,
            paymentMethod: '',
            paymentStatus: 'Unpaid',
            vendors: [],
            vendorsShippingInfo: [],
        }
    }
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        // addToCart: (state, action) => {
        //     const { ...item } = action.payload
        //     const vendor = item.userId
        //     const vendorShippingInfo = item.shippingInfo || {}

        //     // Check if the item already exists in the cart
        //     const existItem = state.cartItems.find((x) => x._id === item._id)

        //     if (existItem) {
        //         // If item exists, update it
        //         state.cartItems = state.cartItems.map((x) =>
        //             x._id === existItem._id ? item : x
        //         )
        //     } else {
        //         // Otherwise, add it as a new item
        //         state.cartItems = [...state.cartItems, item]
        //     }

        //     // Check if the vendor is already in the cart vendors
        //     const existVendor = state.vendors.find((x) => x === vendor)

        //     if (!existVendor) {
        //         // Add the vendor only if it doesn't exist
        //         state.vendors = [...state.vendors, vendor]
        //         state.vendorsShippingInfo = [
        //             ...state.vendorsShippingInfo,
        //             vendorShippingInfo,
        //         ]
        //     }

        //     // Update the cart (total price, quantities, etc.)
        //     return updateCart(state)
        // },

        addToCart: (state, action) => {
            const { ...item } = action.payload
            const vendor = item.userId
            const vendorShippingInfo = item.shippingInfo || {}

            // Check if the item already exists in the cart
            const existItem = state.cartItems.find((x) => x._id === item._id)

            if (existItem) {
                // If item exists, update it
                state.cartItems = state.cartItems.map((x) =>
                    x._id === existItem._id ? item : x
                )
            } else {
                // Otherwise, add it as a new item
                state.cartItems = [...state.cartItems, item]
            }

            // Check if the vendor is already in the vendors list
            const existVendor = state.vendors.includes(vendor)

            if (!existVendor) {
                // Add the vendor only if it doesn't exist
                state.vendors = [...state.vendors, vendor]
            }

            // Check if the vendor's shipping info already exists in vendorsShippingInfo
            const existVendorShippingInfo = state.vendorsShippingInfo.some(
                (info) => info.vendorId === vendor
            )

            if (!existVendorShippingInfo) {
                // Add shipping info only if it doesn't exist
                state.vendorsShippingInfo = [
                    ...state.vendorsShippingInfo,
                    { vendorId: vendor, ...vendorShippingInfo },
                ]
            }

            // Check if the vendor's shipping info already exists in vendorsShippingInfo
            // const existVendorShippingInfo = state.vendorsShippingInfo.some(
            //     (info) => info.vendorId === vendor
            // )

            // if (!existVendorShippingInfo) {
            //     // Add shipping info only if it doesn't exist
            //     state.vendorsShippingInfo = [
            //         ...state.vendorsShippingInfo,
            //         { vendorId: vendor, ...vendorShippingInfo },
            //     ]
            // }

            // Update the cart (total price, quantities, etc.)
            return updateCart(state)
        },

        removeFromCart: (state, action) => {
            const { ...item } = action.payload
            const vendor = item.userId

            state.cartItems = state.cartItems.filter((x) => x._id !== item._id)

            state.vendors = state.vendors.filter((x) => x !== vendor)
            state.vendorsShippingInfo = state.vendorsShippingInfo.filter(
                (x) => x.vendorId !== vendor
            )
            return updateCart(state)
        },
        // saveShippingAddress: (state, action) => {
        //     state.shippingAddress = action.payload
        //     saveEncryptedCart(state)
        // },
        // saveBillingAddress: (state, action) => {
        //     state.billingAddress = action.payload
        //     saveEncryptedCart(state)
        // },
        savePaymentMethod: (state, action) => {
            state.paymentMethod = action.payload
            saveEncryptedCart(state)
        },
        updatePaymentStatus: (state, action) => {
            state.paymentStatus = action.payload
            saveEncryptedCart(state)
        },
        clearCartItems: (state, action) => {
            state.cartItems = []
            state.totalQty = 0
            state.totalWeight = 0
            state.paymentStatus = 'Unpaid'
            state.vendors = []
            state.vendorsShippingInfo = []

            // Save cleared state to localStorage
            saveEncryptedCart(state)
        },

        resetCart: (state) => {
            state = initialState
            saveEncryptedCart(state)
        },
    },
})

const saveEncryptedCart = (state) => {
    try {
        const encryptedCart = encryptionManager.encrypt(state)
        localStorage.setItem('cart', encryptedCart)
    } catch (error) {
        console.error('Failed to encrypt cart data:', error)
    }
}

export const {
    addToCart,
    removeFromCart,
    // saveShippingAddress,
    // saveBillingAddress,
    savePaymentMethod,
    updatePaymentStatus,
    clearCartItems,
    resetCart,
} = cartSlice.actions

export default cartSlice.reducer
