import { useState } from "react";
import { PRODUCTS } from "../../products";
import Header from "../reusableComponents/Header";
import Product from "./Product";
import ShopPopUpProduct from "./ShopPopUpProduct";
import SortByTable from "./sortTable/SortByTable";

function Shop() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [sortBy, setSortBy] = useState(null);

  function handleClickSortBy(sortValue) {
    setSortBy(sortValue);
  }
  console.log(sortBy);

  function handleProductClick(product) {
    setSelectedProduct(product);
  }

  function handleClosePopUp() {
    setSelectedProduct(null);
  }

  return (
    <div className="flex justify-center">
      <div className="w-[90%] ">
        <Header>Piraten Shop</Header>
        <SortByTable onSortClick={handleClickSortBy} />
        <div className="mb-10 grid justify-center gap-y-12 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 ">
          {PRODUCTS.map((product) => (
            <Product
              key={product.id}
              data={product}
              onProductClick={handleProductClick}
              sortBy={sortBy}
            />
          ))}
        </div>
        {selectedProduct && (
          <ShopPopUpProduct data={selectedProduct} onClose={handleClosePopUp} />
        )}
      </div>
    </div>
  );
}

export default Shop;
