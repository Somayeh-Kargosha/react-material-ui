const cartReducer = (state, action) => {
  switch (action.type) {
    case "add-cartItem":
      return {
        ...state,
        // payload = newItem
        cart: [...state.cart, action.payload],
      };
    case "delete-cartItem":
      return {
        ...state,
        // payload = id
        cart: state.cart.filter((item) => item.id !== action.payload),
      };

    case "increase-cartItem-quantity":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        ),
      };
    case "decrease-cartItem-quantity":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload
            ? {
                ...item,
                quantity: item.quantity - 1,
                totalPrice: item.price * item.quantity,
              }
            : item
        ),
      };
  }
};

export default cartReducer;
