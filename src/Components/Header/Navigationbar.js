import { useState } from "react";
import { Button, Input } from "antd";
import "./Navigationbar.css";
import logo from "../../Assets/images/img.png";

import { useDispatch } from "react-redux";

const api_key = "appid=655dfc390726be35679ee1f171b45301";

export default function Navigationbar() {
  const dispatch = useDispatch();

  const [weather, setWeather] = useState();
  const [statecode, setStatecode] = useState();

  const weatherApi = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${statecode}&${api_key}`,
      {
        method: "GET",
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setWeather(data);
        dispatch({ type: "ZIP_CODE", payload: data });
      });
  };

  console.log(weather);

  return (
    <div className="nav-bar">
      <div className="logo">
        <h1 className="text">
          Weather App
          <img className="img" src={logo} alt="imh" />
        </h1>
      </div>
      <div className="search-bar">
        <Input
          type="number"
          value={statecode || ""}
          class="form-control"
          placeholder="Zip Code"
          style={{ width: 200 }}
          onChange={(e) => {
            if (e.target.value.length > 5) {
            } else {
              setStatecode(e.target.value);
            }
          }}
        />
        <Button
          class="btn btn-primary"
          value={weather}
          type="primary"
          onClick={weatherApi}
        >
          Search
        </Button>
      </div>
    </div>
  );
}
