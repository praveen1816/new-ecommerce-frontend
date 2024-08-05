import React from 'react';
import { Link } from 'react-router-dom';
import add_product_icon from './Assets/arrow.png';
import list_product_icon from './Assets/arrow.png';

const Sidebar = () => {
  return (
    <div className= "  lg:bg-gray-100 lg:h-screen lg:w-64  lg:top-21 lg:left-0 lg:pl-4 lg:pr-4 lg:shadow-lg lg:z-10">
      <div className="grid gap-4 lg:flex lg:flex-col">
        <Link to="/addproduct" style={{ textDecoration: 'none' }}>
          <div className="flex items-center justify-center p-4 rounded-md bg-white shadow-sm gap-3 cursor-pointer hover:bg-gray-200 transition-colors duration-300">
            <img src={add_product_icon} alt="Add Product" className="w-6 h-6" />
            <p className="font-semibold text-black hover:text-red-500 ">
              Add Product
            </p>
          </div>
        </Link>
        <Link to="/listproduct" style={{ textDecoration: 'none' }}>
          <div className="flex items-center justify-center p-4 rounded-md bg-white shadow-sm gap-3 cursor-pointer hover:bg-gray-200 transition-colors duration-300">
            <img src={list_product_icon} alt="Product List" className="w-6 h-6" />
            <p className="font-semibold text-black hover:text-red-500">
              Product List
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
