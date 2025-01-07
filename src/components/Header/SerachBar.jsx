import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

import { FaSearch, FaTimes } from 'react-icons/fa'
import useFetchProducts from './../../hooks/useFetchProducts'

const SearchBar = () => {
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
        if (query) {
            navigate(`/search?query=${encodeURIComponent(query)}`)
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
        <div className="relative mx-1 w-full">
            <form
                onSubmit={handleSearch}
                className="relative flex items-center w-full"
            >
                <input
                    type="search"
                    placeholder="Search for items..."
                    value={query}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                    onFocus={() => setShowSuggestions(true)}
                    className="w-full py-2 pl-4 pr-12 rounded-lg border border-primary-400 focus:outline-none focus:border-primary-500 transition-all ease-in"
                />
                <button
                    type="submit"
                    className="absolute right-2 top-1 text-white p-2 bg-primary-400 hover:bg-primary-500 rounded-full"
                >
                    <FaSearch />
                </button>
            </form>

            {showSuggestions && query && (
                <div className="absolute top-full mt-1 w-full bg-white border rounded shadow-lg z-10">
                    {isFetching ? (
                        <div className="flex items-center justify-center p-5 bg-transparent min-w-screen">
                            <div className="flex space-x-2 animate-pulse">
                                <div className="w-2 h-2 bg-primary-400 rounded-full"></div>
                                <div className="w-2 h-2 bg-primary-400 rounded-full"></div>
                                <div className="w-2 h-2 bg-primary-400 rounded-full"></div>
                            </div>
                        </div>
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
                                    <div className="flex-1">
                                        <span className="block font-medium text-base text-gray-900">
                                            {product.name}
                                        </span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <span className="block p-2 font-medium text-base text-gray-900">
                            Product not found
                        </span>
                    )}
                </div>
            )}
        </div>
    )
}

export default SearchBar
