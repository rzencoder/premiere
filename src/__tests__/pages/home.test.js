import React from "react";
import { render } from "@testing-library/react";
import Home from "../../pages/home";

jest.mock("react-router-dom");

test("renders the homepage", () => {
  const { container, getByText } = render(<Home />);
  expect(getByText("Download")).toBeTruthy();
  expect(getByText("Watch the latest films and series anywhere")).toBeTruthy();
  expect(getByText("Blockbusters")).toBeTruthy();
  expect(getByText("Joker")).toBeTruthy();
  expect(getByText("Help")).toBeTruthy();
  expect(container.firstChild).toMatchSnapshot();
});
