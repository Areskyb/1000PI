import React,{useEffect,useState} from 'react';
import { Button, Typography } from '@material-ui/core';
import WordTest from './WordTest';
// import Words
var nouns = require('nouns');
function WordChallenge({setGameTitle,words}){
   const wordList = useState(nouns.ran(words));
   const [count, setCount] = useState(0);
   const [inTest,setTest] = useState(false);
   useEffect(() => {
       setGameTitle("Word Challenge!")
       return () => {
       };
   }, [setGameTitle])

    function next(){
        if(count < words){
            let newCount = count +1;
            setCount(newCount);
        }return    
    }

    function prev(){
            if(count > 0 ){
                let newCount = count -1;
                setCount(newCount);
            }return
        
    }

    if(count === words){
        return(
            <>
            {!inTest?<Button onClick={e => setCount(0)}>go back to the words</Button>: <Button onClick={e => setCount(0)}>Go back to the words!</Button>}
            <WordTest wordList={wordList} setTest={setTest}></WordTest>
            </>
        )
    }
    
    return(
        <>
        <Typography variant="h1">{wordList[0][count]}</Typography>
        <Button onClick={e => prev(e)}>prev</Button>
        <Button onClick={e =>next(e)}>next</Button>
        <Typography variant="h3">Word Count: {count + 1}</Typography>
        {/* <MindPalace words ={ wordList }></MindPalace> */}
        </>
    )

}



export default WordChallenge;