import React,{useEffect} from 'react';
import WordChallengeForm from './WordChallengeForm';

function WordDecoding({setGameTitle}){

    useEffect(() => {
        setGameTitle('Decoding Challenge')
        return () => {
        };
    }, [setGameTitle])

    return(
        <WordChallengeForm></WordChallengeForm>
    )

}

export default WordDecoding;