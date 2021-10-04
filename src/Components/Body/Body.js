import React from "react";
import { Card, Button } from "antd";
import { useSelector, useDispatch } from "react-redux";

import "./Body.css";
import Favourite from "../Favourites/Favourite";
// import Item from "antd/lib/list/Item";

export default function Body() {
  const dispatch = useDispatch();

  const zipcode = useSelector((state) => state.data.zipcode);
  const country = useSelector((state) => state.data.country);

  const kelvintofarhenheit = (f) => {
    return ((f - 273.15) * 1.8 + 32).toFixed(2);
  };

  const kelvintocelsius = (k) => {
    return (k - 273.15).toFixed(2);
  };

  return (
    <div className="carrd">
      <div className="site-card-border-less-wrapper">
        <Card className="card-body" bordered={false} style={{ width: 500 }}>
          <>
            <div className="title">
              <div className="head">
                <h1>
                  {" "}
                  {zipcode.name}{" "}
                  <sup onClick={kelvintofarhenheit}>
                    {" "}
                    {Object.keys(zipcode).length > 0 &&
                      kelvintofarhenheit(zipcode?.main?.temp)}
                    ℉
                  </sup>{" "}
                  <sup>℃</sup>
                </h1>
                <p className="temp">
                  {/* {Object.keys(zipcode).length > 0 &&
                    kelvintofarhenheit(zipcode?.main?.temp)} */}

                  {Object.keys(zipcode).length > 0 &&
                    kelvintocelsius(zipcode?.main?.temp)}
                  <sup>℃</sup>
                </p>
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
                        if (country.includes(zipcode.name)) {
                          dispatch({
                            type: "REMOVE_FAVOURITE",
                            payload: zipcode.name,
                          });
                        } else {
                          dispatch({
                            type: "ADD_FAVROUITE",
                            payload: zipcode.name,
                          });
                        }
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
