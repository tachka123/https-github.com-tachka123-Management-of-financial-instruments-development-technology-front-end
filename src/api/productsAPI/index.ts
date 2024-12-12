import api from "../api.ts";
import { ProductItem, ProductsList } from "./types";

class ProductsAPI {
  public getProducts() {
    return api.get<ProductsList>("/products");
  }
  public getProductById(id: number) {
    return api.get<ProductItem>(`/products/${id}`);
  }
}

const productsAPI = new ProductsAPI();

export default productsAPI;