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
