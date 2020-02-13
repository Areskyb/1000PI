import React,{useState,useEffect} from 'react';
// material
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'
import Logged from './Logged';
import LogIn from './LogIn';
import * as firebase from 'firebase';
import 'typeface-roboto';

// import MenuIcon from '@material-ui/icons/Menu';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));




// A new way to define stateless Components? haha
export default function NavBar() {


    // checks the log in status in firebase
   function authListener(){
        firebase.auth().onAuthStateChanged((user)=>{
          if (user){
            return setLogStatus(true)
          }else{
            return setLogStatus(false)
          }
        })
    }


  const [logStatus,setLogStatus] = useState(false);  

  useEffect(()=> {
    authListener()
  },[])    
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h4" className={classes.title}>
              <Button onClick={(e)=> window.location.href="/"}>1000Pi </Button>
          </Typography>
          {/* displays if the user is logged or not logged */}
            {logStatus?  <Logged></Logged>: <LogIn></LogIn>}
            {/* <LogStatus logStatus={logStatus} setLogStatus={setLogStatus}></LogStatus> */}
        </Toolbar>
      </AppBar>
    </div>
  );
}