/* eslint-disable react/prop-types */
import axios from 'axios'
import keys from '../config/keys'
import { parsePhoneNumberFromString } from 'libphonenumber-js'

// Function to get a pre-signed upload URL
export const getUploadUrl = async (type, folder) => {
    try {
        const query = {
            fileType: type.split('/')[1],
            folder,
        }
        const response = await axios.get(
            `${keys.BASE_URL}/api/v1/image/upload`,
            {
                params: query,
            }
        )

        return response.data // Contains the URL and the key for S3 storage
    } catch (error) {
        console.error('Error fetching upload URL: ', error)
        throw new Error('Failed to get upload URL')
    }
}

// Function to upload an image to S3
export const uploadImageToS3 = async (uploadUrl, file) => {
    try {
        await axios.put(uploadUrl, file, {
            headers: {
                'Content-Type': file.type,
            },
        })
    } catch (error) {
        console.error('Error uploading image', error)
        throw new Error('Failed to upload image')
    }
}

export const deleteUploadedImages = async (keys) => {
    try {
        await axios.delete(`${keys.BASE_URL}/api/v1/image/delete-images`, {
            data: { keys },
        })
    } catch (error) {
        console.error('Error deleting images', error)
        throw new Error('Failed to delete images')
    }
}
export const deleteUploadedImage = async (key) => {
    try {
        await axios.delete(`${keys.BASE_URL}/api/v1/image/delete-image`, {
            data: { key },
        })
    } catch (error) {
        console.error('Error deleting image', error)
        throw new Error('Failed to delete image')
    }
}

// export const formatPrice = (value) => {
//     return Number(value).toLocaleString('en-PK', {
//         minimumFractionDigits: 2,
//         maximumFractionDigits: 2,
//     })
// }

export const formatPrice = (value) => {
    return Number.isInteger(value)
        ? Number(value).toLocaleString('en-PK')
        : Number(value).toLocaleString('en-PK', {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
          })
}

export const formatPAKPhoneNumber = (phoneNumber) => {
    // Remove the leading '+' and country code '92', then prepend '0'
    const formattedNumber = phoneNumber.replace('+92', '0')

    // Split the number into chunks: the first chunk for area code and the second for the rest of the number
    const formattedWithDashes = formattedNumber.replace(
        /(\d{4})(\d{7})/,
        '$1-$2'
    )

    return formattedWithDashes
}

export const getCountryCode = (phoneNumber) => {
    try {
        const parsedNumber = parsePhoneNumberFromString(phoneNumber)
        if (!parsedNumber || !parsedNumber.isValid()) {
            throw new Error('Invalid phone number')
        }
        return parsedNumber.country // Returns the ISO 3166-1 alpha-2 country code
    } catch (error) {
        return `Error: ${error.message}`
    }
}
