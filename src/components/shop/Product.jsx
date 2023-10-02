import { ShopContext } from "../../context/ShopContext";
import { useContext, useState } from "react";

function Product(props) {
  const { cartItems, addCartItem, getRarityShadow } = useContext(ShopContext);
  const { id, productName, price, productImage } = props.data;
  const cartItemAmount = cartItems[id];
  const shadowColorRarity = getRarityShadow(price);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex flex-col items-center text-center">
      <img
        className="mb-2 h-52 w-36 rounded-md transition-all duration-300 ease-in-out  hover:scale-110 hover:cursor-pointer xl:h-64 xl:w-44"
        style={{
          boxShadow: isHovered
            ? `0px 0px 20px 3px #${shadowColorRarity}`
            : "none",
        }}
        src={productImage}
        alt=""
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />

      <div>
        <p className="font-bold">{productName}</p>
        <p>${price}</p>
        <button
          onClick={() => addCartItem(id)}
          className=" mt-2 w-[65px] rounded-md border border-black pb-[3px] transition-all duration-200 ease-in-out hover:bg-black hover:text-white"
        >
          Buy {cartItemAmount > 0 && <>({cartItemAmount})</>}
        </button>
      </div>
    </div>
  );
}

export default Product;
