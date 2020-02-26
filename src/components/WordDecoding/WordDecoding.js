import React,{useEffect} from 'react';

function WordDecoding({setGameTitle}){

    useEffect(() => {
        setGameTitle('Decoding Challenge')
        return () => {
        };
    }, [setGameTitle])

    return(
        <h3>Description</h3>
    )

}

export default WordDecoding;