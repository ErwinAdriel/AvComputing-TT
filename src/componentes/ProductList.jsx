import { useContext } from "react";
import Producto from "./Producto";
import { CartContext } from "../context/CartContext";

export default function ProductList(){
    const {products} = useContext(CartContext);

    return(
        <>        
            <div class="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-10 px-5 sm:px-20 mb-20 mt-10">
                {
                    products.map((product) => (
                        <Producto key={product.id} product={product}/>
                    ))
                }
            </div>
        </>
    )
}