import { useEffect, useState } from 'react';
import { getTeamById, Team } from '../service/teamService';
import { getPlayersByTeamId, Player } from '../service/playerService';

export const useTeamInfo = (id: string) => {
  const [team, setTeam] = useState<Team | null>(null);
  const [players, setPlayers] = useState<Player[] | null>(null);

  useEffect(() => {
    setTeam(null);
    setPlayers(null);

    Promise.all([getTeamById(id), getPlayersByTeamId(id)]).then(
      ([team, players]) => {
        setTeam(team!); // assume team always exists
        setPlayers(players);
      }
    );
  }, [id]);

  return {
    players,
    team,
  };
};
