import React from "react";
import { Card } from "antd";
import "./Favourite.css";
import { AiOutlineCloseCircle } from "react-icons/all";

import { useSelector, useDispatch } from "react-redux";
// import Body from "../Body/Body";

export default function Favourite() {
  const api_key = "appid=655dfc390726be35679ee1f171b45301";
  const dispatch = useDispatch();
  const country = useSelector((state) => state.data.country);

  // const zipcode = useSelector((state) => state.data.zipcode);
  const weatherApiCity = (item) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${item}&${api_key}`,
      {
        method: "GET",
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("show city", data);
        dispatch({ type: "DETAIL", payload: data });
        dispatch({ type: "ZIP_CODE", payload: data });
      });
  };

  return (
    <div className="card-bdy">
      {country.length > 0 && (
        <Card className="fav-card" size="small" style={{ width: 350 }}>
          <h1 className="fav-title">Favourites</h1>

          {country.length > 0 &&
            country.map((item) => {
              return (
                <div className="fav-name">
                  <p className="country" onClick={() => weatherApiCity(item)}>
                    {item}
                  </p>
                  <button
                    className="fav-btn"
                    onClick={() => {
                      dispatch({ type: "REMOVE_FAVOURITE", payload: item });
                    }}
                  >
                    <AiOutlineCloseCircle className="icon" />
                  </button>
                </div>
              );
            })}
        </Card>
      )}
    </div>
  );
}
