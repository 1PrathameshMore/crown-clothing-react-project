import React from 'react';
import Button from '../button/button.component';

import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context'

import {ProductCardButton, ProductCardContainer, ProductCardImage, Footer} from './product-card.styles'

const ProductCard = ({product}) => {
    const { id, name, price, imageUrl } = product;
    const { addItemToCart } = useContext(CartContext)

    const addToCartFunction = () => {
        addItemToCart(product);
    }

    return (
        <ProductCardContainer key={id}>
            <ProductCardImage src={imageUrl} alt={`${name}`}/>
            <Footer>
                <span>{name}</span>
                <span>{price}</span>
            </Footer>
            <ProductCardButton buttonType='inverted' onClick={addToCartFunction}>Add to Cart</ProductCardButton>
        </ProductCardContainer>
    )
}

export default ProductCard