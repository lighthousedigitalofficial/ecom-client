import { useSearchParams } from 'react-router-dom'
import toast from 'react-hot-toast'
import { useState, useEffect } from 'react'
import { useVendorOTPVerificationMutation } from '../../../redux/slices/vendorsApiSlice'

import OTPForm from '../OTPForm'
import { useResendEmailOTPMutation } from '../../../redux/slices/customersApiSlice'

const VendorEmailVerification = () => {
    const [otp, setOtp] = useState('')
    const [canResend, setCanResend] = useState(false)
    const [timeLeft, setTimeLeft] = useState(60)
    const [searchParams] = useSearchParams()
    const email = searchParams.get('email')

    const maskedEmail = `${email?.slice(0, 2)}****@${email?.split('@')[1]}` // Masked email

    const [vendorOTPVerification, { isLoading }] =
        useVendorOTPVerificationMutation()
    const [resendEmailOTP] = useResendEmailOTPMutation()

    // Handle OTP input change
    const handleChange = (e) => {
        if (/^\d{0,6}$/.test(e.target.value)) setOtp(e.target.value) // Accept only 6 digits
    }

    // Handle OTP submission
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await vendorOTPVerification({
                token: otp,
                email,
            }).unwrap()
            toast.success(res?.message || 'OTP is correct.')
            // Redirect to external login page
            window.location.href = 'https://seller.vistamart.biz'
        } catch (error) {
            toast.error(error.data?.message || 'OTP not valid!')
        }
    }

    // Resend OTP handler with timer reset
    const handleResend = async () => {
        setTimeLeft(60)
        setCanResend(false)

        try {
            await resendEmailOTP({ email }).unwrap()
            toast.success('OTP resent to your email.')
        } catch (error) {
            toast.error(error.data?.message || 'OTP was not sent!')
        }
    }

    // Timer effect for resend button
    useEffect(() => {
        if (timeLeft > 0) {
            const interval = setInterval(
                () => setTimeLeft((prev) => prev - 1),
                1000
            )
            return () => clearInterval(interval)
        } else {
            setCanResend(true)
        }
    }, [timeLeft])

    return (
        <div className="flex items-center justify-center">
            <OTPForm
                handleSubmit={handleSubmit}
                handleChange={handleChange}
                otp={otp}
                isLoading={isLoading}
                maskedEmail={maskedEmail}
                handleResend={handleResend}
                canResend={canResend}
                timeLeft={timeLeft}
            />
        </div>
    )
}

export default VendorEmailVerification
