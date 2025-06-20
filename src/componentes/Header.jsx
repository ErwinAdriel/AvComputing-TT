import { useState, useContext } from "react";
import Nav from "../componentes/Nav";
import { CartContext } from "../context/CartContext";

export default function Header(){
    const {cart, vaciarCart, eliminarCant, vacio, agregarCant} = useContext(CartContext);
    return(
        <header class="relative">
            <Nav cartItems={cart} vacio={vacio} vaciarItems={vaciarCart} eliminarItem={eliminarCant} agregarItem={agregarCant} />
        </header>
    );
}