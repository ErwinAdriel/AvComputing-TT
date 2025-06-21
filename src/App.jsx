import { useState, useEffect, useContext } from "react";
import "./App.css";
import Home from "./layout/Home";
import Footer from "./componentes/Footer";
import Header from "./componentes/Header";
import Error from "./layout/Error404";
import DetallesProductos from "./componentes/DetallesProductos";
import Nosotros from "./layout/Nosotros";
import Contacto from "./layout/Contacto";
import GaleriadeProductos from "./layout/GaleriadeProductos";
import Admin from "./layout/Admin";
import Login from "./layout/Login";
import RutaProtegida from "./auth/RutasProtegidas";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartContext } from "./context/CartContext";

function App() {
  const {
    cart,
    products,
    carga,
    vacio,
    error,
    handleAddToCart,
    eliminarCant,
    agregarCant,
    vaciarCart,
    isAuthenticated
  } = useContext(CartContext);

  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path="*" element={<Error />} />
          <Route
            path="/"
            element={
              <Home
                products={products}
                handleAddToCart={handleAddToCart}
              />
            }
          />
          <Route
            path="/productos"
            element={
              <GaleriadeProductos products={products} />
            }
          />
          <Route
            path="/productos/:id"
            element={
              <DetallesProductos
                products={products}
                addToCart={handleAddToCart}
              />
            }
          />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route
            path="/admin"
            element={
              <RutaProtegida isAuthenticated={isAuthenticated}>
                <Admin />
              </RutaProtegida>
            }
          />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
