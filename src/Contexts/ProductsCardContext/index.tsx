import { createContext, PropsWithChildren, useState } from "react";
import productsCardLocalStorage from "../../storage/productsCardLocalStorage";
import productsAPI from "../../api/productsAPI";
import { ProductsList } from "../../api/productsAPI/types";

interface ProductsCardContextState {
  cardProductsList: number[];
  setCardProducts: (value: (((prevState: number[]) => number[]) | number[])) => void;
  deleteFromCard(id: number): void;
  addToCard(id: number): void;
  fetchItemsFromProductsCart(): void;
  cardProductsListByIds: ProductsList;
  clearCart(): void;

}

export const ProductsCardContext = createContext<ProductsCardContextState>({
  cardProductsList: [],
  setCardProducts: () => {},
  addToCard(id: number) {},
  deleteFromCard(id: number) {},
  fetchItemsFromProductsCart() {},
  cardProductsListByIds: [],
  clearCart() {},
});

interface ProductsCardProviderProps extends PropsWithChildren {
}

const ProductsCardProvider = ({ children }: ProductsCardProviderProps) => {
  const [cardProducts, setCardProducts] = useState(productsCardLocalStorage.getValue() ?? []);
  const [cardProductsListByIds, setProductsListByIds] = useState<ProductsList>([]);

  const addToCard = (id: number) => setCardProducts(s => {
    const newState = [...s, id];
    productsCardLocalStorage.setValue(newState);
    return newState;
  });

  const deleteFromCard = (id: number) => {
    setCardProducts(s => {
      const newState = s.filter(_id => _id !== id);
      productsCardLocalStorage.setValue(newState);
      return newState;
    });
  };

  const clearCart = () => {
    setCardProducts([]);
    setProductsListByIds([]);
    productsCardLocalStorage.setValue([]);
  };

  const fetchItemsFromProductsCart = () => {
    Promise.allSettled(cardProducts.map(id => productsAPI.getProductById(id))).then((productsResponse => {
      const productItems =
        productsResponse.reduce((acc: ProductsList, response) => {
          switch (response.status) {
            case "fulfilled": {
              acc.push(response.value.data);
              return acc;
            }
            default:
              return acc;
          }
        }, []);
      const ids = productItems.map(item => item.id);
      productsCardLocalStorage.setValue(ids);
      setProductsListByIds(productItems);
    }));
  };

  return <ProductsCardContext value={{
    cardProductsList: cardProducts,
    setCardProducts,
    addToCard,
    deleteFromCard,
    fetchItemsFromProductsCart,
    cardProductsListByIds,
    clearCart,
  }}>{children}</ProductsCardContext>;
};

export default ProductsCardProvider;