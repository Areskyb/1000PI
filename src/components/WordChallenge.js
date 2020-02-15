import React,{useEffect} from 'react';

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