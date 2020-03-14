import React,{ useState, useContext } from 'react'
import { Button, ListItem, Typography, ListItemText } from '@material-ui/core';
import { UserContext } from '../../UserContext'
import { updateWordChallenges } from '../../Services/wordChallengeServices'
function WordTest({wordList,setTest,totalWords,setTotalWords,setProgressBar}){
    // check if the test is being made
    const [inTest, setInTest] = useState(false);
    // toggle if won
    const [isWon,setIsWon] = useState(false);
    // track the count of the exam
    const [count,setCount] = useState(0);
    
    const { userValue } = useContext(UserContext);

    // creates a set of random words excluding the correct one
        function getrandomWords(num){
            let result = []

            for(let i = 0; i < num; i++){
                let randomWord = wordList[Math.floor(Math.random() * wordList.length)]
                //will check if the word is already in the result arry
                console.log("result=>",result, " random word =>", randomWord, "includes? =>",result.includes(randomWord))
                if(!result.includes(randomWord) && randomWord !== correctWord ){
                    result.push(randomWord);
                }else{
                    i--
                }

            }
            let finalResult = result.map((word,index) => {

                if(word !== undefined){
                    return(
                        <ListItemText style={{border:'1px solid rgb(66,83,175)',borderRadius:10,cursor:'pointer'}} key={index}  onClick={e => console.log("incorrect")}> {word} </ListItemText>
                        )
                    }
                    return null;
            })
            return finalResult;

        }


    // creates the correct button appart
    function correctOtion(){
        return(
            <ListItemText style={{border:'1px solid rgb(66,83,175)',borderRadius:10,cursor:'pointer'}}  key={Date.now()}  onClick={e => nextQuestion()}> {wordList[count]} </ListItemText>
        )
    }

    let correctWord = wordList[count];
    let options = getrandomWords(4);
    let correctOption = correctOtion();

    options.splice(Math.floor(Math.random() * 5),0,correctOption);
    console.log("correctWord", wordList[count]);

    function nextQuestion(){
        if (wordList[count + 1] === undefined){
            setTest(false);
            setIsWon(true);
        }else{
            setCount(count + 1);
        }
    }



        if(inTest && !isWon){
            return(
                <>
                <Typography variant = "h3">Select the correct word</Typography>
                    {options}
                    {/* {console.log(wordList)} */}
                </>
            )
        }else if(!isWon){
            return(
                <Button variant="outlined" color="secondary" onClick={e => {setInTest(true);setTest(true)}}>Make Test</Button>
            )
        }else{
              let numOfWords = wordList.length
              console.log(totalWords);
              console.log(numOfWords)
              updateWordChallenges(userValue, {[numOfWords]:(totalWords + 1)});
              console.log('db write');
              if(totalWords + 1 <= 10){ 
                  setProgressBar((totalWords * 100)/10)
                }else{
                    setProgressBar(100)
                }

            return(
                <Typography align='center' variant ="h1" style={{marginTop:'10%'}}>You won!</Typography>
            )
        }
}

export default WordTest
