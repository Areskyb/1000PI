import React, {useEffect} from 'react';

function Decoding({setGameTitle}){

    useEffect(() => {
        setGameTitle("Decoding")
        return () => {
            
        };
    }, [setGameTitle])
    return(
        <h3>Description</h3>
    )

}

export default Decoding;