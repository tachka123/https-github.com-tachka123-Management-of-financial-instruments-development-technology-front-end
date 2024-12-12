import React from "react";
import { Navigate, Route, Routes } from "react-router";
import RoutesObject from "../Routes";
import HomePage from "../../Pages/HomePage";

const Router = () => {
  return (
    <Routes>
      <Route path={RoutesObject.home} element={<HomePage />}>
      </Route>
      <Route path={RoutesObject.product(":id")}></Route>
      <Route path={"*"} element={<Navigate to={RoutesObject.home} replace={true} />} />
    </Routes>
  );
};

export default Router;