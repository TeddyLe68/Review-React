import { useSelector } from "react-redux";
import { todoListRemainingSelector } from "../redux/selectors";
import Todo from "./Todo";

function TodoList() {
  const todoList = useSelector(todoListRemainingSelector);
  return (
    <div className="flex flex-col h-[calc(100%-40px)] overflow-y-auto">
      {/* list todo */}
      <div className="flex-1 space-y-2 ">
        {todoList.map((todoItem) => (
          <Todo
            key={todoItem.id}
            id={todoItem.id}
            name={todoItem.name}
            priority={todoItem.priority}
            completed={todoItem.completed}
          />
        ))}
      </div>
    </div>
  );
}

export default TodoList;
