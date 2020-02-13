import React, { useState } from 'react';
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Link
} from "react-router-dom";
import Relationships from '../components/Relationships'
import Track from '../components/Track'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import { IconButton } from '@material-ui/core'
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';


function GameConatainer(){
   
   
//  STYLES  
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
    const classes = useStyles()      
   const  style= {
        backgroundColor: '#cfe8fc',
        height: '70vh',
        marginTop:30,
        width:'75%',
        padding:0

    }



    const [gameTitle,setGameTitle] = useState("Your track")

    return(
        <Container style={style}>
               <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            {gameTitle}
          </Typography>
            <IconButton>
            <InfoOutlinedIcon></InfoOutlinedIcon>
            </IconButton>
        </Toolbar>
      </AppBar>

      <Router>

      <Switch>

          <Route exact path="/">
            <Track setGameTitle={setGameTitle}></Track>
          </Route>

          <Route exact path="/Relationships">
            <Relationships setGameTitle={setGameTitle}></Relationships>
          </Route>

          <Route exact path="/20 Words Challenge">
            <Relationships setGameTitle={setGameTitle}></Relationships>
          </Route>
          
          <Route exact path="/100 Words Challenge">
            <Relationships setGameTitle={setGameTitle}></Relationships>
          </Route>

          <Route exact path="/Decoding">
            <Relationships setGameTitle={setGameTitle}></Relationships>
          </Route>

          <Route exact path="/100 Words Decoding">
            <Relationships setGameTitle={setGameTitle}></Relationships>
          </Route>

          <Route exact path="/1000 PI">
            <Relationships setGameTitle={setGameTitle}></Relationships>
          </Route>
          

      </Switch>
      </Router>
      </Container>
    )
}

export default GameConatainer

{/* <Router>

<Switch>
    <Route exact path="/true">
    <Activity isAchived={true}></Activity>
    </Route>

    <Route exact path="/false">
    <Activity isAchived={false}></Activity>
    </Route>

</Switch>
</Router> */}