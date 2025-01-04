import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { FaAngleLeft, FaAngleRight, FaBoxes, FaXbox } from 'react-icons/fa'

// Custom arrow components
const CustomLeftArrow = ({ onClick }) => (
    <button
        onClick={onClick}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-400 text-white rounded-full p-2 z-10"
    >
        <FaAngleLeft className="text-lg" />
    </button>
)

const CustomRightArrow = ({ onClick }) => (
    <button
        onClick={onClick}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-400 text-white rounded-full p-2 z-10"
    >
        <FaAngleRight className="text-lg" />
    </button>
)

// Sample product data
const products = [
    {
        name: 'Canvas Tote Bag',
        price: 'PKR 10.00',
        image: 'https://image.made-in-china.com/201f0j00gONlMySFKDqn/Classic-Women-Contrast-Color-Leather-Shoulder-Handbags-Bag-for-Women-Female-Ladies-Hand-Bags.webp',
    },
    {
        name: 'Luxury Handbag',
        price: 'PKR 50.00',
        image: 'https://image.made-in-china.com/201f0j00gONlMySFKDqn/Classic-Women-Contrast-Color-Leather-Shoulder-Handbags-Bag-for-Women-Female-Ladies-Hand-Bags.webp',
    },
    {
        name: 'Plastic Bag',
        price: 'PKR 0.01',
        image: 'https://image.made-in-china.com/201f0j00gONlMySFKDqn/Classic-Women-Contrast-Color-Leather-Shoulder-Handbags-Bag-for-Women-Female-Ladies-Hand-Bags.webp',
    },
    {
        name: 'Travel Luggage',
        price: 'PKR 150.00',
        image: 'https://image.made-in-china.com/201f0j00gONlMySFKDqn/Classic-Women-Contrast-Color-Leather-Shoulder-Handbags-Bag-for-Women-Female-Ladies-Hand-Bags.webp',
    },
]

// Responsive breakpoints for the carousel
const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 1024 }, items: 2 },
    desktop: { breakpoint: { max: 1024, min: 768 }, items: 2 },
    tablet: { breakpoint: { max: 768, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
}

const RetailWholesale = () => {
    return (
        <>
            <div className="bg-white shadow py-2 rounded-lg">
                <div className="flex items-center text-primary-500 px-3 py-2  gap-2 ">
                    <FaXbox className="text-xl text-primary" />
                    <h2 className="text-sm md:text-lg font-bold ">
                        Retail & Wholesale
                    </h2>
                </div>
                <Carousel
                    responsive={responsive}
                    infinite
                    autoPlay
                    autoPlaySpeed={3000}
                    customLeftArrow={<CustomLeftArrow />}
                    customRightArrow={<CustomRightArrow />}
                    containerClass="relative"
                    itemClass="px-2"
                    renderDotsOutside
                >
                    {products.map((product, index) => (
                        <div
                            key={index}
                            className="bg-gray-100  h-full rounded-lg shadow-md hover:shadow-lg transition duration-300"
                        >
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-36  object-cover rounded-t-md"
                            />
                            {/* <h3 className="text-sm text-center text-nowrap font-semibold mt-2 text-gray-800">
                            {product.name}
                        </h3> */}
                            <p className="text-sm text-center py-2 text-gray-600">
                                {product.price}
                            </p>
                        </div>
                    ))}
                </Carousel>
            </div>
        </>
    )
}

export default RetailWholesale
