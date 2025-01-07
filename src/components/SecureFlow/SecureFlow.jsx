// import React from 'react';
// import { FaPlay } from 'react-icons/fa';
// import './SecureFlow.css'
// const securityData = [
//   {
//     title: 'Ensure production quality with',
//     icon: 'https://s.alicdn.com/@img/imgextra/i3/O1CN01cnsiSd1sFb5vxUBwd_!!6000000005737-2-tps-1200-210.png_q60.jpg',
//     description:
//       'Connect with a variety of suppliers with third-party-verified credentials and capabilities. Look for the "Verified" logo to begin sourcing with experienced suppliers your business could rely on.',
//     videoLink: 'https://sale.alibaba.com/p/d7v3mp6m3?spm=a2700.product_home_newuser.service_guarantee@@verified.view_more&wx_navbar_transparent=true&path=/p/d7v3mp6m3&ncms_spm=a27aq.27913922&prefetchKey=met&wx_xpage=true',
//   },
//   {
//     title: 'Protect your purchase with',
//     icon: 'https://s.alicdn.com/@img/imgextra/i1/O1CN01I0ebSF1UCntpAivUU_!!6000000002482-2-tps-1200-210.png_q60.jpg',
//     description:
//       'Source confidently with access to secure payment options, protection against product or shipping issues, and mediation support for any purchase-related concerns when you order and pay on Alibaba.com.',
//     videoLink: 'https://tradeassurance.alibaba.com/?spm=a2700.product_home_newuser.service_guarantee@@ta_plus.view_more&tracelog=nhp_btm_service_ta',
//   },
// ];

// const SecureFlow = () => {
//   return (
//     <div className="security-floor snipcss0-0-0-1 snipcss-VmSpc style-bV94A" id="ServiceNavigation2">
//       <div className="security-floor_wrapper floor-container snipcss0-1-1-2">
//         <div className="security-floor_title snipcss0-2-2-3" title="Trade with confidence from production quality to purchase protection">
//           Trade with confidence from production quality to purchase protection
//         </div>
//         <div className="security-floor_card_wrapper snipcss0-2-2-4">
//           {securityData.map((item, index) => (
//             <div key={index} data-spm={index === 0 ? 'service_guarantee@@verified' : 'service_guarantee@@ta_plus'} className="home-dot-element security-floor_card snipcss0-3-4-5" data-appeared="false">
//               <div className="security-floor_card_text_1 snipcss0-4-5-6">{item.title}</div>
//               <img className="security-floor_icon snipcss0-4-5-7" src={item.icon} alt="icon" />
//               <div className="security-floor_card_text_2 home-fz-medium snipcss0-4-5-8" title={item.description}>
//                 {item.description}
//               </div>
              
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SecureFlow;


import React from 'react';

const securityData = [
  {
    title: 'Ensure production quality with',
    icon: 'https://s.alicdn.com/@img/imgextra/i3/O1CN01cnsiSd1sFb5vxUBwd_!!6000000005737-2-tps-1200-210.png_q60.jpg',
    description:
      'Connect with a variety of suppliers with third-party-verified credentials and capabilities. Look for the "Verified" logo to begin sourcing with experienced suppliers your business could rely on.',
    videoLink: 'https://sale.alibaba.com/p/d7v3mp6m3?spm=a2700.product_home_newuser.service_guarantee@@verified.view_more&wx_navbar_transparent=true&path=/p/d7v3mp6m3&ncms_spm=a27aq.27913922&prefetchKey=met&wx_xpage=true',
  },
  {
    title: 'Protect your purchase with',
    icon: '/Rs.png',
    description:
      'Source confidently with access to secure payment options, protection against product or shipping issues, and mediation support for any purchase-related concerns when you order and pay on Alibaba.com.',
    videoLink: 'https://tradeassurance.alibaba.com/?spm=a2700.product_home_newuser.service_guarantee@@ta_plus.view_more&tracelog=nhp_btm_service_ta',
  },
];

const SecureFlow = () => {
  return (
    <div
      id="ServiceNavigation2"
      className="security-floor bg-cover bg-center text-white w-full overflow-hidden relative p-5"
      style={{ backgroundImage: "url('/ecommerce-2.jpg')" }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="security-floor_wrapper relative max-w-5xl mx-auto py-10 lg:py-20">
        <h2 className="security-floor_title text-center text-2xl md:text-3xl lg:text-4xl font-bold mb-10 lg:mb-16 px-4 sm:px-12">
          Trade with confidence from production quality to purchase protection
        </h2>
        
        <div className="security-floor_card_wrapper flex flex-col sm:flex-row sm:flex-wrap lg:flex-nowrap justify-between gap-6">
          {securityData.map((item, index) => (
            <div
              key={index}
              data-spm={index === 0 ? 'service_guarantee@@verified' : 'service_guarantee@@ta_plus'}
              className="security-floor_card bg-white/10 backdrop-blur-md rounded-lg p-6 md:p-10 w-full sm:max-w-[48%] lg:max-w-md text-sm text-left"
            >
              <h3 className="security-floor_card_text_1 text-lg md:text-xl font-semibold mb-4">
                {item.title}
              </h3>
              <img
                className="security-floor_icon w-full h-12 md:h-16 object-contain mb-4 md:mb-6"
                src={item.icon}
                alt="icon"
              />
              <p
                className="security-floor_card_text_2 text-sm leading-6 text-ellipsis overflow-hidden line-clamp-4"
                title={item.description}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SecureFlow;
