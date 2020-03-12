import React,{useEffect, useContext} from 'react';
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import ExitToApp from '@material-ui/icons/ExitToApp';
import firebase from 'firebase/app';
import { Button } from '@material-ui/core';
import { UserContext } from '../../UserContext'



function Logged(){
    const { userValue } = useContext(UserContext);

    // Signs-out of Friendly Chat.
    function signOut() {
        // Sign out of Firebase.
        firebase.auth().signOut();
    }

    
    useEffect(() => {
        if(userValue){
        }
        return () => {
            signOut()
        };
    }, [userValue]);
    
    
    let user = firebase.auth().currentUser;
    
    // user Value should be updated with the data retrived from the database.
    if(userValue){
        return(
            <>
        <Typography variant= "h6" style={{marginRight:10}}>{user.displayName}</Typography>
        {user.photoURL? <Avatar alt="Cindy Baker" src={user.photoURL} />:<Avatar alt="Cindy Baker" src={user.photoURL} />}
        <Button onClick={(e) => signOut(e)}>
        <ExitToApp style ={{marginLeft:10}}></ExitToApp>
        </Button>
        </>
    )
}
}

export default Logged;