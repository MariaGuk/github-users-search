import React from 'react';

import { counterAfterThousand } from 'utils/counterAfterThousand';
import { dateConverter } from 'utils/dateConverter';
import { StyledAvatar, Container, SocialInfo, InfoContainer, StyledIcon, StyledLink, StyledName, StyledInfo } from './styled';

import followers from "icons/followers.png"
import following from "icons/following.png"

const UserMainInfo = ({ userInfo }) => {
  return (
    <Container>
      <StyledAvatar src={userInfo?.avatar_url} alt='avatar' />
      <StyledName>{userInfo?.name} </StyledName>
      <StyledLink href={userInfo?.html_url} target="_blank">{userInfo?.login}
      </StyledLink>
      <StyledInfo>Created at - {dateConverter(userInfo?.created_at)}</StyledInfo>
      <SocialInfo>
        <InfoContainer>
          <StyledIcon src={followers} width='22px' height='14px' />
          <p>{counterAfterThousand(userInfo?.followers)} followers</p>
        </InfoContainer>
        <InfoContainer>
          <StyledIcon src={following} width='16px' height='16px' />
          <p>{counterAfterThousand(userInfo?.following)} following</p>
        </InfoContainer>
      </SocialInfo>
    </Container >
  )
};

export default UserMainInfo;