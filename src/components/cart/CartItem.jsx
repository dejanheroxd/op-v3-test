import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";

function CartItem(props) {
  const { id, price, productName, productImage } = props.data;
  const { setItemAmount, addCartItem, removeCartItem, cartItems } =
    useContext(ShopContext);

  return (
    <div className="flex w-[500px] max-w-3xl rounded-md border-none shadow-[rgba(0,_0,_0,_0.20)_0px_3px_8px]">
      <img className="h-44 w-28 rounded-l-md" src={productImage} alt="" />
      <div className="relative ml-4 mt-7">
        <div>
          <p className="mb-1 font-bold">{productName}</p>
          <p>${price}</p>
        </div>
        <div className="absolute top-24 flex">
          <button
            onClick={() => removeCartItem(id)}
            className="w-6 rounded-md border"
          >
            -
          </button>
          <input
            onChange={(e) => setItemAmount(Number(e.target.value), id)}
            className="w-16"
            value={cartItems[id]}
          />
          <button
            onClick={() => addCartItem(id)}
            className="w-6 rounded-md border"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
