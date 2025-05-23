import { Divider, Typography } from "antd";
import Fillter from "./components/Filter";
import TodoList from "./components/TodoList";
import InputTodo from "./components/InputTodo";

const { Title } = Typography;
function App() {
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
