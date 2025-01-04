import React from 'react';

const SupplierAbout = () => {
  const sections = [
    {
      id: 1,
      image: 'https://www.micstatic.com/micen/img/about/abt-sp-1.jpg?_v=1735461922250',
      alt: 'Trustworthy Pakistani Suppliers',
      title: 'Trustworthy Pakistani Suppliers',
      description:
        "To ensure trade safety and reduce risks for global buyers, all premium suppliers on Ecommerce.com are verified by leading global inspection companies. Global buyers can access supplier audit reports online for free to verify their authenticity and gain confidence in their business dealings.",
      learnMoreLink: '/',
      button: {
        text: 'Are you a Pakistani Exporter? Join Ecommerce Now',
        link: '/',
      },
      reversal: true,
    },
    {
      id: 2,
      image: 'https://www.micstatic.com/micen/img/about/abt-sp-2.jpg?_v=1735461922250',
      alt: 'Trade Easily and Safely',
      title: 'Trade Easily and Safely',
      description:
        'Ecommerce is designed to help registered members place, accept, and manage orders for products and services with ease and security, promoting smooth trade for businesses across Pakistan.',
      learnMoreLink: '/',
      button: null,
      reversal: false,
    },
  ];

  return (
    <div className="min-w-full py-16">
      <div className="max-w-screen-xl mx-auto px-4">
        {/* First Row */}
        <div className="grid gap-8 mb-8">
          <div className={`flex ${sections[0].reversal ? 'flex-row-reverse' : ''} bg-gray-100 rounded-lg overflow-hidden`}>
            <div className="flex-1 relative">
              <img src={sections[0].image} alt={sections[0].alt} className="w-full h-full object-cover" />
              {sections[0].button && (
                <a
                  href={sections[0].button.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-red-600 text-white py-2 px-6 rounded-full shadow-lg hover:bg-red-700 transition"
                >
                  {sections[0].button.text}
                </a>
              )}
            </div>
            <div className="flex-1  p-8">
              <div>
                <h2 className="text-2xl font-semibold mb-4">{sections[0].title}</h2>
                <p className="text-base text-gray-700 mb-4">{sections[0].description}</p>
                <div>
                  <a
                    href={sections[0].learnMoreLink}
                    className="text-blue-600 hover:text-blue-800 flex items-center"
                  >
                    Learn more <span className="ml-2">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Second Row */}
        <div className="grid gap-8">
          <div className={`flex ${sections[1].reversal ? 'flex-row-reverse' : ''} bg-gray-100 rounded-lg overflow-hidden`}>
            <div className="flex-1 relative">
              <img src={sections[1].image} alt={sections[1].alt} className="w-full h-full object-cover" />
              {sections[1].button && (
                <a
                  href={sections[1].button.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-red-600 text-white py-2 px-6 rounded-full shadow-lg hover:bg-red-700 transition"
                >
                  {sections[1].button.text}
                </a>
              )}
            </div>
            <div className="flex-1  p-8">
              <div>
                <h2 className="text-2xl font-semibold mb-4">{sections[1].title}</h2>
                <p className="text-base text-gray-700 mb-4">{sections[1].description}</p>
                <div>
                  <a
                    href={sections[1].learnMoreLink}
                    className="text-blue-600 hover:text-blue-800 flex items-center"
                  >
                    Learn more <span className="ml-2">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupplierAbout;
