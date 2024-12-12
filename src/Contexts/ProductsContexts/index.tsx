import React, { createContext, PropsWithChildren, useState } from "react";
import { ProductsList } from "../../api/productsAPI/types";
import productsAPI from "../../api/productsAPI";

interface ProductsContextInitialValueType {
  products: ProductsList;
  setProducts: (value: (((prevState: ProductsList) => ProductsList) | ProductsList)) => void;
  updateProducts(): Promise<void>;
}


export const ProductsContext = createContext<ProductsContextInitialValueType>(
  { products: [], setProducts: () => {}, updateProducts(): Promise<void> {} },
);

interface ProductsContextProviderProps extends PropsWithChildren {
}

const ProductsContextProvider = ({ children }: ProductsContextProviderProps) => {
  const [products, setProducts] = useState<ProductsList>([]);

  const updateProducts = () => productsAPI.getProducts().then((response) => {
    setProducts(response.data);
  }).catch((err) => alert(err));

  return <ProductsContext value={{
    products,
    setProducts,
    updateProducts,
  }}>{children}</ProductsContext>;
};


export default ProductsContextProvider;