import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";

export default function AgregarProducto({ isOpen, onClose }) {
  const [producto, setProducto] = useState({
    name: "",
    price: "",
    decription: "",
  });

  const [errors, setErrors] = useState({});

  return (
    <div class={`${isOpen ? "relative" : "hidden"}`}>
      <div class="fixed inset-0 bg-gray-500/75 "></div>
      <div class="fixed inset-y-3 left-[15%] sm:inset-y-[20%] sm:left-[10%] lg:left-[25%]">
        <div class="bg-white p-5">
          <div class="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 border-gray-900">
            <h3 class="text-lg font-semibold text-black">Añadir Producto</h3>
            <button
              type="button"
              onClick={onClose}
              class="text-black hover:bg-gray-200 hover:text-gray-900 rounded-lg text-xl p-1.5 ml-auto inline-flex items-center cursor-pointer"
            >
              <IoMdClose />
            </button>
          </div>
          <form action="POST">
            <div class="grid gap-4 mb-4 sm:grid-cols-2">
              <div>
                <label
                  for="name"
                  class="block mb-2 text-sm font-medium text-black"
                >
                  Nombre
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 placeholder-gray-400 "
                  placeholder="Example name"
                />
              </div>
              <div>
                <label
                  for="brand"
                  class="block mb-2 text-sm font-medium text-black"
                >
                  Precio
                </label>
                <input
                  type="number"
                  name="price"
                  id="price"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 placeholder-gray-400 "
                  placeholder="$1222"
                />
              </div>
              <div>
                <label
                  for="description"
                  class="block mb-2 text-sm font-medium text-black"
                >
                  Descripcion
                </label>
                <textarea
                  id="description"
                  rows="4"
                  class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 placeholder-gray-400"
                  placeholder="Ingrese una descripcion del producto"
                ></textarea>
              </div>
              <div>
                <label
                  for="imagen"
                  class="block mb-2 text-sm font-medium text-black"
                >
                  Imagen
                </label>
                <input
                  type="file"
                  id="img"
                  name="img"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 placeholder-gray-400 "
                />
              </div>
            </div>
            <button
              type="submit"
              class="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 font-medium cursor-pointer text-sm px-5 py-2.5 text-center "
            >
              Agregar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
