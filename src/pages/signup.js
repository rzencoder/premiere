import React, { useState } from "react";
import FooterContainer from "../containers/footer";
import { Form } from "../components";
import NavigationContainer from "../containers/navigation";
import * as ROUTES from "../constants/routes";
import { validateCredentials } from "../helpers/form";

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");

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
            <Form.Title>Sign Up</Form.Title>
            <Form.Label>First Name</Form.Label>
            <Form.Input
              placeholder="Rocky"
              value={firstName}
              onChange={({ target }) => setFirstName(target.value)}
            ></Form.Input>
            <Form.Label>Username</Form.Label>
            <Form.Input
              placeholder="rockyBalboa"
              value={username}
              onChange={({ target }) => setUsername(target.value)}
            ></Form.Input>
            <Form.Label>Password</Form.Label>
            <Form.Input
              placeholder="(Minimum 6 characters)"
              type="password"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            ></Form.Input>
            <Form.Submit type="submit" disabled={!enableSubmit}>
              Sign In
            </Form.Submit>
            <Form.Text>
              Already a member?{" "}
              <Form.Link to={ROUTES.SIGNIN}>Sign in now</Form.Link>
            </Form.Text>
          </Form.Content>
        </Form.Frame>
      </Form>
      <FooterContainer />
    </>
  );
}
