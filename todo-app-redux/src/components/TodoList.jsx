import { useSelector } from "react-redux";
import Todo from "./Todo";
import { todoListSelector } from "../redux/selectors";

function TodoList() {
  const todoList = useSelector(todoListSelector);
  return (
    <div className="flex flex-col h-[calc(100%-40px)] overflow-y-auto">
      {/* list todo */}
      <div className="flex-1 space-y-2 ">
        {todoList.map((todoItem) => (
          <Todo
            key={todoItem.id}
            name={todoItem.name}
            priority={todoItem.priority}
          />
        ))}
      </div>
    </div>
  );
}

export default TodoList;
