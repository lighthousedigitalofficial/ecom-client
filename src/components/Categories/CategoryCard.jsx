/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import keys from '../../config/keys'

const CategoryCard = ({ category }) => {
    const categoryLogo = category?.logo?.startsWith('category')
        ? `${keys.BUCKET_URL}${category.logo}`
        : category?.logo
        ? category?.logo
        : keys.DEFAULT_IMG

    return (
        <div className="bg-white flex flex-col items-center gap-2 p-2 w-40 shadow-sm rounded-md">
            <div className="border border-gray-100 h-20 w-20 rounded-full group cursor-pointer">
                <Link to={`/products/category/${category.slug}`} className="">
                    <img
                        src={categoryLogo}
                        alt={category.name}
                        loading="lazy"
                        className="w-full h-full rounded-full overflow-hidden object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                </Link>
            </div>
            <Link
                to={`/products/category/${category.slug}`}
                className="text-sm text-center"
            >
                {category.name}
            </Link>
        </div>
    )
}

export default CategoryCard
