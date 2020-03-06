import React, { useEffect, useState } from 'react';
import RelationForm from './RelationForm'
import WordsProvider from './WordsProvider';
import RelationsList from './RelationsList'
import { Typography, Button } from '@material-ui/core';

function Relationships({setGameTitle,setDialogContent}){

    const [result,setResult] = useState(null);
    const[wordCount,setWordCount] = useState(0);

    function resetGame(){
        setResult(null);
        setWordCount(0)
    }

    const contentDialog = 
    <>
    <Typography variant = "h3"> Relationships</Typography>
    <Typography variant = "h2"> Here comes the description about relationships with looong tezt</Typography>
    <Button> this is cool then</Button>
    </>;


    useEffect(() => {
        setGameTitle("Relationships")
        setDialogContent(contentDialog)
        
    },[]);


    if(!result){

        return(
            <>
        <WordsProvider wordCount={wordCount}></WordsProvider>
        <RelationForm setResult={setResult} setWordCount={setWordCount} wordCount={wordCount}></RelationForm>
        </>
    )
    }else{
        return(
            <RelationsList result={result} resetGame={resetGame}></RelationsList>
            )
    }
}

export default Relationships;