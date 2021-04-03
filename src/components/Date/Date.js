import React from "react";
import "./Date.scss";

const date = (props) => {
  const time = new Date().getTime();
  const timezone = props.timezone;
  console.log(new Date(time + timezone * 1000).toUTCString());

  const localDate = new Date(time + timezone * 1000).toUTCString().slice(0, -7);
  return <span className="Date">{localDate}</span>;
};

export default date;
