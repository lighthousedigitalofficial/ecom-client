import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CategoryItem from './CategoryItem';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { useState } from 'react';

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
      className="w-full relative"
      onMouseEnter={() => setShowArrows(true)}
      onMouseLeave={() => setShowArrows(false)}
    >
      <div className="catalog-info p-5">
       <div className='container mx-auto flex'>
        
    
        <h2 className="catalog-title text-4xl font-bold text-textPrimary max-w-3xl mb-6">
          Discover a vast array of offerings tailored to your business needs
        </h2>
    
        <div className="catalog-data flex flex-wrap justify-between gap-5">
          <div className="catalog-data-item w-52 h-24 flex flex-col gap-1">
            <div 
               className="catalog-data-num text-3xl font-extrabold text-primary-700   py-2 rounded-lg"
               >
                84 million+</div>
            <div  className="catalog-data-name text-lg text-gray-700 ">
                products</div>
          </div>
          <div
              className="catalog-data-item w-52 h-24 flex flex-col gap-1">
            <div  className="catalog-data-num text-3xl font-extrabold text-primary-700  rounded-lg">6 million+</div>
            <div  className="catalog-data-name text-lg text-gray-700 ">suppliers</div>
          </div>
          <div className="catalog-data-item w-52 h-24 flex flex-col gap-1">
            <div               className="catalog-data-num text-3xl font-extrabold text-primary-700   rounded-lg"

            >
                4,500+</div>
            <div  className="catalog-data-name text-lg text-gray-700 ">product categories</div>
          </div>
          <div className="catalog-data-item w-52 h-24 flex flex-col gap-1">
            <div                className="catalog-data-num text-3xl font-extrabold text-primary-700  rounded-lg"
            >
                220+</div>
            <div  className="catalog-data-name text-lg text-gray-700 ">countries and regions</div>
          </div>
        </div>
        </div>
      </div>
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
  );
};

export default CategoryList;
