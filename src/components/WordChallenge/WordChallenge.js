import React,{useEffect,useState, useContext} from 'react';
import { Button, Typography, Container, } from '@material-ui/core';
import WordTest from './WordTest';
import { getWordChallenges, updateWordChallenges } from '../../Services/wordChallengeServices';
import { updateTrack } from '../../Services/trackServices';
import { UserContext } from '../../UserContext';
import {ran } from '../../shared/nounsGetter'
// import Words

function WordChallenge({setGameTitle,words,setProgressBar,setDialogContent}){
   const [wordList,setWords] = useState(ran(words));
   const [count, setCount] = useState(0);
   const [inTest,setTest] = useState(false);
   const [totalWords, setTotalWords] = useState(null)
   const {userValue} = useContext(UserContext)
   useEffect(() => {
       setGameTitle("Word Challenge!");
       const DialogContent = (
           <>
            <Typography variant="h3"> Word Challenge !</Typography>
        <Typography variant="h5">
        In this exercise, you must use your relationship abilities to connect the given words!
        </Typography>

        <Typography variant="h5" style={{marginTop:'3%'}}>
          {'🌈'} A really good 4min. video before starting =>   <a href='https://www.youtube.com/watch?v=p9IOqd1LpkA'>{'🎬'}</a>
        </Typography>
        <Typography variant='subtitle2'  > Try to follow the {'🧠'} Memory Palace {'🏡'} Technique and use between 5-15 words per room. </Typography>
        <Typography variant='subtitle2'  > This exercise is about improving your concentration and creativity, so go ahead {'🤠'} and practice!</Typography>


           </>
       )
       setDialogContent(DialogContent)
       return () => {
       };
   }, [setGameTitle])

// renders first time
   useEffect(() => {
       if(userValue){
            getWordChallenges(userValue,words).then(res => {
                setTotalWords(res);
                if(res <= 10){ 
                    setProgressBar((res * 100)/10)
                  }else{
                      setProgressBar(100)
                  }
            });
            // console.log('total words',totalWords);
            // console.log('words', words);

            // console.log('db read');


        }
   }, [userValue,words]);

   // checks if pass the level
   useEffect(()=> {
     if (totalWords === 10  && words !==100){
       updateTrack({activityThree:true}, userValue);
    //    console.log('read and write');
    //    alert('New level unlocked!')
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
            <Container align='center' style={{marginTop:'10%'}}>

            {!inTest?<Button style={{marginRight:10}} variant="outlined" color="primary" onClick={e => setCount(0)}>Back to words</Button>: <Typography variant='h4'></Typography> }
            <WordTest wordList={wordList} setTest={setTest} totalWords={totalWords} setTotalWords={setTotalWords} setProgressBar={setProgressBar}></WordTest>
            <Button
            style={{marginLeft:10}}
            variant="outlined" color="primary"
            onClick={e => {
                setCount(0);
                setWords(ran(words));
                getWordChallenges(userValue,words).then(res => {
                    setTotalWords(res)
                });
                console.log('db read')
            }}>{inTest ? "cancel" : "New set of words"}</Button>
            </Container>
            </>
        )
    }

    return(
        <>
        <Typography variant="h1" align='center' style={{marginTop:'5%'}}>{wordList[count]}</Typography>
        <Typography variant="h4" align='center'>Words: {count + 1}</Typography>
        <Container align='center' style={{marginTop:'5%'}}>
        <Button onClick={e => prev(e)} variant="outlined" color="primary" style={{marginRight:10}}>prev</Button>
        <Button onClick={e =>next(e)} variant="contained" color="primary" style={{marginLeft:10}}>next</Button>
        </Container>
        {/* <MindPalace words ={ wordList }></MindPalace> */}
        </>
    )

}



export default WordChallenge;
