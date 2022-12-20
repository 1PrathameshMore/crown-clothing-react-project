import React from 'react'
import { Link } from 'react-router-dom'

import {DirectoryItemContainer, BackgroundImage, Body} from "./category.styles"

const Category = ({ category }) => {

    const { id, title, imageUrl } = category

    return (
        <DirectoryItemContainer key={id}>
            <BackgroundImage imageUrl={imageUrl}/>
            <Body>
                <Link to={`/shop/${title}`} >
                    <div>
                        <h2>{title}</h2>
                        <p>Shop Now</p>
                    </div>
                </Link>
            </Body>
        </DirectoryItemContainer>
    )
}

export default Category