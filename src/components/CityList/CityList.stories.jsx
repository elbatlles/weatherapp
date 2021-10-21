import React from "react";
import CityList from "./CityList";
import { action } from "@storybook/addon-actions";
import { WeatherContext } from "../../WeatherContext";

export default {
  title: "CityList",
  component: CityList,
  decorators: [
    (Story) => {
      return (
        <WeatherContext>
          <Story />
        </WeatherContext>
      );
    },
  ],
};
/*
export default {
    title:"CityListAngel",
    component:CityList,

}*/

const cities = [
  { city: "Buenos Aires", country: "Argentina" },
  { city: "Bogotá", country: "Colombia" },
  { city: "Madrid", country: "España" },
  { city: "Ciudad de México", country: "México" },
];

//export const CityListExample = () => <CityList cities={cities} onClickCity={action("Click en city")} />

export const CityListExample = (args) => <CityList>{...args}</CityList>;

CityListExample.CityListExample = {
  cities: cities,
  onClickCity: action("Click en city"),
};
