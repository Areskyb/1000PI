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

export default function Room() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const [dialogState,setDialogState] = React.useState(false);
  const [roomName,setRoomName] = React.useState('New Room');

  const handleClick = () => {
    setOpen(!open);
  };

  const dialogOpen = () => {
    setDialogState(true);
  }

  const dialogClose = () => {
    setDialogState(false);
  }

  function EditDialog({setRoomName}) {
    const [userInput,setUserInput] = React.useState('');
    const handleChange = (event) => {
        setUserInput(event.target.value)
    }
    const submit = (event) => {
      if(userInput !== ''){
        setRoomName(userInput);
        setDialogState(false);
      }
      
      event.preventDefault();
    }

    return (
      <Dialog open={dialogState} onClose={dialogClose}>
        <DialogTitle>Edit Your Room</DialogTitle>
        <DialogContent>
          <form onSubmit={e => submit(e)}>
            <TextField label="Room Name" onChange={e =>handleChange(e)} value={userInput}></TextField>
          </form>
        </DialogContent>
      </Dialog>
    )
  }


  return (
      <>
      <EditDialog setRoomName={setRoomName}></EditDialog>
      <ListItem button onClick={handleClick}>
        <ListItemIcon>
        <Button onClick={e => {dialogOpen(e)}}>
        <EditIcon></EditIcon>
        </Button>
        </ListItemIcon>
        <ListItemText primary={roomName} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Starred" />
          </ListItem>
        </List>
      </Collapse>
      </>
  );
}
