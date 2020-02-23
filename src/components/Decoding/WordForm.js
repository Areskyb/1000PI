import React, {useState} from 'react';
import { TextField } from '@material-ui/core';

const nouns = require('nouns');


function WordForm () {

    const [currentWord,setCurrentWord] = useState(nouns.ran(1));
    const [userResult, setUserResult] = useState();
    
    function checkResult(event){
        console.log('checking element =>', currentWord);
        // setCurrentWord(nouns.ran(1));
        event.preventDefault();
    }

    function decode (word) {
        return 495
    }

    function handleChange (event) {
        setUserResult(event.target.value);
    }

    return(
        <form onSubmit={checkResult}>
            <h1>{currentWord}</h1>
            <TextField value ={userResult} onChange={handleChange}></TextField>

        </form>
    )
}

export default WordForm;