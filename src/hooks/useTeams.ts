import { useEffect, useState } from 'react';
import { fetchTeams, Team } from '../service/teamService';

export const useTeams = () => {
  const [teams, setTeams] = useState<Team[] | null>(null);

  useEffect(() => {
    fetchTeams().then((teams) => setTeams(teams));
  }, []);

  return teams;
};
