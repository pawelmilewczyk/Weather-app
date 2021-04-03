import React from "react";
import "./Navigation.scss";
import { NavLink } from "react-router-dom";

const navigation = (props) => {
  return (
    <div className="Nav">
      <NavLink to="/" exact className="Nav__item">
        Local
      </NavLink>
      <NavLink to="/search" className="Nav__item">
        Search
      </NavLink>
    </div>
  );
};

export default navigation;
