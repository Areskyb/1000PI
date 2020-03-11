import React, { useState } from 'react';
import {
  Route,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import CustomDialog from '../shared/CustomDialog'
import Relationships from '../components/Relationships/Relationships'
import Track from '../components/Track'
import WordDecoding from '../components/WordDecoding/WordDecoding'
import WordChallenge from '../components/WordChallenge/WordChallenge'
import Decoding from '../components/Decoding/Decoding'
import ThousandPi from '../components/1000Pi/ThousandPi'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'


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
    const [dialogContent,setDialogContent] = useState("");



    return(
        <Container style={style}>
               <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            {gameTitle}
          </Typography>
              <CustomDialog dialogContent={dialogContent} gameTitle={gameTitle}></CustomDialog>
        </Toolbar>
      </AppBar>

      <Router>

      <Switch>
          <Route exact path="/" >
            <Track setGameTitle={setGameTitle}></Track>
          </Route>

          <Route exact path="/Relationships">
            <Relationships setGameTitle={setGameTitle} setDialogContent={setDialogContent} ></Relationships>
          </Route>

          <Route exact path="/20 Words Challenge">
            <WordChallenge words={5} setGameTitle={setGameTitle}></WordChallenge>
          </Route>
          
          <Route exact path="/100 Words Challenge">
            <WordChallenge words={100} setGameTitle={setGameTitle}></WordChallenge>
          </Route>

          <Route exact path="/Words to numbers">
            <Decoding setGameTitle={setGameTitle}></Decoding>
          </Route>

          <Route exact path="/Numbers to Words">
            <WordDecoding setGameTitle={setGameTitle}></WordDecoding>
          </Route>

          <Route exact path="/1000 PI">
            <ThousandPi setGameTitle={setGameTitle}></ThousandPi>
          </Route>
      </Switch>
      </Router>
      </Container>
    )
}

export default GameConatainer
