// CartContext.js
import React, { createContext, useState, useContext } from 'react';

// Create the CartContext
const CartContext = createContext();

// Create a CartProvider component to wrap the application with the CartContext
const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      const updatedItems = cartItems.map((cartItem) => {
        if (cartItem.id === item.id) {
          return { ...cartItem, quantity: Math.min(20, item.quantity) }; // Maximum quantity of 20
        }
        return cartItem;
      });
      setCartItems(updatedItems);
    } else {
      setCartItems((prevCartItems) => [...prevCartItems, item]);
    }
  };

  const removeFromCart = (itemId) => {
    setCartItems((prevCartItems) => prevCartItems.filter((item) => item.id !== itemId));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Create a custom hook to consume the CartContext
const useCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider, useCartContext };
