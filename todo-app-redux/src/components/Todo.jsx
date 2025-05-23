import { useState } from "react";

const prioriryColorMaping = {
  High: "bg-red-300",
  Medium: "bg-blue-300",
  Low: "bg-gray-300",
};

function Todo({ name, priority }) {
  const [checked, setChecked] = useState(false);

  const toggleCheckbox = () => {
    setChecked(!checked);
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
