import React, { useEffect } from 'react';
import TextField from '@material-ui/core/TextField'

function Relationships({setGameTitle}){
    
    useEffect(() => {
        setGameTitle("Relationships")
        return () => {
            
        };
    }, [])



    const submit = event => {
        console.log("submited");
        event.preventDefault();
    }

    return(
        <form    onSubmit={submit}>
      <TextField id="standard-basic" label="Standard" />

    </form>
    )
}

export default Relationships;