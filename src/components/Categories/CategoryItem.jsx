import { Link } from 'react-router-dom';
import keys from './../../config/keys';
import { LazyLoadImage } from 'react-lazy-load-image-component';

/* eslint-disable react/prop-types */
const CategoryItem = ({ category }) => {
    const categoryLogo = category?.logo
        ? category.logo.startsWith('category')
            ? `${keys.BUCKET_URL}${category.logo}`
            : category.logo
        : keys.DEFAULT_IMG;

    return (
        <Link
            to={`/products/category/${category.slug}`}
            className="flex-center flex-col gap-2 p-2 group cursor-pointer mt-6"
        >
            <div className="relative w-30 h-28 overflow-hidden rounded-full border border-gray-300 transition-all duration-300 
            ease-out group-hover:border-primary-500 group-hover:shadow-lg">
                <LazyLoadImage
                    src={categoryLogo}
                    effect="blur"
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-110"
                />
            </div>
            <p className="text-sm w-28 truncate transition-colors duration-300 ease-out text-gray-800 group-hover:text-primary-500">
                {category.name}
            </p>
        </Link>
    );
};

export default CategoryItem;
