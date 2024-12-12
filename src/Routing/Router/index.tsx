import React from "react";
import { Navigate, Route, Routes } from "react-router";
import RoutesObject from "../Routes";
import HomePage from "../../Pages/HomePage";
import ProductPreviewPage from "../../Pages/ProductPreviewPage";
import ProductsCartPage from "../../Pages/ProductsCartPage";

const Router = () => {
  return (
    <Routes>
      <Route path={RoutesObject.home} element={<HomePage />}>
      </Route>
      <Route path={RoutesObject.product(":id")} element={<ProductPreviewPage />}></Route>
      <Route path={RoutesObject.shopping_cart} element={<ProductsCartPage />}></Route>
      <Route path={"*"} element={<Navigate to={RoutesObject.home} replace={true} />} />
    </Routes>
  );
};

export default Router;