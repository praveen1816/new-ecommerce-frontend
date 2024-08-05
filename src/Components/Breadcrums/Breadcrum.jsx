import React from 'react';
import arrow_icon from '../Assets/breadcrum_arrow.png';

const Breadcrum = (props) => {
  const { product } = props;

  return (
    <div className="flex items-center gap-2 text-gray-600 font-semibold mx-[50px] my-8 text-sm sm:mx-[30px] sm:text-xs md:mx-[10px] md:text-[10px]">
      <a href="/" className="hover:text-blue-600">Home</a>
      <img src={arrow_icon} alt="arrow" className="w-4 h-4" />
      <a href="/shop" className="hover:text-blue-600">Shop</a>
      <img src={arrow_icon} alt="arrow" className="w-4 h-4" />
      <span>{product.category}</span>
      <img src={arrow_icon} alt="arrow" className="w-4 h-4" />
      <span>{product.name}</span>
    </div>
  );
};

export default Breadcrum;
