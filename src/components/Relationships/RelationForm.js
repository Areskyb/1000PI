import React, { useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'



function RelationForm({setResult,setWordCount,wordCount}){

    const [description,setDescription] = useState('');
    const [descriptions,setDescriptions] = useState([]);

    // will handle change in each event 
    const handleChange = event => {
        setDescription(event.target.value)
    }
    
    useEffect(() => {
        return () => {
            
        };
    }, [])



    const submit = event => {
        event.preventDefault();
        if(description){
            setDescriptions([...descriptions,description]);
            setWordCount(wordCount + 1)
        }
        setDescription('');
    }

    const finishTask = event => {
        setResult(descriptions)
    }

    return(
    <form onSubmit={submit}>
      <TextField id="standard-basic" label="Standard" value={description} onChange={handleChange} />
      <Button onClick={submit}> next</Button>
      <Button onClick={finishTask}> finish</Button>
    </form>
    )
}

export default RelationForm;