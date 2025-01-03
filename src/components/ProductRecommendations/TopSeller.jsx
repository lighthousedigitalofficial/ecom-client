import React from 'react';
import { AiOutlineRight } from 'react-icons/ai';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CustomLeftArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-400 text-white rounded-full p-2 z-10"
  >
    <FaAngleLeft className="text-lg" />
  </button>
);

const CustomRightArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-400 text-white rounded-full p-2 z-10"
  >
    <FaAngleRight className="text-lg" />
  </button>
);

const topRankingData = [
  {
    tag: 'John Smith',
    image: {
      src: 'https://image.made-in-china.com/43f34j00nkKoYseIkqcP/Suji-Vmc-855-CNC-Milling-Multitask-4-5-Axis-Machinery-Center-Lathe-Machine.webp',
      alt: 'John Smith',
    },
  },
  {
    tag: 'Jane Doe',
    image: {
      src: 'https://image.made-in-china.com/43f34j00sFciyAwziMkf/Bmg-Five-Axis-Servo-Motor-Molybdenum-Wire-CNC-Wire-Cut-EDM-Wire-Cutting-Machine.webp',
      alt: 'Jane Doe',
    },
  },
  {
    tag: 'Jane Doe',
    image: {
      src: 'https://image.made-in-china.com/43f34j00sFciyAwziMkf/Bmg-Five-Axis-Servo-Motor-Molybdenum-Wire-CNC-Wire-Cut-EDM-Wire-Cutting-Machine.webp',
      alt: 'Jane Doe',
    },
  },
  {
    tag: 'Jane Doe',
    image: {
      src: 'https://image.made-in-china.com/43f34j00sFciyAwziMkf/Bmg-Five-Axis-Servo-Motor-Molybdenum-Wire-CNC-Wire-Cut-EDM-Wire-Cutting-Machine.webp',
      alt: 'Jane Doe',
    },
  },
  {
    tag: 'Jane Doe',
    image: {
      src: 'https://image.made-in-china.com/43f34j00sFciyAwziMkf/Bmg-Five-Axis-Servo-Motor-Molybdenum-Wire-CNC-Wire-Cut-EDM-Wire-Cutting-Machine.webp',
      alt: 'Jane Doe',
    },
  },
];

const retailWholesaleData = [
  {
    tag: 'Retail Product',
    image: {
      src: 'https://image.made-in-china.com/43f34j00VWkbDiJCCHzf/Factory-Price-CNC-Machine-Tools-Vmc1160-High-Precision-Vmc-3-Axis-Vertical-Machining-Center-Price-4-Axis-5-Axis-CNC-Milling-Machine.webp',
      alt: 'Retail Product',
    },
  },
  {
    tag: 'Wholesale Product',
    image: {
      src: 'https://image.made-in-china.com/43f34j00nkKoYseIkqcP/Suji-Vmc-855-CNC-Milling-Multitask-4-5-Axis-Machinery-Center-Lathe-Machine.webp',
      alt: 'Wholesale Product',
    },
  },
];

const responsive = {
  superLarge: { breakpoint: { max: 4000, min: 1024 }, items: 5 },
  large: { breakpoint: { max: 1024, min: 768 }, items: 3 },
  medium: { breakpoint: { max: 768, min: 464 }, items: 2 },
  small: { breakpoint: { max: 464, min: 0 }, items: 1 },
};

const TopSeller = () => {
  return (
    <div className="p-5">
      {/* First Row - Top Seller Section */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Top Seller</h2>
          <Link to="/top-seller" className="text-green-500 flex items-center">
            <span>View more</span>
            <AiOutlineRight />
          </Link>
        </div>
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          customLeftArrow={<CustomLeftArrow />}
          customRightArrow={<CustomRightArrow />}
        >
          {topRankingData.map((item, index) => (
            <div key={index} className="text-center">
              <img
                src={item.image.src}
                alt={item.image.alt}
                className="w-20 h-20 rounded-full object-cover mx-auto border-2 border-gray-300"
              />
              <h3 className="mt-2 text-sm font-medium">{item.tag}</h3>
            </div>
          ))}
        </Carousel>
        <hr className="mt-4 border-gray-300" />
      </div>

      {/* Second Row - New Arrival & Retail and Wholesale */}
      <div className="flex flex-wrap gap-8">
        {/* New Arrival Section */}
        <div className="w-full lg:w-full">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">New Arrival</h2>
            {/* <Link to="/new-arrival" className="text-green-500 flex items-center">
              <span>View more</span>
              <AiOutlineRight />
            </Link> */}
          </div>
          <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            customLeftArrow={<CustomLeftArrow />}
            customRightArrow={<CustomRightArrow />}
          >
            {topRankingData.map((item, index) => (
              <div key={index} className="text-center">
                <img
                  src={item.image.src}
                  alt={item.image.alt}
                  className="w-20 h-20 rounded-full object-cover mx-auto border-2 border-gray-300"
                />
                <h3 className="mt-2 text-sm font-medium">{item.tag}</h3>
              </div>
            ))}
          </Carousel>
        </div>

      
      </div>
      {/* Second Row - New Arrival & Retail and Wholesale */}
      <div className="flex flex-wrap gap-8 mt-6">
      
        {/* Retail and Wholesale Section */}
        <div className="w-full lg:w-full mt-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Retail and Wholesale</h2>
            {/* <Link to="/retail-wholesale" className="text-green-500 flex items-center">
              <span>View more</span>
              <AiOutlineRight />
            </Link> */}
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
                <h3 className="mt-2 text-sm font-medium">{item.tag}</h3>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default TopSeller;
