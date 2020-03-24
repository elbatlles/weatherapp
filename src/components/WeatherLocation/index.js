import React, { Component } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { PropTypes } from "prop-types";
import Location from "./Location";
import WeatherData from "../WeatherLocation/WeatherData/";

import {
  CLOUD,
  CLOUDY,
  SUN,
  RAIN,
  SNOW,
  WINDY
} from "../../constants/weathers";
import transformWeather from "../../services/transformWeather";
import getUrlWeatherByCity from "../../services/getUrlWeatherByCity";
import "./styles.css";

class WeatherLocation extends Component {
  constructor(props) {
    console.log("constructor");
    super(props);
    const { city } = props;

    this.state = {
      city,
      data: null
    };
  }
  componentDidMount() {
    console.log("componentDidMount");
    this.handleUpdateClick();
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate");
  }
  /*
  componentWillMount() {
    console.log("UNSAFE componentWillMount");
  }
  componentWillUpdate(nextProps, nextState) {
    console.log("UNSAFE componentWillUpdate");
  }
*/
  handleUpdateClick = () => {
    const api_weather = getUrlWeatherByCity(this.state.city);
    fetch(api_weather)
      .then(resolve => {
        return resolve.json();
      })
      .then(data => {
        const newWeather = transformWeather(data);
        console.log(newWeather);

        this.setState({
          data: newWeather
        });
        console.log(data);
      });
  };

  /*   this.setState({
      city: "Barcelona",
      data: data2
    });
*/

  render() {
    console.log("render");
    const { onWeatherLocationClick } = this.props;
    const { city, data } = this.state;
    return (
      <div onClick={onWeatherLocationClick} className="weatherLocationCont">
        <Location city={city}></Location>
        {data ? (
          <WeatherData data={data}></WeatherData>
        ) : (
          <CircularProgress size={50} />
        )}
      </div>
    );
  }
}

WeatherLocation.propTypes = {
  city: PropTypes.string.isRequired,
  onWeatherLocationClick: PropTypes.func
};
export default WeatherLocation;
