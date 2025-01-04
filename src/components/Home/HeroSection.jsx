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
    <div className="biz-banner en-layout " style={{marginTop:"-2%"}} >
      <img
        // src="https://www.micstatic.com/landing/business/assets/banner.webp"
        src="/ecommerce.jpg"
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

