import { get } from './httpService';

export interface Player {
  CommonName: string;
  Jersey: number;
  PlayerId: number;
}

export const getPlayersByTeamId = (id: string): Promise<Player[]> => {
  return get(`/PlayersByTeam/${id}`);
};
