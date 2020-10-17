import axios from 'axios';

axios.defaults.baseURL = 'https://api.sportsdata.io/v3/soccer/scores/json';
axios.defaults.params = {};
axios.defaults.params['key'] = 'dd4dc76ad2a44d7e953115fec40d79a8';

export const get = async (url: string) => {
  const resp = await axios.get(url);
  return resp.data;
};
