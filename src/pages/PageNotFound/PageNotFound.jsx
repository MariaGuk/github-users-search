import React from 'react';

import { Container, Header, StyledLink } from './styled';

const PageNotFound = ({ navigate }) => {
  return (
    <Container>
      <Header>404 not found</Header>
      <StyledLink type="submit" onClick={() => navigate('/')}>
        Back to the main page
      </StyledLink>
    </Container>
  )
};

export default PageNotFound;