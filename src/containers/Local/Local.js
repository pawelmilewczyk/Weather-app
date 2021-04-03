import React, { useEffect, useState } from "react";

import axios from "axios";
import Aux from "../../hoc/Aux/Aux";
import Spinner from "../../components/Spinner/Spinner";
import City from "../../components/City/City";
import Info, { API_KEY } from "../../shared/Information/Information";

function Local() {
  // STATE
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const [status, setStatus] = useState(null);
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

  // GEOLOCATION API
  const getLocation = () => {
    if (!navigator.geolocation) {
      setStatus("Geolocation is not supported by your browser");
    } else {
      setStatus("Locating...");
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setStatus(null);
          setLat(position.coords.latitude);
          setLng(position.coords.longitude);
        },
        () => {
          setStatus("Unable to retrieve your location");
        }
      );
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  // OPEN_WEATHER API
  useEffect(() => {
    if (lat && lng) {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}`
        )
        .then((response) => {
          console.log(response.data);
          setCity(response.data.name);
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
          console.warn(error);
        });
    }
  }, [lat, lng]);

  const content = status ? (
    <Spinner />
  ) : (
    <Aux>
      <City name={city} />
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

  return <Aux>{content}</Aux>;
}

export default Local;
