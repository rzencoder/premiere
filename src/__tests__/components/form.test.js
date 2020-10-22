import React from "react";
import { render } from "@testing-library/react";
import { Form } from "../../components";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";

describe("<Form />", () => {
  const history = createMemoryHistory();

  it("renders <Form /> component", () => {
    const { container, getByText } = render(
      <Router history={history}>
        <Form src="collage">
          <Form.Frame>
            <Form.Content method="POST" onSubmit={() => {}}>
              <Form.Title>Sign In</Form.Title>
              <Form.Label htmlFor="email">Email Address</Form.Label>
              <Form.Input id="email" onChange={() => {}} />
              <Form.Label htmlFor="password">Password</Form.Label>
              <Form.Input type="password" id="password" onChange={() => {}} />
              <Form.Submit disabled type="submit">
                Sign In
              </Form.Submit>
              <Form.Text>
                New to Premiere?{" "}
                <Form.Link to="/signup">Create an account</Form.Link>
              </Form.Text>
            </Form.Content>
          </Form.Frame>
        </Form>
      </Router>
    );

    expect(getByText("Email Address")).toBeTruthy();
    expect(getByText("Create an account")).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders an error message", () => {
    const { container, getByText } = render(
      <Form.Error>The password does not match the username provided</Form.Error>
    );

    expect(
      getByText("The password does not match the username provided")
    ).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders default background when none provided", () => {
    const { container, getByText } = render(
      <Router history={history}>
        <Form src="">
          <Form.Frame>
            <Form.Content method="POST" onSubmit={() => {}}>
              <Form.Title>Sign In</Form.Title>
              <Form.Label htmlFor="email">Email Address</Form.Label>
              <Form.Input id="email" onChange={() => {}} />
              <Form.Label htmlFor="password">Password</Form.Label>
              <Form.Input type="password" id="password" onChange={() => {}} />
              <Form.Submit disabled type="submit">
                Sign In
              </Form.Submit>
              <Form.Text>
                New to Premiere?{" "}
                <Form.Link to="/signup">Create an account</Form.Link>
              </Form.Text>
            </Form.Content>
          </Form.Frame>
        </Form>
      </Router>
    );

    expect(getByText("Email Address")).toBeTruthy();
    expect(getByText("Create an account")).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });
});
