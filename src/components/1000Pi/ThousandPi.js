import React, {useState,useEffect} from 'react';
import { getPI } from '../../api usage/WordRecomender';
import { Typography,TextField, Container,Button } from '@material-ui/core';
import PiRecomender from './PiRecomender';

function ThousadPi({setGameTitle,setProgressBar,setDialogContent}){
    const pi = getPI();
    // STATES
    const [userInput,setUserInput] = useState('');
    const [savedWords,setSavedWords] = useState([]);
    const [totalNumbers,setTotalNumbers] = useState(0);
    const [currentNumbers, setCurrentNumbers] = useState(3141526535);

    // renders
    const words = savedWords.map( (word,index) => `${index + 1}.${word}, `)
    // mounting
    useEffect(() => {
        setGameTitle('1000 Pi challenge');
        const dialogContent = (
            <>
         <Typography variant="h3">{'🌅'} 1000 Pi {'🌅'} </Typography>
        <Typography variant="h5">
            {'🌵'} Welcome to the Wild West {'🌵'}
        </Typography>
        <Typography variant="body1" style={{marginTop:'3%'}}>
        Last part of this mini course on memotechnics and learning, before the explanation, I hope you have learned the necessary techniques to memorize large numbers, phone numbers, historical dates, etc. Remember that everything is easier to memorize if you are the one who create the memories, as stupid as it seems it works.
        </Typography>
            <Typography style={{marginTop:'5%'}} variant='h4'>How this exersice works? {'🤔'}</Typography>
            <Typography variant='h5'>You have to write coded words from the Major system in order, that simple ... {'😂'}. Remember to make use of all the learned resources.</Typography>
         <Typography variant='subtitle2'  > Now is up to you to memorize as long as you want from the first 1000 digits of pi {'🤩'}, you have the tools {'🧰'}</Typography>
        <Typography variant='subtitle2' style={{marginTop:'10%'}}  > {'📩'} PLEASE, contact me if you have reached this level, explain your experience and tell me what you think about this little app, what you would improve, etc. Thank you very much for reading this! {'😘'}</Typography>
                <Button variant="outlined" color="primary" href='mailto:areskyuk@gmail.com?subject= Feed back from 1000 Pi'>
                    send me some feedback
                  </Button>


            </>
        )
        setDialogContent(dialogContent)
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
    <>  
            <Typography variant ='subtitle1' style={{marginTop:'5%'}} align='center'> Memorized numbers: {totalNumbers} </Typography>
            <Typography variant = 'h1' align='center'>
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
            <Container align='center' style={{marginTop:'5%'}}>
            <PiRecomender numbersToSearch={currentNumbers} setInput={setUserInput} sumbit={sumbit}></PiRecomender>
            </Container>
            <Typography variant='subtitle2'>{words}</Typography>
        </>
    )
}

export default ThousadPi;