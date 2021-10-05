import React, { useState, useEffect } from "react";
import { Card, Button } from "antd";
import { useSelector, useDispatch } from "react-redux";

import "./Body.css";
import Favourite from "../Favourites/Favourite";
// import Item from "antd/lib/list/Item";

export default function Body() {
  const dispatch = useDispatch();

  const zipcode = useSelector((state) => state.data.zipcode);
  const country = useSelector((state) => state.data.country);
  const temperature = useSelector((state) => state.data?.zipcode?.main?.temp);
  const [temp, setTemp] = useState(temperature);

  const kelvintofarhenheit = (temperature) => {
    return setTemp((temperature - 273.15) * 1.8 + 32).toFixed(2);
  };

  const kelvintocelsius = (temperature) => {
    return setTemp(temperature - 273.15).toFixed(2);
  };
  useEffect(() => {
    setTemp(temperature);
  }, [temperature]);

  return (
    <div className="carrd">
      <div className="site-card-border-less-wrapper">
        <Card className="card-body" bordered={false} style={{ width: 500 }}>
          <>
            <div className="title">
              <div className="head">
                <h1>
                  {zipcode.name}{" "}
                  <sup
                    className="kf"
                    onClick={() => kelvintofarhenheit(temperature)}
                  >
                    ℉
                  </sup>
                  |
                  <sup
                    className="kc"
                    onClick={() => kelvintocelsius(temperature)}
                  >
                    ℃
                  </sup>
                </h1>
                <p className="temp">{temp}</p>
                <p className="weath">
                  {Object.keys(zipcode).length > 0 && zipcode?.weather[0]?.main}
                  <br />
                  {Object.keys(zipcode).length > 0 &&
                    zipcode?.weather[0]?.description}
                </p>
              </div>
              <div className="butn">
                {Object.keys(zipcode).length > 0 &&
                  !country.includes(zipcode.name) && (
                    <Button
                      type="primary"
                      onClick={() => {
                        dispatch({
                          type: "ADD_FAVROUITE",
                          payload: zipcode.name,
                        });
                      }}
                    >
                      Add to favourite
                    </Button>
                  )}
                <div className="find-temp">
                  <div className="para">
                    <p> Feels like</p>
                    <p> Humidity</p>
                    <p>Pressure</p>
                  </div>
                  <div className="main-cs">
                    <p>{zipcode?.main?.feels_like}</p>
                    <p>{zipcode?.main?.humidity}</p>
                    <p>{zipcode?.main?.pressure}</p>
                  </div>
                </div>
              </div>
            </div>
          </>
        </Card>
      </div>
      <Favourite />
    </div>
  );
}
