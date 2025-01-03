/* eslint-disable react/prop-types */
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import CategoryItem from './CategoryItem'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'
import { useState } from 'react'

const CustomLeftArrow = ({ onClick }) => {
    return (
        <button onClick={onClick} className="carousel-arrow left-0">
            <FaAngleLeft className="text-white text-lg" />
        </button>
    )
}

const CustomRightArrow = ({ onClick }) => {
    return (
        <button onClick={onClick} className="carousel-arrow right-0">
            <FaAngleRight className="text-white text-lg" />
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
            <Carousel
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={2000}
                renderDotsOutside={true}
                className="relative"
                customLeftArrow={showArrows ? <CustomLeftArrow /> : <div />}
                customRightArrow={showArrows ? <CustomRightArrow /> : <div />}
                arrows={showArrows}
                // containerClass="carousel-container"
            >
                {categories && categories.length ? (
                    categories.map((item, index) => (
                        <div key={index} className="mx-2">
                            <CategoryItem category={item} />
                        </div>
                    ))
                ) : (
                    <p>Categories not found!</p>
                )}
            </Carousel>
        </div>
    )
}

export default CategoryList
