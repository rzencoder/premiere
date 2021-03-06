import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { FooterContainer } from "../containers/footer";
import { Form, Note } from "../components";
import NavigationContainer from "../containers/navigation";
import * as ROUTES from "../constants/routes";
import { validateCredentials } from "../helpers/form";
import { FirebaseContext } from "../context/firebase";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [openNote, setOpenNote] = useState(true);

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
          {openNote && (
            <Note setOpenNote={setOpenNote}>
              <Note.Text>
                Don't want to sign up? Use these credentials to test the site:
              </Note.Text>
              <Note.Text>t@test.com</Note.Text>
              <Note.Text>test123</Note.Text>
            </Note>
          )}
          <Form.Content method="POST" onSubmit={handleSubmit}>
            <Form.Title>Sign In</Form.Title>
            {error && (
              <Form.Error id="signin-error" data-testid="signin-error">
                {error}
              </Form.Error>
            )}
            <Form.Label htmlFor="signin-email">Email Address</Form.Label>
            <Form.Input
              value={email}
              id="signin-email"
              data-testid="signin-email"
              onChange={({ target }) => setEmail(target.value)}
            />
            <Form.Label htmlFor="signin-password">Password</Form.Label>
            <Form.Input
              value={password}
              type="password"
              data-testid="signin-password"
              id="signin-password"
              onChange={({ target }) => setPassword(target.value)}
            />
            <Form.Submit
              disabled={!enableSubmit}
              type="submit"
              data-testid="signin-submit"
              id="signin-submit"
            >
              Sign In
            </Form.Submit>
            <Form.Text>
              New to Premiere?{" "}
              <Form.Link id="signin-link-to-signup" to={ROUTES.SIGNUP}>
                Create an account
              </Form.Link>
            </Form.Text>
          </Form.Content>
        </Form.Frame>
      </Form>
      <FooterContainer />
    </>
  );
}
