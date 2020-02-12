import React, { useState } from 'react';
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import { IconButton } from '@material-ui/core'
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';


function GameConatainer(){
   
   
//  STYLES  
    const useStyles = makeStyles(theme => ({
        root: {
          flexGrow: 1,
        },
        menuButton: {
          marginRight: theme.spacing(2),
        },
        title: {
          flexGrow: 1,
        },
      }));
    const classes = useStyles()      
   const  style= {
        backgroundColor: '#cfe8fc',
        height: '70vh',
        marginTop:30,
        width:'75%',
        padding:0

    }



    const [title,setTitle] = useState("Your track")

    return(
        <Container style={style}>
               <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            {title}
          </Typography>
            <IconButton>
            <InfoOutlinedIcon elementType="button"></InfoOutlinedIcon>
            </IconButton>
        </Toolbar>
      </AppBar>
      </Container>
    )
}

export default GameConatainer