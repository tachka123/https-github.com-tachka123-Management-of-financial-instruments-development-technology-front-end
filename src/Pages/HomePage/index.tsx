import React, { useContext, useEffect } from "react";
import { ProductsContext } from "../../Contexts/ProductsContexts";
import ProductsList from "../../Components/ProductsList";

const HomePage = () => {
  const productsContext = useContext(ProductsContext);

  useEffect(() => {
    productsContext.updateProducts();
  }, []);
  return (
    <div>
      <ProductsList></ProductsList>
    </div>
  );
};

export default HomePage;