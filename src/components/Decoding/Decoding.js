import React, {useEffect,useRef, useContext} from 'react';
import CheatSheet from './CheatSheet';
import WordForm from './WordForm';
import { getDecoding } from '../../Services/decodingServices'
import { UserContext } from '../../UserContext';


function Decoding({setGameTitle}){
    const {userValue} = useContext(UserContext);
    const times = useRef(0);


    useEffect(() => {
        if(userValue){
            getDecoding(userValue,'times').then(res => times.current = res);
            console.log('read db ')
        }
        return () => {
            // console.log('user', user);
            // console.log('userValue',userValue);
            // console.log('times',times.current);
            // console.log('db write');
        }
    }, [userValue]);

    useEffect(() => {
        setGameTitle("Words to numbers");
        return () => {
        };
    }, [setGameTitle])
    return(
        <>
        <WordForm times={times} user={userValue}></WordForm>
        <CheatSheet></CheatSheet>
        </>
    )

}

export default Decoding;