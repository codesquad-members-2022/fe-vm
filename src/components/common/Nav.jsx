import React from "react";
import { NavLink } from "react-router-dom";

function Nav({ children, link, activeStyle, ...rest }) {
  return (
    <NavLink to={link} style={activeStyle} {...rest}>
      {children}
    </NavLink>
  );
}

export { Nav };
