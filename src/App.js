import React, { useState, useEffect } from "react";
import LogIn from "./LogIn";
import {fire} from "./fire";
import Hero from "./Hero";
function App() {
  const [user, setUser] = useState("");
  const [password, setpassword] = useState("");
  const [email, setemail] = useState("");
  const [emailerror, setemailerror] = useState("");
  const [passworderror, setpassworderror] = useState("");
  const [hash, sethash] = useState(false);

  const clearInputs = () => {
    setemail("");
    setpassword("");
  };
  const clearError = () => {
    setemailerror("");
    setpassworderror("");
  };
  const handleLogin = () => {
    clearError();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setemailerror(err.message);
            break;
          case "auth/wrong-password":
            setpassworderror(err.message);
            break;
        }
      });
  };
  const handleSignup = () => {
    clearError();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setemailerror(err.message);
            break;
          case "auth/weak-password":
            setpassworderror(err.message);
            break;
        }
      });
  };
  const handleLogout = () => {
    fire.auth().signOut();
  };
  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        clearInputs();
        setUser(user);
      } else {
        setUser("");
      }
    });
  };
  useEffect(() => {
    authListener();
  }, []);

  return (
    <>
      {user ? (
        <Hero handleLogout={handleLogout} />
      ) : (
        <LogIn
          password={password}
          setpassword={setpassword}
          email={email}
          setemail={setemail}
          handleLogin={handleLogin}
          handleSignup={handleSignup}
          hash={hash}
          sethash={sethash}
          emailerror={emailerror}
          passworderror={passworderror}
        />
      )}
    </>
  );
}

export default App;
