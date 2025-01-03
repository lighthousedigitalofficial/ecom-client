// import NotFoundImage from '../../assets/not-found.gif'
import NotFoundImage from '../../assets/404-not-found.jpg'
import { Link } from 'react-router-dom' // Ensure you're using React Router or similar for navigation
import { FaArrowLeft } from 'react-icons/fa' // Importing the arrow icon

const NotFoundPage = () => {
    return (
        <div className="flex flex-col justify-center items-center w-full h-screen bg-white p-8 text-center">
            {/* Not Found Image */}
            <img
                src={NotFoundImage}
                alt="Not Found"
                loading="lazy"
                className="w-full max-w-md h-auto mb-6 object-contain"
            />

            {/* Error Message */}
            <h1 className="text-4xl font-extrabold text-gray-800 mb-2">
                404 - Page Not Found
            </h1>
            <p className="text-lg text-gray-600 mb-6">
                Sorry, the page you are looking for does not exist or has been
                moved.
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

export default NotFoundPage
