function CartItem({ item, dispatch }) {
  const handleIncrease = () => {
    dispatch({ type: "ADD", payload: item });
  };
  const handleDecrease = () => {
    dispatch({ type: "REMOVE", payload: { id: item.id } });
  };
  return (
    <div className="flex items-center bg-gray-200 border-2 border-gray-300 shadow-lg rounded-lg px-4 py-2 my-4">
      <div className="flex flex-row items-center grow space-x-8">
        <img src={item.img} alt="" className="size-24" />
        <div>
          <p className="font-bold text-lg">{item.tieude}</p>
          <p>{item.gia}</p>
        </div>
      </div>
      <div className="flex flex-col space-y-4">
        <p className="font-bold text-xl">{item.quantity}</p>
        <div className="flex flex-row justify-center items-center space-x-4">
          <button
            onClick={handleIncrease}
            className="bg-green-500 hover:bg-green-600 text-white w-[80px] py-2 rounded-lg"
          >
            Increase
          </button>
          <button
            onClick={handleDecrease}
            className="bg-red-500 hover:bg-red-600 text-white w-[80px] py-2 rounded-lg"
          >
            Descrease
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
