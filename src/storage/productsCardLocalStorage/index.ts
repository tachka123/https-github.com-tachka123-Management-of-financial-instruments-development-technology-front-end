import LocalStorageUtil from "../index.ts";

const key = "products_card";

const productsCardLocalStorage = new LocalStorageUtil<number[]>(key);

export default productsCardLocalStorage;