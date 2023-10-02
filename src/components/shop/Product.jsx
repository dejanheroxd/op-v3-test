import { ShopContext } from "../../context/ShopContext";
import { useContext, useState } from "react";

function Product({ data, onProductClick }) {
  const [isHovered, setIsHovered] = useState(false);
  const { cartItems, addCartItem, getRarityShadow, getRarity } =
    useContext(ShopContext);
  const { id, productName, price, productImage } = data;
  const cartItemAmount = cartItems[id];
  getRarity(price);
  const rarity = getRarity(price);
  const rarityColor = getRarityShadow(rarity);

  return (
    <div className="flex flex-col items-center text-center">
      <img
        onClick={() => onProductClick(data)}
        className=" hover:rotate-x-2 h-52 w-36 transform rounded-md transition-all duration-300 ease-in-out hover:-translate-y-2 hover:rotate-12  hover:scale-110 hover:cursor-pointer xl:h-64 xl:w-44"
        src={productImage}
        alt=""
        style={{
          boxShadow: isHovered ? `0px 0px 20px 3px #${rarityColor}` : "none",
          border: `2px solid black`,
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />
      <div>
        <p className="font-bold">{productName}</p>
        <div className="flex gap-x-1">
          <p style={{ color: `#${rarityColor} ` }}>{rarity}</p>
          <p>${price}</p>
        </div>
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
