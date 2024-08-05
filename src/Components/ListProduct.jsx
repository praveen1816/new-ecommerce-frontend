import React, { useEffect, useState } from 'react';
import cross_icon from './Assets/cross_icon.png'; // Update the path and extension if necessary

const ListProduct = () => {
  const [allProducts, setAllProducts] = useState([]);
  const apiUrl = import.meta.env.VITE_API_URL;
  const fetchInfo = async () => {
    try {
      const res = await fetch(`${apiUrl}/allproducts`);
      const data = await res.json();
      setAllProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  const remove_product = async (id) => {
    await fetch(`${apiUrl}/removeproduct`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: id }),
    });
    await fetchInfo();
  };

  return (
    <div className="list-product flex flex-col items-center h-auto p-4 sm:p-10 m-0 rounded-lg bg-white shadow-lg">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">All Products List</h1>
      <div className="product-header grid grid-cols-5 gap-4 w-full text-gray-600 text-base font-semibold mb-2">
        <p className="text-center">Product</p>
        <p className="text-center">Title</p>
        <p className="text-center">Old Price</p>
        <p className="text-center">Category</p>
        <p className="text-center">Remove</p>
      </div>
      <div className="listproduct-allproducts w-full border-t border-gray-200">
        {allProducts.map((product, index) => (
          <div key={index} className="listproduct-item grid grid-cols-5 gap-4 w-full p-4 items-center border-b border-gray-200">
            <div className="flex items-center justify-center">
              <img src={product.image} alt={product.name} className="listproduct-image h-16 w-16 object-cover rounded-md" />
            </div>
            <p className="text-gray-800 text-center">{product.name}</p>
            <p className="text-gray-500 text-center">{product.old_price}</p>
            <p className="text-gray-500 text-center">{product.category}</p>
            <div className="flex justify-center">
              <img
                className="listproduct-remove-icon cursor-pointer h-6 w-6"
                src={cross_icon}
                alt="Remove"
                onClick={() => remove_product(product.id)} // Replace with actual remove logic
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListProduct;
