import React from 'react'

import { useAppContext } from 'AppContext';
import { Container, MainInfo } from './styled';

import MainPage from './MainPage'
import Loading from 'components/Loading';

const MainPageContainer = () => {
  const { isSearchingRepos, isSearchingUser, userInfo, repositories, isUserError } = useAppContext();

  return (
    <Container>
      <MainInfo>
        {isSearchingRepos && isSearchingUser ?
          <Loading /> :
          <MainPage
            userInfo={userInfo}
            repositories={repositories}
            isUserError={isUserError}
          />}
      </MainInfo>
    </Container>
  );
}

export default MainPageContainer;