import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import './HeroSection.css'
import MainSearch from './MainSearch'

// import mainBanner from './../../assets/slideshow-img/Uraan Pakistan Web Banner Design 03.jpg'
import mainBanner from './../../assets/slideshow-img/hero-2.jpg'

const HeroSection = () => {
    return (
        <div className="relative w-full h-[70vh] md:h-[90vh] bg-gray-800 overflow-hidden">
            {/* Background Image */}
            <img
                src={mainBanner}
                alt="Business Banner"
                className="absolute inset-0 w-full h-full object-cover"
                loading="eager"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gray-900 bg-opacity-50"></div>

            {/* Content */}
            <div className="relative z-10 h-full flex items-center px-6 md:px-12">
                <div className="max-w-1/2 text-left">
                    <div className="text-white">
                        <h1 className=" text-4xl sm:text-xl md:text-5xl lg:text-7xl font-extrabold uppercase leading-tight mb-4">
                            Uraan PAKISTAN
                        </h1>
                        {/* <p className="text-2xl sm:text-md md:text-3xl lg:text-5xl font-extrabold uppercase leading-tight mb-4"></p> */}
                        <p className="text-gray-200 text-base sm:text-xl md:text-2xl lg:text-3xl font-medium mb-6">
                            Empowering Pakistan to Compete on the Global Stage
                        </p>
                    </div>

                    {/* Search Bar */}
                    <div className="w-full max-w-4xl mb-6">
                        <MainSearch />
                    </div>

                    {/* Call-to-Action Button */}
                    <Link
                        to="/customer/auth/sign-up"
                        className="flex w-fit items-center bg-primary-500 text-white font-medium px-6 py-3 rounded-full shadow-md hover:bg-primary-600 hover:border-primary-500 transition-all duration-300 ease-in-out"
                    >
                        <span>Sign Up for Free</span>
                        <FaArrowRight className="ml-2" />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default HeroSection
