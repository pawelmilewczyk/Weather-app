import React, { useState, useEffect } from "react";
import "./Form.scss";
import axios from "axios";
import { matchSorter } from "match-sorter";

const Form = (props) => {
  // STATE
  const [city, setCity] = useState("");
  const [data, setData] = useState([
    "Wejherowo",
    "Reda",
    "Rumia",
    "Sopot",
    "Gdynia",
    "Gdańsk",
    "Zakopane",
    "Poznań",
    "New York",
    "Paryż",
    "Sydney",
    "Monachium",
  ]);

  let updatedData = [];
  let id;

  // COUNTRIES API
  useEffect(() => {
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then((res) => {
        const updatedApiData = data.slice();
        [res.data].map((el) =>
          el.map((country) => updatedApiData.push(country.name))
        );
        setData(updatedApiData);
      })
      .catch((err) => console.error(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const removeChildren = () => {
    document
      .querySelectorAll(".Hints__City")
      .forEach((child) => child.remove());
  };

  const clickHandler = (e) => {
    const inputValue = e.target.innerHTML.trim();
    setCity(inputValue);
    removeChildren();
  };

  const changeHandler = (e) => {
    removeChildren();
    document.querySelector("#container").style.height = "auto";
    const inputValue = e.target.value;

    if (inputValue.length > 0) {
      updatedData = matchSorter(data, inputValue);
      updatedData.map((country) => {
        id = country.split(" ").join("");
        document.getElementById("container").insertAdjacentHTML(
          "beforeend",
          `
          <div class="Hints__City" key=${country} id=${id}>
            ${country}
          </div>
         `
        );
        return updatedData;
      });
    }
    setCity(inputValue);
  };

  const cityCapitalized = city
    ? city
        .split(" ")
        .map((el) => {
          return el.slice(0, 1).toUpperCase() + el.slice(1);
        })
        .join(" ")
    : "";

  return (
    <form className="Form" onSubmit={props.search}>
      <input
        className="Form__input"
        placeholder="Country/City name"
        type="text"
        value={cityCapitalized}
        onChange={changeHandler}
      />
      <input className="Form__submit" type="submit" />
      <div className="Hints" id="container" onClick={clickHandler}></div>
    </form>
  );
};

export default Form;
