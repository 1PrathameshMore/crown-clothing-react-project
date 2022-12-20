import React, { useState } from 'react'

import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import {ShoppingIcon, CartIconContainer, CartItemCount} from "./cart-icon.styles.jsx"

const CartIcon = () => {

    const { setIsCartOpen, cartCount } = useContext(CartContext);

    const toggleIsCartOpen = () => setIsCartOpen(prevValue => {
        return !prevValue;
    });

    return (
        <CartIconContainer onClick={toggleIsCartOpen}>
            <ShoppingIcon className='shopping-icon'/>
            <CartItemCount>{cartCount}</CartItemCount>
        </CartIconContainer>
    )
}

export default CartIcon