import React from 'react';
import Button from '@material-ui/core/Button'
import List from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

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
    <ul>
        {listResult}
    </ul>
    </>
    )
}

export default RelationsList;