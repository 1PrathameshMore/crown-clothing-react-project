import styled from "styled-components";

// .checkout-item-container 
export const CheckoutItemContainer = styled.div`
    width: 100%;
    display: flex;
    min-height: 100px;
    border-bottom: 1px solid darkgrey;
    padding: 15px 0;
    font-size: 20px;
    align-items: center;
`

export const CheckoutImageContainer = styled.div`
    width: 23%;
    padding-right: 15px;
`

export const CheckoutItemImage = styled.img`
    width: 100%;
    height: 100%;
`

export const CheckoutItemInfo = styled.span`
    width: 23%;
`

export const CheckoutQuantityContainer = styled.div`
    width: 23%;
    display: flex;
    & .arrow {
    cursor: pointer;
    }
    .value {
    margin: 0 10px;
    }

`

export const CheckoutRemoveButton = styled.div`
    padding-left: 12px;
    cursor: pointer;
`