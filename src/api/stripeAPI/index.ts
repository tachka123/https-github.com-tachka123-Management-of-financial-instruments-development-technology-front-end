import api from "../api.ts";

class StripeAPI {
  makePurchase(amount: number, currency: string = "USD") {
    return api.post <{
      clientSecret: string,
    }>("/stripe/createPayment",
      {
        amount,
        currency,
      });
  }
}

const stripeAPI = new StripeAPI();
export default stripeAPI;