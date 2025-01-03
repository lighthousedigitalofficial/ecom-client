/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import keys from '../../config/keys'
// import { LazyLoadImage } from 'react-lazy-load-image-component'

const ProductSlider = ({ images }) => {
    const [featuredImage, setFeaturedImage] = useState(images[0])

    const handleThumbnailClick = (image) => {
        setFeaturedImage(image)
    }

    useEffect(() => {
        if (images) {
            setFeaturedImage(images[0])
        }
    }, [images])

    console.log(featuredImage)
    const scrollSlider = (direction) => {
        const slider = document.getElementById('slider')
        slider.scrollLeft += direction === 'right' ? 180 : -180
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
        <div className="flex flex-wrap flex-col justify-center items-center gap-2 space-y-8 lg:space-y-0 lg:space-x-8">
            <div>
                {featuredImage && (
                    <img
                        src={
                            featuredImage
                                ? featuredImage?.startsWith('products')
                                    ? `${keys.BUCKET_URL}${featuredImage}`
                                    : featuredImage
                                : keys.DEFAULT_IMG
                        }
                        loading="lazy"
                        alt="Featured product"
                        className="w-[500px] md:h-[500px] h-[300px] object-cover object-top border-2 border-gray-100 cursor-pointer"
                    />
                )}
            </div>

            <div className="flex items-center space-x-4 mt-4">
                <FaChevronLeft
                    className="text-gray-500 cursor-pointer transition-transform hover:scale-110"
                    onClick={() => scrollSlider('left')}
                />
                <div
                    id="slider"
                    className="flex space-x-2 overflow-x-auto scrollbar-hide"
                >
                    {images.map((image, index) => {
                        if (image.startsWith('products'))
                            return (
                                <img
                                    key={index}
                                    src={`${keys.BUCKET_URL}${image}`}
                                    alt={`Thumbnail ${index + 1}`}
                                    onClick={() => handleThumbnailClick(image)}
                                    className={`lg:w-32 lg:h-20 w-24 h-14 object-cover object-top cursor-pointer border-2 border-primary-500 transition-opacity ${
                                        featuredImage === image
                                            ? 'opacity-100'
                                            : 'opacity-50'
                                    }`}
                                    loading="lazy"
                                />
                            )
                    })}
                </div>
                <FaChevronRight
                    className="text-gray-500 cursor-pointer transition-transform hover:scale-110"
                    onClick={() => scrollSlider('right')}
                />
            </div>
        </div>
    )
}

export default ProductSlider
