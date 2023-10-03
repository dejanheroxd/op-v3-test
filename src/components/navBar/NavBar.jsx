import { Link, useLocation } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import onePieceHeader from "../../assets/onepiece-divider.png";
import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
import SearchBar from "./SearchBar";

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
    <div className="relative flex h-20 items-center  bg-yellow-300 ">
      <div className="flex w-[93%] justify-between">
        <div className="">
          <img className="" src={opImage} alt="" />
        </div>
        <div className="mr-3 flex items-center gap-2 ">
          <SearchBar />
          <Link
            className={`${
              isLinkActive("/") ? "font-semibold" : ""
            } pb-1 text-[19px]  leading-5`}
            to="/"
          >
            Shop
          </Link>
          <div className="relative">
            <Link to="/cart">
              <ShoppingCart
                weight={`${isLinkActive("/cart") ? "regular" : "regular"}`}
                size={27}
              />
              <p className="border-gray absolute left-6 top-[-8px] rounded-full  bg-white px-[8px] text-black">
                {itemsAmount}
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
