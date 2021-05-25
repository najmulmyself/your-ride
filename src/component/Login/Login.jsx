import React from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { useContext } from 'react';
import {userContext} from '../../App'
import { useHistory, useLocation } from 'react-router';
const Login = () => {
  const [loggedInUser,setLoggedInUser] = useContext(userContext);
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };


    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
    }
    const handleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;

    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = credential.accessToken;
    // The signed-in user info.
    var {displayName,email} = result.user;
    // Destructuring display name and email form result.user
    const signedInUser = { name : displayName, email}; //displayName as a name
    setLoggedInUser(signedInUser);
    history.replace(from)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
    }
    return (
        <div>
        <h2>This is Login Page</h2>
        <button onClick={handleSignIn}>Google Login</button>
        </div>
    );
};

export default Login;