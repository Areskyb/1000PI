import React, {useEffect} from 'react';
import CheatSheet from './CheatSheet';
import WordForm from './WordForm';


var nouns = require('nouns');
function Decoding({setGameTitle}){


    useEffect(() => {
        setGameTitle("Decoding")
        return () => {
            
        };
    }, [setGameTitle])
    return(
        <>
       <h3>Decoding</h3>
        {/* <CheatSheet></CheatSheet> */}
        <WordForm></WordForm>
        
        </>
    )

}

export default Decoding;