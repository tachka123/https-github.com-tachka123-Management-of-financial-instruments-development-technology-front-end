import api from "../api.ts";
import { ProductsList } from "./types";

class ProductsAPI {
  public getProducts() {
    return api.get<ProductsList>("/products");
  }
}

const productsAPI = new ProductsAPI();

export default productsAPI;