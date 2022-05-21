import React from 'react';

import { useAppContext } from 'AppContext';
import { ListContainer, Header, ReposInfoContainer } from './styled';

import Loading from 'components/Loading';
import Pagination from 'components/Pagination';
import UserRepositories from './UserRepositories';

const UserRepositoriesContainer = ({ repositories, userInfo }) => {
  const { isSearchingRepos, page, handlePageChange } = useAppContext();

  const PER_PAGE = 4;
  const totalRepos = userInfo?.public_repos;

  const startIndex = (page - 1) * PER_PAGE + 1;
  const endIndex = Math.min(page * PER_PAGE, totalRepos);
  const pageCount = Math.ceil(totalRepos / PER_PAGE);
  const pluralCheck = totalRepos > 1 ? 'items' : 'item';

  return (
    <ReposInfoContainer>
      {isSearchingRepos ?
        <Loading /> :
        <>
          <ListContainer>
            <Header>Repositories ({totalRepos})</Header>
            {repositories?.map(({ id, name, html_url, description }) => (
              <UserRepositories
                key={id}
                name={name}
                html_url={html_url}
                description={description}
              />
            ))
            }
          </ListContainer>
          <Pagination
            page={page}
            endIndex={endIndex}
            pageCount={pageCount}
            totalRepos={totalRepos}
            startIndex={startIndex}
            pluralCheck={pluralCheck}
            handlePageChange={handlePageChange}
          />
        </>
      }
    </ReposInfoContainer>
  )
};

export default UserRepositoriesContainer;