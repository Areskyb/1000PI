import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(number,sound,word) {
  return { number, sound, word};
}

const rows = [
  createData(0,'Z, S',"zero sounds like s"),
  createData(1,'t, d', 't has 1 downstroke(d sounds like t)'),
  createData(2, 'n', 'has two downstrokes'),
  createData(3, 'M', 'has 3 downtrokes'),
  createData(4, 'R', 'is similar as a mirror 4R'),
  createData(5, 'L', '50 in roman'),
  createData(6, 'G, J', "looks like 6, sounds like J"),
  createData(7, 'K', "two sevens mirrored, sounds like c"),
  createData(8, 'f, V', 'f looks like 8 when is hand written'),
  createData(9, 'p,b', ' p is the mirror of 9'),
];

export default function CheatSheet() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table" size="small">
        <TableHead>
          <TableRow>
            <TableCell >Numbers</TableCell>
            <TableCell align="right">Asociated sound</TableCell>
            <TableCell align="right">REMEMBER</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.number}>
              <TableCell component="th" scope="row">
                {row.number}
              </TableCell>
              <TableCell align="right">{row.sound}</TableCell>
              <TableCell align="right">{row.word}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
