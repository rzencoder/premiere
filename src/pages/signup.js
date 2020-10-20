import React, { useState, useContext } from "react";
import { FooterContainer } from "../containers/footer";
import { Form } from "../components";
import NavigationContainer from "../containers/navigation";
import * as ROUTES from "../constants/routes";
import { validateCredentials } from "../helpers/form";
import { useHistory } from "react-router-dom";
import { FirebaseContext } from "../context/firebase";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [error, setError] = useState(null);

  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((result) =>
        result.user
          .updateProfile({
            displayName: firstName,
            photoURL: Math.floor(Math.random() * 8) + 1,
          })
          .then(() => {
            history.push(ROUTES.BROWSE);
          })
      )
      .catch((error) => {
        setFirstName("");
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
            <Form.Title>Sign Up</Form.Title>
            {error && <Form.Error>{error}</Form.Error>}
            <Form.Label htmlFor="name">First Name</Form.Label>
            <Form.Input
              placeholder="Rocky"
              id="name"
              value={firstName}
              onChange={({ target }) => setFirstName(target.value)}
            />
            <Form.Label htmlFor="email">Email Address</Form.Label>
            <Form.Input
              placeholder="rocky@balboa.com"
              id="email"
              value={email}
              onChange={({ target }) => setEmail(target.value)}
            />
            <Form.Label htmlFor="password">Password</Form.Label>
            <Form.Input
              placeholder="(Minimum 6 characters)"
              id="password"
              type="password"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />
            <Form.Submit type="submit" disabled={!enableSubmit}>
              Sign Up
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
