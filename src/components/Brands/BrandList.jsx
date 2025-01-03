/* eslint-disable react/prop-types */
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import BrandItem from './BrandItem'

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

const BrandList = ({ brands }) => {
    const [showArrows, setShowArrows] = useState(false)

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 1024 },
            items: 10,
        },
        desktop: {
            breakpoint: { max: 1024, min: 768 },
            items: 6,
        },
        tablet: {
            breakpoint: { max: 768, min: 464 },
            items: 3,
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
            >
                {brands.map((item, index) => (
                    <div key={index} className="mx-2">
                        <BrandItem brand={item} />
                    </div>
                ))}
            </Carousel>
        </div>
    )
}

export default BrandList
