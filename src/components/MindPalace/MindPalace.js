import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Room from './Room'
import List from '@material-ui/core/List'
import ListSubheader from '@material-ui/core/ListSubheader'

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

export default function MindPalace() {
  const classes = useStyles();


  return (
    <List
    component="nav"
    aria-labelledby="nested-list-subheader"
    subheader={
        <>
      <ListSubheader component="div" id="nested-list-subheader">
          Your Mind Palace 
      </ListSubheader>

        </>
    }
    className={classes.root}
  >
    <Room></Room>
    </List>
  );
}
