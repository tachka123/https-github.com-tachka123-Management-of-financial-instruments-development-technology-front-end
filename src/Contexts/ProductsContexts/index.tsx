import React, { createContext, PropsWithChildren, useState } from "react";
import { ProductItem, ProductsList } from "../../api/productsAPI/types";
import productsAPI from "../../api/productsAPI";

interface ProductsContextInitialValueType {
  products: ProductsList;
  setProducts: (value: (((prevState: ProductsList) => ProductsList) | ProductsList)) => void;
  updateProducts(): Promise<void>;
  getProductById(id: number): Promise<void>;
  productById: ProductItem | null;
}


export const ProductsContext = createContext<ProductsContextInitialValueType>(
  {
    products: [],
    setProducts: () => {},
    updateProducts(): Promise<void> {},
    getProductById(id: number): Promise<void> {},
    productById: null,
  },
);

interface ProductsContextProviderProps extends PropsWithChildren {
}

const ProductsContextProvider = ({ children }: ProductsContextProviderProps) => {
  const [products, setProducts] = useState<ProductsList>([]);
  const [productById, setProductById] = useState<ProductItem | null>(null);

  const updateProducts = () => productsAPI.getProducts()
    .then((response) => {
      setProducts(response.data);
    }).catch((err) => alert(err));

  const getProductById = (id: number) => productsAPI.getProductById(id)
    .then((response) => {
      setProductById(response.data);
    }).catch((err) => alert(err));

  return <ProductsContext value={{
    products,
    setProducts,
    updateProducts,
    getProductById,
    productById,
  }}>{children}</ProductsContext>;
};


export default ProductsContextProvider;