import React,{useState} from 'react'
import { Button, ListItem, Typography } from '@material-ui/core'

function WordTest({wordList,setTest}){
    // check if the test is being made 
    const [inTest, setInTest] = useState(false);
    // toggle if won
    const [isWon,setIsWon] = useState(false);
    // track the count of the exam
    const [count,setCount] = useState(0);

    // creates a set of random words excluding the correct one
        function getrandomWords(num){
            let result = []

            for(let i = 0; i < num; i++){
                let randomWord = wordList[0][Math.floor(Math.random() * wordList[0].length)]
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
            <ListItem key={Date.now()}  button onClick={e => nextQuestion()}> {wordList[0][count]} </ListItem>
        )
    }

    let correctWord = wordList[0][count];
    let options = getrandomWords(4);
    let correctOption = correctOtion();

    options.splice(Math.floor(Math.random() * 5),0,correctOption);
    console.log("correctWord", wordList[0][count]);

    function nextQuestion(){
        if (wordList[0][count + 1] === undefined){
            setInTest(false);
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
            return(
                <Typography variant ="h1">You won!</Typography>
            )
        }
}

export default WordTest