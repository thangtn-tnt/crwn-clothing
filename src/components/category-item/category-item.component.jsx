import { useNavigate } from "react-router-dom";

import {
  Body,
  CategoryItemContainer,
  BackgroundImage
} from "./category-item.styles";

export default function CategoryItem({ category }) {
  const { title, imageUrl } = category;
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(`shop/${title}`);

  return (
    <CategoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage $image={imageUrl}></BackgroundImage>
      <Body>
        <h2>{title}</h2>
        <p>SHOP NOW</p>
      </Body>
    </CategoryItemContainer>
  );
}
