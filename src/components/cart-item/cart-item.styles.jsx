import styled from "styled-components";

// .cart-item-container 
export const CartItemContainer = styled.div`
    width: 100%;
    display: flex;
    height: 80px;
    margin-bottom: 15px;
`

// .cart-item-container img 
export const CartItemImage = styled.img`    
width: 30%;
`

// .cart-item-container .item-details 
export const CartItemDetails = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 10px 20px;
`

// .cart-item-container .item-details .name 
export const CartItemName = styled.span`    
font-size: 16px;
`