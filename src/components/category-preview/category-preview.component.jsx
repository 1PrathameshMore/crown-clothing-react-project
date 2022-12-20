import React from 'react'
import ProductCard from '../product-card/product-card.component'
import { Link } from 'react-router-dom'

import { CategoryItemsPreview, CategoryPreviewContainer, CategoryPreviewTitle } from './category-preview.styles.jsx'

const CategoryPreview = ({ title, products }) => {
    return (
        <CategoryPreviewContainer>
            <h2>
                <Link to={`${title}`}>
                    <CategoryPreviewTitle className='title'>{title.toUpperCase()} &#10095;</CategoryPreviewTitle>
                </Link>
            </h2>
            <CategoryItemsPreview>
                {
                    products.slice(0, 4).map((product) => {
                        return (
                            <ProductCard product={product} key={product.id} />
                        )
                    })
                }
            </CategoryItemsPreview>
        </CategoryPreviewContainer>
    )
}

export default CategoryPreview