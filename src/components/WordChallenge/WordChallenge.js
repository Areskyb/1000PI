import React,{useEffect,useState, useContext} from 'react';
import { Button, Typography } from '@material-ui/core';
import WordTest from './WordTest';
import { getWordChallenges, updateWordChallenges } from '../../Services/wordChallengeServices';
import { updateTrack } from '../../Services/trackServices';
import { UserContext } from '../../UserContext';
// import Words
var nouns = require('nouns');
function WordChallenge({setGameTitle,words}){
   const [wordList,setWords] = useState(nouns.ran(words));
   const [count, setCount] = useState(0);
   const [inTest,setTest] = useState(false);
   const [totalWords, setTotalWords] = useState(null)
   const {userValue} = useContext(UserContext)
   useEffect(() => {
       setGameTitle("Word Challenge!")
       return () => {
       };
   }, [setGameTitle])

// renders first time
   useEffect(() => {
       if(userValue){
            getWordChallenges(userValue,words).then(res => setTotalWords(res));
            console.log('db read');
        }
   }, [userValue,words]);

   // checks if pass the level
   useEffect(()=> {
     if (totalWords === 4  && words !==100){
       updateTrack({activityThree:true}, userValue);
       console.log('read and write');
       alert('New level unlocked!')
       updateWordChallenges(userValue, {[words]:(totalWords + 1)});

     }
   })

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


    // const refreshWords = () => {
    //   setCount(0);
    //   setWords(nouns.ran(words));
    // }

    if(count === words){
        return(
            <>
            {!inTest?<Button onClick={e => setCount(0)}>Back to words</Button>: <Typography variant='h4'></Typography> }
            <WordTest wordList={wordList} setTest={setTest} totalWords={totalWords} setTotalWords={setTotalWords}></WordTest>
            <Button onClick={e => {
                setCount(0);
                setWords(nouns.ran(words));
                getWordChallenges(userValue,words).then(res => setTotalWords(res));
                console.log('db read')
            }}>{inTest ? "cancel" : "New set of words"}</Button>
            </>
        )
    }

    return(
        <>
        <Typography variant="h1">{wordList[count]}</Typography>
        <Button onClick={e => prev(e)}>prev</Button>
        <Button onClick={e =>next(e)}>next</Button>
        <Typography variant="h3">Word Count: {count + 1}</Typography>
        {/* <MindPalace words ={ wordList }></MindPalace> */}
        </>
    )

}



export default WordChallenge;
