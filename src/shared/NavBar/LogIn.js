import React from 'react';
import Button from '@material-ui/core/Button';
import firebase from 'firebase/app';

// provides the sign in with a pop-up
export const signIn = () => {
    // Sign in Firebase using popup auth and Google as the identity provider.
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
  }
   function LogIn(){

    return(
        <Button color="inherit" onClick={(e) => signIn(e)} >Log in</Button>
    )
}

export default LogIn;