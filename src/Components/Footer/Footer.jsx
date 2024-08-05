import React from 'react';

import footer_logo from '../Assets/logo_big.png';
import instagram_icon from '../Assets/instagram_icon.png';
import pinterest_icon from '../Assets/pintester_icon.png'; // Corrected file name
import whatsapp_icon from '../Assets/whatsapp_icon.png'; // Corrected file name

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-12 p-8 bg-gray-100">
      {/* Footer Logo and Title */}
      <div className="flex flex-col items-center sm:flex-row sm:justify-between sm:items-center sm:gap-8">
        <div className="flex items-center gap-5">
          <img src={footer_logo} alt="Shopper Logo" className="h-12 sm:h-10" />
          <p className="text-[#383838] text-4xl sm:text-2xl font-bold">SHOPPER</p>
        </div>
      </div>

      {/* Navigation Links */}
      <ul className="flex flex-wrap justify-center gap-12 list-none text-[#252525] text-lg sm:text-base sm:gap-4">
        <li className="cursor-pointer hover:text-red-500">Company</li>
        <li className="cursor-pointer hover:text-red-500">Products</li>
        <li className="cursor-pointer hover:text-red-500">Offices</li>
        <li className="cursor-pointer hover:text-red-500">About</li>
        <li className="cursor-pointer hover:text-red-500">Contact</li>
      </ul>

      {/* Social Media Icons */}
      <div className="flex gap-5 mt-4 sm:gap-3">
        <div className="p-2 bg-white border border-[#e1e1e1] rounded-full">
          <img src={instagram_icon} alt="Instagram Icon" className="h-6 sm:h-5" />
        </div>
        <div className="p-2 bg-white border border-[#e1e1e1] rounded-full">
          <img src={pinterest_icon} alt="Pinterest Icon" className="h-6 sm:h-5" />
        </div>
        <div className="p-2 bg-white border border-[#e1e1e1] rounded-full">
          <img src={whatsapp_icon} alt="WhatsApp Icon" className="h-6 sm:h-5" />
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="flex flex-col items-center gap-8 w-full mt-8 mb-6 text-[#1a1a1a] text-lg sm:text-sm">
        <hr className="w-4/5 h-1 bg-[#ebebeb] rounded-full border-none" />
        <p className="text-center">Copyright © 2024 - All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
