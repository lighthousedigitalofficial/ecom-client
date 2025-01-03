import CategoryCard from '../../../components/Categories/CategoryCard'
import Loader from '../../../components/Loader'
import { useGetCategoriesQuery } from '../../../redux/slices/categoriesApiSlice'
import { useState } from 'react'
import { BiSearchAlt2 } from 'react-icons/bi' // Import the search icon

const CategoriesPage = () => {
    const { data: categories, isLoading } = useGetCategoriesQuery({})
    const [searchTerm, setSearchTerm] = useState('')

    // Filter brands based on the search term
    const filteredCategories = categories?.doc?.filter((brand) =>
        brand.name.toLowerCase().includes(searchTerm.toLowerCase())
    )

    return isLoading ? (
        <Loader />
    ) : (
        <div className="py-4">
            <div className="bg-primary-100 flex lg:flex-row flex-col gap-2 justify-between items-center p-8 rounded-lg mb-4">
                <div>
                    <h2 className="text-2xl uppercase font-bold text-primary-400">
                        ALL Category
                    </h2>
                    <p className="text-base text-primary-400">
                        Find your favourite categories and products
                    </p>
                </div>
                {/* Search Input */}
                <div className="mt-4 flex items-center gap-2">
                    <div className="relative flex-grow">
                        <input
                            type="text"
                            placeholder="Search categories..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full py-2 px-4 border border-gray-300 rounded-lg shadow-sm outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500 transition-all"
                        />
                        <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                            <BiSearchAlt2 className="text-lg text-primary-500 font-bold" />
                        </span>
                    </div>
                </div>
            </div>
            <div className="w-[100vw] py-4 mx-auto">
                {filteredCategories && filteredCategories.length > 0 ? (
                    <div className="flex flex-wrap gap-4 transition-all ease-in">
                        {filteredCategories.map((category, index) => (
                            <CategoryCard key={index} category={category} />
                        ))}
                    </div>
                ) : (
                    <p className="text-center text-gray-700 text-lg p-4">
                        No categories match your search.
                    </p>
                )}
            </div>
        </div>
    )
}

export default CategoriesPage
