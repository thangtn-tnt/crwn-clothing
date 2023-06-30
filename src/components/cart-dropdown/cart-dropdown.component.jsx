import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems
} from "./cart-dropdown.styles";

import Button from "../button/button.component";
import CartItem from "../card-item/cart-item.component";

import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

export default function CartDropdown() {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={goToCheckoutHandler} buttonType="inverted">
        GO TO CHECKOUT
      </Button>
    </CartDropdownContainer>
  );
}
