import styled from "styled-components"

// .category-preview-container 
export const CategoryPreviewContainer = styled.div`
display: flex;
    flex-direction: column;
    margin-bottom: 30px;
`

// .category-preview-container .title 
export const CategoryPreviewTitle = styled.span`
    font-size: 28px;
    margin-bottom: 25px;
    cursor: pointer;
`

// .category-preview-container .preview 
export const CategoryItemsPreview = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 20px;
`