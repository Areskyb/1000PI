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
import LinearProgress from '@material-ui/core/LinearProgress'

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

        progressBar: {
          flexGrow: 3,
          marginRight: '10%',
          height: 15,
        }
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
    const [progressBar, setProgressBar] = useState(null);



    return(
        <Container style={style}>
               <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            {gameTitle}
          </Typography>
             {progressBar !== 100?<LinearProgress variant="determinate" value={progressBar} color="secondary" className={classes.progressBar} />:<Typography></Typography> }
             <CustomDialog dialogContent={dialogContent} gameTitle={gameTitle}></CustomDialog>
        </Toolbar>
      </AppBar>

      <Router>

      <Switch>
          <Route exact path="/" >
            <Track setGameTitle={setGameTitle} setProgressBar={setProgressBar} setDialogContent={setDialogContent}></Track>
          </Route>

          <Route exact path="/Relationships">
            <Relationships setGameTitle={setGameTitle} setProgressBar={setProgressBar} setDialogContent={setDialogContent} ></Relationships>
          </Route>

          <Route exact path="/10 Words Challenge">
            <WordChallenge words={10} setGameTitle={setGameTitle} setProgressBar={setProgressBar} setDialogContent={setDialogContent}></WordChallenge>
          </Route>
          
          <Route exact path="/100 Words Challenge">
            <WordChallenge words={100} setGameTitle={setGameTitle} setProgressBar={setProgressBar} setDialogContent={setDialogContent}></WordChallenge>
          </Route>

          <Route exact path="/Words to numbers">
            <Decoding setGameTitle={setGameTitle} setProgressBar={setProgressBar} setDialogContent={setDialogContent}></Decoding>
          </Route>

          <Route exact path="/Numbers to Words">
            <WordDecoding setGameTitle={setGameTitle} setProgressBar={setProgressBar} setDialogContent={setDialogContent}></WordDecoding>
          </Route>

          <Route exact path="/1000 PI">
            <ThousandPi setGameTitle={setGameTitle} setProgressBar={setProgressBar} setDialogContent={setDialogContent}></ThousandPi>
          </Route>
      </Switch>
      </Router>
      </Container>
    )
}

export default GameConatainer
