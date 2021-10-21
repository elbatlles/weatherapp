import React from "react";
import { render } from "@testing-library/react";
import TestRenderer from "react-test-renderer";
import App from "./App";
import { WeatherContext } from "./WeatherContext";

test("renders learn react link", () => {});

test("non-shallow render", () => {
  const element = new TestRenderer.create(
    (
      <WeatherContext.Provider>
        <MyComponent />
      </WeatherContext.Provider>
    )
  );
  expect(element.root.findByType("div").children).toEqual();
});
