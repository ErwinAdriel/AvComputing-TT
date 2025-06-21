import { useContext } from "react";
import ProductList from "../componentes/ProductList";
import loading from "../img/loading.gif";
import { CartContext } from "../context/CartContext";

export default function GaleriadeProductos(){
    const {carga}= useContext(CartContext);
    
    return(
        <>
            {
                carga ? <img class="mx-auto" src={loading} alt="loading" /> :
                <div>
                    <ProductList />
                </div>
            }
        </>
    )
}