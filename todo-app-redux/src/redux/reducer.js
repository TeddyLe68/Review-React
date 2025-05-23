const initialState = {
  fillter: {
    search: "",
    status: "All",
    priority: [],
  },
  todoList: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "todoList/addTodo":
      return {
        ...state,
        todoList: [...state.todoList, action.payload],
      };
    default:
      return state;
  }
  console.log({ state: state, action: action });
};

export default todoReducer;
