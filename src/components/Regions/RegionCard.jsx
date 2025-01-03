// import { Link } from 'react-router-dom'

/* eslint-disable react/prop-types */
const RegionCard = ({ name, bgColor, slug }) => {
    return (
        <div
            // to={`/region/${slug}`}
            className={`w-full max-w-sm ${bgColor} rounded-lg shadow-md hover:shadow-lg transition-shadow p-6`}
        >
            <h2 className="text-lg font-bold text-white text-center">{name}</h2>
        </div>
    )
}

export default RegionCard
