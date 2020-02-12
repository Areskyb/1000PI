import React,{useState,useEffect} from 'react';
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import ExitToApp from '@material-ui/icons/ExitToApp';
import * as firebase from 'firebase'
import { Button } from '@material-ui/core';


function Logged(){
    const [userName,setUserName] = useState(null);
    const [userPhotoURL,setUserPhotoURL] = useState(null);

    // Signs-out of Friendly Chat.
    function signOut() {
    // Sign out of Firebase.
    firebase.auth().signOut();
  }
    function userData(){
            firebase.auth().onAuthStateChanged((user) => {
                if(user){
                    setUserName(user.displayName);
                    setUserPhotoURL(user.photoURL);
                }
            })
    }

    useEffect(() => {
        userData()
    }, [])
    return(
        <>
        <Typography variant= "h6" style={{marginRight:10}}>{userName}</Typography>
        <Avatar alt="Cindy Baker" src={userPhotoURL} />
        <Button onClick={(e) => signOut(e)}>
        <ExitToApp style ={{marginLeft:10}}></ExitToApp>
        </Button>
        </>
    )
}

export default Logged;