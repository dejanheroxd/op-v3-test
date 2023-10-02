import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
import Header from "../reusableComponents/Header";
import { PRODUCTS } from "../../products";
import CartItem from "./CartItem";
import { useNavigate } from "react-router-dom";

function Cart() {
  const navigate = useNavigate();
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalCartAmount = getTotalCartAmount();

  return (
    <div className="flex flex-col items-center pb-9">
      <Header>Cart Items</Header>
      <div className="flex flex-col items-center gap-y-4">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] > 0) {
            return <CartItem data={product} key={product.id} />;
          }
        })}
      </div>
      {totalCartAmount > 0 ? (
        <div className="mt-5 grid w-80 grid-cols-3 gap-y-3">
          <p className="col-span-3">Total Cost ${totalCartAmount}</p>
          <div className="col-span-3 flex gap-x-4">
            <button
              onClick={() => navigate("/")}
              className="h-9 w-44 rounded-lg border-none bg-black text-white"
            >
              Continue Shopping
            </button>
            <button className="h-9 w-44 rounded-lg border-none  bg-black text-white">
              Checkout
            </button>
          </div>
        </div>
      ) : (
        <p>No items</p>
      )}
    </div>
  );
}

export default Cart;
