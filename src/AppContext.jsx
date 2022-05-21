import React, { useContext, createContext, useState, useEffect } from 'react';

import { useSearchUser } from 'api/searchUser';
import { useGetRepositories, } from 'api/getRepositories';

const Context = createContext();
export const useAppContext = () => useContext(Context);

const AppContext = ({ children }) => {
  const [page, setPage] = useState(1);
  const [userName, setUserName] = useState('');
  const [currentUser, setCurrentUser] = useState('')

  const { mutateAsync: searchUserMutation, data: userInfo, isLoading: isSearchingUser, isError: isUserError } = useSearchUser();

  const { mutateAsync: getRepositoriesMutation, data: repositories, isLoading: isSearchingRepos } = useGetRepositories();

  const handleChange = (event) => {
    setUserName(event.target.value);
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    searchUserMutation(userName);
  };
  
  const handlePageChange = (pageNumber) => {
    setPage(pageNumber.selected + 1);
  };
  
  useEffect(() => {
    setPage(1);
    setUserName(userName);
    setCurrentUser(userName)
    getRepositoriesMutation({ userName, page });
  }, [userInfo]);

  useEffect(() => {
    getRepositoriesMutation({ userName, page });
  }, [currentUser, page]);

  return (
    <Context.Provider
      value={{
        isSearchingRepos,
        handlePageChange,
        isSearchingUser,
        handleChange,
        handleSubmit,
        repositories,
        isUserError,
        userInfo,
        userName,
        page,
      }}
    >
      {children}
    </Context.Provider>)
}

export default AppContext;