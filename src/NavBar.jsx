import { Link, useLocation } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import onePieceHeader from "./assets/onepiece-divider.png";
import { useContext } from "react";
import { ShopContext } from "./context/ShopContext";

function NavBar() {
  const location = useLocation();
  const opImage = onePieceHeader;
  const { cartItems, getItemsAmountInCart } = useContext(ShopContext);
  const itemsAmountArray = getItemsAmountInCart(cartItems);

  const itemsAmount = itemsAmountArray.reduce(
    (total, amount) => total + amount,
    0,
  );

  function isLinkActive(path) {
    return location.pathname === path;
  }

  return (
    <div className="flex h-20 items-center justify-end bg-yellow-300 pr-5">
      <div className="flex w-full justify-center">
        <img className="h-full min-w-[350px] pl-24" src={opImage} alt="" />
      </div>
      <div className="mr-3 flex items-center gap-2 ">
        <Link
          className={`${
            isLinkActive("/") ? "font-semibold" : ""
          } pb-1 text-[19px]  leading-5`}
          to="/"
        >
          Shop
        </Link>
        <Link className="relative" to="/cart">
          <ShoppingCart
            weight={`${isLinkActive("/cart") ? "bold" : "regular"}`}
            size={27}
          />
          <p className="absolute left-6 top-[-8px]">{itemsAmount}</p>
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
