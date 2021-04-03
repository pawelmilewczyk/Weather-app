import React from "react";
import "./Sun.scss";

const sun = (props) => {
  const sunrise = `${String(props.sunrise.getHours()).padStart(
    2,
    "0"
  )}:${String(props.sunrise.getMinutes()).padStart(2, "0")}`;

  const sunset = `${String(props.sunset.getHours()).padStart(2, "0")}:${String(
    props.sunset.getMinutes()
  ).padStart(2, "0")}`;

  return (
    <div className="Sun">
      <div className="Sun__container">
        <span className="Sun__time">{sunrise}</span>

        <img
          className="Sun__icon"
          src={`${process.env.PUBLIC_URL}/assets/images/sunrise.png`}
          alt="clouds-icon"
        />
      </div>
      <div className="Sun__container">
        <img
          className="Sun__icon"
          src={`${process.env.PUBLIC_URL}/assets/images/sunset.png`}
          alt="clouds-icon"
        />
        <span className="Sun__time">{sunset}</span>
      </div>
    </div>
  );
};

export default sun;
