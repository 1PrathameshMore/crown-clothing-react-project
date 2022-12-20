import React from 'react'
import Category from '../category-item/category.component';
import {DirectoryContainer} from "./directory.styles.jsx"

const Directory = ({categories}) => {
  return (
    <DirectoryContainer>
    {categories.map((category) => (
      <Category category={category} key={category.id} />
    )
    )}
  </DirectoryContainer>
  )
}

export default Directory;