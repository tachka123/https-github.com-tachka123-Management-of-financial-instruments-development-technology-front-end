import api from "../api.ts";

interface Purchase {
  products: number[];    // Обязательный
  amount: number;        // Обязательный
  currency: string;      // Обязательный
  firstName?: string;    // Необязательный
  lastName?: string;     // Необязательный
  address?: string;      // Необязательный
}

class PurchaseAPI {
  savePurchase(purchase: Purchase) {
    return api.post("/purchase", purchase);
  }
}

const purchaseAPI = new PurchaseAPI();
export default purchaseAPI;