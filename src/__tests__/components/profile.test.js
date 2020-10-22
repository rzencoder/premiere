import React from "react";
import { render } from "@testing-library/react";
import { Profile } from "../../components";

const user = {
  displayName: "Tester",
  photoURL: "2",
};

describe("<Profile />", () => {
  it("renders <Profile /> component", () => {
    const openProfile = true;
    const { container, getByText } = render(
      <Profile open={openProfile}>
        <Profile.Image
          tabIndex={0}
          user={user.photoURL}
          onClick={() => {}}
          onKeyDown={() => {}}
        >
          <Profile.ImageText>{user.displayName[0]}</Profile.ImageText>
        </Profile.Image>
        <Profile.Menu open={openProfile}>
          <Profile.Title>{`${user.displayName}'s Account`}</Profile.Title>
          <Profile.Link>Billing</Profile.Link>
          <Profile.Link>Settings</Profile.Link>
          <Profile.Link>Help</Profile.Link>
          <Profile.Link onClick={() => {}}>Sign Out</Profile.Link>
        </Profile.Menu>
      </Profile>
    );

    expect(getByText("Tester's Account")).toBeTruthy();
    expect(getByText("Billing")).toBeTruthy();
    expect(getByText("Sign Out")).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders different style when profile closed", () => {
    const openProfile = false;
    const { container } = render(
      <Profile open={openProfile}>
        <Profile.Image
          tabIndex={0}
          user={null}
          onClick={() => {}}
          onKeyDown={() => {}}
        >
          <Profile.ImageText>{user.displayName[0]}</Profile.ImageText>
        </Profile.Image>
        <Profile.Menu open={openProfile}>
          <Profile.Title>{`${user.displayName}'s Account`}</Profile.Title>
          <Profile.Link>Billing</Profile.Link>
          <Profile.Link>Settings</Profile.Link>
          <Profile.Link>Help</Profile.Link>
          <Profile.Link onClick={() => {}}>Sign Out</Profile.Link>
        </Profile.Menu>
      </Profile>
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
