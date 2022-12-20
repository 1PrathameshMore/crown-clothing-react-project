import React from 'react'
import { useContext } from 'react';

import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

import { CartContext } from '../../contexts/cart.context';

import { useNavigate } from 'react-router-dom';

import { DropdownContainer, DropdownMessage, DropdownItems } from './cart-dropdown.styles.jsx'

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext)
  const navigate = useNavigate()

  const goToCheckoutPage = () => {
    navigate('/check-out')
  }

  return (
    <DropdownContainer>
      <DropdownItems>{
        cartItems.length === 0 ?
          <DropdownMessage>Your Cart Is Empty</DropdownMessage> :
          cartItems.map((item) => {
            return (
              <CartItem cartItem={item} key={item.id} />
            )
          })
      }</DropdownItems>
      <Button onClick={goToCheckoutPage}>GO TO CHECKOUT</Button>
    </DropdownContainer>
  )
}

export default CartDropdown