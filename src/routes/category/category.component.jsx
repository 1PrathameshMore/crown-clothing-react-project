import {CategoryContainer, CategoryTitle} from './category.styles.jsx'

import React from 'react'
import { useContext, useState, useEffect } from 'react'

import { useParams } from 'react-router-dom'

import { categoriesContext } from '../../contexts/categories.context'
import ProductCard from '../../components/product-card/product-card.component'


const Category = () => {

  const { category } = useParams();
  const { categoriesMap } = useContext(categoriesContext)
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category])
  }, [category, categoriesMap])

  return (
    <div>
      <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
      <CategoryContainer>
        {products && products.map((product) => {
          return (<ProductCard key={product.id} product={product} />)
        })
        }
      </CategoryContainer>
    </div>
  )
}

export default Category