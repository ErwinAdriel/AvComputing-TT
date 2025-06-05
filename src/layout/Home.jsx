import React from "react";
import ProductList from "../componentes/ProductList";
import loading from "../img/loading.gif";

export default function Home({products, cargando, handleAddToCart}){
    
    return(
        <>
            {
                cargando ? <img class="mx-auto" src={loading} alt="loading" /> :
                <div>
                    <ProductList products={products} addToCart={handleAddToCart}/>
                </div>
            }
        </>
    )
}