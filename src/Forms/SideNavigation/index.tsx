import React from "react";
import "./sideNavigation.css";
import Logo from "../../Components/Logo/Logo.tsx";
import NavigationItem from "../../Components/NavigationItem";
import Routes from "../../Routing/Routes";

const SideNavigation = () => {
  return (
    <div className={"sideBarNavigation"}>
      <Logo />
      <NavigationItem to={Routes.home} name={"Home"} />
      <NavigationItem to={Routes.shopping_cart} name={"Shopping Cart"} />
    </div>
  );
};

export default SideNavigation;