import React, { Component } from "react";
import PropTypes from "prop-types";
import ForecastItem from "./Forecastitem";
import { api_key, url_base_forecast } from "../constants/api_url";
import transformForecast from "../services/transformForecast";
import "./style.css";
/*
const days = [
  "Lunes",
  "Martes",
  "Miercoles",
  "Jueves",
  "Viernes",
  "Sabado",
  "Domingo"
];
const data = {
  temperature: 10,
  humidity: 10,
  weatherState: "normal",
  wind: "normal"
};
*/
class ForecastExtended extends Component {
  constructor() {
    super();
    this.state = {
      forecastData: null
    };
  }
  async componentDidMount() {
    // fecth or axios
    this.updateCity(this.props.city);
    //  const url_forecast = `${url_base_forecast}?q=${this.props.city}&appid=${api_key}`;
    /*
    fetch(url_forecast)
      .then(data => data.json())
      .then(weather_data => {
        const forecastData = transformForecast(weather_data);
        console.log(weather_data);
        console.log("--");
        console.log(forecastData);
        this.setState({ forecastData });
      });
*/

    /*   const response = await fetch(url_forecast);
    const weather_data = await response.json();
    const forecastData = transformForecast(weather_data);
    console.log(forecastData);
    this.setState({ forecastData }); */
  }
  componentDidUpdate(nextProps) {
    if (nextProps.city !== this.props.city) {
      this.setState({ forecastData: null });
      this.updateCity(nextProps.city);
    }
  }

  /*  async updateCity(city) {
    const url_forecast = `${url_base_forecast}?q=${city}&appid=${api_key}`;
    const response = await fetch(url_forecast);
    const weather_data = await response.json();
    const forecastData = transformForecast(weather_data);
    console.log(forecastData);
    this.setState({ forecastData });
  }*/
  updateCity = city => {
    const url_forecast = `${url_base_forecast}?q=${city}&appid=${api_key}`;

    fetch(url_forecast)
      .then(data => data.json())
      .then(weather_data => {
        const forecastData = transformForecast(weather_data);
        console.log(weather_data);
        console.log("--");
        console.log(forecastData);
        this.setState({ forecastData });
      });
  };
  renderForecastItemDays(forecastData) {
    return forecastData.map(forecast => (
      <ForecastItem
        key={`${forecast.weekDay}${forecast.hour}`}
        weekDay={forecast.weekDay}
        hour={forecast.hour}
        data={forecast.data}
      ></ForecastItem>
    ));
    // return <ForecastItem weekDay={"Lunes"}></ForecastItem>;
  }
  renderProgress = () => {
    return "<h3>Cargando Prónostico...</h3>";
  };
  render() {
    const { city } = this.props;
    const { forecastData } = this.state;

    return (
      <div>
        <h2 className="forecast-title">Pronóstico Extendido {city}</h2>
        {forecastData
          ? this.renderForecastItemDays(forecastData)
          : this.renderProgress()}
      </div>
    );
  }
}

ForecastExtended.propTypes = {
  city: PropTypes.string.isRequired
};
export default ForecastExtended;
