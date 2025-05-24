import filtersReducerSlice from "./Slice/FilterSlice";
import todoListReducerSlice from "./Slice/TodosSlice";

// The root reducer combines the filters and todoList reducers
// into a single reducer function. This is useful when you have multiple slices of state in your Redux store.
const todoReducer = (state = {}, action) => {
  console.log({ state: state, action: action });
  return {
    filters: filtersReducerSlice(state.filters, action),
    todoList: todoListReducerSlice(state.todoList, action),
  };
};

export default todoReducer;
