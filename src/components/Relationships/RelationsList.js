import React from 'react';
import Button from '@material-ui/core/Button'
import List from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

function RelationsList({result,resetGame}){

    
        const listResult =result.map( (descritpion,index) => 
                <ListItemText
                key = {index}
                primary={descritpion}
                secondary="Secondary text"
                />
                
        )

    return(
    <>
    <h1>{result}</h1>
    <Button onClick={resetGame}>Reset</Button>

    <List>
        {listResult}
    </List>
    </>
    )
}

export default RelationsList;