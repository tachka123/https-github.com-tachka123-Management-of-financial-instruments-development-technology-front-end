export enum CurrencyTypes {
  USD = "USD"
}

export interface ProductItem {
  name: string,
  price: number,
  currency: CurrencyTypes,
  description: string,
}

export type ProductsList = ProductItem[]