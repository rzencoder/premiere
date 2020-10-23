import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { act } from "react-dom/test-utils";
import { FirebaseContext } from "../../context/firebase";
import SignUp from "../../pages/signup";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useHistory: () => ({}),
}));

const firebase = {
  auth: jest.fn(() => ({
    createUserWithEmailAndPassword: jest.fn(() =>
      Promise.resolve({
        user: {
          updateProfile: jest.fn(() => Promise.resolve("Sign Up Successful")),
        },
      })
    ),
  })),
};

describe("<SignUp />", () => {
  it("renders the <SignUp /> page and submits form", async () => {
    const { getByTestId, queryByTestId } = render(
      <Router>
        <FirebaseContext.Provider value={{ firebase }}>
          <SignUp />
        </FirebaseContext.Provider>
      </Router>
    );

    await act(async () => {
      await fireEvent.change(getByTestId("signup-name"), {
        target: { value: "adam" },
      });
      await fireEvent.change(getByTestId("signup-email"), {
        target: { value: "a@test.com" },
      });
      await fireEvent.change(getByTestId("signup-password"), {
        target: { value: "abc123" },
      });
      fireEvent.click(getByTestId("signup-submit"));

      expect(getByTestId("signup-name").value).toBe("adam");
      expect(getByTestId("signup-email").value).toBe("a@test.com");
      expect(getByTestId("signup-password").value).toBe("abc123");
      expect(queryByTestId("error")).toBeFalsy();
    });
  });
});
