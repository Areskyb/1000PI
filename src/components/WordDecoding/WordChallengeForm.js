
import React, {useState} from 'react';
import { Input, Typography } from '@material-ui/core';

function WordChallengeForm () {

    const [currentNumber,setCurrentNumber] = useState(Math.floor(Math.random() * 999));
    const [userResult, setUserResult] = useState('')
    
    function handleChange(event){
        setUserResult(event.target.value);
        
    }
    function submit(event) {
        setCurrentNumber(Math.floor(Math.random() * 999));
        setUserResult('')
        event.preventDefault();
    }

    return(
        <>
        <form onSubmit={submit}>
            
            <Typography variant="h2">{currentNumber}</Typography>
            <Input type='text'  value ={userResult} onChange={handleChange}></Input>
        </form>
        

        </>
    );
        
}

export default WordChallengeForm;