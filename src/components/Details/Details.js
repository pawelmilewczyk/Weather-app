import React from "react";
import "./Details.scss";
import Detail from "./Detail/Detail";

const detail = (props) => {
  return (
    <div className="Details">
      <div className="detail">
        <img
          className="detail__icon"
          src={`${process.env.PUBLIC_URL}/assets/images/clouds.png`}
          alt="clouds-icon"
        />
        <Detail type={props.clouds} />
      </div>
      <div className="detail">
        <img
          className="detail__icon"
          src={`${process.env.PUBLIC_URL}/assets/images/wind.png`}
          alt="wind-icon"
        />
        <Detail type={props.windSpeed} />
      </div>
      <div className="detail">
        <img
          className="detail__icon"
          src={`${process.env.PUBLIC_URL}/assets/images/humidity.png`}
          alt="humidity-icon"
        />
        <Detail type={props.humidity} />
      </div>
    </div>
  );
};

export default detail;
