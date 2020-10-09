import React, { useContext } from "react";
import { FirebaseContext } from "../context/firebase";

export default function Browse() {
  const { firebase } = useContext(FirebaseContext);
  const user = firebase.auth().currentUser || {};

  return (
    <div>
      <div>{user.displayName}</div>
      <button onClick={() => firebase.auth().signOut()}>Sign out</button>
    </div>
  );
}
