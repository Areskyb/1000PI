import React,{useState,useEffect} from 'react';
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import * as firebase from 'firebase'


function Logged(){
    const [userName,setUserName] = useState(null);
    const [userPhotoURL,setUserPhotoURL] = useState(null);


    function userData(){
        firebase.auth().onAuthStateChanged((user) => {
           setUserName(user.displayName);
           setUserPhotoURL(user.photoURL);
        })
    }

    useEffect(() => {
        userData()
    }, [userName,userPhotoURL])
    return(
        <>
        <Typography variant= "h6" style={{marginRight:10}}>{userName}</Typography>
        <Avatar alt="Cindy Baker" src={userPhotoURL} />
        </>
    )
}

export default Logged;