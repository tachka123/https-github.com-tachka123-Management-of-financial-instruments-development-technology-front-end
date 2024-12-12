import React from "react";
import "./s.css";
import { ProductItem } from "../../api/productsAPI/types";

interface ProductItemMinimizedProps {
  product: ProductItem;
  onClick?(): void;
}

const ProductItemMinimized = ({ product, onClick }: ProductItemMinimizedProps) => {
  return (
    <div onClick={onClick} className={"productItemMinimized"}>
      <span>{product.name}</span>
      <span>{product.description}</span>
      <span>{product.price} {product.currency}</span>
    </div>
  );
};

export default ProductItemMinimized;