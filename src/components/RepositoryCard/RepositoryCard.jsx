import React from 'react';

import { CardContainer, Information, StyledLink, StyledDescription } from './styled'

const RepositoryCard = ({ id, name, description, html_url }) => {
  return (
    <CardContainer key={id}>
      <Information>
        <StyledLink href={html_url} target="_blank">{name}</StyledLink>
        <StyledDescription>{description ? description : null}</StyledDescription>
      </Information>
    </CardContainer>
  );
}

export default RepositoryCard;