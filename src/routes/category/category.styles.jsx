import styled from "styled-components"

// .category-page-container 
export const CategoryContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 20px;
    row-gap: 50px;
`

/* .category-page-title  */
export const CategoryTitle = styled.h2 `
    font-size: 38px;
    text-align: center;
`