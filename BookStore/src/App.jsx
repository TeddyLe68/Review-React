import { useReducer } from "react";
import CartList from "./components/CartList";
import Shop from "./components/Shop";

const initialValue = {
  cart: [],
  total: 0,
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD": {
      // case 1: if the item is already in the cart, increase the quantity
      // case 2: if the item is not in the cart, add it to the cart
      const exsitingItem = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (exsitingItem !== -1) {
        //case 1
        const item = state.cart[exsitingItem];
        const newCart = [...state.cart];
        newCart[exsitingItem] = {
          ...item,
          quantity: item.quantity + 1,
        };
        return {
          ...state, // redux will see this state as a new state then it will re-render the component
          cart: newCart,
          total: state.total + item.gia,
        };
      } else {
        //case 2
        return {
          ...state,
          cart: [...state.cart, { ...action.payload, quantity: 1 }],
          total: state.total + action.payload.gia,
        };
      }
    }
    case "REMOVE": {
      // case 1 : is quantity > 1, decrease the quantity
      // case 2 : is quantity = 1, remove the item from the cart
      const existingItem = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      // existingItem = -1 means the item is not in the cart
      if (existingItem === -1) {
        return { ...state };
      }

      const item = state.cart[existingItem];
      if (item.quantity > 1) {
        const newCart = [...state.cart];
        newCart[existingItem] = {
          ...item,
          quantity: item.quantity - 1,
        };
        return {
          ...state,
          cart: newCart,
          total: state.total - item.gia,
        };
      } else {
        return {
          ...state,
          cart: state.cart.filter((item) => item.id !== action.payload.id),
          total: state.total - item.gia,
        };
      }
    }
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(cartReducer, initialValue);
  return (
    <>
      <div className="my-12 w-11/12 mx-auto">
        <CartList data={state.cart} dispatch={dispatch} total={state.total} />
        <Shop dispatch={dispatch} />
      </div>
    </>
  );
}

export default App;
