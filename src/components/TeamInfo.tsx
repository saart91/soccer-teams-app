import React, { FC } from 'react';
import { useParams } from 'react-router';
import {
  Avatar,
  Box,
  createStyles,
  Link,
  Theme,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PlayersTable from './PlayersTable';
import LoadingSpinner from './LoadingSpinner';
import { useTeamInfo } from '../hooks/useTeamInfo';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    avatar: {
      width: theme.spacing(20),
      height: theme.spacing(20),
    },
    title: {
      display: 'flex',
      alignItems: 'center',
    },
  })
);

interface ParamsType {
  id: string;
}

const TeamInfo: FC = () => {
  const { id } = useParams<ParamsType>();
  const { team, players } = useTeamInfo(id);
  const classes = useStyles();

  return !team || !players ? (
    <LoadingSpinner />
  ) : (
    <>
      <Box m={'auto'} className={classes.title}>
        <Avatar
          variant={'square'}
          src={team.Team.WikipediaLogoUrl}
          className={classes.avatar}
        />
        <Typography component={'h1'} variant={'h1'}>
          {team.TeamName}
        </Typography>
      </Box>
      <Typography>{team.Team.Founded}</Typography>
      <Link href={team.Team.Website}>{team.Team.Website}</Link>
      <Typography>{team.Team.Address}</Typography>
      <PlayersTable players={players} />
    </>
  );
};

export default TeamInfo;
