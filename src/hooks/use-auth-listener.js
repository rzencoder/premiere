import { useState, useEffect, useContext } from "react";
import { FirebaseContext } from "../context/firebase";

export default function useAuthListener() {
  const { firebase } = useContext(FirebaseContext);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  useEffect(() => {
    const authListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        localStorage.setItem("user", JSON.stringify(user));
        setUser(user);
      } else {
        localStorage.removeItem("user");
        setUser(null);
      }
    });

    return () => authListener();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { user };
}
