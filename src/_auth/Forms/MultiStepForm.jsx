/* eslint-disable react/prop-types */
import { useState } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import toast from 'react-hot-toast'
import { zodResolver } from '@hookform/resolvers/zod'
import { FaArrowLeft } from 'react-icons/fa'

import SellerRegForm2 from './SellerRegForm2'
import SellerRegForm1 from './SellerRegForm1'
import { useVendorRegisterMutation } from '../../redux/slices/vendorsApiSlice'

import {
    deleteUploadedImages,
    getUploadUrl,
    uploadImageToS3,
} from './../../utils/helpers'
import { useNavigate } from 'react-router-dom'

const MultiStepForm = ({ vendorSchema }) => {
    const [logoImages, setLogoImages] = useState([])
    const [bannerImages, setBannerImages] = useState([])
    const [vendorImages, setVendorImages] = useState([])
    const [step, setStep] = useState(0)

    const [vendorRegister, { isLoading }] = useVendorRegisterMutation()

    const methods = useForm({
        resolver: zodResolver(vendorSchema),
        mode: 'onSubmit', // Validates only on form submission
        reValidateMode: 'onChange', // Validates on each change after initial submission
    })

    const isPasswordStrong = (password) => {
        const hasMinLength = password.length >= 8
        const hasUppercase = /[A-Z]/.test(password)
        const hasNumber = /\d/.test(password)
        const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password)
        return hasMinLength && hasUppercase && hasNumber && hasSpecialChar
    }

    const handleNext = async () => {
        const isValid = await methods.trigger([
            'email',
            'password',
            'confirmPassword',
            'phoneNumber',
        ])
        if (!isValid) {
            toast.error('Please fill all the required inputs.')
            return
        }

        const { password, confirmPassword } = methods.getValues()

        // Check if password is strong
        if (!isPasswordStrong(password)) {
            return toast.error(
                'Password must be at least 8 characters long, include an uppercase letter, a number, and a special character.'
            )
        }

        // Check if passwords match
        if (password !== confirmPassword) {
            return toast.error('Passwords do not match')
        }

        if (step === 0) {
            setStep(step + 1)
        }
    }

    const handlePrev = () => {
        setStep(0)
    }

    const navigate = useNavigate()

    async function uploadImage(uploadConfig, file) {
        try {
            await uploadImageToS3(uploadConfig.url, file)
            return uploadConfig.key // Return the key if successful
        } catch (error) {
            console.error(`Failed to upload ${file.name}:`, error)
            return null // Return null on failure
        }
    }

    const onSubmit = async (data) => {
        const uploadedKeys = [] // Store successfully uploaded image keys
        try {
            // Extract files or use default values
            const logoFile = logoImages?.[0]?.file || null
            const bannerFile = bannerImages?.[0]?.file || null
            const vendorFile = vendorImages?.[0]?.file || null

            // Step 1: Get upload URLs for the three images
            const [logoUploadConfig, bannerUploadConfig, vendorUploadConfig] =
                await Promise.all([
                    getUploadUrl(logoFile.type, 'vendors'),
                    getUploadUrl(bannerFile.type, 'vendors'),
                    getUploadUrl(vendorFile.type, 'vendors'),
                ])

            // Step 2: Upload images to S3 using the uploadImage helper function
            uploadedKeys.push(await uploadImage(logoUploadConfig, logoFile))
            uploadedKeys.push(await uploadImage(bannerUploadConfig, bannerFile))
            uploadedKeys.push(await uploadImage(vendorUploadConfig, vendorFile))

            // Step 3: Check if any image failed to upload
            const successfulUploads = uploadedKeys.filter((key) => key !== null)

            if (successfulUploads.length < 3) {
                // If not all images were uploaded, delete the successfully uploaded ones
                await deleteUploadedImages(successfulUploads)
                toast.error(
                    'Image upload failed, deleted previously uploaded images.'
                )
                return
            }

            if (data.password !== data.confirmPassword) {
                toast.error('Passwords do not match')
                return
            }

            data.confirmPassword = undefined

            // Step 4: Prepare final data object with all uploaded image keys
            const finalData = {
                ...data,
                logo: successfulUploads[0],
                banner: successfulUploads[1],
                vendorImage: successfulUploads[2],
            }

            // Instead of FormData, send JSON data
            const res = await vendorRegister(finalData).unwrap()
            toast.success(res.message || 'OTP send successfully to your email')
            navigate(`/auth/vendor/email/verification?email=${data.email}`)
            // Redirect to external login page
            // window.location.href = 'https://seller.vistamart.biz'
        } catch (err) {
            toast.error(err?.data?.message || err.error)
            console.error('Error: ', err)
        }
    }

    return (
        <div className="container mx-auto p-2">
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(onSubmit)}>
                    {step === 0 && (
                        <>
                            <div className="bg-primary-100 py-10 px-4 lg:px-8">
                                <SellerRegForm1
                                    errors={methods.formState.errors}
                                    handleNext={handleNext}
                                />
                            </div>
                        </>
                    )}
                    {step === 1 && (
                        <>
                            <button
                                onClick={() => setStep(0)}
                                className="btn secondary-btn flex items-center gap-2"
                            >
                                <FaArrowLeft />
                                Back
                            </button>
                            <SellerRegForm2
                                errors={methods.formState.errors}
                                logoImages={logoImages}
                                setLogoImages={setLogoImages}
                                bannerImages={bannerImages}
                                setBannerImages={setBannerImages}
                                vendorImages={vendorImages}
                                setVendorImages={setVendorImages}
                                isLoading={isLoading}
                                handlePrev={handlePrev}
                            />
                        </>
                    )}
                </form>
            </FormProvider>
        </div>
    )
}

export default MultiStepForm
