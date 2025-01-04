import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { FaAngleLeft, FaAngleRight, FaBoxes } from 'react-icons/fa'
import NewArrival from './NewArrival'
import RetailWholesale from './RetailWholesale'

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
    // {
    //     name: 'Waseem Rahi',
    //     // price: 'PKR 10.00',
    //     image: 'https://sc04.alicdn.com/kf/H4729a49cffa840e299fb983e6d87251bZ.png',
    // },
    {
        name: 'Ali Raza',
        price: 'PKR 50.00',
        image: 'https://media.licdn.com/dms/image/v2/D4D03AQEjJKY3CuriLg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1697537164076?e=2147483647&v=beta&t=ryO1HDIfKJYLP52YcEzcsa7K_ACH4oP98k9rJfryw1A',
    },
    {
        name: 'Faisal Khan',
        price: 'PKR 0.01',
        image: 'https://indian-retailer.s3.ap-south-1.amazonaws.com/s3fs-public/inline-images/Naveen.jpeg',
    },
    {
        name: 'Qasim Ali',
        price: 'PKR 150.00',
        image: 'https://avatars.githubusercontent.com/u/16420321?v=4',
    },
]

// Responsive breakpoints for the carousel
const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 1024 }, items: 2 },
    desktop: { breakpoint: { max: 1024, min: 768 }, items: 2 },
    tablet: { breakpoint: { max: 768, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
}

const TopSeller = () => {
    return (
        <>
            <div className="bg-white p-3 shadow rounded-md">
                <div className="flex items-center gap-2 text-primary-500 mb-2">
                    <FaBoxes className="text-xl text-primary" />
                    <h2 className="text-lg font-bold ">Top Seller</h2>
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
                            className="bg-gray-100   rounded-lg shadow-md hover:shadow-lg transition duration-300"
                        >
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-56 object-center  rounded-t-md"
                            />
                            <h3 className="text-sm md:text-lg  text-center text-nowrap font-semibold py-2 text-primary-500">
                                {product.name}
                            </h3>
                            {/* <p className="text-sm text-center py-2 text-gray-600">
                                {product.price}
                            </p> */}
                        </div>
                    ))}
                </Carousel>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 pt-4">
                <NewArrival />
                <RetailWholesale />
            </div>
        </>
    )
}

export default TopSeller

// import React from 'react'
// import { AiOutlineRight } from 'react-icons/ai'
// import Carousel from 'react-multi-carousel'
// import 'react-multi-carousel/lib/styles.css'
// import { FaAngleLeft, FaAngleRight, FaBoxes } from 'react-icons/fa'
// import { Link } from 'react-router-dom'

// const CustomLeftArrow = ({ onClick }) => (
//     <button
//         onClick={onClick}
//         className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-400 text-white rounded-full p-2 z-10"
//     >
//         <FaAngleLeft className="text-lg" />
//     </button>
// )

// const CustomRightArrow = ({ onClick }) => (
//     <button
//         onClick={onClick}
//         className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-400 text-white rounded-full p-2 z-10"
//     >
//         <FaAngleRight className="text-lg" />
//     </button>
// )

// const topRankingData = [
//     {
//         tag: 'John Smith',
//         image: {
//             src: 'https://image.made-in-china.com/43f34j00nkKoYseIkqcP/Suji-Vmc-855-CNC-Milling-Multitask-4-5-Axis-Machinery-Center-Lathe-Machine.webp',
//             alt: 'John Smith',
//         },
//     },
//     {
//         tag: 'Jane Doe',
//         image: {
//             src: 'https://image.made-in-china.com/43f34j00sFciyAwziMkf/Bmg-Five-Axis-Servo-Motor-Molybdenum-Wire-CNC-Wire-Cut-EDM-Wire-Cutting-Machine.webp',
//             alt: 'Jane Doe',
//         },
//     },
//     {
//         tag: 'Jane Doe',
//         image: {
//             src: 'https://image.made-in-china.com/43f34j00sFciyAwziMkf/Bmg-Five-Axis-Servo-Motor-Molybdenum-Wire-CNC-Wire-Cut-EDM-Wire-Cutting-Machine.webp',
//             alt: 'Jane Doe',
//         },
//     },
//     {
//         tag: 'Jane Doe',
//         image: {
//             src: 'https://image.made-in-china.com/43f34j00sFciyAwziMkf/Bmg-Five-Axis-Servo-Motor-Molybdenum-Wire-CNC-Wire-Cut-EDM-Wire-Cutting-Machine.webp',
//             alt: 'Jane Doe',
//         },
//     },
//     {
//         tag: 'Jane Doe',
//         image: {
//             src: 'https://image.made-in-china.com/43f34j00sFciyAwziMkf/Bmg-Five-Axis-Servo-Motor-Molybdenum-Wire-CNC-Wire-Cut-EDM-Wire-Cutting-Machine.webp',
//             alt: 'Jane Doe',
//         },
//     },
// ]

// const retailWholesaleData = [
//     {
//         tag: 'Retail Product',
//         image: {
//             src: 'https://image.made-in-china.com/43f34j00VWkbDiJCCHzf/Factory-Price-CNC-Machine-Tools-Vmc1160-High-Precision-Vmc-3-Axis-Vertical-Machining-Center-Price-4-Axis-5-Axis-CNC-Milling-Machine.webp',
//             alt: 'Retail Product',
//         },
//     },
//     {
//         tag: 'Wholesale Product',
//         image: {
//             src: 'https://image.made-in-china.com/43f34j00nkKoYseIkqcP/Suji-Vmc-855-CNC-Milling-Multitask-4-5-Axis-Machinery-Center-Lathe-Machine.webp',
//             alt: 'Wholesale Product',
//         },
//     },
// ]

// const responsive = {
//     superLarge: { breakpoint: { max: 4000, min: 1024 }, items: 4 },
//     large: { breakpoint: { max: 1024, min: 768 }, items: 3 },
//     medium: { breakpoint: { max: 768, min: 464 }, items: 2 },
//     small: { breakpoint: { max: 464, min: 0 }, items: 1 },
// }

// const TopSeller = () => {
//     return (
//         <div className="p-5">
//             {/* First Row - Top Seller Section */}
//             <div className="mb-8">
//                 <div className="flex justify-between items-center mb-4">
//                     <h2 className="text-sm md:text-xl font-semibold gap-2 text-primary-500 flex items-center">
//                         <FaBoxes />

//                         <span>Top Seller</span>
//                     </h2>
//                     <Link
//                         to="/top-seller"
//                         className="text-green-500 flex items-center"
//                     >
//                         <span>View more</span>
//                         <AiOutlineRight />
//                     </Link>
//                 </div>
//                 <Carousel
//                     responsive={responsive}
//                     infinite={true}
//                     autoPlay={true}
//                     autoPlaySpeed={3000}
//                     customLeftArrow={<CustomLeftArrow />}
//                     customRightArrow={<CustomRightArrow />}
//                 >
//                     {topRankingData.map((item, index) => (
//                         <div key={index} className="text-center">
//                             <img
//                                 src={item.image.src}
//                                 alt={item.image.alt}
//                                 className="w-20 h-20 rounded-full object-cover mx-auto border-2 border-gray-300"
//                             />
//                             <h3 className="mt-2 text-sm font-medium">
//                                 {item.tag}
//                             </h3>
//                         </div>
//                     ))}
//                 </Carousel>
//                 {/* <hr className="mt-4 border-gray-300" /> */}
//             </div>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 {/* Second Row - New Arrival & Retail and Wholesale */}
//                 <div className="">
//                     {/* New Arrival Section */}
//                     <div className="w-full lg:w-full">
//                         <div className="flex justify-between items-center mb-4">
//                             <h2 className="text-xl font-semibold">
//                                 New Arrival
//                             </h2>
//                             {/* <Link to="/new-arrival" className="text-green-500 flex items-center">
//               <span>View more</span>
//               <AiOutlineRight />
//             </Link> */}
//                         </div>
//                         <Carousel
//                             responsive={responsive}
//                             infinite={true}
//                             autoPlay={true}
//                             autoPlaySpeed={3000}
//                             customLeftArrow={<CustomLeftArrow />}
//                             customRightArrow={<CustomRightArrow />}
//                         >
//                             {retailWholesaleData.map((item, index) => (
//                                 <div key={index} className="text-center">
//                                     <img
//                                         src={item.image.src}
//                                         alt={item.image.alt}
//                                         className="w-20 h-20 rounded-full object-cover mx-auto border-2 border-gray-300"
//                                     />
//                                     <h3 className="mt-2 text-sm font-medium">
//                                         {item.tag}
//                                     </h3>
//                                 </div>
//                             ))}
//                         </Carousel>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default TopSeller
// Second Row - New Arrival & Retail and Wholesale
{
    /* <div className=" ">
   
    <div className="w-full lg:w-full mt-8">
        <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">
                Retail and Wholesale
            </h2>
        
        </div>
        <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            customLeftArrow={<CustomLeftArrow />}
            customRightArrow={<CustomRightArrow />}
        >
            {retailWholesaleData.map((item, index) => (
                <div key={index} className="text-center">
                    <img
                        src={item.image.src}
                        alt={item.image.alt}
                        className="w-20 h-20 rounded-full object-cover mx-auto border-2 border-gray-300"
                    />
                    <h3 className="mt-2 text-sm font-medium">
                        {item.tag}
                    </h3>
                </div>
            ))}
        </Carousel>
    </div>
</div> */
}
