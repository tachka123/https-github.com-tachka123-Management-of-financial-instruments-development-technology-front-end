import { BrowserRouter } from "react-router";
import PageWrapper from "./Components/PageWrapper";
import SideNavigation from "./Forms/SideNavigation";
import Router from "./Routing/Router";
import ProductsContextProvider from "./Contexts/ProductsContexts";
import PageContentWrapper from "./Components/PageContentWrapper";

import "./App.css";
import ProductsCardProvider from "./Contexts/ProductsCardContext";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(import.meta.env.REACT_APP_STRIPE_PUBLIC);


const App = () => {
  return (
    <Elements stripe={stripePromise}>
      <ProductsCardProvider>
        <ProductsContextProvider>
          <BrowserRouter>
            <PageWrapper>
              <SideNavigation />
              <PageContentWrapper>
                <Router />
              </PageContentWrapper>
            </PageWrapper>
          </BrowserRouter>
        </ProductsContextProvider>
      </ProductsCardProvider>
    </Elements>
  );
};

export default App;
