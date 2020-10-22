import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Note } from "../../components";

describe("<Note />", () => {
  it("renders <Note /> component", () => {
    const { container, getByText, getByTestId } = render(
      <Note setOpenNote={() => {}}>
        <Note.Text>
          Don't want to sign up? Use these credentials to test the site:
        </Note.Text>
        <Note.Text>t@test.com</Note.Text>
        <Note.Text>test123</Note.Text>
      </Note>
    );

    expect(
      getByText(
        "Don't want to sign up? Use these credentials to test the site:"
      )
    ).toBeTruthy();
    expect(getByText("t@test.com")).toBeTruthy();
    expect(getByText("test123")).toBeTruthy();
    fireEvent.click(getByTestId("note-button"));
    expect(getByText("test123")).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });
});
