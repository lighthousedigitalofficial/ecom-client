import React from 'react';
import { FaApple, FaGooglePlay } from 'react-icons/fa'; // React icons for Apple and Google Play

const AppPromotion = () => {
  return (
    <div className="content-wrap snipcss-IVCJF max-w-full mx-auto flex flex-col bg-gray-800 w-full items-center justify-center py-8 px-4">
      {/* Title */}
      <h2 className="title text-3xl md:text-4xl font-bold text-center text-white mb-4">Go smart sourcing anytime anywhere</h2>
      <div className="sub-title text-xl md:text-2xl font-light text-white mb-8 text-center drop-shadow-lg">Get the app, get ahead</div>

      {/* Download Section */}
      <div className="download flex flex-col md:flex-row items-center justify-center space-y-6 md:space-x-8 md:space-y-0">
        {/* QR Code */}
        <div
          className="qr-code w-32 h-32 md:w-36 md:h-36 rounded-lg bg-contain bg-no-repeat"
          style={{ backgroundImage: 'url(https://www.micstatic.com/landing/business/dist/assets/qr-code-9e019717.png)' }}
        ></div>

        {/* Download Buttons */}
        <div className="download-btn-wrap flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
          {/* iOS Button */}
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="download-btn ios w-48 h-16 md:w-64 md:h-20 rounded-lg bg-cover cursor-pointer flex items-center justify-center"
            style={{ backgroundImage: 'url(https://www.micstatic.com/landing/business/dist/assets/ios-0d49576a.svg)' }}
          >
            {/* <FaApple size={40} className="text-white" /> */}
          </a>

          {/* Google Play Button */}
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="download-btn google w-48 h-16 md:w-64 md:h-20 rounded-lg bg-cover cursor-pointer flex items-center justify-center"
            style={{ backgroundImage: 'url(https://www.micstatic.com/landing/business/dist/assets/goole-9db41ad6.svg)' }}
          >
            {/* <FaGooglePlay size={40} className="text-white" /> */}
          </a>
        </div>
      </div>
    </div>
  );
};

export default AppPromotion;
