import styled from "styled-components"
import {BaseButton, GoogleSignInButton, InvertedButton} from "../button/button.styles"

// .cart-dropdown-container 
export const DropdownContainer = styled.div`
    position: absolute;
    width: 280px;
    height: 380px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border: 1px solid black;
    background-color: white;
    top: 90px;
    right: 40px;
    z-index: 5;

    ${BaseButton},
    ${GoogleSignInButton},
    ${InvertedButton} {
        margin-top: auto;
        width: 100%;
    }
`

// .cart-dropdown-container .empty-message 
export const DropdownMessage = styled.span`
    font-size: 18px;
    margin: 50px auto;
`

// .cart-dropdown-container .cart-items 
export const DropdownItems = styled.div`
    height: 240px;
    display: flex;
    flex-direction: column;
    overflow: scroll;
`

// .cart-dropdown-container button 