import React from 'react';

import navlogo from './Assets/nav-logo.svg';
import navProfile from './Assets/nav-profile.svg';

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4 shadow-md mb-1 bg-white">
      <img src={navlogo} alt="Logo" className="w-20" />
      <img src={navProfile} alt="Profile" className="w-10" />
    </div>
  );
};

export default Navbar;
