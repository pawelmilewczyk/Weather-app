import React from "react";
import "./Form.scss";

const form = (props) => {
  return (
    <form className="Form" onSubmit={props.search}>
      <input className="Form__input" placeholder="City name" type="text" />
      <input className="Form__submit" type="submit" />
    </form>
  );
};

export default form;
