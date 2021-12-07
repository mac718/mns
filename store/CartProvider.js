import CartContext from "./cart-context";

const CartProvider = (props) => {
  const addItemToCartHandler = (e, item) => {
    e.preventDefault();
    console.log(item);
    cartContext.items = [...cartContext.items, item];
  };

  const cartContext = {
    items: [],
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
