import React, { FC } from 'react';
import TeamsTable from './TeamsTable';
import LoadingSpinner from './LoadingSpinner';
import { useTeams } from '../hooks/useTeams';

const Teams: FC = () => {
  const teams = useTeams();

  return !teams ? <LoadingSpinner /> : <TeamsTable teams={teams} />;
};

export default Teams;
