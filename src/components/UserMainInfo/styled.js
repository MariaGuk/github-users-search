import styled from 'styled-components'

const Container = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  '@media(max-width: 870px)': {
    marginBottom: '20px',
    alignItems: 'center'
  },
});

const StyledAvatar = styled('img')({
  borderRadius: '50%',
  width: '280px',
  maxWidth: '100%',
  marginBottom: '30px',
  alignSelf: 'center',
  marginTop: '12px'
});

const StyledName = styled('p')({
  fontWeight: '600',
  fontSize: '26px',
  lineHeight: '32px',
  marginBottom: '12px',
});

const StyledLink = styled('a')({
  fontSize: '18px',
  lineHeight: '22px',
  color: '#0064EB',

});

const SocialInfo = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginTop: '30px',
  '@media(max-width: 1260px)': {
    flexDirection: 'column',
  },
});

const InfoContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  fontWeight: '400',
  fontSize: '16px',
  '@media(max-width: 1260px)': {
    marginBottom: '10px'
  },
  '@media(max-width: 870px)': {
    marginBottom: '20px'
  },
});

const StyledIcon = styled('img')({
  marginRight: '4px',
  alignItems: 'center',
});

export { Container, StyledAvatar, SocialInfo, InfoContainer, StyledIcon, StyledLink, StyledName };