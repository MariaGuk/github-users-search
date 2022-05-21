import styled from 'styled-components';

const Container = styled('div')({
  backgroundColor: '#E5E5E5',
  backgroundSize: 'cover',
  minHeight: '100vh',
  paddingTop: '170px',
  textAlign: 'center'
});

const Header = styled('h1')({
  display: 'flex',
  justifyContent: 'center',
  letterSpacing: '0.8px',
  marginBottom: '36px',
  color: '#808080',
});

const StyledLink = styled('button')({
  fontSize: '20px',
  padding: '8px 50px',
  border: '2px solid transparent',
  borderRadius: '30px',
  color: '#FFFFFF',
  backgroundColor: '#0075EB',
  '@media(max-width: 870px)': {
    padding: '6px 30px',
    fontSize: '16px'
  },
});

export { Container, Header, StyledLink }