import { FaAngleRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import CategoryList from './CategoryList'

import { useGetCategoriesQuery } from '../../redux/slices/categoriesApiSlice'
import Loader from '../Loader'

const Categories = () => {
    const { data: categories, isLoading } = useGetCategoriesQuery({ limit: 20 })

    return isLoading ? (
        <Loader />
    ) : categories && categories?.doc?.length ? (
        <div className="bg-transparent mt-2 shadow-md shadow-gray-100 p-4"
        style={{boxShadow: '0 0 10px 0 rgba(0,0,0,0.09)'}}
        >
            {/* <div className="flex justify-between items-center p-4">
                <h2 className="text-xl font-bold mb-4 text-gray-900">
                    All Categories
                </h2>
                <Link to="/categories" className="view-box">
                    View All
                    <span>
                        <FaAngleRight className="text-lg " />
                    </span>
                </Link>
            </div> */}
            <CategoryList categories={categories?.doc} />
        </div>
    ) : null
}

export default Categories
