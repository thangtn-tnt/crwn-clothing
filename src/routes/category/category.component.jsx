import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { selectCategories } from "../../store/categories/category.selector";
import ProductCard from "../../components/product-card/product-card.component";

import "./category.styles.scss";

export default function Category() {
  const { category } = useParams();
  const categories = useSelector(selectCategories);
  const [products, setProducts] = useState(categories[category]);

  useEffect(() => {
    setProducts(categories[category]);
  }, [category, categories]);

  return (
    <>
      <h2 className="category-title">{category.toUpperCase()}</h2>
      <div className="category-container">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </>
  );
}
