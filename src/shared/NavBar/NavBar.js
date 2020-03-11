import React, { useState, useEffect, useContext } from "react";
// material
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Logged from "./Logged";
import LogIn from "./LogIn";
import * as firebase from "firebase";
import "typeface-roboto";
import { UserContext } from "../../UserContext";

// import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

// A new way to define stateless Components? haha
export default function NavBar() {
  const { userValue, setUserValue } = useContext(UserContext);

  const unsubscirbe = firebase.auth().onAuthStateChanged(user => {
    if (user) {
    }
  });

  const [logStatus, setLogStatus] = useState(false);

  useEffect(() => {
    // checks the log in status in firebase
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        if (userValue == null) {
          setUserValue(user.uid);
        }
        return setLogStatus(true);
      } else {
        return setLogStatus(false);
      }
    });
    return () => {
      unsubscirbe();
    };
  }, [unsubscirbe, setUserValue, userValue]);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h4"
            className={classes.title}
            onClick={e => (window.location.href = "/")}
          >
            1000 PI
          </Typography>

          {/* displays if the user is logged or not logged */}
          {logStatus ? <Logged></Logged> : <LogIn></LogIn>}
          {/* <LogStatus logStatus={logStatus} setLogStatus={setLogStatus}></LogStatus> */}
        </Toolbar>
      </AppBar>
    </div>
  );
}
