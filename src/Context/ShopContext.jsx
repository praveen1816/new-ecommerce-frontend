import React, { createContext, useState, useEffect } from "react";

// Create context
export const ShopContext = createContext(null);
const apiUrl = import.meta.env.VITE_API_URL;
// Function to initialize cart
const getDefaultCart = () => {
  let cart = {};
  for (let index = 1; index <= 300; index++) {
    cart[index] = 0;
  }
  return cart;
};

// Context provider component
const ShopContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());
  const [all_product, setAllProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`${apiUrl}/allproducts`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('Fetched products:', data); // Log fetched products
        setAllProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
    if (localStorage.getItem('auth-token')) {
      fetch(`${apiUrl}/getcart`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'auth-token': localStorage.getItem('auth-token'),
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({}), // Ensure a valid JSON body is sent
      })
        .then((response) => response.json())
        .then((data) => setCartItems(data))
        .catch((error) => console.error('Error fetching cart items:', error));
    
    }
  }, []);

  // Function to add item to cart
  const addToCart = (itemId) => {
    setCartItems((prev) => {
      const updatedCart = { ...prev, [itemId]: prev[itemId] + 1 };
      if(localStorage.getItem('auth-token')){
        fetch(`${apiUrl}/addtocart`,{
          method:'POST',
          headers:{
            Accept:'application/form-data',
            'auth-token':`${localStorage.getItem('auth-token')}`,
            'Conten-Type':'application/json'
          },
          body:JSON.stringify({"itemID":itemId}),
        })
        .then((response)=>response.json())
        .then((data)=>console.log(data));
      }
      
      
     
      return updatedCart;
    });
  };

  // Function to remove item from cart
  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      const updatedCart = { ...prev, [itemId]: prev[itemId] > 0 ? prev[itemId] - 1 : 0 };

      if (localStorage.getItem('auth-token')) {
        fetch(`${apiUrl}/removefromcart`, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'auth-token': localStorage.getItem('auth-token'),
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ itemId }),
        })
          .then((response) => response.json())
          .then((data) => console.log(data))
          .catch((error) => console.error('Error removing from cart:', error));
      }

      return updatedCart;
    });
  };

  // Function to calculate total cart amount
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const itemId in cartItems) {
      if (cartItems[itemId] > 0) {
        const itemInfo = all_product.find((product) => product.id === Number(itemId));
        if (itemInfo) {
          totalAmount += itemInfo.new_price * cartItems[itemId];
        }
      }
    }
    return totalAmount;
  };

  // Function to calculate total cart items
  const getTotalCartItems = () => {
    let totalItem = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItem += cartItems[item];
      }
    }
    return totalItem;
  };

  // Context value to be provided
  const contextValue = {
    getTotalCartAmount,
    getTotalCartItems,
    all_product,
    cartItems,
    addToCart,
    removeFromCart,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
