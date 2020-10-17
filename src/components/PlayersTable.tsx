import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@material-ui/core';
import { Player } from '../service/playerService';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

interface PlayersTableProps {
  players: Player[];
}

const PlayersTable: FC<PlayersTableProps> = ({
  players,
}: PlayersTableProps) => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Shirt No.</TableCell>
            <TableCell>Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {players.map((player) => (
            <TableRow hover key={player.PlayerId}>
              <TableCell>{player.Jersey}</TableCell>
              <TableCell>{player.CommonName}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default PlayersTable;
