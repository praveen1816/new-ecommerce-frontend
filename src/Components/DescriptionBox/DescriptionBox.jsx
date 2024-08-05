import React from 'react';

const DescriptionBox = () => {
  return (
    <div className="mx-4 my-8 md:mx-12 md:my-16 lg:mx-32 lg:my-24">
      <div className="flex flex-col md:flex-row">
        <div className="flex items-center justify-center text-base font-semibold w-full md:w-[171px] h-[70px] border border-gray-300 bg-gray-50">
          Description
        </div>
        <div className="flex items-center justify-center text-base font-semibold w-full md:w-[171px] h-[70px] border border-gray-300 bg-gray-100 text-gray-600 mt-2 md:mt-0 md:ml-2">
          Reviews (122)
        </div>
      </div>
      <div className="flex flex-col gap-6 border border-gray-300 p-8 md:p-12 mt-4">
        <p className="text-sm md:text-base">
          An e-commerce website is an online platform that facilitates the buying and selling of products or services over the internet. It serves as a virtual marketplace where businesses and individuals can showcase their products, interact with customers, and conduct transactions without the need for a physical presence. E-commerce websites have gained immense popularity due to their convenience, accessibility, and the global reach they offer.
        </p>
        <p className="text-sm md:text-base">
          They provide a range of features such as product listings, search functionality, shopping carts, secure payment gateways, and customer support. The ease of use, along with the ability to compare products, read reviews, and make purchases from the comfort of one's home, has made e-commerce an essential part of modern consumer behavior.
        </p>
      </div>
    </div>
  );
}

export default DescriptionBox;
