// Action creator
export const addTodo = (todoData) => {
  return {
    type: "todoList/addTodo",
    payload: todoData,
  };
};
