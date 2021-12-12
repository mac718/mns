import CartContext from "./cart-context";
import { useEffect, useReducer } from "react";

let defaultCartState = {
  items: [],
  total: 0,
};

let updatedItems;
let updatedTotal;

const updateLocalStorage = (items, total) => {
  localStorage.setItem("items", JSON.stringify(items));
  localStorage.setItem("total", total);
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    let sameItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    if (sameItemIndex === -1) {
      updatedItems = state.items.concat(action.item);

      updatedTotal =
        state.total + action.item.price * Number(action.item.quantity);

      updateLocalStorage(updatedItems, updatedTotal);

      return { items: updatedItems, total: updatedTotal };
    } else {
      let quantityDifference =
        action.item.quantity - state.items[sameItemIndex].quantity;

      let updatedQuantity =
        state.items[sameItemIndex].quantity + quantityDifference;
      updatedItems = state.items.slice(0);

      let total = state.total;

      updatedItems[sameItemIndex] = {
        ...state.items[sameItemIndex],
        quantity: updatedQuantity,
      };

      updatedTotal = total + action.item.price * quantityDifference;

      updateLocalStorage(updatedItems, updatedTotal);

      return { items: updatedItems, total: updatedTotal };
    }
  }

  if (action.type === "REMOVE") {
    if (!action.item.quantity) {
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === action.item.id
      );

      const existingItem = state.items[existingItemIndex];

      updatedTotal = state.total - existingItem.quantity * existingItem.price;
      updatedItems = state.items.filter((item) => item.id !== action.item.id);

      updateLocalStorage(updatedItems, updatedTotal);

      return {
        items: updatedItems,
        total: updatedTotal,
      };
    }
    const existingItemIdex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingItem = state.items[existingItemIdex];

    let quantityDifference = existingItem.quantity - action.item.quantity;

    const updatedItem = {
      ...existingItem,
      quantity: existingItem.quantity - quantityDifference,
    };

    updatedItems = [...state.items];
    updatedItems[existingItemIdex] = updatedItem;

    updatedTotal = state.total - existingItem.price * quantityDifference;

    updateLocalStorage(updatedItems, updatedTotal);

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

  useEffect(() => {
    if (localStorage.items) {
      JSON.parse(localStorage.items).forEach((item) => {
        dispatchCartAction({ type: "ADD", item: item });
      });
    }
  }, []);

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
