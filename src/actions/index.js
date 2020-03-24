import { api_key, url_base_forecast } from "../constants/api_url";
import transformForecast from "../services/transformForecast";

export const SET_CITY = "SET_CITY";
export const SET_FORECAST_DATA = "SET_FORECAST_DATA";

//ActionCreator llamado setCity
const setCity = payload => ({ type: SET_CITY, payload });
const setForecastData = payload => ({ type: SET_FORECAST_DATA, payload });

//payload es la city
export const setSelectedCity = payload => {
  return dispatch => {
    const url_fore_cast = `${url_base_forecast}?q=${payload}&appid=${api_key}`;
    console.log(url_fore_cast);
    //activar inicador de busqueda de datos
    dispatch(setCity(payload));
    console.log("por aqi");
    return fetch(url_fore_cast)
      .then(data => data.json())
      .then(weather_data => {
        console.log("por alla");
        const forecastdata = transformForecast(weather_data);
        console.log("forecastdata ");
        console.log(forecastdata);
        dispatch(setForecastData({ city: payload, forecastdata }));
      });
  };
};
