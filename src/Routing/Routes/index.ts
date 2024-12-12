import { ReactNode } from "react";

const Routes = {
  home: "/home",
  product: (productId: ReactNode) => `product/${productId}`,
  shopping_cart: "/shopping_cart",
};

export default Routes;