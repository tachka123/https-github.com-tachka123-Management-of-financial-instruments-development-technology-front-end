import { BrowserRouter } from "react-router";
import PageWrapper from "./Components/PageWrapper";
import SideNavigation from "./Forms/SideNavigation";
import Router from "./Routing/Router";
import "./App.css";
import productsAPI from "./api/productsAPI";
import ProductsContextProvider from "./Contexts/ProductsContexts";
import PageContentWrapper from "./Components/PageContentWrapper";

const App = () => {
  return (
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
  );
};

export default App;
