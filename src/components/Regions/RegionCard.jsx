import { Link } from 'react-router-dom'

/* eslint-disable react/prop-types */
const RegionCard = ({ name, bgColor, slug }) => {
    return (
        <Link
            to={`/region-products?region=${slug}`}
            className={`relative w-full h-28 flex items-center justify-center cursor-pointer max-w-sm ${bgColor} rounded-lg shadow-md p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-opacity-90`}
        >
            {/* Glow effect on hover */}
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-white/10 to-white/5 opacity-0 transition-opacity duration-300 hover:opacity-100"></div>

            {/* Animated text */}
            <h2 className="text-lg font-bold text-white text-center relative">
                {name}
            </h2>
        </Link>
    )
}

export default RegionCard
