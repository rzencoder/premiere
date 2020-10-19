import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { FooterContainer } from "../containers/footer";
import { Form } from "../components";
import NavigationContainer from "../containers/navigation";
import * as ROUTES from "../constants/routes";
import { validateCredentials } from "../helpers/form";
import { FirebaseContext } from "../context/firebase";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { firebase } = useContext(FirebaseContext);
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    return firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        history.push(ROUTES.BROWSE);
      })
      .catch((error) => {
        setEmail("");
        setPassword("");
        setError(error.message);
      });
  };

  const enableSubmit = validateCredentials(email, password);

  return (
    <>
      <Form src="collage">
        <NavigationContainer />
        <Form.Frame>
          <Form.Content method="POST" onSubmit={handleSubmit}>
            <Form.Title>Sign In</Form.Title>
            {error && <Form.Error>{error}</Form.Error>}
            <Form.Label htmlFor="email">Email Address</Form.Label>
            <Form.Input
              value={email}
              id="email"
              onChange={({ target }) => setEmail(target.value)}
            ></Form.Input>
            <Form.Label htmlFor="password">Password</Form.Label>
            <Form.Input
              value={password}
              type="password"
              id="password"
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
