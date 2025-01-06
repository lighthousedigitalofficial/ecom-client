import {
    FaSeedling,
    FaIndustry,
    FaAppleAlt,
    FaTractor,
    FaMapMarkerAlt,
} from 'react-icons/fa'
import MainCategoryCard from './MainCategoryCard'
import { useGetCategoriesQuery } from '../../redux/slices/categoriesApiSlice'
import Loader from '../Loader'

const RegionCategory = () => {
    const { data, isLoading } = useGetCategoriesQuery()

    // Define a static mapping for colors and icons
    const staticCategoryData = {
        'Agro-Products': { color: '#4CAF50', icon: FaSeedling },
        'Non-Agro Products': { color: '#FF5722', icon: FaIndustry },
        'Value-Added': { color: '#FFC107', icon: FaAppleAlt },
        'Specialized Agricultural': { color: '#673AB7', icon: FaTractor },
        'Regional Specialties': { color: '#03A9F4', icon: FaMapMarkerAlt },
    }

    // Filter and map the categories to only include those in staticCategoryData
    const categories =
        data?.doc
            ?.filter((category) => staticCategoryData[category.name]) // Include only allowed categories
            .map((category) => ({
                slug: category.slug,
                name: category.name,
                color: staticCategoryData[category.name].color,
                icon: staticCategoryData[category.name].icon,
            })) || []

    console.log(categories)

    return isLoading ? (
        <Loader />
    ) : categories && categories?.length > 0 ? (
        <div className="bg-primary-50 my-2 rounded-lg shadow-sm flex flex-wrap gap-3 sm:gap-4 p-2 items-center justify-evenly sm:p-4">
            {categories.map((category) => (
                <MainCategoryCard
                    key={category.name}
                    slug={category.slug}
                    bgColor={category.color}
                    categoryName={category.name}
                    icon={category.icon}
                />
            ))}
        </div>
    ) : null
}

export default RegionCategory
