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
    console.log("load relations");
    setGameTitle("Relationships");
  }, [setGameTitle]);
  // Dialog content
  useEffect(() => {
    // info for the level
    const contentDialog = (
      <>
        <Typography variant="h3"> Relationships</Typography>
        <Typography variant="subtitle1">
          {" "}
          klfda;lksdfjadsl;kf asd;kfj dsa;lkfj asd;lfkjdsa lf;kadjs fl;kjs
          dflkdasjf lsadkjfa kfjj sld fsljf slkfja l;skj{" "}
        </Typography>
        <Button> this is cool then</Button>
      </>
    );
    setDialogContent(contentDialog);
  }, [setDialogContent]);
  
  // db conection
  useEffect(() => {
    if (userValue) {
      getRelationships(userValue).then(res => {
        totalRelations.current = res.relations;
        console.log(res.relations)
        if(res.relations < 30){
          setProgressBar((res.relations * 100)/30);
        }else{
          setProgressBar(100)
        }

      });
      console.log("db read");
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
