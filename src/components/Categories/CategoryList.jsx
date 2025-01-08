/* eslint-disable react/prop-types */
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import CategoryItem from './CategoryItem'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'
import { useState } from 'react'

const CustomLeftArrow = ({ onClick }) => {
    return (
        <button
            onClick={onClick}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-primary-500 text-white rounded-full p-2"
        >
            <FaAngleLeft className="text-lg" />
        </button>
    )
}

const CustomRightArrow = ({ onClick }) => {
    return (
        <button
            onClick={onClick}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-primary-500 text-white rounded-full p-2"
        >
            <FaAngleRight className="text-lg" />
        </button>
    )
}

const CategoryList = ({ categories }) => {
    const [showArrows, setShowArrows] = useState(false)

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 1024 },
            items: 8,
        },
        desktop: {
            breakpoint: { max: 1024, min: 768 },
            items: 6,
        },
        tablet: {
            breakpoint: { max: 768, min: 464 },
            items: 4,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2,
        },
    }

    return (
        <div
            className="w-full relative"
            onMouseEnter={() => setShowArrows(true)}
            onMouseLeave={() => setShowArrows(false)}
        >
            {/* Carousel Section */}
            <Carousel
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={3000}
                renderDotsOutside={true}
                className="relative"
                customLeftArrow={showArrows ? <CustomLeftArrow /> : <div />}
                customRightArrow={showArrows ? <CustomRightArrow /> : <div />}
                arrows={showArrows}
            >
                {categories && categories.length ? (
                    categories.map((item, index) => (
                        <div key={index} className="mx-2">
                            <CategoryItem category={item} />
                        </div>
                    ))
                ) : (
                    <p className="text-center text-gray-500">
                        No categories available at the moment!
                    </p>
                )}
            </Carousel>
        </div>
    )
}

export default CategoryList
