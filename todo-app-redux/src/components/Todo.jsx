import { useState } from "react";
import { useDispatch } from "react-redux";
import TodoSlice from "../redux/Slice/todosSlice";

const prioriryColorMaping = {
  High: "bg-red-300",
  Medium: "bg-blue-300",
  Low: "bg-gray-300",
};

function Todo({ name, priority, completed, id }) {
  const [checked, setChecked] = useState(completed);
  const dispatch = useDispatch();

  const toggleCheckbox = () => {
    setChecked(!checked);
    dispatch(TodoSlice.actions.toggleTodoStatus(id));
  };
  return (
    <div
      className={`flex justify-between items-center mb-1 ${
        checked ? "opacity-50 line-through" : ""
      }`}
    >
      <label htmlFor="nameTodo" className="">
        <input
          type="checkbox"
          checked={checked}
          onChange={toggleCheckbox}
          className="mr-2"
        />
        {name}
      </label>
      <span
        className={`px-2 py-0.5 text-xs font-medium rounded-lg ${prioriryColorMaping[priority]}`}
      >
        {priority}
      </span>
    </div>
  );
}

export default Todo;
