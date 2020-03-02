import React, {useState,useEffect} from 'react';
import { getPI } from '../api usage/WordRecomender';
import { Typography,TextField } from '@material-ui/core';

function ThousadPi({setGameTitle}){
    const pi = getPI();
    // STATES
    const [currentNumbers, setCurrentNumbers] = useState(1415926535);
    const [userInput,setUserInput] = useState(0);
    // mounting
    useEffect(() => {
        setGameTitle('1000 Pi challenge');
    },[setGameTitle]);


    // HANDLE CHANGE FOR USER
    const handleChange = (event) => {
        setUserInput(parseInt(event.target.value))
    }
    
    // SUBMIT FORM 
    const sumbit = (event) => {
        userInput === isNaN ? setCurrentNumbers(1415926535) : setCurrentNumbers(pi.slice(userInput,userInput + 10));
        event.preventDefault()
    }


    return(
        <>
            <Typography variant = 'h3'>
                {currentNumbers}
            </Typography>
            <form onSubmit = {e => sumbit(e)}>
            <TextField id = "outlined-basic" 
            label = "input" 
            variant = "outlined" 
            type = "number"
            onChange={e => handleChange(e)} />
            </form>

        </>
    )
}

export default ThousadPi;