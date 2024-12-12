import React, { PropsWithChildren } from "react";
import "./s.css";

interface ProductsListProps extends PropsWithChildren {

}

const ProductsList = ({ children }: ProductsListProps) => {
  return (
    <div className={"productsList"}>
      {children}
    </div>
  );
};

export default ProductsList;