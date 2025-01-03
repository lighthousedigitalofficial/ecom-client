

import React from 'react';
import { AiOutlineRight } from 'react-icons/ai';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

const CustomLeftArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-900 text-white rounded-full p-2 z-10"
  >
    <FaAngleLeft className="text-lg" />
  </button>
);

const CustomRightArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-900 text-white rounded-full p-2 z-10"
  >
    <FaAngleRight className="text-lg" />
  </button>
);

const topRankingData = [
  {
    tag: 'Bench Drilling Machine',
    bigImages: [
      {
        src: 'https://image.made-in-china.com/43f34j00nkKoYseIkqcP/Suji-Vmc-855-CNC-Milling-Multitask-4-5-Axis-Machinery-Center-Lathe-Machine.webp',
        alt: 'Bench Drilling Machine Image 1',
      },
    ],
    smallImages: [
      {
        src: 'https://image.made-in-china.com/43f34j00nkKoYseIkqcP/Suji-Vmc-855-CNC-Milling-Multitask-4-5-Axis-Machinery-Center-Lathe-Machine.webp',
        alt: 'Bench Drilling Machine Small Image 1',
      },
    ],
  },
  {
    tag: 'Bench Drilling Machine',
    bigImages: [
      {
        src: 'https://image.made-in-china.com/43f34j00nkKoYseIkqcP/Suji-Vmc-855-CNC-Milling-Multitask-4-5-Axis-Machinery-Center-Lathe-Machine.webp',
        alt: 'Bench Drilling Machine Image 1',
      },
    ],
    smallImages: [
      {
        src: 'https://image.made-in-china.com/43f34j00nkKoYseIkqcP/Suji-Vmc-855-CNC-Milling-Multitask-4-5-Axis-Machinery-Center-Lathe-Machine.webp',
        alt: 'Bench Drilling Machine Small Image 1',
      },
      { src: 'https://image.made-in-china.com/43f34j00sFciyAwziMkf/Bmg-Five-Axis-Servo-Motor-Molybdenum-Wire-CNC-Wire-Cut-EDM-Wire-Cutting-Machine.webp', alt: 'Machine Factory Small Image 2' },
      { src: 'https://image.made-in-china.com/43f34j00VWkbDiJCCHzf/Factory-Price-CNC-Machine-Tools-Vmc1160-High-Precision-Vmc-3-Axis-Vertical-Machining-Center-Price-4-Axis-5-Axis-CNC-Milling-Machine.webp', alt: 'Machine Factory Small Image 3' },
  
    ],
  },
  {
    tag: 'Bench Drilling Machine',
    bigImages: [
      {
        src: 'https://image.made-in-china.com/43f34j00nkKoYseIkqcP/Suji-Vmc-855-CNC-Milling-Multitask-4-5-Axis-Machinery-Center-Lathe-Machine.webp',
        alt: 'Bench Drilling Machine Image 1',
      },
    
    ],
    smallImages: [
      {
        src: 'https://image.made-in-china.com/43f34j00nkKoYseIkqcP/Suji-Vmc-855-CNC-Milling-Multitask-4-5-Axis-Machinery-Center-Lathe-Machine.webp',
        alt: 'Bench Drilling Machine Small Image 1',
      },
      { src: 'https://image.made-in-china.com/43f34j00sFciyAwziMkf/Bmg-Five-Axis-Servo-Motor-Molybdenum-Wire-CNC-Wire-Cut-EDM-Wire-Cutting-Machine.webp', alt: 'Machine Factory Small Image 2' },
      { src: 'https://image.made-in-china.com/43f34j00VWkbDiJCCHzf/Factory-Price-CNC-Machine-Tools-Vmc1160-High-Precision-Vmc-3-Axis-Vertical-Machining-Center-Price-4-Axis-5-Axis-CNC-Milling-Machine.webp', alt: 'Machine Factory Small Image 3' },
  
    ],
  },
    
  // Add more items as needed
];

const responsive = {
  superLarge: { breakpoint: { max: 4000, min: 1024 }, items: 2 },
  large: { breakpoint: { max: 1024, min: 768 }, items: 1 },
  medium: { breakpoint: { max: 768, min: 464 }, items: 1 },
  small: { breakpoint: { max: 464, min: 0 }, items: 1 },
};

const TopRanking = () => {
  return (
    <div
      className="top-ranking bg-cover bg-center p-5 rounded-lg"
      style={{
        backgroundImage: "url('https://path-to-your-background-image.jpg')",
      }}
    >
      <div className="top-ranking-header flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold flex items-center">
          <span>Top Rankings</span>
        </h2>
        <a
          className="text-green-500 flex items-center space-x-1"
          href="//www.made-in-china.com/best-sale/products-list.html"
        >
          <span>View more</span>
          <AiOutlineRight />
        </a>
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
          <div key={index} className="swiper-slide">
            <div className="container bg-white p-4 rounded-lg shadow-lg">
              <div className="tag text-lg font-semibold text-gray-800 mb-3">
                {item.tag}
              </div>
              <div className="big-module flex justify-between mb-3">
                {item.bigImages.map((image, i) => (
                  <div key={i} className="item w-full rounded-lg overflow-hidden shadow">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="small-module flex gap-2">
                {item.smallImages.map((image, i) => (
                  <div key={i} className="item w-1/3 rounded-lg overflow-hidden shadow">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-24 object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default TopRanking;
