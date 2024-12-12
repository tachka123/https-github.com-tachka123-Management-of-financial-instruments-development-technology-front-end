import { BrowserRouter } from "react-router";
import PageWrapper from "./Components/PageWrapper";
import SideNavigation from "./Forms/SideNavigation";
import Router from "./Routing/Router";
import "./App.css";
import productsAPI from "./api/productsAPI";
import ProductsContextProvider from "./Contexts/ProductsContexts";

const App = () => {
  return (
    <ProductsContextProvider>
      <BrowserRouter>
        <PageWrapper>
          <SideNavigation />
          <Router />
        </PageWrapper>
      </BrowserRouter>
    </ProductsContextProvider>
  );
};

export default App;
