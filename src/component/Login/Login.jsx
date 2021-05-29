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
import {
  faFacebookF,
  faGithub,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(userContext);
  const [newUser, setNewUser] = useState(false);
  const [error,setError] = useState('');
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
        setError('');
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
        setError(error.message);
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
        setError('');
        history.replace(from);
      })
      .catch((error) => {
        console.log(error.message);
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        setError(error.message);
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
        setError('');

        var accessToken = credential.accessToken;
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage);
        var email = error.email;
        setError(error.message);
        var credential = error.credential;
      });
  };

  // Custom Sign In

  const signWithEmail = (email, password) => {
    return firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        var { email } = userCredential.user;
        // console.log(result);
        const signedInUser = { email }; //displayName as a name
        setLoggedInUser(signedInUser);
        history.replace(from);
        return userCredential.user;
        setError('');
        // ...
      })
      .catch((error) => {
        setError(error.message);
        return error.message;
      });
  };

  // Sign Up

  const createUserWithEmail = (name, email, password) => {
    return firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        updateName(name);
        console.log(userCredential);
        // Signed in
        var { displayName, email } = userCredential.user;
        // console.log(result);
        const signedInUser = { name: displayName, email }; //displayName as a name
        setLoggedInUser(signedInUser);
        history.replace(from);
        setError('');
        return userCredential.user;

        // ...
      })
      .catch((error) => {
        setError(error.message);
        return error.message;
        // ..
      });
  };
  const updateName = (name) => {
    const user = firebase.auth().currentUser;

    user.updateProfile({
      displayName: name,
    });
  };
  return (
    <Container>
      <div className="login">
        <CustomForm
          error = {error}
          signWithEmail={signWithEmail}
          createUserWithEmail={createUserWithEmail}
          newUser={newUser}
          setNewUser={setNewUser}
        ></CustomForm>
        <SocialLogin
          loginWith={handleGoogleSignIn}
          name={"Google"}
          icon={faGoogle}
          bgColor={"#E04831"}
        ></SocialLogin>
        <SocialLogin
          loginWith={handleGithubSignIn}
          name={"Github"}
          icon={faGithub}
          bgColor={"#161B22"}
        ></SocialLogin>
        <SocialLogin
          loginWith={handleFacebookSignIn}
          name={"Facebook"}
          icon={faFacebookF}
          bgColor={"#1299F6"}
        ></SocialLogin>
      </div>
    </Container>
  );
};

export default Login;
