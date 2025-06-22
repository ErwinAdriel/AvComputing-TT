import { useEffect, useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { RiAddFill } from "react-icons/ri";
import { IoSearch } from "react-icons/io5";
import loading from "../img/loading.gif";
import AgregarProducto from "../componentes/AgregarProducto";

export default function Admin() {
  const [products, setProducts] = useState([]);
  const [carga, setCarga] = useState(true);
  const [isCartOpen, setCartOpen] = useState(false);

  useEffect(() => {
    fetch("https://685716ec21f5d3463e54702a.mockapi.io/productos/products")
      .then((respuesta) => respuesta.json())
      .then((datos) => {
        setTimeout(() => {
          setProducts(datos);
          setCarga(false);
        }, 2000);
      })
      .catch((error) => {
        console.error("Error: ", error);
        setTimeout(() => {
          setCarga(false);
          setError(true);
        });
      });
  }, []);

  const agregarProducto = async (product) => {
    try {
      const respuesta = await fetch(
        "https://685716ec21f5d3463e54702a.mockapi.io/productos/products",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(product),
        }
      );
      if (!respuesta.ok) {
        throw new Error("Error al agregar producto");
      }
      const data = await respuesta.json();
      setCartOpen(false);
      alert("Producto agregado correctamente");
    } catch (error) {
      console.log(error.message);
    }
  };

  const eliminarProducto = async (id) => {
    const confirmar = window.confirm("¿Estas seguro de eliminar el producto?");

    if (confirmar) {
      try {
        const respuesta = await fetch(
          `https://685716ec21f5d3463e54702a.mockapi.io/productos/products/${id}`,
          {
            method: "DELETE",
          }
        );
        if (!respuesta.ok) {
          throw Error("Error al eliminar");
        }
        alert("Producto eliminado correctamente");
      } catch (error) {
        alert("Hubo un problema al elimnar el producto");
      }
    }
  };

  return (
    <div className="bg-white mb-10 py-5 lg:px-20">
      {carga ? (
        <img class="mx-auto" src={loading} alt="loading" />
      ) : (
        <div>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold text-gray-900 sm:text-5xl">
              Sistema de autogestion
            </h2>
          </div>
          <div className="flex justify-between mt-5">
            <div className="bg-blue-700 text-white hover:bg-blue-900">
              <button onClick={() => setCartOpen(!isCartOpen)}>
                <div className="flex px-4 py-3 cursor-pointer text-normal font-medium">
                  <RiAddFill className="text-2xl my-auto" />
                  <span className="lg:flex hidden">Agregar</span>
                </div>
              </button>
            </div>
            <AgregarProducto
              isOpen={isCartOpen}
              onClose={() => setCartOpen(false)}
              onAgregar={agregarProducto}
            />
            <div class="md:flex border border-slate-400">
              <div class="w-full h-full flex items-center px-2 bg-white">
                <form action="#" class="h-full w-full flex">
                  <IoSearch className="my-auto mx-auto text-2xl text-gray-400" />
                  <input
                    type="text"
                    class="h-full w-full px-4 focus:outline-none placeholder-gray-400"
                    placeholder="Buscar"
                  />
                </form>
              </div>
            </div>
          </div>
          <div className=" overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500 mt-5">
              <thead className="text-sm text-gray-700 uppercase bg-gray-50">
                <tr>
                  <th scope="col" className="px-4 py-4">
                    ID
                  </th>
                  <th scope="col" className="px-4 py-4">
                    Nombre
                  </th>
                  <th scope="col" className="px-4 py-4">
                    Imagen
                  </th>
                  <th scope="col" className="px-4 py-4">
                    Descripcion
                  </th>
                  <th scope="col" className="px-4 py-4">
                    Precio
                  </th>
                  <th scope="col" className="px-4 py-4">
                    Acciones
                  </th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id} className="border-b">
                    <th
                      scope="row"
                      className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap"
                    >
                      {product.id}
                    </th>
                    <td className="px-4 py-3">{product.name}</td>
                    <td className="px-4 py-3">
                      <img
                        src={product.img}
                        className="w-10"
                        alt={product.name}
                      />
                    </td>
                    <td className="px-4 py-3">Esto es una descripcion</td>
                    <td className="px-4 py-3">$ {product.price}</td>
                    <td className="px-4 py-5 flex items-center space-x-3">
                      <div className="text-blue-700 text-xl cursor-pointer hover:text-blue-950">
                        <FaRegEdit />
                      </div>
                      <button onClick={() => eliminarProducto(product.id)}>
                        <div className="text-red-600 text-2xl cursor-pointer hover:text-red-900">
                          <MdDelete />
                        </div>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
