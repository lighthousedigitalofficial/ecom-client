/* eslint-disable react/prop-types */
import { useSearchParams } from 'react-router-dom'
import MobileFilter from '../../Sort/MobileFilter'
// import SortFilter from '../Sort/SortFilter'
import { TbSortAscending2 } from 'react-icons/tb'

const ProductsHeader = ({ totalItems, title }) => {
    const [searchParams, setSearchParams] = useSearchParams()

    const handleFilterChange = (e) => {
        const { name, value } = e.target
        searchParams.set(name, value)

        setSearchParams(searchParams)
    }

    return (
        <div className="bg-white p-6 rounded-lg shadow-sm flex justify-between items-center w-full">
            <div>
                <h2 className="text-xl font-semibold">{title}</h2>
                {totalItems && (
                    <p className="text-gray-500">{totalItems} Items found</p>
                )}
            </div>
            {/* <SortFilter filters={filters} /> */}
            <div className="lg:block hidden">
                <div className="flex items-center space-x-2 border-2 border-gray-200  px-2 rounded-lg hover:shadow-md">
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
            <MobileFilter />
        </div>
    )
}

export default ProductsHeader
