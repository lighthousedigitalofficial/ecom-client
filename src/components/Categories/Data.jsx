import React from "react";
import { FaBox, FaUsers, FaListUl, FaGlobe } from "react-icons/fa";
import { Link } from "react-router-dom";

const stats = [
  {
    id: 1,
    value: "200M+",
    label: "products",
    icon: <FaBox />,
    link: "/",
  },
  {
    id: 2,
    value: "200K+",
    label: "suppliers",
    icon: <FaUsers />,
    link: "/",
  },
  {
    id: 3,
    value: "5,900",
    label: "product categories",
    icon: <FaListUl />,
    link: "/",
  },
  {
    id: 4,
    value: "200+",
    label: "countries and regions",
    icon: <FaGlobe />,
    link: "/",
  },
];

const StatsData = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-xl mx-auto">
      {stats.map((stat) => (
        <Link
          to={stat.link}
          key={stat.id}
          className="relative  p-6 flex items-center space-x-4 hover:scale-105 transition transform"
        >
          <div>
            <span className="text-4xl font-bold text-primary-600 block">
              {stat.value}
            </span>
            <p className="text-lg font-medium text-gray-700">{stat.label}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default StatsData;
