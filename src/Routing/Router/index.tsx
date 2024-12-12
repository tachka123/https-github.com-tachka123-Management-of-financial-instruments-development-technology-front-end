import React from "react";
import { Navigate, Route, Routes } from "react-router";
import RoutesObject from "../Routes";

const Router = () => {
  return (
    <Routes>
      <Route path={RoutesObject.home}></Route>
      <Route path={RoutesObject.product(":id")}></Route>
      <Navigate to={RoutesObject.home} />
    </Routes>
  );
};

export default Router;