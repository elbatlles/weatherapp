import React from "react";
import Weather from "./Weather";

export default {
  title: "Weather",
  component: Weather,
};
/*
export const WeatherCloud = () => <Weather temperature={10} state="clouds" />

export const WeatherSunny = () => <Weather temperature={10} state="clear" />*/

const Template = (args) => <Weather {...args} />;

export const WeatherCloud = Template.bind({});
WeatherCloud.args = { temperature: 10, state: "clouds" };

export const WeatherSunny = Template.bind({});
WeatherSunny.args = { temperature: 10, state: "clear" };
