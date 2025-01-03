const FooterBottom = () => {
    return (
        <div className="flex flex-col lg:flex-row justify-between items-center text-center lg:text-left text-xs">
            <div className="flex space-x-4 mb-2 lg:mb-0">
                <a href="#" className="hover:text-gray-900">
                    About Us
                </a>
                <a href="#" className="hover:text-gray-900">
                    FAQ
                </a>
                <a href="#" className="hover:text-gray-900">
                    Help
                </a>
                <a href="#" className="hover:text-gray-900">
                    Site Map
                </a>
                <a href="#" className="hover:text-gray-900">
                    Mobile Site
                </a>
            </div>
            <div className="flex space-x-4 mb-2 lg:mb-0">
                <a href="#" className="hover:text-gray-900">
                    User Agreement
                </a>
                <a href="#" className="hover:text-gray-900">
                    Declaration
                </a>
                <a href="#" className="hover:text-gray-900">
                    Privacy Policy
                </a>
            </div>
            <div className="text-gray-500">
                © 2025 Light House Digital Co., Ltd. All Rights Reserved.
            </div>
        </div>
    )
}

export default FooterBottom
