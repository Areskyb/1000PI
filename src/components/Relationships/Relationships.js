import React, { useEffect, useState } from 'react';
import RelationForm from './RelationForm'
import WordsProvider from './WordsProvider';
import RelationsList from './RelationsList'
import { Typography, Button } from '@material-ui/core';
function Relationships({setGameTitle,setDialogContent}){
    // user Context for getting data 
    
    const [result,setResult] = useState(null);
    const[wordCount,setWordCount] = useState(0);
    
    useEffect(() => {        
        setGameTitle("Relationships")
    },[setGameTitle]);

    useEffect(() => {
        setDialogContent(contentDialog);
    },[]);
    
    
    function resetGame(){
        setResult(null);
        setWordCount(0);
    }
    
    
    // info for the level
    const contentDialog = 
    <>
    <Typography variant = "h3"> Relationships</Typography>
    <Typography variant = "h2"> Here comes the </Typography>
    <Button> this is cool then</Button>
    </>;



        if(!result){

            return(
                <>
            <WordsProvider wordCount={wordCount}></WordsProvider>
            <RelationForm setResult={setResult} setWordCount={setWordCount} wordCount={wordCount}></RelationForm>

            </>
        )
        }else if (result){
            return(
                <RelationsList result={result} resetGame={resetGame}></RelationsList>
                )
        }else{
            return (<Typography variant='h1'>Loading...</Typography>)
        }
    }

    export default Relationships;   