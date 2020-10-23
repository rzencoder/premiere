import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { act } from "react-dom/test-utils";
import { FirebaseContext } from "../../context/firebase";
import SignIn from "../../pages/signin";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useHistory: () => ({}),
}));

const firebase = {
  auth: jest.fn(() => ({
    signInWithEmailAndPassword: jest.fn(() =>
      Promise.resolve("Sign in successful")
    ),
  })),
};

describe("<SignIn />", () => {
  it("renders the <SignIn /> page and submits form", async () => {
    const { getByTestId, queryByTestId } = render(
      <Router>
        <FirebaseContext.Provider value={{ firebase }}>
          <SignIn />
        </FirebaseContext.Provider>
      </Router>
    );

    await act(async () => {
      await fireEvent.change(getByTestId("signin-email"), {
        target: { value: "a@test.com" },
      });
      await fireEvent.change(getByTestId("signin-password"), {
        target: { value: "abc123" },
      });
      fireEvent.click(getByTestId("signin-submit"));

      expect(getByTestId("signin-email").value).toBe("a@test.com");
      expect(getByTestId("signin-password").value).toBe("abc123");
      expect(queryByTestId("error")).toBeFalsy();
    });
  });
});
