import React,{ useState, useContext } from 'react'
import { Button, ListItem, Typography } from '@material-ui/core';
import { UserContext } from '../../UserContext'
import { updateWordChallenges } from '../../Services/wordChallengeServices'
function WordTest({wordList,setTest,totalWords,setTotalWords}){
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
                // console.log("result=>",result, " random word =>", randomWord, "includes? =>",result.includes(randomWord))
                if(!result.includes(randomWord) && randomWord !== correctWord ){
                    result.push(randomWord);
                }else{
                    i--
                }

            }
            let finalResult = result.map((word,index) => {

                if(word !== undefined){
                    return(
                        <ListItem key={index}  button onClick={e => console.log("incorrect")}> {word} </ListItem>
                        )
                    }
                    return null;
            })
            return finalResult;

        }


    // creates the correct button appart
    function correctOtion(){
        return(
            <ListItem key={Date.now()}  button onClick={e => nextQuestion()}> {wordList[count]} </ListItem>
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
                <Button onClick={e => {setInTest(true);setTest(true)}}>Make Test</Button>
            )
        }else{
              let numOfWords = wordList.length
              console.log(totalWords);
              console.log(numOfWords)
              updateWordChallenges(userValue, {[numOfWords]:(totalWords + 1)});
              console.log('db write');
            return(
                <Typography variant ="h1">You won!</Typography>
            )
        }
}

export default WordTest
