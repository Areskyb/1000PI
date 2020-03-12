import React,{useEffect, useRef, useContext} from 'react';
import WordChallengeForm from './WordChallengeForm';
import { UserContext } from '../../UserContext'
import { getWordDecoding, setWordDecoding, updateWordDecoding} from '../../Services/wordDecodingServices';

function WordDecoding({setGameTitle}){
    const times = useRef(null);
    const { userValue } = useContext(UserContext);
    
    useEffect(() => {
        if(userValue){
            // get data from db and set times to the data result.
            getWordDecoding(userValue,'times').then(res => times.current = res);
            console.log('db read');
        }
        return () => {

        }
    }, [userValue])

    useEffect(() => {
        setGameTitle('Numbers to words')
        return () => {
        };
    }, [setGameTitle])

    const save = () => {
        updateWordDecoding(userValue,'times',times.current);
        console.log('db write');
    }

    return(
        <WordChallengeForm save={save} times ={times} user={userValue}></WordChallengeForm>
    )

}

export default WordDecoding;