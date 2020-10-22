import React from "react";
import { render } from "@testing-library/react";
import { Navigation } from "../../components";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";

describe("<Note />", () => {
  const history = createMemoryHistory();

  it("renders <Navigation /> component with home page data", () => {
    const { container, getByText, getByAltText } = render(
      <Router history={history}>
        <Navigation>
          <Navigation.Logo src="/images/logo.png" alt="premiere" to="/" />
          <Navigation.Link to="/signin">
            <Navigation.Button>Sign In</Navigation.Button>
          </Navigation.Link>
        </Navigation>
      </Router>
    );

    expect(getByText("Sign In")).toBeTruthy();
    expect(getByAltText("premiere")).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });

  it("render <Navigation/> with feature page data", () => {
    const { container, getByText, getByAltText } = render(
      <Navigation>
        <Navigation.Group>
          <Navigation.BrowseLogo src="images/logo.png" alt="Premiere" />
          <Navigation.Section>
            <Navigation.Item active={true} onClick={() => {}}>
              Films
            </Navigation.Item>
            <Navigation.Item active={false} onClick={() => {}}>
              Series
            </Navigation.Item>
          </Navigation.Section>
        </Navigation.Group>
        <Navigation.Group>
          <Navigation.Search>
            <Navigation.SearchBox open={true} onChange={() => {}} id="search" />
            <Navigation.SearchIcon
              onClick={() => {}}
              tabIndex={0}
              onKeyDown={() => {}}
              src="/images/icons/search.png"
              alt="Search"
            />
          </Navigation.Search>
        </Navigation.Group>
      </Navigation>
    );

    expect(getByText("Films")).toBeTruthy();
    expect(getByAltText("Premiere")).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });

  it("search style to change when closed", () => {
    const { container, getByAltText } = render(
      <Navigation.Search>
        <Navigation.SearchBox open={false} onChange={() => {}} id="search" />
        <Navigation.SearchIcon
          onClick={() => {}}
          tabIndex={0}
          onKeyDown={() => {}}
          src="/images/icons/search.png"
          alt="Search"
        />
      </Navigation.Search>
    );

    expect(getByAltText("Search")).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });
});
