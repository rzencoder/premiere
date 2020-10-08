import React, { useState } from "react";
import FooterContainer from "../containers/footer";
import { Form } from "../components";
import NavigationContainer from "../containers/navigation";
import * as ROUTES from "../constants/routes";
import { validateCredentials } from "../helpers/form";

export default function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const enableSubmit = validateCredentials(username, password);

  return (
    <>
      <Form src="collage">
        <NavigationContainer />
        <Form.Frame>
          <Form.Content method="POST" onSubmit={handleSubmit}>
            <Form.Title>Sign In</Form.Title>
            <Form.Label>Username</Form.Label>
            <Form.Input
              value={username}
              onChange={({ target }) => setUsername(target.value)}
            ></Form.Input>
            <Form.Label>Password</Form.Label>
            <Form.Input
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            ></Form.Input>
            <Form.Submit disabled={!enableSubmit} type="submit">
              Sign In
            </Form.Submit>
            <Form.Text>
              New to Premiere?{" "}
              <Form.Link to={ROUTES.SIGNUP}>Create an account</Form.Link>
            </Form.Text>
          </Form.Content>
        </Form.Frame>
      </Form>
      <FooterContainer />
    </>
  );
}
