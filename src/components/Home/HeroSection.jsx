import React, { useEffect, useState } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import './HeroSection.css'
import MainSearch from './MainSearch'

const HeroSection = () => {
    const [isSmallScreen, setIsSmallScreen] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth <= 768) // Adjust breakpoint as needed
        }
        handleResize() // Set initial value
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const popularTags = [
        { label: 'Affordable Motorcycles', url: '#' },
        { label: 'Smart Electronics', url: '#' },
        { label: 'Trendy Fashion', url: '#' },
        { label: 'Kitchen Essentials', url: '#' },
        { label: 'Fitness Gear', url: '#' },
        { label: 'Portable Tools', url: '#' },
    ]

    return (
        <div className="biz-banner en-layout " style={{ marginTop: '%' }}>
            <img
                // src="https://www.micstatic.com/landing/business/assets/banner.webp"
                src={isSmallScreen ? '/ecommerce-1.jpg' : '/ecommerce.jpg'}
                alt="Business Banner"
                className="biz-banner-img"
                loading="eager"
            />
            <div className="biz-body">
                <div className="biz-banner-content">
                    {/* <h1 className="en-title text-white">SHOP SMART, LIVE BETTER</h1> */}
                    <h1 className="en-title text-white">
                        Pakistan's <br /> E-commerce Hub
                    </h1>

                    <p className="text-4xl font-bold text-white">
                        Smart Shopping, Endless Opportunities
                    </p>

                    <div className="biz-banner-entrace">
                        <div className="w-full max-w-2xl mb-6 px-4 sm:px-0">
                            <MainSearch />
                        </div>

                        {/* Sign Up for Free Button */}
                        <Link
                            to="/customer/auth/sign-up"
                            className="inline-flex items-center bg-primary-500 h-12 ml-5 hover:bg-white hover:border-primary-500 text-white hover:text-primary-500 font-medium text-lg px-4 py-2 rounded-full shadow-md transition-all ease-in-out gap-4"
                        >
                            <span>Sign Up for Free</span>
                            <FaArrowRight />
                        </Link>
                    </div>

                    {/* <div className="biz-banner-popular">
            <span className="biz-banner-popular-label">Trending now:</span>
            <div className="popular-tags">
              {popularTags.map((tag, index) => (
                <a
                  key={index}
                  href={tag.url}
                  className="popular-tag"
                  rel="nofollow"
                >
                  {tag.label}
                </a>
              ))}
            </div>
          </div> */}
                </div>
            </div>
        </div>
    )
}

export default HeroSection

// import React, { useState, useEffect } from 'react';
// import { FaArrowRight } from 'react-icons/fa';
// import { Link } from 'react-router-dom';
// import MainSearch from './MainSearch';

// const HeroSection = () => {
//   const [isSmallScreen, setIsSmallScreen] = useState(false);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsSmallScreen(window.innerWidth <= 768); // Adjust breakpoint as needed
//     };
//     handleResize(); // Set initial value
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   const popularTags = [
//     { label: 'Affordable Motorcycles', url: '#' },
//     { label: 'Smart Electronics', url: '#' },
//     { label: 'Trendy Fashion', url: '#' },
//     { label: 'Kitchen Essentials', url: '#' },
//     { label: 'Fitness Gear', url: '#' },
//     { label: 'Portable Tools', url: '#' },
//   ];

//   return (
//     <div className="relative bg-gray-800 text-white">
//       {/* Banner Image */}
//       <img
//         src={isSmallScreen ? '/banner.webp' : '/ecommerce.jpg'}
//         alt="Business Banner"
//         className="w-full h-80 object-cover md:h-[500px]"
//       />

//       {/* Overlay Content */}
//       <div className="absolute inset-0 flex flex-col justify-center items-center px-4">
//         <h1 className="text-3xl md:text-5xl font-bold text-center">SHOP SMART, LIVE BETTER</h1>
//         <h2 className="mt-2 text-xl md:text-2xl text-center">Your Ultimate Online Marketplace</h2>

//         {/* Main Search */}
//         <div className="w-full max-w-2xl mt-6">
//           <MainSearch />
//         </div>

//         {/* Sign Up Button */}
//         <Link
//           to="/customer/auth/sign-up"
//           className="inline-flex items-center mt-4 bg-green-500 hover:bg-white hover:border-green-500 text-white hover:text-green-500 font-medium text-lg px-6 py-2 rounded-full shadow-md transition-all duration-300 gap-2"
//         >
//           <span>Sign Up for Free</span>
//           <FaArrowRight />
//         </Link>

//         {/* Popular Tags */}
//         <div className="mt-6">
//           <span className="font-semibold text-lg">Trending now:</span>
//           <div className="flex flex-wrap gap-2 mt-2">
//             {popularTags.map((tag, index) => (
//               <a
//                 key={index}
//                 href={tag.url}
//                 className="px-4 py-2 bg-gray-700 hover:bg-green-500 rounded-full text-sm transition-all"
//                 rel="nofollow"
//               >
//                 {tag.label}
//               </a>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;
