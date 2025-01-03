import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const tradingServices = [
  {
    id: 1,
    title: "Ordering",
    icon: "https://www.micstatic.com/landing/business/assets/ordering.png?_v=1735810248049",
    alt: "Ordering",
    details: [
      "Opt for our Secured Trading Service",
      "Refunds available",
    ],
  },
  {
    id: 2,
    title: "Payment",
    icon: "https://www.micstatic.com/landing/business/assets/payment.png?_v=1735810248049",
    alt: "Payment",
    details: [
      "Flexible batch payment",
      "Multiple payment methods",
    ],
  },
  {
    id: 3,
    title: "Shipment",
    icon: "https://www.micstatic.com/landing/business/assets/shipment.png?_v=1735810248049",
    alt: "Shipment",
    details: [
      "Prompt shipment",
      "Trackable logistics updates",
    ],
  },
  {
    id: 4,
    title: "After-sales",
    icon: "https://www.micstatic.com/landing/business/assets/after-sales.png?_v=1735810248049",
    alt: "After-sales",
    details: [
      "Confirm receipt to complete your order",
      "Ongoing after-sales support",
    ],
  },
];

const TradingService = () => {
  return (
    <div className="relative py-16 bg-gray-100">
      <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-600 opacity-30"></div>
      <div className="container mx-auto px-6 relative">
        <h2 className="text-3xl font-bold text-center text-white">From payment to delivery, we protect your trading</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {tradingServices.map((service) => (
            <div key={service.id} className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
              <img className="w-32 h-32 object-contain mb-4" src={service.icon} alt={service.alt} />
              <h3 className="text-2xl font-serif text-gray-800 mb-4">{service.title}</h3>
              <ul className="text-lg text-gray-600">
                {service.details.map((detail, index) => (
                  <li key={index} className="flex items-center mb-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500 mr-3"></span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            to="/learn-more"
            className="inline-flex items-center px-8 py-3 bg-green-500 text-white text-lg font-semibold rounded-full hover:bg-green-400"
          >
            Learn more
            <FaArrowRight className="ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TradingService;
