import { Link } from 'react-router-dom'
import ServerErrorImage from '../../assets/server-error.png'
import { FaArrowLeft } from 'react-icons/fa'

const ServerErrorPage = () => {
    return (
        <div className="flex flex-col justify-center items-center w-full h-screen bg-white p-8 text-center">
            {/* Error Image */}
            <img
                src={ServerErrorImage}
                alt="Server Error"
                loading="lazy"
                className="w-full max-w-md h-auto mb-6 object-contain"
            />

            {/* Error Message */}
            <h1 className="text-4xl font-extrabold text-red-600 mb-4">
                500 - Server Error
            </h1>
            <p className="text-lg text-gray-700 mb-6">
                We’re sorry, but something went wrong on our end. Our team has
                been notified.
            </p>

            {/* Navigation Options */}
            <div className="flex flex-col space-y-4">
                <Link
                    to="/"
                    className="flex justify-center items-center gap-2 px-6 py-3 bg-primary-500 text-white rounded shadow-md hover:bg-primary-600 transition duration-300"
                >
                    <FaArrowLeft />
                    <span>Go To Home</span>
                </Link>
            </div>

            {/* Optional Footer */}
            <footer className="mt-12 text-sm text-gray-500">
                <p>
                    &copy; {new Date().getFullYear()} Vista Mart. All Rights
                    Reserved.
                </p>
            </footer>
        </div>
    )
}

export default ServerErrorPage
