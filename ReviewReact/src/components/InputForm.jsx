import { useRef } from "react";

function InputForm({ dispatch }) {
  const inputRef = useRef(null);

  const handleAddTodo = () => {
    if (inputRef.current) {
      // action:{type:"ADD", payload:{content: ref }}
      dispatch({ type: "ADD", payload: { content: inputRef.current.value } });
    }
  };

  return (
    <div className="w-fit border-2 border-gray-500 mx-auto flex flex-col items-center p-4 rounded-lg ">
      <h1 className="text-3xl font-bold">Thêm ghi chú</h1>
      <div className="flex justify-center items-center gap-2 mt-4">
        <input
          ref={inputRef}
          className="w-[250px] min-h-[30px] bg-white border-2 border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
        />
        <button
          className="bg-blue-500 hover:bg-blue-600 rounded-lg p-1 text-white min-h-[30px]"
          onClick={handleAddTodo}
        >
          Thêm công việc
        </button>
      </div>
    </div>
  );
}

export default InputForm;
