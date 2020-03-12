import React, { useEffect, useState, useContext } from "react";
import RelationForm from "./RelationForm";
import WordsProvider from "./WordsProvider";
import RelationsList from "./RelationsList";
import * as firebase from "firebase";
import { Typography, Button } from "@material-ui/core";
import { UserContext } from "../../UserContext";
import { getRelationships, updateRelations } from '../../Services/relationshipsServices';
import { updateTrack } from '../../Services/trackServices';

function Relationships({ setGameTitle, setDialogContent }) {
  // user Context for getting data

  const { userValue } = useContext(UserContext);
  const [result, setResult] = useState(null);
  const [wordCount, setWordCount] = useState(0);
  const [totalRelations, setTotalRelations] = useState(null);

//   USE EFFECTS
// Title
  useEffect(() => {
    console.log('load relations')
    setGameTitle("Relationships");
  }, [setGameTitle]);
// Dialog content
  useEffect(() => {  
    // info for the level
    const contentDialog = (
      <>
        <Typography variant="h3"> Relationships</Typography>
        <Typography variant="subtitle1"> klfda;lksdfjadsl;kf asd;kfj dsa;lkfj asd;lfkjdsa lf;kadjs fl;kjs dflkdasjf lsadkjfa kfjj sld fsljf slkfja l;skj </Typography>
        <Button> this is cool then</Button>
      </>
    );
    setDialogContent(contentDialog);
  }, [setDialogContent]);
// db conection
  useEffect(() => {
            if(userValue && !totalRelations){
              console.log('db read')
              getRelationships(userValue).then(res => setTotalRelations(res.relations))
            } 
    return () => {
      firebase.auth().onAuthStateChanged(user => {
        if(user) {
        }
      })
    };
  }, [setTotalRelations,userValue])
// check if the user pass the level
  useEffect(() => {
    if(wordCount + totalRelations === 5){
      updateRelations(userValue,(wordCount + totalRelations));
      updateTrack({activityTwo:true},userValue);
      console.log('db write updateTrack')
    }
  },[wordCount,totalRelations])
  function resetGame() {
    setResult(null);
    setWordCount(0);
    setTotalRelations(totalRelations + wordCount);
    
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
