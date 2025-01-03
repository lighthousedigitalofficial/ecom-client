import { useState } from 'react'

const OtpVerification = () => {
    const [otp, setOtp] = useState('')

    const handleOtpChange = (e) => {
        setOtp(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // Handle OTP verification logic here (call backend API)
        // console.log("OTP entered:", otp);
    }

    return (
        <div className="flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
                <div className="text-center">
                    <h2 className="text-2xl font-semibold mb-4">
                        OTP Verification
                    </h2>
                    <p className="text-gray-500 mb-6">
                        Use your device to sign in to your account.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="text-center">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6Gb8wJd-LSOo523qtTG4RgbmT0Whnl5ZOBjV1hQexppgqhrikp1JEeaZKdcTnID2mNKY&usqp=CAU"
                            alt="Phone"
                            className="mx-auto mb-4"
                        />
                        <p className="text-gray-600 mb-2">
                            Enter a verification code
                        </p>
                        <p className="text-gray-400 text-sm">
                            A text message with a verification code was sent to
                            (***) ***-0000
                        </p>
                    </div>

                    <div>
                        <input
                            type="text"
                            value={otp}
                            onChange={handleOtpChange}
                            className="w-full p-3 border border-gray-300 rounded-lg"
                            placeholder="Enter the 6 digit code"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-3 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600"
                    >
                        Done
                    </button>
                </form>
            </div>
        </div>
    )
}

export default OtpVerification
