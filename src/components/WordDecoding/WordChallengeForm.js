
import React, {useState} from 'react';
import { Typography, FormGroup, TextField } from '@material-ui/core';

function WordChallengeForm () {

    const [currentNumber,setCurrentNumber] = useState(Math.floor(Math.random() * 999));
    const [userResult, setUserResult] = useState('')
    // value if the answer is correct
    const [isCorrect, setIsCorrect] = useState(false);

    const numbersTraducction = {
        0: '[sz]',
        1: '[td]',
        2: '[n]',
        3: '[m]',
        4: '[r]',
        5: '[l]',
        6: '[gjscdz]',
        7: '[kcgchq]',
        8: '[fv]',
        9: '[pb]',
        // 10 are the vouls and elements forgotten from the table
        10: '[aeiouwh]*'
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
        }else{
            setIsCorrect(true);
        }
        
        console.table({'currentNumber': currentNumber, 'Regex Result': createRegex(currentNumber)});
        console.log('is correct => ' ,regex.test(userResult));
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
           let correctExpression = numbersTraducction[parseInt(numInString[i])];
        //    console.log('correctExpresion =>',correctExpression)
           if(i === 0){
               result = result.concat(numbersTraducction[10]);
               result = result.concat(correctExpression);
               result = result.concat(numbersTraducction[10]);
           }else{
               result = result.concat(correctExpression);
               result = result.concat(numbersTraducction[10]);
           }
        }

        return result;
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
                helperText={isCorrect ? 'Wrong Number!' : ''}
                ></TextField>
            </FormGroup>
        </form>
        

        </>
    );
        
}

export default WordChallengeForm;