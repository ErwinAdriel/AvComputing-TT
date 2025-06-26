import { createContext, useEffect, useState } from "react";

export const AdminContext = createContext();
export const AdminProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({
    name: "",
    img: "",
    description: "",
    price: "",
  });

  const [carga, setCarga] = useState(true);
  const [isCartOpen, setCartOpen] = useState(false);
  const [formEditOpen, setFormEditOpen] = useState(false);
  const [seleccionado, setSeleccionado] = useState(null);

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
      mostrarProductos();
    } catch (error) {
      console.log(error.message);
    }
  };

  const mostrarProductos = async () => {
    try {
      const respuesta = await fetch(
        "https://685716ec21f5d3463e54702a.mockapi.io/productos/products"
      );
      const data = await respuesta.json();
      setProducts(data);
    } catch (error) {
      console.log("Error al cargar los productos", error);
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
        mostrarProductos();
      } catch (error) {
        alert("Hubo un problema al elimnar el producto");
      }
    }
  };

  const editarProducto = async (producto) => {
    const confirmar = window.confirm(
      "¿Estas seguro de actualizar el producto?"
    );

    if (confirmar) {
      try {
        const respuesta = await fetch(
          `https://685716ec21f5d3463e54702a.mockapi.io/productos/products/${producto.id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(producto),
          }
        );
        if (!respuesta.ok) {
          throw Error("Error al actualizar el producto");
        }
        const data = await respuesta.json();
        alert("Producto actualizado correctamente");
        setFormEditOpen(false);
        setSeleccionado(null);
        mostrarProductos();
      } catch (error) {
        console.log("Hubo un error al editar", error);
      }
    }
  };

  return (
    <AdminContext.Provider
      value={{
        products,
        isCartOpen,
        setCartOpen,
        formEditOpen,
        setFormEditOpen,
        seleccionado,
        setSeleccionado,
        carga,
        agregarProducto,
        eliminarProducto,
        editarProducto,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};
