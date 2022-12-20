import React from 'react'
import {CartItemContainer, CartItemImage, CartItemDetails, CartItemName} from './cart-item.styles.jsx'

const CartItem = ({ cartItem }) => {

    const { name, quantity, price, imageUrl } = cartItem
    return (
        <CartItemContainer>
            <CartItemImage src={imageUrl} alt={`${name}`}/>
            <CartItemDetails>
                <CartItemName>{name}</CartItemName>
                <span className='price'>{quantity} x ${price}</span>
            </CartItemDetails>
        </CartItemContainer>
    )
}

export default CartItem