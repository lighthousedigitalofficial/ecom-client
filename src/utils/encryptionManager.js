import CryptoJS from 'crypto-js'
import keys from '../config/keys'

class EncryptionManager {
    constructor(secretKey) {
        if (!secretKey) {
            throw new Error('Secret key is required for EncryptionManager')
        }
        this.secretKey = secretKey
    }

    /**
     * Encrypt data with AES
     * @param {string | object} data - The data to be encrypted (string or JSON object).
     * @returns {string} - The encrypted data.
     */

    encrypt(data) {
        try {
            const stringifiedData =
                typeof data === 'string' ? data : JSON.stringify(data)
            const encrypted = CryptoJS.AES.encrypt(
                stringifiedData,
                this.secretKey
            ).toString()
            return encrypted
        } catch (error) {
            console.error('Encryption error:', error)
            throw new Error('Failed to encrypt data.')
        }
    }

    /**
     * Decrypt data with AES
     * @param {string} encryptedData - The encrypted string to be decrypted.
     * @returns {string | object} - The decrypted data (parsed as JSON if possible).
     */
    decrypt(encryptedData) {
        try {
            const bytes = CryptoJS.AES.decrypt(encryptedData, this.secretKey)
            const decryptedString = bytes.toString(CryptoJS.enc.Utf8)

            // Try parsing the decrypted string as JSON, fallback to plain string
            try {
                return JSON.parse(decryptedString)
            } catch {
                return decryptedString
            }
        } catch (error) {
            console.error('Decryption error:', error)
            throw new Error('Failed to decrypt data.')
        }
    }
}

// Usage example
const secretKey = keys.ENCRYPTION_KEY
const encryptionManager = new EncryptionManager(secretKey)

export default encryptionManager
