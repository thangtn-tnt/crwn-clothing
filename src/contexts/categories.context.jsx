import SHOP_DATA from "../shop-data.js";

import { createContext, useEffect, useState } from "react";
import { addCollectionAndDocuments, getCategoriesAndDocuments } from "../utils/firebase/firebase-utils.js";

export const CategoriesContext = createContext({
  categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});

  // seedData in first time
  // useEffect(() => {
  //   addCollectionAndDocuments("categories", SHOP_DATA);
  // });

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments('categories');
      setCategoriesMap(categoryMap);
    }

    getCategoriesMap();
  }, [])

  const value = { categoriesMap };
  return (
    <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
  );
};
