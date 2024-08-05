import React from 'react';
import exclusive_image from '../Assets/exclusive_image.png';

const Offers = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between w-full lg:w-4/5 mx-auto p-8 lg:p-12 bg-gradient-to-b from-[#fde1ff] to-[#e1ffea22] rounded-lg shadow-lg mb-16">
      <div className="flex-1 text-center lg:text-left mb-8 lg:mb-0">
        <h1 className="text-gray-800 text-4xl lg:text-5xl font-bold leading-tight mb-4">Exclusive Offers For You</h1>
        <p className="text-gray-700 text-lg lg:text-xl mb-6">ONLY ON BEST SELLERS PRODUCTS</p>
        <button className="bg-red-500 text-white text-lg font-medium py-3 px-8 rounded-full shadow-lg hover:bg-red-600 transition duration-300">
          Check Now
        </button>
      </div>
      <div className="flex-1 flex justify-center">
        <img src={exclusive_image} alt="Exclusive Offers" className="max-w-full h-auto rounded-lg shadow-md" />
      </div>
    </div>
  );
}

export default Offers;
