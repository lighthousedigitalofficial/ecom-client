import { Link } from 'react-router-dom'
import keys from './../../config/keys'
import { LazyLoadImage } from 'react-lazy-load-image-component'

/* eslint-disable react/prop-types */
const CategoryItem = ({ category }) => {
    const categoryLogo = category?.logo
        ? category.logo.startsWith('category')
            ? `${keys.BUCKET_URL}${category.logo}`
            : category.logo
        : keys.DEFAULT_IMG

    return (
        <Link
            to={`/products/category/${category.slug}`}
            className="flex-center flex-col gap-2 p-2 group cursor-pointer"
        >
            <LazyLoadImage
                src={categoryLogo}
                effect="blur" // You can use "blur" or "opacity" as lazy load effect
                alt={category.name}
                className="w-24 h-24 object-cover rounded-full"
            />
            <p className=" text-sm w-28 truncate transition-colors duration-300 ease-out text-gray-800 group-hover:text-orange-500">
                {category.name}
            </p>
        </Link>
    )
}

export default CategoryItem
