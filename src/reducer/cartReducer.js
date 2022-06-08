import { increaseQuanity } from "../utils";

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, { ...action.payload.item, qty: 1 }],
      };
    case "INCREASE_QUANTITY":
      return {
        ...state,
        cart: increaseQuanity(action.payload.productId, state.cart),
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter(
          (product) => product.id !== action.payload.productId
        ),
      };
    case "SAVE_FOR_LATER":
      return {
        ...state,
        cart: state.cart.filter(
          (product) => product.id !== action.payload.productId
        ),
        saveForLater: [...state.saveForLater, action.payload.item],
      };
    case "REMOVE_FROM_SAVE_LATER":
      return {
        ...state,
        saveForLater: state.saveForLater.filter(
          (product) => product.id !== action.payload.productId
        ),
      };
    case "MOVE_TO_CART":
      return {
        ...state,
        saveForLater: state.saveForLater.filter(
          (product) => product.id !== action.payload.productId
        ),
        cart: [...state.cart, action.payload.item],
      };
    default:
      return state;
  }
};

export { cartReducer };
