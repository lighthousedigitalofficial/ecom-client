import { createSlice } from '@reduxjs/toolkit'
import encryptionManager from '../../utils/encryptionManager'

let initialState = {}

// Initialize from localStorage
if (typeof localStorage !== 'undefined') {
    const encryptedShippingAddress = localStorage.getItem('shippingAddress')
    if (encryptedShippingAddress) {
        try {
            initialState = encryptionManager.decrypt(encryptedShippingAddress)
        } catch (error) {
            initialState = {
                shippingAddress: {},
            }
        }
    } else {
        initialState = {
            shippingAddress: {},
        }
    }
}

const shippingAddressSlice = createSlice({
    name: 'shippingAddress',
    initialState,
    reducers: {
        saveShippingAddress: (state, action) => {
            console.log('address', action.payload)
            state.shippingAddress = action.payload
            saveEncryptedShippingAddress(state)
        },
        clearShippingAddress: (state) => {
            state.shippingAddress = {}
            saveEncryptedShippingAddress(state)
        },
        loadShippingAddress: (state) => {
            const encryptedShippingAddress =
                localStorage.getItem('shippingAddress')
            if (encryptedShippingAddress) {
                try {
                    const decryptedAddress = encryptionManager.decrypt(
                        encryptedShippingAddress
                    )
                    state.shippingAddress =
                        decryptedAddress.shippingAddress || {}
                } catch (error) {
                    console.error('Failed to decrypt shipping address:', error)
                    state.shippingAddress = {}
                }
            }
        },
    },
})

// Utility function to save encrypted shipping address to localStorage
const saveEncryptedShippingAddress = (state) => {
    try {
        const encryptedAddress = encryptionManager.encrypt(state)
        localStorage.setItem('shippingAddress', encryptedAddress)
    } catch (error) {
        console.error('Failed to encrypt shipping address:', error)
    }
}

export const {
    saveShippingAddress,
    clearShippingAddress,
    loadShippingAddress,
} = shippingAddressSlice.actions

export default shippingAddressSlice.reducer
