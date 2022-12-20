import React from "react";

import { createContext, useState, useEffect } from "react";

import { addCollectionAndDocuments, getCollectionAndDocuments } from "../utils/firebase/firebase.utils.js";

import SHOP_DATA from '../shop-data.js';

export const categoriesContext = createContext({
    categoriesMap: {},
});

export const CategoriesProvider = ({children}) => {
    const [categoriesMap, setCategoriesMap] = useState({});

    // useEffect(() => {
    //     addCollectionAndDocuments('categories', SHOP_DATA);
    // }, [])

    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCollectionAndDocuments('categories');
            setCategoriesMap(categoryMap);
        }    

        getCategoriesMap();
    }, [])

    const value = {categoriesMap}
    return (
        <categoriesContext.Provider value={value}>{children}</categoriesContext.Provider>
    )
}