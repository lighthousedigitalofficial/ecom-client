/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from 'react'
import {
    FaChevronDown,
    FaChevronUp,
    FaSearchMinus,
    FaSearchPlus,
} from 'react-icons/fa'
import keys from '../../config/keys'

const ProductSlider = ({ images }) => {
    const [featuredImage, setFeaturedImage] = useState(images[0])

    const [isZoomed, setIsZoomed] = useState(false)

    const handleZoomToggle = () => setIsZoomed(!isZoomed)

    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const containerRef = useRef(null)

    const handleMouseMove = (e) => {
        if (!isZoomed) return
        const container = containerRef.current
        const rect = container.getBoundingClientRect()
        const x = ((e.clientX - rect.left) / rect.width) * 100 // X-axis percentage
        const y = ((e.clientY - rect.top) / rect.height) * 100 // Y-axis percentage
        setMousePosition({ x, y })
    }

    const handleThumbnailClick = (image) => {
        setFeaturedImage(image)
    }

    useEffect(() => {
        if (images) {
            setFeaturedImage(images[0])
        }
    }, [images])

    const scrollSlider = (direction) => {
        const slider = document.getElementById('slider')
        const scrollAmount =
            direction === 'down' || direction === 'right' ? 180 : -180

        slider.scrollBy({
            top: scrollAmount, // For vertical scrolling
            left: 0, // For horizontal scrolling, set top: 0 and left accordingly
            behavior: 'smooth', // Enables smooth scrolling
        })
    }

    return (
        // <div className="flex flex-wrap flex-col justify-center items-center gap-2 space-y-8 lg:space-y-0 lg:space-x-8">
        //     <div>
        //         {featuredImage && (
        //             <img
        //                 src={
        //                     featuredImage
        //                         ? featuredImage?.startsWith('products')
        //                             ? `${keys.BUCKET_URL}${featuredImage}`
        //                             : featuredImage
        //                         : keys.DEFAULT_IMG
        //                 }
        //                 loading="lazy"
        //                 alt="Featured product"
        //                 className="w-full lg:h-[55vh] md:h-[50vh] h-[40vh] object-cover border-2 border-gray-100 cursor-pointer"
        //             />
        //         )}
        //     </div>

        //     <div className="flex items-center space-x-4 mt-4">
        //         <FaChevronLeft
        //             className="text-gray-500 cursor-pointer transition-transform hover:scale-110"
        //             onClick={() => scrollSlider('left')}
        //         />
        //         <div
        //             id="slider"
        //             className="flex space-x-2 overflow-x-auto scrollbar-hide"
        //         >
        //             {images.map((image, index) => {
        //                 if (image.startsWith('products'))
        //                     return (
        //                         <img
        //                             key={index}
        //                             src={`${keys.BUCKET_URL}${image}`}
        //                             alt={`Thumbnail ${index + 1}`}
        //                             onClick={() => handleThumbnailClick(image)}
        //                             className={`lg:w-32 lg:h-20 w-24 h-14 object-cover object-top cursor-pointer border-2 border-primary-500 transition-opacity ${
        //                                 featuredImage === image
        //                                     ? 'opacity-100'
        //                                     : 'opacity-50'
        //                             }`}
        //                             loading="lazy"
        //                         />
        //                     )
        //             })}
        //         </div>
        //         <FaChevronRight
        //             className="text-gray-500 cursor-pointer transition-transform hover:scale-110"
        //             onClick={() => scrollSlider('right')}
        //         />
        //     </div>
        // </div>
        <div className="flex flex-row justify-center items-center gap-2 md:gap-4">
            <div className="flex flex-col items-center space-x-4 mt-4">
                <button
                    className="flex items-center justify-center w-8 h-8 rounded-full bg-white text-gray-500 hover:bg-gray-100 transition-transform hover:scale-110"
                    onClick={() => scrollSlider('up')}
                >
                    <FaChevronUp />
                </button>
                <div
                    id="slider"
                    className="flex flex-col space-y-2 overflow-y-auto scrollbar-hide"
                >
                    {images.map((image, index) => {
                        if (image.startsWith('products'))
                            return (
                                <img
                                    key={index}
                                    src={`${keys.BUCKET_URL}${image}`}
                                    alt={`Thumbnail ${index + 1}`}
                                    onClick={() => handleThumbnailClick(image)}
                                    className={`lg:w-32 lg:h-20 w-24 h-14 object-cover object-top rounded-md cursor-pointer border-2  transition-opacity ${
                                        featuredImage === image
                                            ? 'opacity-100 border-primary-500'
                                            : 'opacity-50'
                                    }`}
                                />
                            )
                    })}
                </div>
                <button
                    className="flex items-center justify-center w-8 h-8 rounded-full bg-white text-gray-500 hover:bg-gray-100 transition-transform hover:scale-110"
                    onClick={() => scrollSlider('down')}
                >
                    <FaChevronDown />
                </button>
            </div>

            <div
                ref={containerRef}
                onMouseMove={handleMouseMove}
                className="relative rounded-md group w-[500px] md:h-[640px] h-[300px] overflow-hidden border border-gray-200 shadow-sm"
            >
                {/* Main Image */}
                {featuredImage && (
                    <img
                        src={
                            featuredImage.startsWith('products')
                                ? `${keys.BUCKET_URL}${featuredImage}`
                                : featuredImage
                        }
                        alt="Featured product"
                        className={`w-full h-full object-cover object-top transition-transform duration-300 ${
                            isZoomed
                                ? 'scale-[2.5]' // Zoom effect
                                : 'scale-100'
                        }`}
                        style={
                            isZoomed
                                ? {
                                      transformOrigin: `${mousePosition.x}% ${mousePosition.y}%`,
                                  }
                                : {}
                        }
                    />
                )}

                {/* Zoom Icon */}
                <button
                    className="absolute top-2 right-2 bg-gray-200 p-2 rounded-full opacity-0 group-hover:opacity-100 hover:bg-gray-300 transition-all"
                    onClick={handleZoomToggle}
                >
                    {isZoomed ? (
                        <FaSearchMinus className="text-gray-600 w-6 h-6" />
                    ) : (
                        <FaSearchPlus className="text-gray-600 w-6 h-6" />
                    )}
                </button>
            </div>
        </div>
    )
}

export default ProductSlider
