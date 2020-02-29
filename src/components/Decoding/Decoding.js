import React, {useEffect} from 'react';
import CheatSheet from './CheatSheet';
import WordForm from './WordForm';


function Decoding({setGameTitle}){


    useEffect(() => {
        setGameTitle("Words to numbers")
        return () => {
            
        };
    }, [setGameTitle])
    return(
        <>
        <WordForm></WordForm>
        <CheatSheet></CheatSheet>
        </>
    )

}

export default Decoding;