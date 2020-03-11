import React from 'react';
import Button from '@material-ui/core/Button';
import * as firebase from 'firebase';

   function LogIn(){
    // provides the sign in with a pop-up
    function signIn() {
        // Sign in Firebase using popup auth and Google as the identity provider.
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
      }

    return(
        <Button color="inherit" onClick={(e) => signIn(e)} >Login</Button>
    )
}

export default LogIn;