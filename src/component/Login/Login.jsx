import React, { useState } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import "./Login.css";
import firebaseConfig from "./firebase.config";
import { useContext } from "react";
import { userContext } from "../../App";
import { useHistory, useLocation } from "react-router";
import CustomForm from "../CustomForm/CustomForm";
import { Container } from "react-bootstrap";
const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(userContext);
  const [newUser, setNewUser] = useState(false);
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }
  const handleSignIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        var credential = result.credential;

        var token = credential.accessToken;
        var { displayName, email } = result.user;
        const signedInUser = { name: displayName, email }; //displayName as a name
        setLoggedInUser(signedInUser);
        history.replace(from);
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
      });
  };
  return (
    <Container>
      <div className="login">
        <CustomForm newUser={newUser} setNewUser={setNewUser}></CustomForm>
        <button onClick={handleSignIn}>Google Login</button>
      </div>
    </Container>
  );
};

export default Login;
