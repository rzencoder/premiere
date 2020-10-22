import React from "react";
import { render } from "@testing-library/react";
import { Loader } from "../../components";

describe("<Loader/>", () => {
  it("will render <Loader/>", () => {
    const { container, getByTestId } = render(<Loader />);

    expect(getByTestId("loader")).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });
});
