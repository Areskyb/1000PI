import React from 'react';
import Button from '@material-ui/core/Button'
import ListItemText from '@material-ui/core/ListItemText'
import { Typography } from '@material-ui/core';

function RelationsList({result,resetGame,generatedWords}){
    
        const listResult =result.map( (descritpion,index) => 
                <ListItemText
                key = {index}
                primary={descritpion}
                
                />
                
        )

    return(
    <>
    <Button onClick={resetGame}>Reset</Button>
        <Typography variant="h2"> Your relationships </Typography>
        {listResult}

    </>
    )
}

export default RelationsList;