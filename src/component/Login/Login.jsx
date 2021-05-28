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
import SocialLogin from "../SocialLogin/SocialLogin";
import { faFacebookF, faGithub, faGoogle } from "@fortawesome/free-brands-svg-icons";

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(userContext);
  const [newUser, setNewUser] = useState(false);
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }
  const handleGoogleSignIn = () => {
    var googleProvider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(googleProvider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        var credential = result.credential;

        var token = credential.accessToken;
        var { displayName, email } = result.user;
        console.log(result);
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

  //github Provider

  const handleGithubSignIn = () => {
    var githubProvider = new firebase.auth.GithubAuthProvider();

    firebase
      .auth()
      .signInWithPopup(githubProvider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        var credential = result.credential;

        var token = credential.accessToken;

        var { displayName, email } = result.user;
        console.log(result);
        const signedInUser = { name: displayName, email }; //displayName as a name
        setLoggedInUser(signedInUser);
        history.replace(from);

      })
      .catch((error) => {
        console.log(error.message);
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
      });
  };

  //facebook login with

  const handleFacebookSignIn = () => {
    var facebookProvider = new firebase.auth.FacebookAuthProvider();

    firebase
      .auth()
      .signInWithPopup(facebookProvider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        var credential = result.credential;

        var user = result.user;

        var accessToken = credential.accessToken;

      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage)
        var email = error.email;
        var credential = error.credential;
      });
  };

  return (
    <Container>
      <div className="login">
        <CustomForm newUser={newUser} setNewUser={setNewUser}></CustomForm>
        <SocialLogin loginWith={handleGoogleSignIn} name={"Google"} icon={faGoogle} bgColor={'#E04831'}></SocialLogin>
        <SocialLogin loginWith={handleGithubSignIn} name={"Github"} icon={faGithub} bgColor={'#161B22'}></SocialLogin>
        <SocialLogin loginWith={handleFacebookSignIn} name={"Facebook"} icon={faFacebookF} bgColor={'#1299F6'}></SocialLogin>
      </div>
    </Container>
  );
};

export default Login;
