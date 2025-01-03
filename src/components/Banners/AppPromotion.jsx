import { FaApple, FaGooglePlay } from 'react-icons/fa'
import QRCode from '../../assets/qr.png'
import { Link } from 'react-router-dom'

const AppPromotion = () => {
    return (
        <div className="bg-gray-900 text-white py-10 px-6 lg:px-20 flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0">
            {/* Text Content */}
            <div className="text-center lg:text-left space-y-4">
                <h1 className="text-3xl lg:text-4xl font-bold">
                    Go smart sourcing anytime anywhere
                </h1>
                <p className="text-lg text-gray-300">Get the app, get ahead</p>

                {/* QR Code */}
                <div className="mt-4 bg-white p-2 w-fit">
                    <img
                        src={QRCode}
                        alt="QR Code"
                        className="inline-block w-32 h-32"
                    />
                </div>
            </div>

            {/* Download Buttons */}
            <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-4 lg:space-y-0 lg:space-x-4">
                <Link
                    to="/"
                    className="flex items-center space-x-2 bg-black px-8 py-4 rounded-lg shadow-md hover:bg-gray-800 transition duration-300"
                >
                    <FaApple className="text-2xl" />
                    <span className="text-sm font-medium">
                        Download on the App Store
                    </span>
                </Link>
                <Link
                    to="/"
                    className="flex items-center space-x-2 bg-green-500 px-8 py-4 rounded-lg shadow-md hover:bg-green-600 transition duration-300"
                >
                    <FaGooglePlay className="text-2xl" />
                    <span className="text-sm font-medium">
                        Get it on Google Play
                    </span>
                </Link>
            </div>
        </div>
    )
}

export default AppPromotion
