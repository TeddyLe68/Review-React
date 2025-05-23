import { Select, Tag } from "antd";
import Todo from "./Todo";

function TodoList() {
  return (
    <div className="flex flex-col h-[calc(100%-40px)] overflow-y-auto">
      {/* list todo */}
      <div className="flex-1 space-y-2 ">
        <Todo name="Todo 1" priority="High" />
        <Todo name="Todo 2" priority="Medium" />
        <Todo name="Todo 3" priority="Low" />
        <Todo name="Todo 4" priority="High" />
        <Todo name="Todo 5" priority="Medium" />
        <Todo name="Todo 6" priority="Low" />
        <Todo name="Todo 7" priority="High" />
        <Todo name="Todo 8" priority="Medium" />
        <Todo name="Todo 9" priority="Low" />
        <Todo name="Todo 10" priority="High" />
      </div>
    </div>
  );
}

export default TodoList;
