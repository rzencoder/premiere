import React, { useContext, useState } from "react";
import { FirebaseContext } from "../context/firebase";
import { Profile } from "../components";

function ProfileFunction() {
  const { firebase } = useContext(FirebaseContext);
  const user = firebase.auth().currentUser || {};
  const [openProfile, setOpenProfile] = useState(false);

  return (
    <Profile open={openProfile}>
      <Profile.Image
        tabIndex={0}
        user={user.photoURL}
        onClick={() => setOpenProfile(!openProfile)}
        onKeyDown={({ keyCode }) =>
          keyCode === 13 && setOpenProfile(!openProfile)
        }
      >
        <Profile.ImageText>{user.displayName[0]}</Profile.ImageText>
      </Profile.Image>
      <Profile.Menu open={openProfile}>
        <Profile.Title>{`${user.displayName}'s Account`}</Profile.Title>
        <Profile.Link>Billing</Profile.Link>
        <Profile.Link>Settings</Profile.Link>
        <Profile.Link>Help</Profile.Link>
        <Profile.Link onClick={() => firebase.auth().signOut()}>
          Sign Out
        </Profile.Link>
      </Profile.Menu>
    </Profile>
  );
}

export const ProfileContainer = React.memo(ProfileFunction);
