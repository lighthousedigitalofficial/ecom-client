import React from 'react';
import { FaPlay } from 'react-icons/fa';
import './SecureFlow.css'
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
    icon: 'https://s.alicdn.com/@img/imgextra/i1/O1CN01I0ebSF1UCntpAivUU_!!6000000002482-2-tps-1200-210.png_q60.jpg',
    description:
      'Source confidently with access to secure payment options, protection against product or shipping issues, and mediation support for any purchase-related concerns when you order and pay on Alibaba.com.',
    videoLink: 'https://tradeassurance.alibaba.com/?spm=a2700.product_home_newuser.service_guarantee@@ta_plus.view_more&tracelog=nhp_btm_service_ta',
  },
];

const SecureFlow = () => {
  return (
    <div className="security-floor snipcss0-0-0-1 snipcss-VmSpc style-bV94A" id="ServiceNavigation2">
      <div className="security-floor_wrapper floor-container snipcss0-1-1-2">
        <div className="security-floor_title snipcss0-2-2-3" title="Trade with confidence from production quality to purchase protection">
          Trade with confidence from production quality to purchase protection
        </div>
        <div className="security-floor_card_wrapper snipcss0-2-2-4">
          {securityData.map((item, index) => (
            <div key={index} data-spm={index === 0 ? 'service_guarantee@@verified' : 'service_guarantee@@ta_plus'} className="home-dot-element security-floor_card snipcss0-3-4-5" data-appeared="false">
              <div className="security-floor_card_text_1 snipcss0-4-5-6">{item.title}</div>
              <img className="security-floor_icon snipcss0-4-5-7" src={item.icon} alt="icon" />
              <div className="security-floor_card_text_2 home-fz-medium snipcss0-4-5-8" title={item.description}>
                {item.description}
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SecureFlow;
