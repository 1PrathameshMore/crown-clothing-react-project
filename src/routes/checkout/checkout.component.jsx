import React from 'react'
import { useContext } from 'react'

import { CartContext } from '../../contexts/cart.context'

import CheckoutItem from '../../components/checkout-item/checkout-item.component'

import {CheckoutContainer, Header, HeaderBlock, Total} from './checkout.styles'

const Checkout = () => {
    const { cartItems } = useContext(CartContext)

    const total = cartItems.reduce((accumulator, cuurentValue) => accumulator + cuurentValue.quantity * cuurentValue.price, 0)

    return (
        <CheckoutContainer>
            <Header>
                <HeaderBlock>Product</HeaderBlock>
                <HeaderBlock>Description</HeaderBlock>
                <HeaderBlock>Quantity</HeaderBlock>
                <HeaderBlock>Price</HeaderBlock>
                <HeaderBlock>Remove</HeaderBlock>
            </Header>
            {cartItems.map((cartItem) => {
                return (
                    <CheckoutItem product={cartItem} key={cartItem.id} />
                )
            })}
            <br />
            <hr />
            <Total>Total: ${total}</Total>
        </CheckoutContainer>
    )
}

export default Checkout