import Category from "../category/category.component";
import CategoriesPreview from "../categories-preview/categories-preview.component";

import { Route, Routes } from "react-router-dom";

export default function Shop() {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
}
