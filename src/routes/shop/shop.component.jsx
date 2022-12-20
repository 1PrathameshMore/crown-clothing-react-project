import React, { Fragment } from 'react'
import { Routes ,Route } from 'react-router-dom'
import CategoriesPreview from '../categories-preview/categories-preview.component'
import Category from '../category/category.component'


const Shop = () => {
    return (
        <Routes>
            <Route index element={<CategoriesPreview />} />
            <Route path=':category' element={<Category />} />
        </Routes>
    )
}

            {/* <div className='products-container'>
                {/* {products.map((product) => {
                return (<ProductCard product={product} key={product.id}/>)
            })} 
                {console.log(categoriesMap)}
            </div> */}

export default Shop