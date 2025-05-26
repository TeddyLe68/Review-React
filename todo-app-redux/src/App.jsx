import { Divider, Typography } from "antd";
import Fillter from "./components/Filter";
import TodoList from "./components/TodoList";
import InputTodo from "./components/InputTodo";
import { setupServer } from "./fakeApis";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchTodos } from "./redux/Slice/todosSlice";

if (process.env.NODE_ENV === "development") {
  setupServer();
}

const { Title } = Typography;
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTodos());
  }, []);
  return (
    <div className="w-[500px] mx-auto flex flex-col bg-white shadow-xl/30 rounded-lg p-5 text-center border mt-6 h-[95vh]">
      <Title>TODO APP with REDUX</Title>
      <Fillter />
      <Divider />
      <TodoList />
      <InputTodo />
    </div>
  );
}

export default App;
