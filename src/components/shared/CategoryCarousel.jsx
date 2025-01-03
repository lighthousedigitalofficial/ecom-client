/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import { useGetProductsQuery } from '../../redux/slices/productsApiSlice'
import Loader from '../Loader'
import ProductCarousel from './ProductCarousel'
import { FaAngleRight } from 'react-icons/fa'
import { capitalizeFirstLetter } from './../../utils/index'

const CategoryCarousel = ({ category, component }) => {
    const { data: products, isLoading: isProductsLoading } =
        useGetProductsQuery(
            {
                category: category._id,
                limit: 10,
            },
            { skip: !category._id }
        )

    return isProductsLoading ? (
        <Loader />
    ) : products && products?.doc && products?.results > 0 ? (
        <div className="products-container">
            <div className="flex justify-between items-center mx-2">
                <div className="flex justify-between items-center w-fit gap-2 mb-4">
                    <h3 className="text-xl font-bold">
                        {capitalizeFirstLetter(category.name)}
                    </h3>
                </div>
                <Link
                    to={`/products?category=${category._id}`}
                    className="view-box"
                >
                    View All
                    <span>
                        <FaAngleRight className="text-lg" />
                    </span>
                </Link>
            </div>
            <ProductCarousel
                data={products?.doc}
                component={component}
                largeDesktopLimit={5}
                desktopLimit={4}
            />
        </div>
    ) : null
}

export default CategoryCarousel
