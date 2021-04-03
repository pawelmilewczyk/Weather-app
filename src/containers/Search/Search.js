import React, { useEffect, useState } from "react";
import "./Search.scss";

import axios from "axios";
import Aux from "../../hoc/Aux/Aux";
import Info, { API_KEY } from "../../shared/Information/Information";
import Form from "../../components/Form/Form";

function Search() {
  // STATE
  const [message, setMessage] = useState(null);
  const [city, setCity] = useState(null);
  const [temperature, setTemperature] = useState(null);
  const [icon, setIcon] = useState(null);
  const [description, setDescription] = useState(null);
  const [windSpeed, setWindSpeed] = useState(null);
  const [clouds, setClouds] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [sunrise, setSunrise] = useState(null);
  const [sunset, setSunset] = useState(null);
  const [timezone, setTimezone] = useState(null);

  // OPEN_WEATHER API
  useEffect(() => {
    if (city) {
      axios
        .get(
          `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
        )
        .then((response) => {
          console.log(response.data);

          setMessage(null);
          setTemperature(response.data.main.temp);
          setIcon(response.data.weather[0].icon);
          setDescription(response.data.weather[0].description);
          setWindSpeed(response.data.wind.speed);
          setClouds(response.data.clouds.all);
          setHumidity(response.data.main.humidity);
          setSunrise(response.data.sys.sunrise);
          setSunset(response.data.sys.sunset);
          setTimezone(response.data.timezone);
        })
        .catch((error) => {
          console.warn(error.message);
          setMessage("Wrong city name, try again :)");
        });
    }
  }, [city]);

  let content = null;

  if (message) {
    content = <div className="message">{message}</div>;
  } else {
    if (city) {
      content = (
        <Aux>
          <Info
            temperature={temperature}
            description={description}
            icon={icon}
            clouds={clouds}
            windSpeed={windSpeed}
            humidity={humidity}
            sunrise={sunrise}
            sunset={sunset}
            timezone={timezone}
          />
        </Aux>
      );
    } else content = null;
  }

  const inputHandler = (e) => {
    e.preventDefault();
    setCity(e.target[0].value);
  };

  return (
    <Aux>
      <Form search={inputHandler} />
      {content}
    </Aux>
  );
}

export default Search;
