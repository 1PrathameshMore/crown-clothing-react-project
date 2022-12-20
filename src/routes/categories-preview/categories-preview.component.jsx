import React, { Fragment } from 'react'
import { useContext } from 'react';
import CategoryPreview from '../../components/category-preview/category-preview.component';

import { categoriesContext } from '../../contexts/categories.context'


const CategoriesPreview = () => {
    const { categoriesMap } = useContext(categoriesContext)
    return (
        <div className='categories-preview-container'>
            {
                Object.keys(categoriesMap).map(title => {
                    const products = categoriesMap[title]
                    return (
                        <CategoryPreview title={title} products={products} key={title}/>
                    )
                })
            }
        </div>
    )
}

            {/* <div className='products-container'>
                {/* {products.map((product) => {
                return (<ProductCard product={product} key={product.id}/>)
            })} 
                {console.log(categoriesMap)}
            </div> */}

export default CategoriesPreview