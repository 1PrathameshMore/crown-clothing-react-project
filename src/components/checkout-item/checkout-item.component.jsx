import React from 'react'
import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import {CheckoutItemContainer, CheckoutImageContainer, CheckoutItemImage, CheckoutItemInfo, CheckoutQuantityContainer, CheckoutRemoveButton} from './checkout-item.styles.jsx'

const CheckoutItem = ({ product }) => {
    const { imageUrl, name, quantity, price } = product;

    const { increaseItemQuantity, decreaseItemQuantity, removeItemFromCart } = useContext(CartContext)

    const increment = () => increaseItemQuantity(product)

    const decrement = () => decreaseItemQuantity(product)

    const remove = () => removeItemFromCart(product)

    return (
        <CheckoutItemContainer>
            <CheckoutImageContainer>
                <CheckoutItemImage src={imageUrl} alt={`${name}`} />
            </CheckoutImageContainer>
            <CheckoutItemInfo>{name}</CheckoutItemInfo>

            <CheckoutQuantityContainer>
                <div onClick={decrement} className='arrow'>&#10094;  </div>
                <div className='value'>{quantity}</div>
                <div onClick={increment} className='arrow'>  &#10095;</div>
            </CheckoutQuantityContainer>

            <CheckoutItemInfo className='price'>{price}</CheckoutItemInfo>
            <CheckoutRemoveButton onClick={remove}>&#10005;</CheckoutRemoveButton>
        </CheckoutItemContainer>
    );
}

export default CheckoutItem