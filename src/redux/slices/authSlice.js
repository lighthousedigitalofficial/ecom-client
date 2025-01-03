/* eslint-disable no-unused-vars */
import { createSlice } from '@reduxjs/toolkit'
import encryptionManager from '../../utils/encryptionManager'

let initialState = {}

// Decrypt userInfo during initialization
if (typeof localStorage !== 'undefined') {
    const encryptedUserInfo = localStorage.getItem('userInfo')
    try {
        initialState = {
            userInfo: encryptedUserInfo
                ? encryptionManager.decrypt(encryptedUserInfo)
                : null,
        }
    } catch (error) {
        localStorage.clear()
        window.location.reload()
    }
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCredentials: (state, action) => {
            state.userInfo = action.payload

            // Encrypt and store userInfo
            const encryptedData = encryptionManager.encrypt(action.payload)
            localStorage.setItem('userInfo', encryptedData)

            // Set an expiration time
            const expirationTime =
                new Date().getTime() + 30 * 24 * 60 * 60 * 1000 // 30 days
            localStorage.setItem('expirationTime', expirationTime)
        },
        updateCredentials: (state, action) => {
            state.userInfo = action.payload

            // Encrypt and store updated userInfo
            const encryptedData = encryptionManager.encrypt(action.payload)
            localStorage.setItem('userInfo', encryptedData)
        },
        logout: (state, action) => {
            state.userInfo = null

            // Clear userInfo and other sensitive data
            localStorage.removeItem('userInfo')
            localStorage.removeItem('expirationTime')
        },
    },
})

export const { setCredentials, updateCredentials, logout } = authSlice.actions

export default authSlice.reducer
