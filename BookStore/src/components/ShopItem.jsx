function ShopItem({ item, dispatch }) {
  const handleAddToCart = () => {
    dispatch({ type: "ADD", payload: item });
  };
  return (
    <div className="border-2 border-gray-300 rounded-l pb-8">
      <img src={item.img} alt="" className="w-full h-48" />
      <p className="font-bold text-center ">{item.tieude}</p>
      <p className="text-gray-500 text-center">{item.tacgia}</p>
      <p className="font-bold text-red-500 text-center">{item.gia}</p>
      <div className="w-2/3 mx-auto text-center">
        <button
          onClick={handleAddToCart}
          className=" bg-blue-500 my-4 rounded-lg w-full py-2 hover:bg-blue-600 text-white font-bold "
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default ShopItem;
