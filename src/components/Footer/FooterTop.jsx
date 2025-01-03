import {
    FaFacebook,
    FaTwitter,
    FaInstagram,
    FaYoutube,
    FaPinterest,
    FaLinkedin,
    FaGooglePlay,
    FaApple,
} from 'react-icons/fa'

const FooterTop = () => {
    return (
        <div className="flex flex-col lg:flex-row lg:justify-between items-center mb-6">
            <div className="flex items-center space-x-4 mb-4 lg:mb-0">
                <span className="text-gray-700 font-medium">Free App:</span>
                <a
                    href="#"
                    className="flex items-center space-x-2 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition duration-200"
                >
                    <FaApple size={20} className="text-white" />
                    <span className="text-sm">App Store</span>
                </a>
                <a
                    href="#"
                    className="flex items-center space-x-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-200"
                >
                    <FaGooglePlay size={20} className="text-white" />
                    <span className="text-sm">Google Play</span>
                </a>
            </div>

            {/* Contact and Social Icons */}
            <div className="flex items-center space-x-6">
                <a
                    href="#"
                    className="flex items-center space-x-2 hover:text-gray-900"
                >
                    <span>TradeMessenger:</span>
                    <span className="text-xl">🔍</span>
                </a>
                <a href="#" className="hover:text-gray-900">
                    Contact Us
                </a>
                <div className="flex space-x-4">
                    <a href="#" className="hover:text-gray-900">
                        <FaFacebook />
                    </a>
                    <a href="#" className="hover:text-gray-900">
                        <FaTwitter />
                    </a>
                    <a href="#" className="hover:text-gray-900">
                        <FaInstagram />
                    </a>
                    <a href="#" className="hover:text-gray-900">
                        <FaYoutube />
                    </a>
                    <a href="#" className="hover:text-gray-900">
                        <FaPinterest />
                    </a>
                    <a href="#" className="hover:text-gray-900">
                        <FaLinkedin />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default FooterTop
