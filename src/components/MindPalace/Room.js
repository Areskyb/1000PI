import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import EditIcon from '@material-ui/icons/Edit';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { Button, DialogTitle, DialogContent, TextField } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export default function Room({words}) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [dialogState,setDialogState] = React.useState(false);
  const [roomName,setRoomName] = React.useState('New Room');
  const [numWords,setNumWords] = React.useState(null);

  const handleClick = () => {
    setOpen(!open);
  };

  const dialogOpen = () => {
    setDialogState(true);
  }

  const dialogClose = () => {
    setDialogState(false);
  }

  function EditDialog({setRoomName,setNumWords,numWords}) {
    const [userInput,setUserInput] = React.useState("New Room");
    const [numberOfWords,setNumberOfWords] = React.useState(10);
    
    
    const handleChange = (event) => {
        setUserInput(event.target.value);
    }

    const handleChangeNumber = (event) => {
      setNumberOfWords(parseInt(event.target.value));
    }

    const submit = (event) => {
        setRoomName(userInput)
        setNumWords(numberOfWords);
        setDialogState(false);
      event.preventDefault();
    }

    return (
      <Dialog open={dialogState} onClose={dialogClose}>
        <DialogTitle>Edit Your Room</DialogTitle>
        <DialogContent>

          <form onSubmit={e => submit(e)}>
            <TextField label="Room Name" onChange={e => handleChange(e)} value={userInput}></TextField>
            <TextField label="Amount of Words" onChange={e => handleChangeNumber(e)} value={numberOfWords} type='number'></TextField>
            <Button variant="contained" color="primary" onClick={e => submit(e)}>
              Submit
            </Button>
          </form>

        </DialogContent>
      </Dialog>
    )
  }

  const wordsMap = () => {
      let listWords = words.map( (word, index) => {
        return (
        <ListItem key={index} button className={classes.nested}>
        <ListItemText primary={word} />
        </ListItem>
      )})
      return listWords
  }


  return (
      <>
      <EditDialog setRoomName={setRoomName} setNumWords={setNumWords} numWords={numWords}></EditDialog>
      <ListItem button onClick={handleClick}>
        <ListItemIcon>
        <Button onClick={e => {dialogOpen(e)}}>
        <EditIcon></EditIcon>
        </Button>
        </ListItemIcon>
        <ListItemText primary={roomName} />
        <ListItemText primary={numWords} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {wordsMap()}
        </List>
      </Collapse>
      </>
  );
}
