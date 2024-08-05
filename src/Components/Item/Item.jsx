import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ id, name, image, new_price, old_price }) => {
  return (
    <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md w-64">
      <Link to={`/product/${id}`}>
        <img onClick={window.scrollTo(0,0)}
          src={image} 
          alt={name} 
          className="w-full h-50 object-cover rounded-lg mb-4" 
        />
      </Link> 
      <h2 className="text-lg font-semibold mb-2 text-center">{name}</h2>
      <p className="text-gray-600 text-sm line-through mb-1">{old_price}</p>
      <p className="text-gray-900 text-xl font-semibold">{new_price}</p>
    </div>
  );
};

export default Item;
