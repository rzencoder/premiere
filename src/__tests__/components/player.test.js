import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Player } from "../../components";

describe("<Player />", () => {
  it("renders <Player /> component", () => {
    const { container, getByTestId } = render(
      <Player setOpenPlayer={() => {}} src="/videos/placeholder.mp4" />
    );

    fireEvent.click(getByTestId("player-close"));
    expect(getByTestId("player-close")).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });
});
