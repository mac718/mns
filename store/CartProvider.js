import CartContext from "./cart-context";
import { useReducer, useState } from "react";

const defaultCartState = {
  items: [],
  total: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    let sameItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    if (sameItemIndex === -1) {
      console.log("hello");
      let updatedItems = state.items.concat(action.item);
      return { items: updatedItems, total: 0 };
    } else {
      let updatedQuantity =
        state.items[sameItemIndex].quantity + Number(action.item.quantity);
      let copyStateItems = state.items.slice(0);

      copyStateItems[sameItemIndex] = {
        ...state.items[sameItemIndex],
        quantity: updatedQuantity,
      };
      return { items: copyStateItems, total: 0 };
    }
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );
  console.log(cartState);
  const addItemToCartHandler = (event, item) => {
    event.preventDefault();
    dispatchCartAction({ type: "ADD", item });
  };

  const cartContext = {
    items: cartState.items,
    total: 0,
    addItem: addItemToCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
