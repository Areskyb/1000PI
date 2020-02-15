import React, { useEffect, useState } from 'react';
import RelationForm from './RelationForm'
import WordsProvider from './WordsProvider';
import RelationsList from './RelationsList'

function Relationships({setGameTitle}){

    const [result,setResult] = useState(null);
    const[wordCount,setWordCount] = useState(0);

    function resetGame(){
        setResult(null);
        setWordCount(0)
    }

    useEffect(() => {
        setGameTitle("Relationships")
        return () => {
            
        };
    }, [])

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