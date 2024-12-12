import React, { useContext, useEffect, useMemo } from "react";
import { useParams } from "react-router";
import { ProductsContext } from "../../Contexts/ProductsContexts";

import "./s.css";
import { ProductsCardContext } from "../../Contexts/ProductsCardContext";

const ProductPreviewPage = () => {
  const { id } = useParams();
  const { getProductById, productById } = useContext(ProductsContext);
  const { addToCard, deleteFromCard, cardProductsList } = useContext(ProductsCardContext);

  useEffect(() => {
    if (id) {
      getProductById(Number(id));
    }
  }, []);

  const isProductAlreadyInShopCart = useMemo(() => cardProductsList.includes(Number(id)), [cardProductsList]);

  const pickActionByProductInShopCart = () => isProductAlreadyInShopCart ?
    () => deleteFromCard(Number(id)) :
    () => addToCard(Number(id));

  return (
    <div className={"productPreviewWrapper"}>
      <h1>{productById?.name}</h1>
      <h2>{productById?.description}</h2>
      <span>{productById?.price} ${productById?.currency}</span>
      <button
        onClick={pickActionByProductInShopCart()}>{isProductAlreadyInShopCart ? `Already in cart. Remove from cart?` : "Add to cart"}</button>
    </div>
  );
};

export default ProductPreviewPage;