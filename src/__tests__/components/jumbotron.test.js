import React from "react";
import { render } from "@testing-library/react";
import { Jumbotron } from "../../components";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";

describe("<Jumbotron />", () => {
  const history = createMemoryHistory();
  it("renders <Jumbotron /> component", () => {
    const { container, getByText } = render(
      <Router history={history}>
        <Jumbotron>
          <Jumbotron.Background src="background" />
          <Jumbotron.Overlay />
          <Jumbotron.Group>
            <Jumbotron.Title>
              Watch the latest films and series anywhere
            </Jumbotron.Title>
            <Jumbotron.Text>
              Subscribe free for 30 days. Cancel anytime
            </Jumbotron.Text>
            <Jumbotron.CallToAction to="/">Try for free</Jumbotron.CallToAction>
          </Jumbotron.Group>
        </Jumbotron>
      </Router>
    );

    expect(
      getByText("Watch the latest films and series anywhere")
    ).toBeTruthy();
    expect(
      getByText("Subscribe free for 30 days. Cancel anytime")
    ).toBeTruthy();
    expect(getByText("Try for free")).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders default background with no src", () => {
    const { container, getByText } = render(
      <Router history={history}>
        <Jumbotron>
          <Jumbotron.Background src="" />
          <Jumbotron.Overlay />
          <Jumbotron.Group>
            <Jumbotron.Title>
              Watch the latest films and series anywhere
            </Jumbotron.Title>
            <Jumbotron.Text>
              Subscribe free for 30 days. Cancel anytime
            </Jumbotron.Text>
            <Jumbotron.CallToAction to="/">Try for free</Jumbotron.CallToAction>
          </Jumbotron.Group>
        </Jumbotron>
      </Router>
    );

    expect(
      getByText("Watch the latest films and series anywhere")
    ).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });
});
