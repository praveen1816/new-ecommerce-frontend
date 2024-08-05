import React, { useState, useEffect } from 'react';
import App from './src/App';
import Abhi from './Abhi';

const Admin = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check local storage on mount
    const userFromStorage = localStorage.getItem('user');
    if (userFromStorage) {
      setUser(userFromStorage);
    }

    // Clear local storage and reset user state on component mount
    return () => {
      // Cleanup logic if needed
    };
  }, []);

  const handleAdminClick = () => {
    localStorage.setItem('user', 'Admin');
    setUser('Admin');
  };

  const handleUserClick = () => {
    localStorage.setItem('user', 'Abhi');
    setUser('Abhi');
  };

  const handleBackClick = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {user === null ? (
        <div className="flex flex-col space-y-4">
          <button
            onClick={handleAdminClick}
            className="px-6 py-3 bg-red-500 text-black font-semibold rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75 transition duration-300 ease-in-out transform hover:scale-105"
          >
            Click as User
          </button>
          <button
            onClick={handleUserClick}
            className="px-6 py-3 bg-red-500 text-black font-semibold rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75 transition duration-300 ease-in-out transform hover:scale-105"
          >
            Click as Admin
          </button>
        </div>
      ) : (
        <div className="w-full max-w-2xl">
          {user === 'Admin' ? <App /> : null}
          {user === 'Abhi' ? <Abhi /> : null}
          <button
            onClick={handleBackClick}
            className="px-4 py-2 bg-red-500 text-black font-semibold rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:red-gray-400 focus:ring-opacity-75 transition duration-300 ease-in-out transform hover:scale-105 mt-4"
          >
            Back to Main Page
          </button>
        </div>
      )}
    </div>
  );
};

export default Admin;
