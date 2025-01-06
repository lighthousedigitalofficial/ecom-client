import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CategoryItem from './CategoryItem';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { useState } from 'react';
import StatsData from './Data';

const CustomLeftArrow = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-900 text-white rounded-full p-2"
    >
      <FaAngleLeft className="text-lg" />
    </button>
  );
};

const CustomRightArrow = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-900 text-white rounded-full p-2"
    >
      <FaAngleRight className="text-lg" />
    </button>
  );
};

const CategoryList = ({ categories }) => {
  const [showArrows, setShowArrows] = useState(false);

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
  };

  return (
    <div
      className="w-full relative bg-gradient-to-b from-gray-100 to-white py-8"
      onMouseEnter={() => setShowArrows(true)}
      onMouseLeave={() => setShowArrows(false)}
    >
      <div className="catalog-info px-5">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-start">
          {/* Title Section */}
          <h2 className="catalog-title text-2xl md:text-4xl font-bold p-6 text-primary-600 max-w-3xl text-center md:text-left">
          Strengthening Pakistan’s Trade Sector — Unlock Limitless Opportunities for Global Commerce          </h2>

          {/* Stats Section */}
          <div className="catalog-data flex flex-wrap justify-center md:justify-between gap-5 mt-6 md:mt-0">
            <StatsData />
          </div>
        </div>
      </div>

      {/* Carousel Section */}
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        renderDotsOutside={true}
        className="relative mt-8"
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
          <p className="text-center text-gray-500">No categories available at the moment!</p>
        )}
      </Carousel>
    </div>
  );
};

export default CategoryList;
