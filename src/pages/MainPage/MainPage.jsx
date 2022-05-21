import React from 'react'

import UserMainInfoContainer from 'components/UserMainInfo';
import UserRepositoriesContainer from 'components/UserRepositories';
import EmptyState from 'components/EmptyState';

import searchLogo from 'icons/start-search-icon.png';
import emptyRepos from 'icons/empty.png';
import notFound from 'icons/user-not-found.png';

const MainPage = ({ userInfo, repositories, isUserError }) => {

  if (isUserError) {
    return <EmptyState icon={notFound} infoMessage='User not found' alt='user' marginBottom='42px' />
  }

  return (
    <>
      {!userInfo ?
        <EmptyState
          icon={searchLogo}
          infoMessage='Start with searching a GitHub user' alt='search'
          marginBottom='46px'
          maxWidth='210px'
        /> :
        <>
          {userInfo &&
            <UserMainInfoContainer userInfo={userInfo} />
          }
          {repositories?.length === 0 ?
            <EmptyState
              icon={emptyRepos}
              infoMessage='Repository list is empty' alt='empty-repos'
              marginBottom='48px'
              maxWidth='244px'
            /> :
            <UserRepositoriesContainer
              repositories={repositories}
              userInfo={userInfo}
            />}
        </>
      }
    </>
  )
}

export default MainPage;