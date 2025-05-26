import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const todoListSlice = createSlice({
  name: "todoList",
  initialState: { status: "idle", todos: [] },
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    toggleTodoStatus: (state, action) => {
      const currentTodo = state.todos.find(
        (todo) => todo.id === action.payload
      );
      if (currentTodo) {
        currentTodo.completed = !currentTodo.completed;
      }
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.todos = action.payload;
        state.status = "idle";
      })
      .addCase(addNewTodo.fulfilled, (state, action) => {
        state.todos.push(action.payload);
        state.status = "idle";
      })
      .addCase(updateTodo.fulfilled, (state, action) => {
        let currentTodo = state.find((todo) => todo.id === action.payload);
        currentTodo = action.payload;
      });
  },
});
export default todoListSlice;

export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
  const res = await fetch("/api/todos");
  const data = await res.json();
  return data.todos; // Return the todos array from the response
});

export const addNewTodo = createAsyncThunk("todos/addNewTodo", async (todo) => {
  const res = await fetch("/api/todos", {
    method: "POST",
    body: JSON.stringify(todo),
  });
  const data = await res.json();
  console.log({ data });
  return data.todos; // Return the newly created todo from the response
});

export const updateTodo = createAsyncThunk("todos/updateTodo", async (todo) => {
  const res = await fetch("/api/todos", {
    method: "POST",
    body: JSON.stringify(todo),
  });
  const data = await res.json();
  console.log({ data });
  return data.todos; // Return the updated todo from the response
});
