import { SearchOutlined } from "@ant-design/icons";
import { Radio, Select, Tag } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  priorityFilterTodo,
  searchTodo,
  statusFilterTodo,
} from "../redux/actions";
import { todoListRemainingSelector } from "../redux/selectors";

function Fillter() {
  const [searchText, setSearchText] = useState("");
  const [status, setStatus] = useState("All");
  const [priority, setPriority] = useState([]);
  const dispatch = useDispatch();

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
    dispatch(searchTodo(e.target.value));
  };

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
    dispatch(statusFilterTodo(e.target.value));
  };

  const handlePriorityChange = (value) => {
    setPriority(value);
    dispatch(priorityFilterTodo(value));
  };

  return (
    <div className="flex flex-col">
      <div className="flex flex-col items-start mb-4">
        <label htmlFor="search" className="text-[14px] font-bold">
          Search
        </label>
        <div className="inline-flex w-full mt-2">
          <input
            type="text"
            value={searchText}
            onChange={handleSearchChange}
            placeholder="Input search text"
            className="w-full p-2 duration-200 ease-in-out bg-gray-200 rounded-tl-lg rounded-bl-lg hover:bg-gray-300 focus:outline-none focus:bg-gray-300"
          />
          <div className="flex items-center pl-4 pr-4 text-gray-500 duration-200 ease-in-out transform bg-blue-300 rounded-tr-lg rounded-br-lg cursor-pointer hover:bg-blue-400 hover:scale-105">
            <SearchOutlined />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start mb-4">
        <label
          htmlFor="filter by status"
          className="text-[14px] font-bold mb-2"
        >
          Fillter By Status
        </label>
        <div>
          <Radio.Group value={status} onChange={handleStatusChange}>
            <Radio value="All">All</Radio>
            <Radio value="Completed">Completed</Radio>
            <Radio value="Todo">To do</Radio>
          </Radio.Group>
        </div>
      </div>
      <div className="flex flex-col items-start">
        <label
          htmlFor="Filter By Priority"
          className="text-[14px] font-bold mb-2"
        >
          Filter By Priority
        </label>
        <div className="w-full">
          <Select
            mode="multiple"
            allowClear
            placeholder="Please select"
            className="w-full"
            value={priority}
            onChange={handlePriorityChange}
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
        </div>
      </div>
    </div>
  );
}

export default Fillter;
