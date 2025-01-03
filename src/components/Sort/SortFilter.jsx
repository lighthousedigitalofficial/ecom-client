/* eslint-disable react/prop-types */
import { TbSortAscending2 } from 'react-icons/tb'
import { useSearchParams } from 'react-router-dom'

const SortFilter = ({ filters }) => {
    const [searchParams, setSearchParams] = useSearchParams()
    // Determine the title based on query parameters

    //   const [showFilter, setShowFilter] = useState(false)

    //   const toggleFilter = () => {
    //       setShowFilter(!showFilter)
    //   }

    const handleFilterChange = (e) => {
        const { name, value } = e.target
        searchParams.set(name, value)
        filters = {
            name: value,
        }
        setSearchParams(searchParams)
    }

    return (
        <div>
            <div className="lg:block hidden">
                <div className="flex items-center space-x-2 border-2 border-gray-200  px-2 rounded-lg hover:shadow-lg">
                    <TbSortAscending2 className="text-gray-600" />

                    <label className="text-gray-700">Sort by:</label>
                    <select
                        className=" pl-4 pr-10 py-2 px-2 focus:outline-none"
                        value={searchParams.get('sort') || ''}
                        onChange={handleFilterChange}
                        name="sort"
                    >
                        <option value={'latest'}>latest</option>
                        <option value={'price'}>Price: Low to High</option>
                        <option value={'-price'}>Price: High to Low</option>
                        <option value={'name'}>A to Z Order</option>
                        <option value={'-name'}>Z to A Order</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default SortFilter
