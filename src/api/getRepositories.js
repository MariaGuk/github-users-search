import axios from 'axios';
import { useMutation } from 'react-query';

import { client } from 'App';
import { API_URL } from 'constants/routes';
import { QUERY_KEYS } from 'constants/queryKeys';

const getRepositories = async ({ userName, page }) => {
  const { data } = await axios.get(`${API_URL}/users/${userName}/repos?per_page=4&page=${page}`,);
  return data;
};

export const useGetRepositories = () => {
  return useMutation(getRepositories, {
    onSuccess: () => {
      client.invalidateQueries(QUERY_KEYS.repositories)
    }
  });
};
