/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'

const MainCategoryCard = ({
    slug,
    bgColor,
    categoryName,
    icon: Icon,
    region,
}) => {
    return (
        <Link
            to={`/products/category/${slug}?region=${region}`}
            className={`group flex items-center justify-center rounded-full shadow-sm p-4 hover:shadow-md ease-in delay-100 transition-transform transform`}
            style={{
                backgroundColor: bgColor,
                width: '8rem',
                height: '8rem',
            }}
        >
            <div className="flex flex-col items-center">
                <Icon className="text-sm sm:text-base md:text-lg mb-1 text-white group-hover:text-gray-100 transition-colors" />
                <p className="text-white text-xs sm:text-sm md:text-base font-semibold text-center transition-colors">
                    {categoryName}
                </p>
            </div>
        </Link>
    )
}

export default MainCategoryCard
