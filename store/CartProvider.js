import CartContext from "./cart-context";
import { useEffect, useReducer, useState } from "react";

let defaultCartState = {
  items: [],
  total: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    console.log("herro");
    let sameItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    if (sameItemIndex === -1) {
      let updatedItems = state.items.concat(action.item);
      let total = state.total;
      console.log("total", action.item.price, action.item.quantity);
      let updatedTotal =
        total + action.item.price * Number(action.item.quantity);
      // localStorage.setItem("items", JSON.stringify(updatedItems));
      // localStorage.setItem("total", updatedTotal);
      return { items: updatedItems, total: updatedTotal };
    } else {
      let quantityDifference =
        action.item.quantity - state.items[sameItemIndex].quantity;
      //   state.items[sameItemIndex].quantity +
      //   action.item.quantity -
      //   state.items[sameItemIndex].quantity;
      // console.log("diff", quantityDifference);
      let updatedQuantity =
        state.items[sameItemIndex].quantity + quantityDifference; //Number(action.item.quantity);
      let copyStateItems = state.items.slice(0);
      let total = state.total;

      copyStateItems[sameItemIndex] = {
        ...state.items[sameItemIndex],
        quantity: updatedQuantity,
      };
      let updatedTotal = total + action.item.price * quantityDifference; //Number(action.item.quantity);
      // localStorage.setItem("items", JSON.stringify(copyStateItems));
      // localStorage.setItem("total", updatedTotal);
      return { items: copyStateItems, total: updatedTotal };
    }
  }

  if (action.type === "REMOVE") {
    if (!action.item.quantity) {
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === action.item.id
      );
      const existingItem = state.items[existingItemIndex];
      const updatedTotal =
        state.total - existingItem.quantity * existingItem.price;
      const updatedItems = state.items.filter(
        (item) => item.id !== action.item.id
      );

      return {
        items: updatedItems,
        total: updatedTotal,
      };
    }
    const existingItemIdex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingItem = state.items[existingItemIdex];
    let updatedItems;

    let quantityDifference = existingItem.quantity - action.item.quantity;

    const updatedItem = {
      ...existingItem,
      quantity: existingItem.quantity - quantityDifference,
    };
    updatedItems = [...state.items];
    updatedItems[existingItemIdex] = updatedItem;

    let updatedTotal = state.total - existingItem.price * quantityDifference;

    // localStorage.setItem("items", JSON.stringify(copyStateItems));
    // localStorage.setItem("total", updatedTotal);
    return {
      items: updatedItems,
      total: updatedTotal,
    };
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  // useEffect(() => {
  //   // defaultCartState = {
  //   //   items: JSON.parse(localStorage["items"]) || [],
  //   //   total: localStorage["total"] || 0,
  //   // };
  //   if (localStorage.items) {
  //     JSON.parse(localStorage.items).forEach((item) => {
  //       dispatchCartAction({ type: "ADD", item: item });
  //     });
  //   }
  //   console.log(defaultCartState);
  // }, []);
  console.log(cartState);
  const addItemToCartHandler = (event, item) => {
    event.preventDefault();
    dispatchCartAction({ type: "ADD", item });
  };

  const removeItemFromCartHandler = (item) => {
    dispatchCartAction({ type: "REMOVE", item });
  };

  const cartContext = {
    items: cartState.items,
    total: cartState.total,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
