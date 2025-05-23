import { useReducer } from "react";
import InputForm from "./components/InputForm";
import TodoList from "./components/TodoList";

const initialState = {
  data: [],
  currentId: 0,
};
// action:{type:"ADD", payload:{content:"abc"}}
// state: {data:[{content:"abc", id: 0}], currentId:0}
const TodoReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        data: [
          ...state.data,
          {
            content: action.payload.content,
            id: state.currentId,
          },
        ],
        currentId: state.currentId + 1,
      };
    case "DELETE":
      return {
        ...state,
        data: state.data.filter((todoId) => todoId.id !== action.payload.id),
      };
    case "UPDATE":
      return {
        ...state,
        data: state.data.map((todoId) =>
          todoId.id === action.payload.id
            ? { ...todoId, content: action.payload.content }
            : todoId
        ),
      };
    default:
      throw new Error("Invalid action type");
  }
};

function App() {
  const [state, dispatch] = useReducer(TodoReducer, initialState);
  console.log(state.data);

  return (
    <div className="min-h-screen py-12 bg-gray-300/50">
      <InputForm dispatch={dispatch} />
      <TodoList data={state.data} dispatch={dispatch} />
    </div>
  );
}
export default App;
