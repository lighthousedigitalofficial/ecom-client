import React from 'react'
import { Link } from 'react-router-dom'
import img1 from '../../assets/slideshow-img/Uraan Pakistan Web Banner Design 03.jpg'
import img2 from '../../assets/socials-icons/apple_app.png'
import img3 from '../../assets/socials-icons/google_app.png'
import img4 from '../../assets/socials-icons/app-logo.png'
const AppPromotion = () => {
    return (
        <div
            className="content-wrap max-w-full mx-auto flex flex-col w-full items-center justify-center py-12 px-6 relative"
            style={{
                backgroundImage: `url(${img1})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            {/* Black overlay */}
            <div className="absolute inset-0 bg-black opacity-60"></div>

            {/* Title */}
            <div className="relative text-center text-white z-10">
                <h2 className="text-2xl md:text-4xl font-bold mb-4">
                    Go smart sourcing anytime, anywhere
                </h2>
                <p className="text-lg md:text-2xl font-light mb-8">
                    Get the app, get ahead
                </p>
            </div>

            {/* Download Section */}
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-8">
                {/* QR Code */}
                <div
                    className="w-32 h-32 md:w-36 md:h-36 rounded-lg bg-contain bg-no-repeat"
                    style={{
                        backgroundImage: `url(${img4})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                    }}
                ></div>

                {/* Download Buttons */}
                <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
                    {/* iOS Button */}
                    <Link
                        // to="/"
                        // target="_blank"
                        // rel="noopener noreferrer"
                        className="w-48 h-16 md:w-64 md:h-20 rounded-lg bg-cover bg-center flex items-center justify-center shadow-md"
                        style={{
                            backgroundImage: `url(${img2})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                        }}
                    ></Link>

                    {/* Google Play Button */}
                    <Link
                        // to="/"
                        // target="_blank"
                        // rel="noopener noreferrer"
                        className="w-48 h-16 md:w-64 md:h-20 rounded-lg bg-cover bg-center flex items-center justify-center shadow-md"
                        style={{
                            backgroundImage: `url(${img3})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                        }}
                    ></Link>
                </div>
            </div>
        </div>
    )
}

export default AppPromotion
