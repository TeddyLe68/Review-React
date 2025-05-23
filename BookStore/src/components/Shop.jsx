import ShopItem from "./ShopItem";
import { data } from "../data/BooksData.js";
function Shop({ dispatch }) {
  return (
    <div>
      <h1 className="text-5xl font-bold pb-4 border-b-2 border-gray-300">
        Shop
      </h1>
      <div className="grid grid-cols-4 gap-4 my-12">
        {data.map((item) => {
          return <ShopItem key={item.id} item={item} dispatch={dispatch} />;
        })}
      </div>
    </div>
  );
}

export default Shop;
