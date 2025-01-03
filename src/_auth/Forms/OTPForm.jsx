/* eslint-disable react/prop-types */
const OTPForm = ({
    handleSubmit,
    handleChange,
    otp,
    isLoading,
    maskedEmail,
    handleResend,
    canResend,
    timeLeft,
}) => {
    return (
        <form
            onSubmit={handleSubmit}
            className="p-6 rounded-lg shadow-lg bg-white w-full max-w-md"
            aria-label="OTP Verification Form"
        >
            <h2 className="text-2xl font-semibold text-center mb-2">
                Email Verification
            </h2>
            <p className="text-gray-600 text-center mb-6">
                Your OTP sent to your <strong>{maskedEmail}</strong>
            </p>

            <label
                className="block text-gray-700 font-medium mb-2 text-center"
                htmlFor="otpInput"
            >
                Enter 6-digit OTP
            </label>
            <input
                id="otpInput"
                type="text"
                maxLength="6"
                value={otp}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-3 text-center text-lg tracking-widest mb-4 focus:outline-none focus:ring-2 focus:ring-primary-500"
                placeholder="******"
                aria-label="Enter OTP code"
                disabled={isLoading}
            />

            <button
                type="submit"
                className={`w-full py-3 rounded-lg text-white font-semibold transition-colors ${
                    isLoading
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-primary-500 hover:bg-primary-600 focus:bg-primary-600'
                }`}
                disabled={isLoading}
                aria-busy={isLoading}
            >
                {isLoading ? 'Verifying...' : 'Verify OTP'}
            </button>

            <div className="mt-4 text-center">
                {canResend ? (
                    <button
                        type="button"
                        onClick={handleResend}
                        className="text-primary-500 hover:text-primary-600 underline transition-colors"
                        aria-label="Resend OTP"
                    >
                        Resend OTP
                    </button>
                ) : (
                    <span
                        className="text-gray-500"
                        aria-label={`Resend available in ${timeLeft} seconds`}
                    >
                        Resend available in {timeLeft}s
                    </span>
                )}
            </div>
        </form>
    )
}

export default OTPForm
