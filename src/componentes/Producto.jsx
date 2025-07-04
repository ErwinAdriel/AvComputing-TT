import { useContext } from "react";
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

export default function Producto({ product }) {
  const {handleAddToCart} = useContext(CartContext);

  return (
    <div
      class="w-full h-full border-1 rounded-xl border-slate-300 hover:border-slate-900 overflow-hidden transition delay-150 duration-300 ease-in-out "
      key={product.id}
    >
      <Link to={`/productos/${product.id}`}>
        <div>
          <img src={`${product.img}`} alt={product.name} />
        </div>
      </Link>
      <div class="flex justify-center sm:h-[102px] h-[120px] items-center border-t border-gray-300">
        <div>
          <Link to={`/productos/${product.id}`}>
            <p class="text-lg sm:text-sm text-center text-gray-500  ">
              {product.name}
            </p>
          </Link>
          <div class="flex justify-between mt-3 space-x-30 sm:space-x-7">
            <div class="my-auto">
              <span class="font-medium text-xl sm:text-lg text-center font-600">
                $ {product.price}
              </span>
            </div>
            <button
              onClick={() => handleAddToCart(product)}
              type="button"
            >
              <div class="cursor-pointer flex bg-slate-400 font-medium text-black py-3 px-5 sm:px-4 space-x-2 text-md ">
                <span class="my-auto text-xl">
                  <IoCartOutline />
                </span>
                <span>Comprar</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
