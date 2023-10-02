import { PRODUCTS } from "../../products";
import Header from "../reusableComponents/Header";
import Product from "./Product";

function Shop() {
  return (
    <div>
      <Header>Piraten Shop</Header>
      <div className="mb-10 grid justify-center gap-y-12 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 ">
        {PRODUCTS.map((product) => (
          <Product key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
}

export default Shop;
