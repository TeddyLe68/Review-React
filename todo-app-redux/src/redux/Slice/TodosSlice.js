const initialState = [
  {
    id: 1,
    name: "Learn React",
    completed: false,
    priority: "High",
  },
  {
    id: 2,
    name: "Learn Redux",
    completed: true,
    priority: "Medium",
  },
  {
    id: 3,
    name: "Learn JavaScript",
    completed: false,
    priority: "Low",
  },
];

const todoListReducerSlice = (state = initialState, action) => {
  switch (action.type) {
    case "todoList/addTodo":
      return [...state, action.payload];

    case "todoList/toggleTodo":
      // if the todo with the given id exists, toggle its completed status and return the updated state
      // otherwise, return the state unchanged
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    default:
      return state;
  }
};

export default todoListReducerSlice;
