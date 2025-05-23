import CartItem from "./CartItem";

function CartList({ data, dispatch, total }) {
  return (
    <div className="my-12">
      <h1 className="text-5xl font-bold pb-4 border-gray-300 border-b-2">
        Your shopping cart
      </h1>
      <div className="my-12 min-h-[200px]">
        {data.length === 0 && (
          <div className="min-h-[200px] flex justify-center items-center">
            <p className="text-5xl text-gray-500">Cart is empty...</p>
          </div>
        )}

        {data.length !== 0 &&
          data.map((item) => (
            <CartItem key={item.id} item={item} dispatch={dispatch} />
          ))}
      </div>
      <h3 className="text-3xl">Tổng tiền: {total} VNĐ</h3>
    </div>
  );
}

export default CartList;
