import React, { useEffect, useState, useContext,useRef } from "react";
import RelationForm from "./RelationForm";
import WordsProvider from "./WordsProvider";
import RelationsList from "./RelationsList";
import firebase from 'firebase/app';
import { Typography, Button } from "@material-ui/core";
import { UserContext } from "../../UserContext";
import {
  getRelationships,
} from "../../Services/relationshipsServices";


function Relationships({ setGameTitle, setDialogContent,setProgressBar }) {
  // user Context for getting data

  const { userValue } = useContext(UserContext);
  const [result, setResult] = useState(null);
  const [wordCount, setWordCount] = useState(0);
  const totalRelations = useRef(null);

  //   USE EFFECTS
  // Title
  useEffect(() => {
    // console.log("load relations");
    setGameTitle("Relations!");
  }, [setGameTitle]);
  // Dialog content
  useEffect(() => {
    // info for the level
    const contentDialog = (
      <>
        <Typography variant="h3"> Relationships!</Typography>
        <Typography variant="h5">
        In this exercise, you must create a relation (simple phrase)  between the two given words.
        </Typography>

        <Typography variant="h5">
          {'🌈'} A good 6 min. read before starting =>   <a href='https://www.mindtools.com/memory.html'>{'📖'}</a>
        </Typography>

        <Typography variant='h6'>Remember to follow the SEE Principle for each relation</Typography>
    <Typography variant='subtitle1' >{'🥶'} Senses: (use them!). Use all of your five senses to remember what you are attempting to learn.</Typography>
    <Typography variant='subtitle1' >{'😱'} Exaggerate: when trying to remember something, exaggerate the way it appears in your mind.</Typography>
        <Typography variant='subtitle1' >{'⚡'} Energize: animate whatever memory you are attempting to form.</Typography>
        
      </>
    );
    setDialogContent(contentDialog);
  }, [setDialogContent]);
  
  // db conection
  useEffect(() => {
    if (userValue) {
      getRelationships(userValue).then(res => {
        totalRelations.current = res.relations;
        // console.log(res.relations)
        if(res.relations < 30){
          setProgressBar((res.relations * 100)/30);
        }else{
          setProgressBar(100)
        }

      });
      // console.log("db read");
    }
    return () => {
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
        }
      });
    };
  }, [userValue]);
  // check if the user pass the level
  

  function resetGame() {
    setResult(null);
    setWordCount(0);
  }

  if (!result) {
    return (
      <>

        <WordsProvider wordCount={wordCount}></WordsProvider>
        <RelationForm
          setResult={setResult}
          setWordCount={setWordCount}
          wordCount={wordCount}
          totalRelations={totalRelations}
          setProgressBar={setProgressBar}
        ></RelationForm>
      </>
    );
  } else if (result) {
    return (
      <RelationsList result={result} resetGame={resetGame}></RelationsList>
    );
  } else {
    return <Typography variant="h1">Loading...</Typography>;
  }
}

export default Relationships;
