import React from "react";
import { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, productToAdd) => {
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToAdd.id
      );
    
      if (existingCartItem) {
        return cartItems.map((cartItem) =>
          cartItem.id === productToAdd.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }

      return [...cartItems, { ...productToAdd, quantity: 1 }];
}

const increaseQuantity = (cartItems, product) => {
    return cartItems.map((cartItem) =>
    cartItem.id === product.id
      ? { ...cartItem, quantity: cartItem.quantity + 1 }
      : cartItem
  );
}

const decreaseQuantity = (cartItems, product) => {
    return cartItems.map((cartItem) =>
    cartItem.id === product.id
      ? { ...cartItem, quantity: cartItem.quantity > 1 ? cartItem.quantity - 1 : 0 }
      : cartItem
  );
}

const removeCartItem = (cartItems, product) => {
        return cartItems.filter((cartItem) =>
        cartItem.id != product.id
      );
}


export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => { },
    cartItems: [],
    addItemToCart: () => { },
    cartCount: 0,
    increaseItemQuantity: () => {},
    decreaseItemQuantity: () => {},
    removeItemFromCart: () => {}
});

export const CartProvider = ({ children }) => {

    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        const newCartCount = cartItems.reduce((accumulator, currentValue) => accumulator + currentValue.quantity, 0);
        setCartCount(newCartCount);
    }, [cartItems])

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    }

    const increaseItemQuantity = (product) => {
        setCartItems(increaseQuantity(cartItems, product));
    }

    const decreaseItemQuantity = (product) => {
        setCartItems(decreaseQuantity(cartItems, product));
    }

    const removeItemFromCart = (product) => {
        setCartItems(removeCartItem(cartItems, product));
    }

    const value = { isCartOpen, setIsCartOpen, addItemToCart, cartItems, cartCount, increaseItemQuantity, decreaseItemQuantity, removeItemFromCart }

    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}