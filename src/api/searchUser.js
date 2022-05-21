import axios from 'axios';
import { useMutation } from "react-query";

import { client } from 'App';
import { API_URL } from 'constants/routes';
import { QUERY_KEYS } from 'constants/queryKeys';

const searchUser = async (userName) => {
  const { data } = await axios.get(`${API_URL}/users/${userName}`, userName);
  return data;
};

export const useSearchUser = () => {
  return useMutation(searchUser, {
    onSuccess: () => {
      client.invalidateQueries(QUERY_KEYS.user)
    }
  })
};