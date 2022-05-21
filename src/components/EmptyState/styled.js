import styled from 'styled-components';

const Container = styled('div')({
  backgroundColor: '#E5E5E5',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  margin: '0 auto',
  marginTop: '190px',
  '@media(max-width: 870px)': {
    margin: '110px 0',
  },
});

const Description = styled('p')({
  fontSize: '22px',
  lineHeight: '140%',
  textAlign: 'center',
  color: '#808080',
  width: '100%',
});

export { Container, Description };