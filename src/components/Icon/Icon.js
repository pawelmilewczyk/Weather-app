import React from "react";
import "./Icon.scss";

const icon = (props) => {
  return props.icon ? (
    <img
      className="Icon"
      src={`${process.env.PUBLIC_URL}/assets/images/${props.icon}.png`}
      alt="icon"
    />
  ) : null;
};

export default icon;
