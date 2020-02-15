import React,{useEffect,useState} from 'react';
import { Button } from '@material-ui/core';
import WordTest from './WordTest';
// import Words
var nouns = require('nouns');
function WordChallenge({setGameTitle,words}){
   const wordList = useState(nouns.ran(words));
   const [count, setCount] = useState(0);
   const [inTest,setTest] = useState(false);

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
    if(count === 20){
        return(
            <>
            {!inTest?<Button onClick={e => prev(e)}>go back to the words</Button>: <Button>Reset Test</Button>}
            <WordTest wordList={wordList} setTest={setTest}></WordTest>
            </>
        )
    }

    return(
        <>
        <h1>{wordList[0][count]}</h1>
        <Button onClick={e => prev(e)}>prev</Button>
        <Button onClick={e =>next(e)}>next</Button>
        <h3>Word Count: {count + 1}</h3>
        </>
    )

}

export default WordChallenge;