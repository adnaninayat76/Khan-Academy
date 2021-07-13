import React, { useState, useEffect } from "react";
import LogIn from "./LogIn";
import { fire } from "./fire";
import Hero from "./Hero";
import { db } from "./fire";
function App() {
  const [user, setUser] = useState(false);
  const [password, setpassword] = useState("");
  const [email, setemail] = useState("");
  const [emailerror, setemailerror] = useState("");
  const [passworderror, setpassworderror] = useState("");
  const [hash, sethash] = useState(false);
  const [list, setList] = useState([]);
  const clearInputs = () => {
    setemail("");
    setpassword("");
  };
  const clearError = () => {
    setemailerror("");
    setpassworderror("");
  };
  function getDatas() {
    db.collection("Logins").onSnapshot((snapshot) => {
      setList(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
  }
  const handleLogin = () => {
    list.map((li) => {
      if (li.email == email && li.password == password) {
        setUser(true);
        clearInputs();
      }
    });
    // clearError();
    // fire
    //   .auth()
    //   .signInWithEmailAndPassword(email, password)
    //   .catch((err) => {
    //     switch (err.code) {
    //       case "auth/invalid-email":
    //       case "auth/user-disabled":
    //       case "auth/user-not-found":
    //         setemailerror(err.message);
    //         break;
    //       case "auth/wrong-password":
    //         setpassworderror(err.message);
    //         break;
    //     }
    //   });
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
    // fire.auth().signOut();
    setUser(false);
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
    getDatas();
  }, []);

  return (
    <>
      {user ? (
        <Hero handleLogout={handleLogout} user={user} setUser={setUser} />
      ) : (
        <LogIn
          password={password}
          setpassword={setpassword}
          email={email}
          setemail={setemail}
          getDatas={getDatas}
          list={list}
          handleLogin={handleLogin}
          // handleSignup={handleSignup}
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
