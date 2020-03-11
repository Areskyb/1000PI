import React, { useEffect, useState, useContext } from 'react';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { updateRelations } from '../../Services/relationshipsServices';
import {UserContext} from '../../UserContext'



function RelationForm({setResult,setWordCount,wordCount,totalRelations}){

    const [description,setDescription] = useState('');
    const [descriptions,setDescriptions] = useState([]);
    const { userValue } = useContext(UserContext);
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
        setResult(descriptions);
        updateRelations(userValue,(wordCount + totalRelations))
        console.log('db write update relations', (wordCount + totalRelations))

    }

    return(
    <form onSubmit={submit}>
      <TextField autoComplete="off" id="standard-basic" label="Create a relationship between this two words an then press ENTER" value={description} onChange={handleChange}  fullWidth/>
      <Button onClick={submit}> next</Button>
      <Button onClick={finishTask}> finish</Button>
    </form>
    )
}

export default RelationForm;