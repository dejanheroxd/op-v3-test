import { XCircle } from "phosphor-react";

function ShopPopUpProduct(props) {
  const { data, onClose } = props;
  const { productName, description, productImage } = data;

  return (
    <div className="fixed top-0 flex h-screen w-screen items-center justify-center border bg-black bg-opacity-40 text-2xl  backdrop-blur-md">
      <div className="relative flex h-[630px] w-[1100px] rounded-xl border-2 border-none bg-white shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
        <button onClick={onClose} className="absolute right-4 top-4 ">
          <XCircle
            className="transition-colors duration-150 hover:text-red-400"
            size={32}
          />
        </button>
        <div className="flex h-full items-center ">
          <img
            className="h-full rounded-l-xl border-none object-cover"
            src={productImage}
            alt=""
          />
          <div className="flex flex-col gap-y-8 p-11">
            <h2 className="text-4xl font-semibold">{productName}</h2>
            <p>Seltenheit: </p>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ShopPopUpProduct;
