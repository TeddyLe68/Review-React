// Action creator
export const addTodo = (todoData) => {
  return {
    type: "todoList/addTodo",
    payload: todoData,
  };
};
export const searchTodo = (searchText) => {
  return {
    type: "filters/searchTodo",
    payload: searchText,
  };
};

export const statusFilterTodo = (staus) => {
  return {
    type: "filters/statusFilterTodo",
    payload: staus,
  };
};
export const priorityFilterTodo = (priority) => {
  return {
    type: "filters/priorityFilterTodo",
    payload: priority,
  };
};

export const toggleTodo = (todoId) => {
  return {
    type: "todoList/toggleTodo",
    payload: todoId,
  };
};
