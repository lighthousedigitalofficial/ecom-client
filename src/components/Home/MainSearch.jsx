import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

import { FaTimes } from 'react-icons/fa'
import { HiSearch } from 'react-icons/hi'
import useFetchProducts from './../../hooks/useFetchProducts'

const MainSearch = () => {
    const [query, setQuery] = useState('')
    const [showSuggestions, setShowSuggestions] = useState(false)
    const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(-1)
    const navigate = useNavigate()
    const searchBarRef = useRef(null)

    // Fetch suggestions
    const { data: suggestions, isLoading: isFetching } = useFetchProducts(query)

    // Debounced input change handler
    const handleInputChange = (e) => {
        const inputValue = e.target.value
        setQuery(inputValue)
        setShowSuggestions(inputValue.trim().length > 0)
    }

    const handleClearInput = () => {
        setQuery('')
        setShowSuggestions(false)
    }

    const handleSearch = (e) => {
        e.preventDefault()

        if (query) {
            navigate(`/search?query=${query}&page=1`)
            setShowSuggestions(false)
        }
    }

    const handleSuggestionClick = (suggestion) => {
        const type = suggestion.type
        const typeId =
            type === 'product' ? suggestion.slug : suggestion._id || '' // Ensure typeId exists in suggestion

        if (query) {
            navigate(
                `/search?query=${encodeURIComponent(query)}&${type}=${typeId}`
            )
            setShowSuggestions(false) // Hide suggestions after navigation
        } else {
            console.error('Invalid suggestion format', suggestion)
        }
    }

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (
                searchBarRef.current &&
                !searchBarRef.current.contains(e.target)
            ) {
                setShowSuggestions(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault()
            if (activeSuggestionIndex >= 0) {
                // Navigate to the product page of the active suggestion
                handleSuggestionClick(
                    suggestions?.results[activeSuggestionIndex]
                )
            } else if (query) {
                // Submit the query if no suggestion is selected
                handleSearch(e)
            }
        } else if (
            e.key === 'ArrowDown' &&
            activeSuggestionIndex < suggestions?.totalResults - 1
        ) {
            setActiveSuggestionIndex(activeSuggestionIndex + 1)
        } else if (e.key === 'ArrowUp' && activeSuggestionIndex > 0) {
            setActiveSuggestionIndex(activeSuggestionIndex - 1)
        }
    }

    useEffect(() => {
        setActiveSuggestionIndex(-1) // Reset active suggestion index when the query changes
    }, [query])

    return (
        <div ref={searchBarRef} className="relative mx-1">
            <form onSubmit={handleSearch} className="flex items-center">
                <input
                    // className="flex items-center bg-white bg-opacity-90 rounded-full shadow-lg p-3"
                    className="w-full p-3 flex items-center bg-white bg-opacity-90 rounded-full shadow-lg rounded-r-none rounded border outline-none focus:border-primary-400 text-gray-900 transition-all ease-in"
                    type="search"
                    autoComplete="off"
                    placeholder="Search for items..."
                    value={query}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                    onFocus={() => setShowSuggestions(true)}
                />
                <button
                    type="submit"
                    className="bg-primary-500 text-lg text-white  p-3 outline-none rounded-full shadow-lg rounded-l-none hidden md:block"
                >
                    Search
                    {/* <HiSearch size={25} /> */}
                </button>
                {query && (
                    <button
                        type="button"
                        onClick={handleClearInput}
                        className="absolute right-2 top-2 md:hidden"
                    >
                        <FaTimes />
                    </button>
                )}
            </form>

            {showSuggestions && query && (
                <div className="absolute top-full mt-1 w-full bg-white border rounded shadow-lg z-10">
                    {isFetching ? (
                        <p className="p-2 text-gray-500">
                            <div className="flex items-center justify-center p-5 bg-transparent min-w-screen">
                                <div className="flex space-x-2 animate-pulse">
                                    <div className="w-2 h-2 bg-primary-400 rounded-full"></div>
                                    <div className="w-2 h-2 bg-primary-400 rounded-full"></div>
                                    <div className="w-2 h-2 bg-primary-400  rounded-full"></div>
                                </div>
                            </div>
                        </p>
                    ) : suggestions?.totalResults > 0 ? (
                        <ul className="list-none p-0 m-0">
                            {suggestions?.results?.map((product, index) => (
                                <li
                                    key={product._id}
                                    className={`flex items-center p-2 gap-2 border-l-4 cursor-pointer transition-all ease-in ${
                                        activeSuggestionIndex === index
                                            ? 'bg-gray-100 border-primary-500'
                                            : 'hover:bg-gray-50 border-transparent'
                                    }`}
                                    onClick={() =>
                                        handleSuggestionClick(product)
                                    }
                                >
                                    {/* Product Details */}
                                    <div className="flex-1">
                                        <span className="block font-medium text-base text-gray-900">
                                            {product.name}
                                        </span>
                                    </div>
                                    {/* Icon */}
                                    <HiSearch className="text-gray-400" />
                                </li>
                            ))}
                        </ul>
                    ) : null}
                </div>
            )}
        </div>
    )
}

export default MainSearch
