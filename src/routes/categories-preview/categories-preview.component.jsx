import { useContext } from "react";
import { useSelector } from "react-redux";

import { selectCategories } from "../../store/categories/category.selector";
import CategoryPreview from "../../components/category-preview/category-preview.component";

export default function CategoriesPreview() {
  const categories = useSelector(selectCategories);

  return (
    <>
      {Object.keys(categories).map((title) => {
        const products = categories[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </>
  );
}
