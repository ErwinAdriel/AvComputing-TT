import { useContext } from "react";
import ProductList from "../componentes/ProductList";
import Banner from "../componentes/Banner";
import Categorias from "../componentes/Categorias";
import { CartContext } from "../context/CartContext";
import loading from "../img/loading.gif";
import { Helmet } from "react-helmet";

export default function Home() {
  const { carga } = useContext(CartContext);
  return (
    <div class="pt-34">
      <Helmet>
        <link rel="icon" type="image" href="/logoshop.png" />
        <meta charSet="UTF-8" />
        <title>AvComputing</title>
      </Helmet>
      <Banner />
      <Categorias />
      {carga ? (
        <img class="mx-auto" src={loading} alt="loading" />
      ) : (
        <div>
          <ProductList />
        </div>
      )}
    </div>
  );
}
