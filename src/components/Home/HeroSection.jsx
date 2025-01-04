import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './HeroSection.css';
import MainSearch from './MainSearch';

const HeroSection = () => {
  const popularTags = [
    { label: 'Affordable Motorcycles', url: '#' },
    { label: 'Smart Electronics', url: '#' },
    { label: 'Trendy Fashion', url: '#' },
    { label: 'Kitchen Essentials', url: '#' },
    { label: 'Fitness Gear', url: '#' },
    { label: 'Portable Tools', url: '#' },
  ];

  return (
    <div className="biz-banner en-layout">
      <img
        src="https://www.micstatic.com/landing/business/assets/banner.webp"
        alt="Business Banner"
        className="biz-banner-img"
        loading="eager"
      />
      <div className="biz-body">
        <div className="biz-banner-content">
          <h1 className="en-title text-white">SHOP SMART, LIVE BETTER</h1>
          <h2>Your Ultimate Online Marketplace</h2>
          <div className="biz-banner-entrace">
            <div className="w-full max-w-2xl mb-6 px-4 sm:px-0">
              <MainSearch />
            </div>

            {/* Sign Up for Free Button */}
            <Link
  to="/customer/auth/sign-up"
  className="flex items-center bg-primary-500 h-12 ml-5 hover:bg-white hover:border-primary-500 text-white hover:text-primary-500 font-medium text-lg px-4 py-2 rounded-full shadow-md transition-all ease-in-out gap-4"
>
  <span>Sign Up for Free</span>
  <FaArrowRight />
</Link>

          </div>

          <div className="biz-banner-popular">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;


// import { LazyLoadImage } from 'react-lazy-load-image-component'
// import 'react-lazy-load-image-component/src/effects/blur.css' // optional blur effect
// import Banner1 from '../../assets/slideshow-img/slide-1.jpg'
// // import Banner1 from ''
// import { Link } from 'react-router-dom'
// import MainSearch from './MainSearch'

// const HeroSection = () => {
//     return (
//         <div className="relative h-[100vh] w-full">
//             {/* Background Image with Overlay */}
//             <div className="absolute inset-0">
//                 <LazyLoadImage
//                     src={Banner1}
//                     alt="Hero Banner"
//                     effect="blur"
//                     className="object-cover object-center h-[100vh] w-[100vw]"
//                 />
//                 <div className="absolute inset-0 bg-black bg-opacity-60"></div>
//             </div>

//             {/* Content Section */}
//             <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4">
//                 {/* Search Bar */}
//                 <div className="w-full max-w-2xl mb-6 px-4 sm:px-0">
//                     <MainSearch />
//                 </div>

//                 {/* Join Free Button */}
//                 <Link
//                     className="inline-block px-6 py-3 mb-4 rounded-full bg-primary-500 text-white text-lg hover:bg-primary-400"
//                     to="/join"
//                 >
//                     Join Free
//                     <i className="ml-2 ft-icon icon-right"></i>
//                 </Link>

//                 {/* Popular Tags */}
//                 <div className="flex flex-wrap justify-center items-center gap-3 md:gap-4">
//                     <span className="text-lg font-medium mb-3 md:mb-0">
//                         Popular Now:
//                     </span>
//                     <div className="flex flex-wrap justify-center gap-2">
//                         {[
//                             'handbags',
//                             'replica handbags',
//                             'shoulder-bag',
//                             'luxury handbag',
//                             'designer handbags',
//                             'wholesale replicas bags',
//                         ].map((tag, index) => (
//                             <Link
//                                 key={index}
//                                 to={`/search/${tag}`}
//                                 className="px-4 py-2 bg-gray-500 bg-opacity-80 rounded-full text-sm hover:bg-opacity-100"
//                             >
//                                 {tag}
//                             </Link>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default HeroSection
