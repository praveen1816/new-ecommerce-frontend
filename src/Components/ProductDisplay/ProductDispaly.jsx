import React, { useContext } from 'react';
import star_icon from '../Assets/star_icon.png';
import star_dull_icon from '../Assets/star_dull_icon.png';
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);

  return (
    <div className="flex flex-col lg:flex-row lg:items-center mx-auto max-w-screen-xl px-4 py-8">
      {/* Left Section - Images (for all screens) */}
      <div className="flex flex-col gap-4 lg:w-[200px] lg:items-center">
        <div className="flex flex-wrap gap-2 lg:flex-col">
          <img src={product.image} alt="Product" className="h-[120px] w-[120px] object-cover rounded-lg shadow-md lg:h-[185px] lg:w-[185px]" />
          <img src={product.image} alt="Product" className="h-[120px] w-[120px] object-cover rounded-lg shadow-md lg:h-[185px] lg:w-[185px]" />
          <img src={product.image} alt="Product" className="h-[120px] w-[120px] object-cover rounded-lg shadow-md lg:h-[185px] lg:w-[185px]" />
          <img src={product.image} alt="Product" className="h-[120px] w-[120px] object-cover rounded-lg shadow-md lg:h-[185px] lg:w-[185px]" />
        </div>
        <div className="flex justify-center lg:hidden mt-4">
          <img className="w-full h-[400px] object-cover rounded-lg shadow-lg" src={product.image} alt="Main Product" />
        </div>
      </div>

      {/* Main Product Image (only for large screens) */}
      <div className="hidden lg:flex lg:justify-center lg:flex-shrink-0 lg:w-[650px] lg:h-[790px] lg:object-cover lg:rounded-lg lg:shadow-lg">
        <img className="w-full h-full object-cover rounded-lg shadow-lg" src={product.image} alt="Main Product" />
      </div>

      {/* Details Section */}
      <div className="flex flex-col ml-0 lg:ml-8 mt-6 lg:mt-0 lg:w-[400px]">
        <h1 className="text-2xl lg:text-3xl font-extrabold mb-4">{product.name}</h1>
        <div className="flex items-center mt-3 gap-1 text-gray-800 text-base lg:text-lg">
          <img src={star_icon} alt="Star" className="w-4 h-4 lg:w-5 lg:h-5" />
          <img src={star_icon} alt="Star" className="w-4 h-4 lg:w-5 lg:h-5" />
          <img src={star_icon} alt="Star" className="w-4 h-4 lg:w-5 lg:h-5" />
          <img src={star_icon} alt="Star" className="w-4 h-4 lg:w-5 lg:h-5" />
          <img src={star_dull_icon} alt="Star Dull" className="w-4 h-4 lg:w-5 lg:h-5" />
          <p className="text-xs lg:text-base">(122)</p>
        </div>
        <div className="flex mt-4 gap-4 text-xl lg:text-2xl font-bold">
          <div className="text-gray-500 line-through">${product.old_price}</div>
          <div className="text-red-500">${product.new_price}</div>
        </div>
        <div className="mt-4 lg:mt-6 text-base lg:text-lg font-semibold text-gray-600">
          <h2 className="text-lg lg:text-xl font-semibold mb-2">Description</h2>
          <p>{product.description}</p>
        </div>
        <div className="mt-4 lg:mt-6 text-base lg:text-lg font-semibold text-gray-600">
          <h2 className="text-lg lg:text-xl mb-4">Select Size</h2>
          <div className="flex flex-wrap gap-2 lg:gap-5">
            <div className="px-4 py-2 bg-gray-100 border border-gray-300 rounded-md cursor-pointer hover:bg-gray-200 transition">S</div>
            <div className="px-4 py-2 bg-gray-100 border border-gray-300 rounded-md cursor-pointer hover:bg-gray-200 transition">M</div>
            <div className="px-4 py-2 bg-gray-100 border border-gray-300 rounded-md cursor-pointer hover:bg-gray-200 transition">L</div>
            <div className="px-4 py-2 bg-gray-100 border border-gray-300 rounded-md cursor-pointer hover:bg-gray-200 transition">XL</div>
            <div className="px-4 py-2 bg-gray-100 border border-gray-300 rounded-md cursor-pointer hover:bg-gray-200 transition">XXL</div>
          </div>
        </div>
        <button onClick={() => addToCart(product.id)} className="mt-6 px-6 py-3 text-white text-base lg:text-lg font-bold bg-red-500 rounded-md hover:bg-red-600 transition duration-200">
          ADD TO CART
        </button>
        <div className="mt-4 lg:mt-6 text-gray-600 text-base lg:text-lg">
          <p className="font-semibold">Category:</p>
          <p className="font-medium">Women, T-Shirt, Crop Top</p>
          <p className="font-semibold mt-2">Tags:</p>
          <p className="font-medium">Modern, Latest</p>
        </div>
      </div>
    </div>
  );
}

export default ProductDisplay;
