import styled from 'styled-components';

const CardContainer = styled('div')({
  width: '876px',
  maxWidth: '100%',
  marginBottom: '30px',
  background: '#FFFFFF',
  borderRadius: '6px',
});

const Information = styled('div')({
  padding: '24px 32px',
});

const StyledLink = styled('a')({
  fontSize: '24px',
  fontWeight: '500',
  lineHeight: '28px',
  color: '#0064EB',
});

const StyledDescription = styled('p')({
  fontSize: '16px',
  marginTop: '16px'
});


export { CardContainer, Information, StyledLink, StyledDescription, };