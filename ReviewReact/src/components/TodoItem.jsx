import { useRef, useState } from "react";

function TodoItem({ item, dispatch }) {
  const [isUpdate, setIsUpdate] = useState(false);
  const textBoxRef = useRef(null);

  const handleUpdate = () => {
    setIsUpdate(!isUpdate);
  };
  const handleDelete = () => {
    dispatch({
      type: "DELETE",
      payload: { id: item.id },
    });
  };

  const handleUpdateContent = () => {
    if (textBoxRef.current) {
      dispatch({
        type: "UPDATE",
        payload: { content: textBoxRef.current.value, id: item.id },
      });
    }
    setIsUpdate(!isUpdate);
  };

  return (
    <div className="min-h-[80px] flex justify-center items-center bg-white px-2 py-2 rounded-lg hover:bg-gray-50 hover:text-gray-500 space-x-4">
      <div className="flex-grow">
        {isUpdate ? (
          <textarea
            ref={textBoxRef}
            defaultValue={item.content}
            type="text"
            className="border-2 border-gray-300 px-1 rounded-lg w-full "
          ></textarea>
        ) : (
          <p className="overflow-hidden max-h-[70px] text-justify">
            {item.content}
          </p>
        )}
      </div>

      <button
        onClick={isUpdate ? handleUpdateContent : handleUpdate}
        className="bg-green-500 hover:bg-green-600 min-w-[80px] rounded-lg py-1 text-white cursor-pointer"
      >
        {isUpdate ? "Save" : "Update"}
      </button>

      <button
        onClick={handleDelete}
        className="bg-red-500 hover:bg-red-600 min-w-[80px] rounded-lg py-1 text-white cursor-pointer"
      >
        Delete
      </button>
    </div>
  );
}

export default TodoItem;
