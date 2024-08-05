import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';

const Popular = () => {

  const [popularProducts,setPopularProducts]=useState([]);
  const apiUrl = import.meta.env.VITE_API_URL;
  useEffect(()=>{
    fetch(`${apiUrl}/popularinwomen`)
    .then((response)=>response.json())
    .then((data)=>setPopularProducts(data));
  },[])



  return (
    <div className="flex flex-col items-center gap-8 py-12 bg-gray-50">
      <h1 className="text-gray-900 text-4xl md:text-5xl font-semibold text-center">
        Popular in Women
      </h1>
      <hr className="w-40 h-1 rounded-full bg-gray-800 mb-8" />
      <div className="flex flex-wrap justify-center gap-6">
        {popularProducts.map((item) => (
          <Item 
            key={item.id} 
            id={item.id} 
            name={item.name} 
            image={item.image} 
            new_price={item.new_price} 
            old_price={item.old_price} // Corrected prop name
          />
        ))}
      </div>
    </div>
  );
};

export default Popular;
