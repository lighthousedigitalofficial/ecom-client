


import React from "react";
import { Link } from "react-router-dom";
import { FaBoxes, FaHandsHelping, FaTruck } from "react-icons/fa";
import { MdArrowForward } from "react-icons/md";

const bizTabsData = [
  {
    id: 1,
    title: "Vast business offerings",
    description: "Grow your business with our 70 million products and expert suppliers.",
    icon: FaBoxes,
    link: "#",
  },
  {
    id: 2,
    title: "All-in-one trade solution",
    description:
      "Experience easy steps from finding products/audited suppliers, connecting, and starting orders online.",
    icon: FaHandsHelping,
    link: "#",
  },
  {
    id: 3,
    title: "Global shipping services",
    description: "Get efficient logistics with end-to-end tracking and trade assurance.",
    icon: FaTruck,
    link: "#",
  },
];

const HeroTabData = () => {
  return (
    <div className="bg-gray-700 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-4">
          {bizTabsData.map((tab) => (
            <Link
              to={tab.link}
              key={tab.id}
              className="relative flex flex-col items-center p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition transform duration-300"
              aria-label={tab.title}
              title={tab.title}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-red-100 to-red-400 opacity-0 hover:opacity-20 transition duration-500"></div>
              <div className="flex items-center justify-center w-16 h-16 mb-4 bg-gray-700 rounded-full">
                <tab.icon className="text-2xl text-white" />
              </div>
              <h3 className="text-lg font-bold text-center text-white mb-2">{tab.title}</h3>
              <p className="text-sm text-center text-gray-400">{tab.description}</p>
              <MdArrowForward className="mt-4 text-white text-2xl" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroTabData;


// import React from "react";
// import { Link } from "react-router-dom";
// import { FaBoxes, FaHandsHelping, FaTruck } from "react-icons/fa";
// import { MdArrowForward } from "react-icons/md";

// const bizTabsData = [
//   {
//     id: 1,
//     title: "Vast business offerings",
//     description: "Grow your business with our 70 million products and expert suppliers.",
//     icon: <FaBoxes className="text-2xl text-white" />,
//     link: "#catalog-classify-block",
//   },
//   {
//     id: 2,
//     title: "All-in-one trade solution",
//     description:
//       "Experience easy steps from finding products/audited suppliers, connecting, and starting orders online.",
//     icon: <FaHandsHelping className="text-2xl text-white" />,
//     link: "#user-guide-block",
//   },
//   {
//     id: 3,
//     title: "Global shipping services",
//     description: "Get efficient logistics with end-to-end tracking and trade assurance.",
//     icon: <FaTruck className="text-2xl text-white" />,
//     link: "#trading-service",
//   },
// ];

// const HeroTabData = () => {
//   return (
//     <div className="bg-gray-900 py-10">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex flex-col md:flex-row gap-4">
//           {bizTabsData.map((tab) => (
//             <Link
//               to={tab.link}
//               key={tab.id}
//               className="relative flex flex-col items-center p-6 bg-gray-800 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300"
//             >
//               <div className="absolute inset-0 bg-gradient-to-r from-red-100 to-red-400  opacity-0 hover:opacity-5 transition duration-500"></div>
//               <div className="flex items-center justify-center w-16 h-16 mb-4 bg-gray-700 hover:bg-gray-800 rounded-full">
//                 {tab.icon}
//               </div>
//               <h3 className="text-lg font-bold text-center text-white mb-2">{tab.title}</h3>
//               <p className="text-sm text-center text-gray-400">{tab.description}</p>
//               <MdArrowForward className="mt-4 text-white text-2xl" />
//             </Link>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroTabData;

