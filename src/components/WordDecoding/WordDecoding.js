import React,{useEffect, useRef, useContext} from 'react';
import WordChallengeForm from './WordChallengeForm';
import { UserContext } from '../../UserContext'
import { getWordDecoding, updateWordDecoding} from '../../Services/wordDecodingServices';

function WordDecoding({setGameTitle, setProgressBar}){
    const times = useRef(null);
    const { userValue } = useContext(UserContext);
    
    useEffect(() => {
        if(userValue){
            // get data from db and set times to the data result.
            getWordDecoding(userValue,'times').then(res => {
                times.current = res;
                console.log('res',res)
                if(res <= 40){
                    setProgressBar((res * 100)/40);
                }else{
                    setProgressBar(100);
                }
            });
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
        <WordChallengeForm save={save} times ={times} user={userValue} setProgressBar={setProgressBar}></WordChallengeForm>
    )

}

export default WordDecoding;