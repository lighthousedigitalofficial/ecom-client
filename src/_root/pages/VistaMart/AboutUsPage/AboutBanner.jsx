import React from "react";
import { FaStar } from "react-icons/fa";

const AboutBanner = () => {
  // Array for stars (1 for filled star, 0 for empty star)
  const stars = Array(5).fill(1);

  // Array for number items
  const numbers = [
    // { value: "4,300", suffix: "+", label: "Categories" },
    // { value: "6,000,000", suffix: "+", label: "Registered Supplier Members" },
    // { value: "20,000,000", suffix: "+", label: "Registered Buyer Members" },
  ];

  return (
    <div
      className="relative bg-cover bg-center bg-primary-400 text-white py-16 sm:py-24 px-4"
    //   style={{
    //     backgroundImage:
    //       "url('https://www.micstatic.com/micen/img/about/abt-ban_fbdd3d21.jpg')",
    //     backgroundAttachment: "fixed",
    //   }}
    >
      {/* Animated Star Effect */}
      <div className="absolute inset-0 pointer-events-none">
        {stars.map((_, index) => (
          <span
            key={index}
            className="absolute text-yellow-500 animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 1.5 + 0.8}rem`,
              opacity: `${Math.random() * 0.6 + 0.4}`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          >
            <FaStar />
          </span>
        ))}
      </div>

      {/* Banner Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-6 sm:mb-8 drop-shadow-md">
          Welcome to <span className="text-green-300">Ecommerce</span>
        </h1>
        <p className="text-base sm:text-lg leading-7 sm:leading-8 mb-8 sm:mb-12 drop-shadow-sm text-justify sm:text-center">
          <span className="font-semibold text-green-300">Ecommerce</span> is Pakistan's premier B2B marketplace, empowering businesses to thrive in a dynamic global economy. As the gateway to Pakistan's import and export sectors, we connect local suppliers with international buyers, offering unmatched opportunities in trade. With an emphasis on trust, quality, and efficiency,{" "}
          <span className="font-semibold text-green-300">Ecommerce</span> is your partner for unlocking the true potential of Pakistan's vibrant marketplace.
        </p>
        <div className="flex  justify-center items-center  sm:gap-8">
  {numbers.map((item, index) => (
    <div
      key={index}
      className="w-full sm:w-1/3 text-center px-4 sm:px-6"
    >
      <p className="text-2xl sm:text-3xl font-extrabold">
        {item.value}
        <span className="text-green-300">{item.suffix}</span>
      </p>
      <p className="text-sm sm:text-base font-medium text-gray-300">
        {item.label}
      </p>
    </div>
  ))}
</div>


      </div>
    </div>
  );
};

export default AboutBanner;
