import React, { useContext } from "react";
import ProductList from "../componentes/ProductList";
import Banner from "../componentes/Banner";
import Categorias from "../componentes/Categorias";
import { CartContext } from "../context/CartContext";
import loading from "../img/loading.gif";

export default function Home({products, handleAddToCart}){
    
    const {carga} = useContext(CartContext);
    return(
        <>
            <Banner />
            <Categorias />
            {
                carga ? <img class="mx-auto" src={loading} alt="loading" /> :
                <div>
                    <ProductList products={products} addToCart={handleAddToCart}/>
                </div>
            }
        </>
    )
}