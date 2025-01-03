/* eslint-disable react/prop-types */
import useCities from '../../../hooks/useCities'
import { useState } from 'react'

// const CityInput = ({ register, errors }) => {
//     const { cities, loading, error } = useCities()
//     const [searchQuery, setSearchQuery] = useState('') // Track search input
//     const [isDropdownOpen, setIsDropdownOpen] = useState(false) // Manage dropdown visibility
//     const [highlightedIndex, setHighlightedIndex] = useState(-1) // Track the highlighted city index

//     // Filter cities based on the search query
//     const filteredCities = cities.filter((city) =>
//         city.name.toLowerCase().includes(searchQuery.toLowerCase())
//     )

//     // Handle the search input change
//     const handleSearchChange = (event) => {
//         setSearchQuery(event.target.value)
//         setIsDropdownOpen(event.target.value.length > 0) // Show dropdown if there's a search query
//         setHighlightedIndex(-1) // Reset highlighted index when user types
//     }

//     // Handle city selection
//     const handleCitySelect = (city) => {
//         setSearchQuery(city.name) // Set city name as input value
//         setIsDropdownOpen(false) // Close the dropdown when a city is selected
//     }

//     // Handle keyboard navigation
//     const handleKeyDown = (event) => {
//         if (event.key === 'ArrowDown') {
//             // Move down the list
//             setHighlightedIndex((prevIndex) =>
//                 prevIndex < filteredCities.length - 1
//                     ? prevIndex + 1
//                     : prevIndex
//             )
//         } else if (event.key === 'ArrowUp') {
//             // Move up the list
//             setHighlightedIndex((prevIndex) =>
//                 prevIndex > 0 ? prevIndex - 1 : prevIndex
//             )
//         } else if (event.key === 'Enter') {
//             // Select the highlighted city
//             if (highlightedIndex >= 0) {
//                 handleCitySelect(filteredCities[highlightedIndex])
//             }
//         }
//     }

//     if (loading) {
//         return (
//             <div>
//                 <label className="input-label">City</label>
//                 <input
//                     className="input w-full h-10 p-2 text-sm bg-gray-100 text-gray-500 border border-gray-300 rounded-md cursor-not-allowed"
//                     disabled
//                     value="Loading cities..."
//                 />
//             </div>
//         )
//     }

//     return (
//         <div className="relative">
//             <label className="input-label">City</label>
//             {error && (
//                 <div className="text-red-500 text-xs mt-1">
//                     <p>{error}</p>
//                 </div>
//             )}
//             <input
//                 type="text"
//                 value={searchQuery}
//                 onChange={handleSearchChange}
//                 onKeyDown={handleKeyDown}
//                 placeholder="Search city"
//                 className="input w-full h-10 p-2 text-sm bg-white border rounded-md mb-2"
//             />
//             {isDropdownOpen && (
//                 <div className="absolute custom-scrollbar z-10 w-full mt-1 bg-white border border-gray-300 rounded-md max-h-60 overflow-y-auto shadow-lg">
//                     {filteredCities.length > 0 ? (
//                         filteredCities.map((city, index) => (
//                             <div
//                                 key={city.id || city.name}
//                                 onClick={() => handleCitySelect(city)}
//                                 className={`cursor-pointer p-2 hover:bg-gray-100 ${
//                                     highlightedIndex === index
//                                         ? 'bg-gray-200'
//                                         : ''
//                                 }`}
//                             >
//                                 {city.name}
//                             </div>
//                         ))
//                     ) : (
//                         <div className="p-2 text-gray-500">No cities found</div>
//                     )}
//                 </div>
//             )}
//             <select
//                 {...register('city', {
//                     required: 'City is required',
//                 })}
//                 className={`hidden ${
//                     errors.city ? 'border-red-500' : 'border-gray-300'
//                 }`}
//             >
//                 <option value="">Select a city</option>
//                 {cities.length > 0 ? (
//                     cities.map((city) => (
//                         <option
//                             key={city.id || city.name}
//                             value={JSON.stringify({
//                                 cityId: city.id,
//                                 cityName: city.name,
//                             })}
//                         >
//                             {city.name}
//                         </option>
//                     ))
//                 ) : (
//                     <option>No cities available</option>
//                 )}
//             </select>
//             {errors.city && (
//                 <p className="text-red-500 text-xs mt-1">
//                     {errors.city.message}
//                 </p>
//             )}
//         </div>
//     )
// }
const CityInput = ({ register, errors }) => {
    const { cities, loading, error } = useCities()
    const [selectedCity, setSelectedCity] = useState('')

    const handleChange = (event) => {
        setSelectedCity(event.target.value)
    }

    return (
        <div className="relative">
            <label className="input-label">City</label>
            {error ? (
                <p>{error}</p>
            ) : (
                <select
                    {...register('city', { required: 'City is required' })}
                    value={selectedCity}
                    onChange={handleChange}
                    className={`input transition-all ${
                        errors.city ? 'border-red-500' : 'border-gray-300'
                    }`}
                >
                    <option value="" disabled className="text-gray-700">
                        Select a City
                    </option>
                    {loading
                        ? 'is Loading...'
                        : cities.map((city) => (
                              <option
                                  key={city.id}
                                  value={JSON.stringify({
                                      cityId: city.id,
                                      cityName: city.name,
                                  })}
                              >
                                  {city.name}
                              </option>
                          ))}
                </select>
            )}

            {/* Error Message */}
            {errors.city && (
                <div className="text-red-500 text-xs mt-1">
                    <p>{errors.city.message}</p>
                </div>
            )}
        </div>
    )
}

export default CityInput
