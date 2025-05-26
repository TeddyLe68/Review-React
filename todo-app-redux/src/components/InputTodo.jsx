import { Select, Tag } from "antd";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addNewTodo } from "../redux/Slice/TodosSlice";

function InputTodo() {
  const dispatch = useDispatch();
  const inputTodoName = useRef(null);
  const [priority, setPriority] = useState("Medium");

  const handlePriorityChange = (value) => {
    setPriority(value);
  };
  const handleAddTodoClick = () => {
    // dispatch(
    //   todoListSlice.actions.addTodo({
    //     id: uuidv4(),
    //     name: inputTodoName.current.value,
    //     completed: false,
    //     priority: priority,
    //   })
    //   addTodos({
    //     id: uuidv4(),
    //     name: inputTodoName.current.value,
    //     completed: false,
    //     priority: priority,
    //   })
    // );
    dispatch(
      addNewTodo({
        id: uuidv4(),
        name: inputTodoName.current.value,
        completed: false,
        priority: priority,
      })
    );
    inputTodoName.current.value = "";
    setPriority("Medium");
  };
  return (
    <div className="flex gap-1 mt-4">
      <input
        ref={inputTodoName}
        type="text"
        placeholder="Enter todo..."
        className="flex-1 px-2 duration-200 ease-in-out border border-gray-300 rounded-md hover:border-blue-400 focus:outline-none focus:border-blue-400 focus:shadow-xl"
      />
      <Select
        defaultValue="Medium"
        onChange={handlePriorityChange}
        value={priority}
      >
        <Select.Option value="High" label="High">
          <Tag color="red">High</Tag>
        </Select.Option>
        <Select.Option value="Medium" label="Medium">
          <Tag color="blue">Medium</Tag>
        </Select.Option>
        <Select.Option value="Low" label="Low">
          <Tag color="gray">Low</Tag>
        </Select.Option>
      </Select>
      <button
        onClick={handleAddTodoClick}
        className="px-2 text-gray-600 duration-300 ease-in-out transform bg-blue-300 rounded-md hover:bg-blue-400 hover:scale-105 cursor-pointer"
      >
        Add
      </button>
    </div>
  );
}

export default InputTodo;
