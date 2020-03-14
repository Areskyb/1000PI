import React, { useEffect, useState, useContext } from 'react';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { updateRelations } from '../../Services/relationshipsServices';
import { updateTrack } from '../../Services/trackServices';
import {UserContext} from '../../UserContext'
import {Height} from '@material-ui/icons'
import { Container } from '@material-ui/core';



function RelationForm({setResult,setWordCount,wordCount,totalRelations,setProgressBar}){

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
        if(description){
            setDescriptions([...descriptions,description]);
            setWordCount(wordCount + 1);
            totalRelations.current = totalRelations.current + 1;
            if(totalRelations.current <= 30){
                setProgressBar((totalRelations.current * 100)/30);
            }
            
        }
        setDescription('');
        event.preventDefault();
    }

    const finishTask = event => {
        setResult(descriptions);
        updateRelations(userValue,'relations', totalRelations.current)
        // console.log('db write update relations', (totalRelations.current))

    }

    if (totalRelations.current === 30){
        alert('New Level unlocked!');
        updateTrack({activityTwo: true}, userValue);
        // console.log('db write');
        totalRelations.current = totalRelations.current + 1;
        finishTask()
    }

    return(
    <form onSubmit={submit}>
      <TextField autoComplete="off" id="standard-basic" label="Create a relationship between this two words an then press enter." value={description} onChange={handleChange}  fullWidth/>
      <Container align='center' style={{marginTop:'3%'}}>
      <Button onClick={submit} variant="outlined" color="primary" style={{marginRight:'2%'}}  > next</Button>
      <Button onClick={finishTask} variant="contained" color="primary" style={{marginLeft:'2%'}}> save </Button>
      </Container>
    </form>
    )
}

export default RelationForm;