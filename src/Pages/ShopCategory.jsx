import React, { useContext, useEffect } from 'react';
import dropdown_icon from '../Components/Assets/dropdown_icon.png';
import { ShopContext } from '../Context/ShopContext';
import Item from '../Components/Item/Item';

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);

  // Filter products by category
  const filteredProducts = all_product.filter(
    (item) => props.category.toLowerCase() === item.category.toLowerCase()
  );

  // Debugging: Log filtered products to check if they are correctly filtered
  useEffect(() => {
    console.log('Filtered products for category:', props.category);
    console.log(filteredProducts);
  }, [props.category, filteredProducts]);

  return (
    <div className='shop-category'>
      <img className='block mx-auto my-8 w-full max-w-4xl object-cover rounded-lg shadow-md' src={props.banner} alt={`${props.category} banner`} />
      <div className="flex justify-between items-center px-6 py-3 mb-6 border-b border-gray-300">
        <p className="font-semibold text-gray-700">
          <span>Showing {filteredProducts.length} products out of 36</span>
        </p>
        <div className="flex items-center px-4 py-2 rounded-full border border-gray-300 bg-white shadow-sm">
          Sort by <img className='ml-2' src={dropdown_icon} alt="Dropdown icon" />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-4 md:mx-8">
        {filteredProducts.map((item) => (
          <Item 
            key={item.id} 
            id={item.id} 
            name={item.name} 
            image={item.image} 
            new_price={item.new_price} 
            old_price={item.old_price}
          />
        ))}
      </div>
      <div className='flex justify-center mt-0'>
        <button className='mx-auto my-24 w-[233px] h-[69px] rounded-full bg-gray-500 text-white text-lg font-medium'>
          Explore More
        </button>
      </div>
    </div>
  );
};

export default ShopCategory;
