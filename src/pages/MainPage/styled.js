import styled from 'styled-components';

const Container = styled('div')({
  backgroundColor: '#E5E5E5',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
});

const MainInfo = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
  padding: '28px 58px 0',
  boxSizing: 'border-box',
  '@media(max-width: 870px)': {
    flexDirection: 'column',
    padding: '20px 26px 0'
  },
})


export { Container, MainInfo }