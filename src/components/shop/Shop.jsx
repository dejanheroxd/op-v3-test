import { useState } from "react";
import { PRODUCTS } from "../../products";
import Header from "../reusableComponents/Header";
import Product from "./Product";
import ShopPopUpProduct from "./ShopPopUpProduct";

function Shop() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  console.log(selectedProduct);

  function handleProductClick(product) {
    setSelectedProduct(product);
  }

  function handleClosePopUp() {
    setSelectedProduct(null);
  }

  return (
    <div>
      <Header>Piraten Shop</Header>
      <div className="mb-10 grid justify-center gap-y-12 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 ">
        {PRODUCTS.map((product) => (
          <Product
            key={product.id}
            data={product}
            onProductClick={handleProductClick}
          />
        ))}
      </div>
      {selectedProduct && (
        <ShopPopUpProduct data={selectedProduct} onClose={handleClosePopUp} />
      )}
    </div>
  );
}

export default Shop;
