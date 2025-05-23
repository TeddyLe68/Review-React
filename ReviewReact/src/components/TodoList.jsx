import TodoItem from "./TodoItem";

function TodoList({ data, dispatch }) {
  return (
    <div className="w-1/3 mx-auto my-12">
      <h2 className="text-3xl pb-2 border-b-2 border-gray-400 text-center">
        Danh sách việc cần làm
      </h2>
      <div className="my-4 space-y-4 ">
        {data.map((todoItem) => {
          return (
            <TodoItem key={todoItem.id} item={todoItem} dispatch={dispatch} />
          );
        })}
      </div>
    </div>
  );
}

export default TodoList;
