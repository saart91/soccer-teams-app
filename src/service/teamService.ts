import { get } from './httpService';

export interface Team {
  TeamId: number;
  TeamName: string;
  Team: {
    Address: string;
    Website: string;
    Founded: number;
    WikipediaLogoUrl: string;
  };
}

export const fetchTeams = async (): Promise<Team[]> => {
  const data = await get('/SeasonTeams/1');
  return data;
};

export const getTeamById = async (id: string) => {
  const data = await fetchTeams();
  return data.find((team) => team.TeamId.toString() === id);
};
