import encryptionManager from '../utils/encryptionManager'

export const setAuthHeader = (headers) => {
    // Get encrypted userInfo from localStorage
    const encryptedUserInfo = localStorage.getItem('userInfo')

    if (encryptedUserInfo) {
        // Decrypt userInfo
        const user = encryptionManager.decrypt(encryptedUserInfo)

        // If user and accessToken exist, set Authorization header
        if (user?.accessToken) {
            headers.set('Authorization', `Bearer ${user.accessToken}`)
        }
    }

    return headers
}
