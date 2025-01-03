/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { MdArrowForwardIos } from 'react-icons/md'
import { FaSearch } from 'react-icons/fa'
import { useGetBrandsQuery } from '../../redux/slices/brandsApiSlice'
import { useGetCategoriesQuery } from '../../redux/slices/categoriesApiSlice'
import { Link, useSearchParams } from 'react-router-dom'
import { capitalizeFirstLetter } from '../../utils'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import Loader from '../Loader'

const FilterSidebar = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const [searchItem, setSearchItem] = useState('')
    const [filterBrands, setFilterBrands] = useState([])

    // State for min and max price
    const [minPrice, setMinPrice] = useState(0)
    const [maxPrice, setMaxPrice] = useState(null)

    const { data: brands, isLoading: isBrandsLoading } = useGetBrandsQuery({})
    const { data: categories, isLoading: isCategoriesLoading } =
        useGetCategoriesQuery({})

    useEffect(() => {
        if (brands && brands?.doc) {
            setFilterBrands(brands?.doc)
        }
    }, [brands])

    useEffect(() => {
        const min = searchParams.get('price[gte]') || 0
        const max = searchParams.get('price[lte]') || null

        setMinPrice(min)
        setMaxPrice(max)
    }, [searchParams])

    const priceRangeHandler = (e) => {
        e.preventDefault()

        if (Number(minPrice) > Number(maxPrice)) {
            return toast.error('The min price is greater than max price.')
        }

        searchParams.set('price[gte]', minPrice)
        searchParams.set('price[lte]', maxPrice)

        // Update URL without resetting inputs
        setSearchParams(searchParams)
    }

    const handleBrandsSearch = (e) => {
        const searchTerm = e.target.value
        setSearchItem(searchTerm)

        const filteredItems = brands?.doc?.filter((brand) =>
            brand.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
        setFilterBrands(filteredItems)
    }

    const resetFilters = () => {
        // Clear search params
        setSearchParams({})
        // Reset states
        setMinPrice(0)
        setMaxPrice(null)
        setSearchItem('')
        setFilterBrands(brands?.doc || [])
    }

    return (
        <div className="mb-2 mt-2 bg-white p-6 rounded-lg shadow-lg w-full max-w-xs hidden lg:block">
            <h2 className="text-xl font-semibold mb-4">Filter</h2>
            {/* Reset Button */}
            <div className="mt-4">
                <button
                    onClick={resetFilters}
                    className="bg-gray-200 text-gray-800 rounded-lg px-4 py-2 w-full"
                >
                    Reset
                </button>
            </div>
            <div className="border-b-2 py-4">
                <h3 className="text-lg font-medium">Price</h3>
                <form onSubmit={priceRangeHandler}>
                    <div className="flex items-center justify-between gap-2 mt-2">
                        <input
                            type="number"
                            min="0"
                            value={minPrice}
                            onChange={(e) => setMinPrice(e.target.value)}
                            placeholder="0"
                            className="w-1/2 input px-3 py-2"
                        />
                        <span className="mx-2">To</span>
                        <input
                            type="number"
                            min="0"
                            value={maxPrice}
                            onChange={(e) => setMaxPrice(e.target.value)}
                            placeholder="100"
                            className="w-1/2 input px-3 py-2"
                        />
                        <button
                            type="submit"
                            className="bg-primary-500 text-white rounded-lg px-3 py-3"
                        >
                            <MdArrowForwardIos />
                        </button>
                    </div>
                </form>
            </div>

            <div>
                {/* Brands Section */}
                <div className="mb-4 overflow-hidden border-b-2 py-4">
                    <h3 className="text-lg font-semibold">Brands</h3>
                    <div className="relative mt-2 px-2">
                        <div className="flex items-center bg-gray-50 border border-gray-300 rounded-lg px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-primary-500">
                            <FaSearch className="text-gray-500 mr-2" />
                            <input
                                type="text"
                                value={searchItem}
                                onChange={handleBrandsSearch}
                                placeholder="Search by brands..."
                                className="w-full bg-transparent outline-none text-gray-800"
                            />
                        </div>
                    </div>

                    <ul className="mt-4 space-y-2 max-h-[240px] overflow-y-auto scrollbar-thin">
                        {isBrandsLoading ? (
                            <Loader />
                        ) : filterBrands ? (
                            filterBrands.map((brand) => {
                                if (brand.totalProducts > 0)
                                    return (
                                        <li key={brand._id}>
                                            <Link
                                                to={`/products/brand/${brand.slug}`}
                                                className="flex justify-between items-center px-2 hover:text-primary-600"
                                            >
                                                <span className=" font-thin text-sm">
                                                    {capitalizeFirstLetter(
                                                        brand.name
                                                    )}
                                                </span>
                                                <span className="bg-gray-200 text-gray-700 rounded-full text-center py-1 px-3 text-sm">
                                                    {brand.totalProducts}
                                                </span>
                                            </Link>
                                        </li>
                                    )
                            })
                        ) : (
                            <li>No Brands found!</li>
                        )}
                    </ul>
                </div>

                {/* Categories Section */}
                {isCategoriesLoading ? (
                    <Loader />
                ) : categories?.doc?.length ? (
                    <>
                        <h3 className="text-lg font-semibold my-2">
                            Categories
                        </h3>
                        <ul className="mt-4 space-y-2 max-h-[250px] overflow-y-auto scrollbar-thin">
                            {categories?.doc?.map((category) => {
                                if (category?.totalProducts > 0)
                                    return (
                                        <li
                                            key={category._id}
                                            className="border-b border-gray-200 last:border-none p-2"
                                        >
                                            <Link
                                                to={`/products/category/${category.slug}`}
                                                className="flex justify-between items-center px-2 hover:text-primary-600 "
                                            >
                                                <span className=" font-thin text-sm">
                                                    {capitalizeFirstLetter(
                                                        category.name
                                                    )}
                                                </span>
                                            </Link>
                                        </li>
                                    )
                            })}
                        </ul>
                    </>
                ) : null}
            </div>
        </div>
    )
}

export default React.memo(FilterSidebar)
