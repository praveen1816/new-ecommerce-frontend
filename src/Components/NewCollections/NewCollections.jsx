import React, { useState, useEffect } from 'react';
import Item from '../Item/Item';

const NewCollections = () => {
  const [newCollection, setNewCollection] = useState([]);
  const [loading, setLoading] = useState(true); // Optional: For loading state
  const [error, setError] = useState(null); // Optional: For error handling
  const apiUrl = import.meta.env.VITE_API_URL;
  useEffect(() => {
    const fetchNewCollections = async () => {
      try {
        const response = await fetch(`${apiUrl}/newcollections`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setNewCollection(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false); // Set loading to false when done
      }
    };

    fetchNewCollections();
  }, []);

  if (loading) return <p>Loading...</p>; // Optional: Display loading state
  if (error) return <p>Error: {error}</p>; // Optional: Display error state

  return (
    <div className="flex flex-col items-center gap-8 py-12 bg-gray-50">
      <h1 className="text-gray-900 text-4xl md:text-5xl font-semibold text-center">
        NEW COLLECTIONS
      </h1>
      <hr className="w-40 h-1 rounded-full bg-gray-800 mb-8" />
      <div className="flex flex-wrap justify-center gap-6">
        {newCollection.map((item) => (
          <Item
            key={item.id} // Ensure 'id' is unique for each item
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
    </div>
  );
};

export default NewCollections;
