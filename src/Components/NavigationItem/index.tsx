import React, { PropsWithChildren } from "react";
import { NavLink } from "react-router";

interface NavigationItemProps extends PropsWithChildren {
  to: string;
  name: string;
}

const NavigationItem = ({ to, name }: NavigationItemProps) => {
  return (
    <NavLink to={to}>
      {name}
    </NavLink>
  );
};

export default NavigationItem;