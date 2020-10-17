import React, { FC } from 'react';
import { useHistory } from 'react-router';
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
import { Team } from '../service/teamService';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  row: {
    cursor: 'pointer',
  },
});

interface TeamsTableProps {
  teams: Team[];
}

const TeamsTable: FC<TeamsTableProps> = ({ teams }: TeamsTableProps) => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Founded</TableCell>
            <TableCell>Address</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {teams.map((team) => (
            <TableRow
              hover
              key={team.TeamId}
              className={classes.row}
              onClick={() => history.push(`/teams/${team.TeamId}`)}
            >
              <TableCell>{team.TeamName}</TableCell>
              <TableCell>{team.Team.Founded}</TableCell>
              <TableCell>{team.Team.Address}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TeamsTable;
