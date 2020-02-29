import React,{useEffect} from 'react';
import WordChallengeForm from './WordChallengeForm';

function WordDecoding({setGameTitle}){

    useEffect(() => {
        setGameTitle('Numbers to words')
        return () => {
        };
    }, [setGameTitle])

    return(
        <WordChallengeForm></WordChallengeForm>
    )

}

export default WordDecoding;