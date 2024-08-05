import React, { useContext, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { ShopContext } from '../../Context/ShopContext';
import nav_dropdown from '../Assets/nav_dropdown.png';

function Navbar() {
  const [menu, setMenu] = useState("shop");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { getTotalCartItems } = useContext(ShopContext);
  const menuRef = useRef();

  const dropdown_toggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('auth-token');
    window.location.replace('/');
  };

  return (
    <div className="relative flex justify-between items-center p-4 shadow-md bg-white top-0 left-0 w-full z-20">
      <div className="flex items-center gap-4 md:gap-6 lg:gap-8">
        <img src={logo} alt="Logo" className="w-12 md:w-16 lg:w-20" />
        <p className="text-xl md:text-2xl lg:text-3xl font-bold">SHOPPER</p>
      </div>
      <img
        onClick={dropdown_toggle}
        src={nav_dropdown}
        alt="Dropdown"
        className={`w-8 md:hidden cursor-pointer transition-transform duration-300 ${isMenuOpen ? 'rotate-180' : ''}`}
      />
      <ul
        ref={menuRef}
        className={`absolute top-16 left-0 w-full bg-white shadow-lg rounded-lg transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:static md:w-auto md:flex md:items-center md:gap-6 md:translate-x-0`}
      >
        <li className="hover:bg-gray-100 p-4 md:p-2">
          <Link
            className={`text-gray-600 block ${menu === "shop" ? "text-red-500" : ""}`}
            to='/'
            onClick={() => { setMenu("shop"); setIsMenuOpen(false); }}
          >
            Shop
            {menu === "shop" && <hr className="border-none w-full h-1 rounded-full bg-red-500 mt-1" />}
          </Link>
        </li>
        <li className="hover:bg-gray-100 p-4 md:p-2">
          <Link
            className={`text-gray-600 block ${menu === "men" ? "text-red-500" : ""}`}
            to='/men'
            onClick={() => { setMenu("men"); setIsMenuOpen(false); }}
          >
            Men
            {menu === "men" && <hr className="border-none w-full h-1 rounded-full bg-red-500 mt-1" />}
          </Link>
        </li>
        <li className="hover:bg-gray-100 p-4 md:p-2">
          <Link
            className={`text-gray-600 block ${menu === "women" ? "text-red-500" : ""}`}
            to='/women'
            onClick={() => { setMenu("women"); setIsMenuOpen(false); }}
          >
            Women
            {menu === "women" && <hr className="border-none w-full h-1 rounded-full bg-red-500 mt-1" />}
          </Link>
        </li>
        <li className="hover:bg-gray-100 p-4 md:p-2">
          <Link
            className={`text-gray-600 block ${menu === "kids" ? "text-red-500" : ""}`}
            to='/kids'
            onClick={() => { setMenu("kids"); setIsMenuOpen(false); }}
          >
            Kids
            {menu === "kids" && <hr className="border-none w-full h-1 rounded-full bg-red-500 mt-1" />}
          </Link>
        </li>
      </ul>
      <div className="flex items-center gap-6 md:gap-8">
        {localStorage.getItem('auth-token') ? (
          <button
            onClick={handleLogout}
            className="w-32 h-12 border border-gray-600 rounded-full text-black text-lg font-medium transition-transform transform hover:bg-gray-100 active:bg-gray-200"
          >
            Logout
          </button>
        ) : (
          <Link to='/login'>
            <button className="w-32 h-12 border border-gray-600 rounded-full text-black text-lg font-medium transition-transform transform hover:bg-gray-100 active:bg-gray-200">
              Login
            </button>
          </Link>
        )}
        <div className="relative">
          <Link to='/cart'>
            <img src={cart_icon} alt="Cart Icon" className="w-8 md:w-10 lg:w-12" />
            <div className="absolute top-0 right-0 w-6 h-6 flex justify-center items-center rounded-full bg-red-600 text-white text-xs font-bold">
              {getTotalCartItems()}
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
