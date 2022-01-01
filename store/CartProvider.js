import CartContext from "./cart-context";
import { useEffect, useReducer } from "react";
import { useRouter } from "next/router";

let defaultCartState = {
  items: [],
  total: 0,
  weight: 0,
};

let updatedItems;
let updatedTotal;
let updatedWeight;

const updateLocalStorage = (items, total, weight) => {
  localStorage.setItem("items", JSON.stringify(items));
  localStorage.setItem("total", total);
  localStorage.setItem("weight", weight);
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

      updatedWeight = state.weight + action.item.weight * action.item.quantity;

      updateLocalStorage(updatedItems, updatedTotal, updatedWeight);

      return {
        items: updatedItems,
        total: updatedTotal,
        weight: updatedWeight,
      };
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

      updatedWeight =
        state.weight + state.items[sameItemIndex].weight * quantityDifference;

      updateLocalStorage(updatedItems, updatedTotal, updatedWeight);

      return {
        items: updatedItems,
        total: updatedTotal,
        weight: updatedWeight,
      };
    }
  }

  if (action.type === "REMOVE") {
    console.log(action.item);
    if (!action.item.quantity && !action.item.inStock) {
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === action.item.id
      );

      const existingItem = state.items[existingItemIndex];

      updatedTotal = state.total - existingItem.quantity * existingItem.price;
      updatedItems = state.items.filter((item) => item.id !== action.item.id);
      updatedWeight =
        state.weight - existingItem.quantity * existingItem.weight;

      updateLocalStorage(updatedItems, updatedTotal, updatedWeight);

      return {
        items: updatedItems,
        total: updatedTotal,
        weight: updatedWeight,
      };
    }

    let items = state.items;
    const existingItemIdex = items.findIndex(
      (item) => item.id === action.item.id
    );

    const existingItem = items[existingItemIdex];

    let quantityDifference = existingItem.quantity - action.item.quantity;

    const updatedItem = {
      ...existingItem,
      quantity: existingItem.quantity - quantityDifference,
    };

    updatedItems = [...state.items];
    updatedItems[existingItemIdex] = updatedItem;

    updatedTotal = state.total - existingItem.price * quantityDifference;
    updatedWeight = state.weight - existingItem.weight * quantityDifference;

    updateLocalStorage(updatedItems, updatedTotal, updatedWeight);

    return {
      items: updatedItems,
      total: updatedTotal,
      weight: updatedWeight,
    };
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem("items")) {
      JSON.parse(localStorage.getItem("items")).forEach((item) => {
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
    weight: cartState.weight,
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
