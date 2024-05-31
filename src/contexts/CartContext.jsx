import { createContext, useContext, useReducer } from "react";
import cartReducer from "./CartReducer";

const CartContext = createContext();

const initialState = {
  cart: [],
};

function CartProvider({ children }) {
  const [{ cart }, dispatch] = useReducer(cartReducer, initialState);

  async function addItem(newItem) {
    dispatch({ type: "add-cartItem", payload: newItem });
  }

  async function deleteItem(id) {
    dispatch({ type: "delete-cartItem", payload: id });
  }
  async function increaseItemQuantity(id) {
    dispatch({ type: "increase-cartItem-quantity", payload: id });
  }
  async function decreaseItemQuantity(id) {
    dispatch({ type: "decrease-cartItem-quantity", payload: id });
  }

  const totalCartQuantity = () =>
    cart.reduce((sum, item) => sum + item.quantity, 0);

  const totalInitialPrice = () =>
    cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const totalCartPriceWithDiscount = () =>
    cart.reduce(
      (sum, item) =>
        sum +
        item.price * item.quantity -
        (item.price * item.quantity * item.discount) / 100,
      0
    );
  const totalDiscountPrice = () =>
    cart.reduce(
      (sum, item) =>
        sum +
        item.price * item.quantity -
        (item.price * item.quantity -
          (item.price * item.quantity * item.discount) / 100),
      0
    );

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        deleteItem,
        increaseItemQuantity,
        decreaseItemQuantity,
        totalCartQuantity,
        totalDiscountPrice,
        totalInitialPrice,
        totalCartPriceWithDiscount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

function useCartContext() {
  const context = useContext(CartContext);
  if (context === undefined)
    throw new Error("CartContext was used outside the CartProvider");
  return context;
}
export { CartProvider, useCartContext };
