import React from "react";
import WeatherIcons from "react-weathericons";
import PropTypes from "prop-types";
import "./style.css";
import {
  CLOUD,
  CLOUDY,
  SUN,
  RAIN,
  SNOW,
  WINDY
} from "../../constants/weathers";

const icons = {
  [CLOUDY]: "cloudy",
  [SUN]: "day-sunny",
  [CLOUD]: "cloud",
  [RAIN]: "rain",
  [SNOW]: "snow",
  WINDY: "windy"
};
const getWeatherIcon = weatherState => {
  const icon = icons[weatherState];
  const sizeIcon = "4x";
  if (icon) {
    return (
      <WeatherIcons
        name={icon}
        className="wicon"
        size={sizeIcon}
      ></WeatherIcons>
    );
  } else {
    return (
      <WeatherIcons
        name={icon}
        className="wicon"
        size={sizeIcon}
      ></WeatherIcons>
    );
  }
};

const WeatherTemperature = ({ temperature, weatherState }) => (
  <div className="weatherTemperatureCont">
    {getWeatherIcon(weatherState)}
    <span className="temperature">{`${temperature}`}</span>
    <span className="temperatureType"> {`C`}</span>
  </div>
);
WeatherTemperature.propTypes = {
  temperature: PropTypes.number.isRequired,
  weatherState: PropTypes.string.isRequired
};

export default WeatherTemperature;
