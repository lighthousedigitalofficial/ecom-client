// import { FaArrowRight } from 'react-icons/fa'; // React Icon for the arrow

// const JoinFree = () => {
//   // You can use an array for button details if needed
//   const buttons = [
//     {
//       text: "Start exploring now",
//       link: "/",
//       isMobile: false,
//       bgColor: "bg-transparent",
//     },
    
    
//     {
//       text: "Join free",
//       link: "/",
//       isMobile: true,
//       bgColor: "bg-primary-600 ",
//     },
//   ];

//   return (
//     <div className="join-free-wrapper bg-gray-800">
//       <div className="content-bg max-w-screen-xl mx-auto h-96 bg-cover bg-[url('https://www.micstatic.com/landing/business/dist/assets/join-free@2x-bab3a17d.png')]">
//         <div className="content-wrap flex flex-col items-center justify-center px-4 py-20 text-white">
//           <div className="content-title text-5xl font-extrabold text-center">
//             Trusted by millions of buyers
//           </div>
//           <p className="content-sub text-xl mt-2 mb-5 text-center max-w-2xl">
//             Customize and source your products on uraan.com, 
//             while taking advantage of secure online payment and
//              convenient logistics services to complete your entire purchasing process.
//               The one-stop procurement service will promote your business and increase your profit.
//           </p>
//           <div className="btn-wrap flex justify-center space-x-8">
//             {buttons.map((button, index) => (
//               <a
//                 key={index}
//                 href={button.link}
//                 className={`exploring-btn flex items-center justify-center px-4 py-2 text-lg font-semibold rounded-full ${button.bgColor} border-2 border-primary-400 hover:bg-opacity-70`}
//               >
//                 {button.text}
//                 <FaArrowRight className="ml-2" />
//               </a>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default JoinFree;




import { FaArrowRight } from 'react-icons/fa'; // React Icon for the arrow

const JoinFree = () => {
  const buttons = [
    {
      text: "Start exploring now",
      link: "/",
      isMobile: false,
      bgColor: "bg-transparent",
    },
    {
      text: "Join free",
      link: "/",
      isMobile: true,
      bgColor: "bg-primary-600 ",
    },
  ];

  return (
    <div className="join-free-wrapper bg-gray-800">
      <div className="content-bg max-w-screen-xl mx-auto h-96 bg-cover bg-[url('https://www.micstatic.com/landing/business/dist/assets/join-free@2x-bab3a17d.png')]">
        <div className="content-wrap flex flex-col items-center justify-center px-4 py-10 sm:py-20 text-white">
          <div className="content-title text-3xl sm:text-5xl font-extrabold text-center">
            Trusted by millions of buyers
          </div>
          <p className="content-sub text-base sm:text-xl mt-2 mb-5 text-center max-w-2xl">
            Customize and source your products on uraan.com,
            while taking advantage of secure online payment and
            convenient logistics services to complete your entire purchasing process.
            The one-stop procurement service will promote your business and increase your profit.
          </p>
          <div className="btn-wrap flex flex-col sm:flex-row justify-center space-y-4 sm:space-x-8 sm:space-y-0">
            {buttons.map((button, index) => (
              <a
                key={index}
                href={button.link}
                className={`exploring-btn flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-semibold rounded-full ${button.bgColor} border-2 border-primary-400 hover:bg-opacity-70`}
              >
                {button.text}
                <FaArrowRight className="ml-2" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinFree;
