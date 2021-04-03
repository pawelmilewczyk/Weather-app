import React from "react";
import "./Temperature.scss";

const temperature = (props) => {
  return (
    <h1 className="Temperature">
      {props.temp ? (props.temp - 273.15).toFixed(0) : null}
      {props.temp ? "\u00b0" : null}
    </h1>
  );
};

export default temperature;
