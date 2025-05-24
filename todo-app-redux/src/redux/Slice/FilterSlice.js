const initialState = {
  search: "",
  status: "All",
  priority: [],
};

const filtersReducerSlice = (state = initialState, action) => {
  switch (action.type) {
    case "filters/searchTodo":
      return {
        ...state,
        search: action.payload,
      };
    case "filters/statusFilterTodo":
      return {
        ...state,
        status: action.payload,
      };
    case "filters/priorityFilterTodo":
      return {
        ...state,
        priority: action.payload,
      };
    default:
      return state;
  }
};

export default filtersReducerSlice;
