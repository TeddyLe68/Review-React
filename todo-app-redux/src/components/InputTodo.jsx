import { Select, Tag } from "antd";

function InputTodo() {
  return (
    <div className="flex gap-1 mt-4">
      <input
        type="text"
        placeholder="Enter todo..."
        className="flex-1 px-2 duration-200 ease-in-out border border-gray-300 rounded-md hover:border-blue-400 focus:outline-none focus:border-blue-400 focus:shadow-xl"
      />
      <Select defaultValue="Medium">
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
      <button className="px-2 text-gray-600 duration-300 ease-in-out transform bg-blue-300 rounded-md hover:bg-blue-400 hover:scale-105">
        Add
      </button>
    </div>
  );
}

export default InputTodo;
