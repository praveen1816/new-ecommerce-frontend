import React, { useContext } from 'react';
import { ShopContext } from '../../Context/ShopContext'; // Ensure the path is correct
import remove_icon from '../Assets/cart_cross_icon.png'; // Ensure the correct path to your remove icon

const CartItems = () => {
  const { all_product, cartItems, removeFromCart, getTotalCartAmount } = useContext(ShopContext);

  // Helper function to calculate the total price
  const calculateTotal = (price, quantity) => price * quantity;

  return (
    <div className="container mx-auto p-6 bg-white rounded-lg shadow-lg">
      <div className="grid grid-cols-6 gap-4 text-lg font-semibold text-gray-800 border-b pb-4 mb-4">
        <p className="text-center border-r border-gray-300 pr-4">Product</p>
        <p className="text-center border-r border-gray-300 pr-4">Title</p>
        <p className="text-center border-r border-gray-300 pr-4">Price</p>
        <p className="text-center border-r border-gray-300 pr-4">Quantity</p>
        <p className="text-center border-r border-gray-300 pr-4">Total</p>
        <p className="text-center">Remove</p>
      </div>

      {all_product.map((product) => {
        if (cartItems[product.id] > 0) {
          const quantity = cartItems[product.id];
          const total = calculateTotal(product.new_price, quantity);

          return (
            <div key={product.id} className="grid grid-cols-6 gap-4 items-center py-4 border-b border-gray-200">
              <div className="flex justify-center border-r border-gray-300 pr-4">
                <img src={product.image} alt={product.name} className="w-16 h-16 object-cover rounded-lg shadow-sm" />
              </div>
              <p className="col-span-1 text-left text-gray-800 font-medium truncate max-w-[12rem] border-r border-gray-300 pr-4">
                {product.name}
              </p>
              <p className=" col-span-1 text-center text-gray-600 border-r border-gray-300 pr-4">${product.new_price.toFixed(2)}</p>
              <div className="flex justify-center border-r border-gray-300 pr-4">
                <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-100">
                  {quantity}
                </button>
              </div>
              <p className="text-center text-gray-800 border-r border-gray-300 pr-4">${total.toFixed(2)}</p>
              <div className="flex justify-center">
                <img 
                  src={remove_icon} 
                  alt="Remove" 
                  className="w-6 h-6 cursor-pointer hover:opacity-80 transition-opacity"
                  onClick={() => removeFromCart(product.id)} 
                />
              </div>
            </div>
          );
        }
        return null; // Skip rendering if quantity is 0
      })}

      <div className="mt-8 p-6 bg-gray-50 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">Cart Totals</h1>
        <div className="text-lg">
          <div className="flex justify-between py-2 border-b border-gray-300">
            <p className="text-gray-700">Subtotal</p>
            <p className="text-gray-700">${getTotalCartAmount().toFixed(2)}</p>
          </div>
          <div className="flex justify-between py-2 border-b border-gray-300">
            <p className="text-gray-700">Shipping Fee</p>
            <p className="text-gray-700">Free</p>
          </div>
          <div className="flex justify-between py-2">
            <h3 className="text-lg font-bold">Total</h3>
            <h3 className="text-lg font-bold">${getTotalCartAmount().toFixed(2)}</h3>
          </div>
        </div>
        <button className="mt-6 w-full px-4 py-2 text-lg text-white bg-red-500 rounded-md hover:bg-red-600 transition">
          PROCEED TO CHECKOUT
        </button>
      </div>

      <div className="mt-8">
        <p className="mb-2">If you have a promo code, enter it here:</p>
        <div className="flex">
          <input 
            type="text" 
            placeholder="Promo code" 
            className="flex-grow px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-red-500" 
          />
          <button className="px-4 py-2 bg-red-500 text-white rounded-r-md hover:bg-red-600 transition">
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
