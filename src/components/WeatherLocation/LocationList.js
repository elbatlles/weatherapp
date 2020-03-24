import React, { Component } from "react";
import WeatherLocation from ".";
import PropTypes from "prop-types";
import "./styles.css";
const LocationList = ({ cities, onSelectLocation }) => {
  const handleWeatherLocationClick = city => {
    console.log(city);
    onSelectLocation(city);
  };

  const strToComponents = cities =>
    cities.map(city => (
      <WeatherLocation
        key={city}
        city={city}
        onWeatherLocationClick={() => handleWeatherLocationClick(city)}
      />
    ));

  return <div className="locationList">{strToComponents(cities)}</div>;
};

LocationList.protoTypes = {
  cities: PropTypes.array.isRequired
};
export default LocationList;
