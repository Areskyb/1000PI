import React, {useState,useEffect} from 'react';
import { getPI } from '../../api usage/WordRecomender';
import { Typography,TextField, ListItemText } from '@material-ui/core';
import PiRecomender from './PiRecomender';

function ThousadPi({setGameTitle,setProgressBar}){
    const pi = getPI();
    // STATES
    const [userInput,setUserInput] = useState('');
    const [savedWords,setSavedWords] = useState([]);
    const [totalNumbers,setTotalNumbers] = useState(0);
    const [currentNumbers, setCurrentNumbers] = useState(3141526535);

    // renders
    const words = savedWords.map( (word,index) => <ListItemText primary = {` ${index + 1}. ${word}`} key = {index}></ListItemText>)
    // mounting
    useEffect(() => {
        setGameTitle('1000 Pi challenge');
    },[setGameTitle,setTotalNumbers]);


    // HANDLE CHANGE FOR USER
    const handleChange = (event) => {
        setUserInput(event.target.value);
    }


    // the phonetic traduction for the major system
        const numbersTraduction = {
            z: 0,
            s: [0,6],
            c: [0,6,7],
            t: 1,
            d: 1,
            n: 2,
            m: 3,
            r: 4,
            l: 5,
            g: [6,7],
            j:[6,7],
            q: 7,
            k: 7,
            f: 8,
            v: 8,
            p: 9,
            b: 9
        }
        
    // 
        const checkIfWordMatches = (word) => {
            let currentNumbersInString = currentNumbers.toString();
            let length = getCharacters(word).length;
            let characters = getCharacters(word);
            
            for(let i = 0; i < length; i++){
                let numberToCheck = currentNumbersInString[i];
                let currentCharacter = characters[i]

                if( typeof numbersTraduction[currentCharacter] === "object"){
                    if (!(numbersTraduction[currentCharacter].includes(parseInt(numberToCheck)))){
                        return false
                    }
                }else{
                    // console.log('current number', numberToCheck);
                    // console.log('character to check', currentCharacter);
                    // console.log('suposed number', numbersTraduction[currentCharacter])
                    if (!(numbersTraduction[currentCharacter] === parseInt(numberToCheck))){
                        return false
                    }
                }
            }
            return true
        }

        // returns the length for the major system 
        const getCharacters = (word) => {
            let wordToCheck = word.split('');
            let validCharacters = []
            wordToCheck.forEach( character => {
                if (numbersTraduction[character]) {
                    validCharacters.push(character)
                } ;
                return
            });
            return validCharacters;
        }

        const newCurrentNumbers = () => {
            let newCurrentNumbers = pi.slice(totalNumbers + getCharacters(userInput).length, totalNumbers + getCharacters(userInput).length + 10);
            let result = ''
            newCurrentNumbers.forEach( number => {
                result += number
            });
            return parseInt(result);
        }




    // SUBMIT FORM 
    const sumbit = (event) => {
        // userInput === isNaN ? setCurrentNumbers(1415926535) : setCurrentNumbers(pi.slice(userInput,userInput + 10));
        if(checkIfWordMatches(userInput) && userInput !== ''){
            setSavedWords([...savedWords,userInput]);
            setTotalNumbers( totalNumbers + getCharacters(userInput).length);
            setCurrentNumbers(newCurrentNumbers());

            if(totalNumbers <= 1000){
                setProgressBar((totalNumbers * 100)/1000);
            }else{
                setProgressBar(100);
            }
        }   
        // set the input of the user into the user word list
        setUserInput('');
        event.preventDefault();
    }

    return(
    <>  <Typography variant ='subtitle1'> total numbers: {totalNumbers}</Typography>
            <Typography variant = 'h3'>
                {currentNumbers}
            </Typography>
            <form onSubmit = {e => sumbit(e)}>
            <TextField id = "outlined-basic" 
            label = "input" 
            variant = "outlined"
            type = 'string'
            value = {userInput}
            onChange={e => handleChange(e)}
            fullWidth
            autoComplete = 'off' />
            </form>

            <PiRecomender numbersToSearch={currentNumbers} setInput={setUserInput} sumbit={sumbit}></PiRecomender>

            {words}


        </>
    )
}

export default ThousadPi;