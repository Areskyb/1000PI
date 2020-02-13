import React, { useEffect } from 'react';

function Relationships({setGameTitle}){
    
    useEffect(() => {
        setGameTitle("Relationships")
        return () => {
            
        };
    }, [])
    return(
        <h3>Relationships</h3>
    )
}

export default Relationships;