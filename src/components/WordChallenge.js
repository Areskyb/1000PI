import React,{useEffect} from 'react';
import {Description} from '@material-ui/icons'

function WordChallenge({setGameTitle}){

    useEffect(() => {
        setGameTitle("WordChallenge")
        return () => {
            
        };
    }, [])

    return(
        <h3>Description</h3>
    )

}

export default WordChallenge;