import styled from 'styled-components';

const ReposInfoContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  margin: '0 auto',
  '@media(max-width: 870px)': {
    margin: '0'
  },
});

const ListContainer = styled('div')({
  paddingLeft: '96px',
  alignItems: 'center',
  '@media(max-width: 870px)': {
    paddingLeft: '0px'
  },
});

const Header = styled('h2')({
  marginBottom: '30px',
  fontWeight: '600',
  fontSize: '32px',
  lineHeight: '130%',
  '@media(max-width: 870px)': {
    fontSize: '24px',
    marginBottom: '20px',
  },
});

export { ReposInfoContainer, ListContainer, Header }