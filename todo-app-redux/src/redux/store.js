// import { createStore } from "redux";
// import todoReducer from "./reducer";

// // Create a Redux store using the todoReducer
// // The store is the central hub of the Redux application, where the state is stored and managed. The reducer is a pure function that takes the current state
// const store = createStore(
//   todoReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

// export default store;
import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "./Slice/filterSlice";
import todoListSlice from "./Slice/todosSlice";

const store = configureStore({
  reducer: {
    filters: filterSlice.reducer,
    todoList: todoListSlice.reducer,
  },
});

export default store;
