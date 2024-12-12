import React, { useContext, useEffect } from "react";
import { ProductsContext } from "../../Contexts/ProductsContexts";
import ProductsList from "../../Components/ProductsList";
import ProductItemMinimized from "../../Components/ProductItemMinimized";
import { useNavigate } from "react-router";
import Routes from "../../Routing/Routes";

const HomePage = () => {
  const productsContext = useContext(ProductsContext);
  const navigate = useNavigate();

  useEffect(() => {
    productsContext.updateProducts();
  }, []);

  const navigateToProduct = (id: number) => () => {
    navigate(Routes.product(id));
  };
  return (
    <ProductsList>
      {productsContext.products.map(product => <ProductItemMinimized
        onClick={navigateToProduct(product.id)}
        key={product.id}
        product={product} />)}
    </ProductsList>
  );
};

export default HomePage;