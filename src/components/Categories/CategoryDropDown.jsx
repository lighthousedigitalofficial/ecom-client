import { useGetCategoriesQuery } from '../../redux/slices/categoriesApiSlice'
import Loader from '../Loader'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { capitalizeFirstLetter } from '../../utils'
import { SlArrowRight } from 'react-icons/sl'
import keys from './../../config/keys'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const CategoryDropDown = () => {
    const { data: categories, isLoading } = useGetCategoriesQuery({})
    const [hoveredCategory, setHoveredCategory] = useState(null)
    const [hoveredSubCategory, setHoveredSubCategory] = useState(null)

    const handleMouseEnterCategory = (categoryId) => {
        setHoveredCategory(categoryId)
    }

    const handleMouseEnterSubCategory = (subCategoryId) => {
        setHoveredSubCategory(subCategoryId)
    }

    const handleMouseLeave = () => {
        setHoveredCategory(null)
        setHoveredSubCategory(null)
    }

    // console.log(categories);

    return isLoading ? (
        <Loader />
    ) : (
        <div className="relative z-20">
            {categories && categories.doc ? (
                <div className="w-[250px] p-3 mx-auto shadow-md bg-white">
                    {categories.doc.slice(0, 7).map((category, index) => {
                        const hasSubCategories =
                            category.subCategories?.length > 0

                        const categoryLogo = category?.logo
                            ? category.logo.startsWith('category')
                                ? `${keys.BUCKET_URL}${category.logo}`
                                : category.logo
                            : keys.DEFAULT_IMG

                        return (
                            <div
                                key={index}
                                className="relative group border-b-2 border-gray-100"
                                onMouseEnter={() =>
                                    handleMouseEnterCategory(category._id)
                                }
                            >
                                <Link
                                    to={`/products/category/${category.slug}`}
                                    className={`flex items-center group gap-4 px-2 py-[1.4vh]
                                    cursor-pointer w-full hover:bg-gray-100`}
                                >
                                    <div className="image">
                                        <img
                                            src={categoryLogo}
                                            effect="blur" // You can use "blur" or "opacity" as lazy load effect
                                            alt={category.name}
                                            className="h-4 w-4 object-cover rounded-sm"
                                        />
                                    </div>
                                    <span className="text-gray-700 group-hover:text-primary-600 flex justify-between w-full text-sm  items-center">
                                        {capitalizeFirstLetter(category.name)}
                                        {hasSubCategories && (
                                            <span className="ml-auto text-sm">
                                                {' '}
                                                <SlArrowRight size={9} />
                                            </span>
                                        )}
                                    </span>
                                </Link>

                                {hoveredCategory === category._id &&
                                    hasSubCategories && (
                                        <div
                                            className="absolute top-0 left-full w-56 bg-white shadow-md z-20 ml-1 p-1"
                                            onMouseEnter={() =>
                                                handleMouseEnterCategory(
                                                    category._id
                                                )
                                            }
                                            onMouseLeave={handleMouseLeave}
                                        >
                                            {category.subCategories.map(
                                                (subCategory, subIndex) => {
                                                    const hasSubSubCategories =
                                                        subCategory
                                                            .subSubCategories
                                                            ?.length > 0

                                                    return (
                                                        <div
                                                            key={subIndex}
                                                            className="group relative"
                                                            onMouseEnter={() =>
                                                                handleMouseEnterSubCategory(
                                                                    subCategory._id
                                                                )
                                                            }
                                                            onMouseLeave={() =>
                                                                setHoveredSubCategory(
                                                                    null
                                                                )
                                                            }
                                                        >
                                                            <Link
                                                                to={`/products?subcategory=${subCategory._id}`}
                                                                className="flex justify-between p-2 hover:bg-gray-100"
                                                            >
                                                                <span className="px-5 text-sm">
                                                                    {capitalizeFirstLetter(
                                                                        subCategory.name
                                                                    )}
                                                                </span>
                                                                {hasSubSubCategories && (
                                                                    <span className="ml-auto">
                                                                        ▶
                                                                    </span>
                                                                )}
                                                            </Link>

                                                            {hoveredSubCategory ===
                                                                subCategory._id &&
                                                                hasSubSubCategories && (
                                                                    <div className="absolute top-0 left-full w-56 bg-white shadow-md ml-1 z-20 p-2 text-sm">
                                                                        {subCategory.subSubCategories.map(
                                                                            (
                                                                                subSubCategory,
                                                                                subSubIndex
                                                                            ) => (
                                                                                <Link
                                                                                    key={
                                                                                        subSubIndex
                                                                                    }
                                                                                    to={`/products?subsubcategory=${subSubCategory._id}`}
                                                                                    className="block p-2 hover:bg-gray-100"
                                                                                >
                                                                                    {capitalizeFirstLetter(
                                                                                        subSubCategory.name
                                                                                    )}
                                                                                </Link>
                                                                            )
                                                                        )}
                                                                    </div>
                                                                )}
                                                        </div>
                                                    )
                                                }
                                            )}
                                        </div>
                                    )}
                            </div>
                        )
                    })}

                    <Link
                        to={`/categories`}
                        className="group text-center cursor-pointer w-full flex justify-center mt-2"
                    >
                        <span className="text-primary-500  hover:text-primary-600 ">
                            View More
                        </span>
                    </Link>
                </div>
            ) : (
                <p>No categories found!</p>
            )}
        </div>
    )
}

export default CategoryDropDown
