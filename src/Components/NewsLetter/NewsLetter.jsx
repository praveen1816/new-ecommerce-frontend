import React from 'react';

const NewsLetter = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full max-w-5xl mx-auto my-20 p-10 lg:p-14  bg-gradient-to-b from-[#fde1ff] to-[#e1ffea22] rounded-lg shadow-lgh-[60vh]">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 text-center mb-4">
        Get Exclusive Offers On Your Email
      </h1>
      <p className="text-base sm:text-lg lg:text-xl text-gray-600 text-center mb-6">
        Subscribe to our newsletter and stay updated
      </p>
      <div className="flex flex-col sm:flex-row items-center w-full max-w-xl bg-white rounded-full shadow-inner overflow-hidden">
        <input
          type="email"
          placeholder="Your Email ID"
          className="flex-grow px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none"
        />
        <button className="w-full sm:w-auto bg-black text-white font-semibold px-6 py-3 rounded-full sm:rounded-l-none hover:bg-blue-700 transition-colors">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default NewsLetter;
