import { createContext } from "react";
import { useState } from "react";
import { PRODUCTS } from "../products";

export const ShopContext = createContext(null);

function getCartAmount() {
  const cartAmount = {};
  for (let i = 1; i <= PRODUCTS.length; i++) {
    cartAmount[i] = 0;
  }
  return cartAmount;
}

function ShopContextProvider(props) {
  const [cartItems, setCartItems] = useState(getCartAmount());

  function getTotalCartAmount() {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }
    return totalAmount;
  }

  function getItemsAmountInCart(cartItems) {
    const itemsAmount = [];

    for (const key in cartItems) {
      const value = cartItems[key];
      if (value !== 0) {
        itemsAmount.push(value);
      }
    }
    return itemsAmount;
  }

  function addCartItem(itemId) {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  }

  function removeCartItem(itemId) {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  }

  function setItemAmount(amount, itemId) {
    setCartItems((prev) => ({ ...prev, [itemId]: amount }));
  }

  function getRarityShadow(price) {
    let rarityShadow = "";

    if (price >= 1000 && price < 2000) {
      rarityShadow = "8b8c84";
    } else if (price >= 2000 && price < 3000) {
      rarityShadow = "378c30"; // 50% transparency
    } else if (price >= 3000 && price < 4000) {
      rarityShadow = "2087d6"; // 50% transparency
    } else if (price >= 4000 && price < 5000) {
      rarityShadow = "7736d1"; // 50% transparency
    } else if (price >= 5000) {
      rarityShadow = "c2c213"; // 50% transparency
    }
    return rarityShadow;
  }

  const contextValue = {
    cartItems,
    addCartItem,
    removeCartItem,
    setItemAmount,
    getTotalCartAmount,
    getRarityShadow,
    getItemsAmountInCart,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
}

export default ShopContextProvider;
