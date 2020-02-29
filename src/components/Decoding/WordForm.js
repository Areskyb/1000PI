import React, {useState} from 'react';
import { Input } from '@material-ui/core';

const nouns = require('nouns');
const associationTable = {
    'z': "0",
    's': "0",
    'c': "0",
    'd': "1",
    't': "1",
    'n': "2",
    'm': "3",
    'r': "4",
    'l': "5",
    'j': "6",
    'ch': "6",
    'dg': "6",
    'zh': "6",
    'g': "6",
    'k': "7",
    'c': "7",
    'g': "7",
    'ch': "7",
    'q': "7",
    'f': "8",
    'v': "8",
    'b': "9",
    'p': "9"
}
const forgottenValues = ['a','e','i','o','u','w','h']


function WordForm () {

    const [currentWord,setCurrentWord] = useState(nouns.ran(1));
    const [userResult, setUserResult] = useState('');
    
    function checkResult(event){
        console.table([{'Word to check': currentWord[0], 'Decode result': decode(userResult), 'User result': userResult}]);
        // console.log(typeof userResult);
        setCurrentWord(nouns.ran(1));
        setUserResult('');
        event.preventDefault();
    }

    // should return the decoding of the word
    function decode (word) {
        
    }

    function handleChange (event) {
        setUserResult(event.target.value);
    }

    return(
        <form onSubmit={checkResult}>
            <h1>{currentWord}</h1>
            <Input type='number'  value ={userResult} onChange={handleChange}></Input>
        </form>
    );
        
}

export default WordForm;