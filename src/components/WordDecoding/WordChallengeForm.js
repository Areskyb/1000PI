
import React, {useState} from 'react';
import { Typography, FormGroup, TextField, Button, ListItemText } from '@material-ui/core';

function WordChallengeForm () {

    const [currentNumber,setCurrentNumber] = useState(Math.floor(Math.random() * 999));
    const [userResult, setUserResult] = useState('');
    const [words, setWords] = useState(null);
    // value if the answer is correct
    const [isCorrect, setIsCorrect] = useState(false);

    const numbersTraduction = {
        0: '[sz]',
        1: '[td]',
        2: '[n]',
        3: '[m]',
        4: '[r]',
        5: '[l]',
        6: '[g]',
        7: '[k]',
        8: '[fv]',
        9: '[pb]',
        // 10 are the vouls and elements forgotten from the table
        10: "[aeiouwh\\s]*"
    }

    function handleChange(event){
        setUserResult(event.target.value);
        
    }
    function submit(event) {
        // regex form 
        let regex = RegExp(createRegex(currentNumber));
        let check = regex.test(userResult);
        
        if (check){
            setCurrentNumber(Math.floor(Math.random() * 999));
            setUserResult('');
            setIsCorrect(false)
            setWords(null)
        }else{
            setIsCorrect(true);
        }
        
        // console.table({'currentNumber': currentNumber, 'Regex Result': createRegex(currentNumber)});
        // console.log('is correct => ' ,regex.test(userResult));
        event.preventDefault();
    }
    // transform a number into a regular expression from the numbersTraduction table
    const createRegex = (num) => {
        let numInString = num;
        numInString = numInString.toString();
        // console.log('numInString => ',typeof numInString);

        let lengthOfNum = numInString.length;
        // console.log('lengthOfNum => ', lengthOfNum);
        
        let result = '';

        for( let i = 0; i < lengthOfNum ; i++ ){
           let correctExpression = numbersTraduction[parseInt(numInString[i])];
        //    console.log('correctExpresion =>',correctExpression)
           if(i === 0){
               result = result.concat(numbersTraduction[10]);
               result = result.concat(correctExpression);
               result = result.concat(numbersTraduction[10]);
           }else{
               result = result.concat(correctExpression);
               result = result.concat(numbersTraduction[10]);
           }
        }

        return result;
    }

    // will fetch the words from the wordsAPI 
    // TODO: make a way to store the fetches that a user has made from the api.
    function recomendedWords(){
        setWords(null);
        fetch(`https://wordsapiv1.p.rapidapi.com/words/?hasDetails=definitions&letterPattern=^${createRegex(currentNumber)}$`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
                "x-rapidapi-key": process.env.REACT_APP_WORDS_API_KEY
            }
        })
        .then(response => {
            return response.json()
            
        }).then( 
            res => {
                 setWords(res.results.data.map( (word,index) => {
                    return (
                        <ListItemText
                        key = {index}
                        primary={word}
                        >
                        </ListItemText>
                    );
                }));
            }
        )
    }

    return(
        <>
        <form onSubmit={submit}>
            <Typography variant="h2">{currentNumber}</Typography>
            <FormGroup>
            <TextField
                onChange={handleChange}
                label='Set a word for this number' 
                value ={userResult}
                error= {isCorrect}
                helperText={isCorrect ? 'Wrong!' : ''}
                ></TextField>
            </FormGroup>
        </form>
        <Button variant="contained" color="secondary" onClick= {(e) => recomendedWords()}>
            Get words
        </Button>

        {words}

        </>
    );
        
}

export default WordChallengeForm;