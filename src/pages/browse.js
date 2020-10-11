import React, { useContext, useEffect, useState } from "react";
import { FirebaseContext } from "../context/firebase";
import { Loader, Navigation } from "../components";
import Logo from "../logo.png";

export default function Browse() {
  const { firebase } = useContext(FirebaseContext);
  const user = firebase.auth().currentUser || {};
  const [loading, setLoading] = useState(true);
  const [openProfile, setOpenProfile] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  if (loading) {
    return (
      <Loader>
        <Loader.Spinner />
      </Loader>
    );
  }
  console.log("render browse");
  return (
    <div>
      <Navigation>
        <Navigation.BrowseLogo src={Logo} alt="Premiere" />
        <Navigation.Section>
          <Navigation.Item>Films</Navigation.Item>
          <Navigation.Item>Series</Navigation.Item>
        </Navigation.Section>
        <Navigation.Search>
          <Navigation.SearchBox></Navigation.SearchBox>
          <Navigation.SearchIcon src="/images/icons/search.png" />
        </Navigation.Search>
        <Navigation.Profile>
          <Navigation.ProfileImage onClick={() => setOpenProfile(!openProfile)}>
            <Navigation.ProfileImageText>
              {user.displayName[0]}
            </Navigation.ProfileImageText>
          </Navigation.ProfileImage>
          <Navigation.ProfileMenu open={openProfile}>
            <Navigation.Button onClick={() => firebase.auth().signOut()}>
              Sign out
            </Navigation.Button>
          </Navigation.ProfileMenu>
        </Navigation.Profile>
      </Navigation>
    </div>
  );
}
