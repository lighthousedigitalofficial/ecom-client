import { Link } from 'react-router-dom'
import keys from './../../config/keys'

/* eslint-disable react/prop-types */
const CategoryItem = ({ category }) => {
    const categoryLogo = category?.logo
        ? category.logo.startsWith('subcategory')
            ? `${keys.BUCKET_URL}${category.logo}`
            : category.logo
        : keys.DEFAULT_IMG

    return (
        <Link
            to={`/products/category/${category.slug}`}
            className="flex-center flex-col gap-2 p-2 group cursor-pointer mt-6"
        >
            <div
                className="relative w-28 h-28 flex items-center justify-center overflow-hidden 
            rounded-full border border-gray-100 transition-all duration-300 
            ease-out group-hover:shadow-lg"
            >
                <img
                    src={categoryLogo}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-110"
                />
            </div>
            <p className="text-sm w-28 truncate transition-colors duration-300 ease-out text-gray-800 group-hover:text-primary-500">
                {category.name}
            </p>
        </Link>
    )
}

export default CategoryItem
