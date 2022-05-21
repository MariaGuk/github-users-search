import React from 'react'

import { Container, Description } from './styled';

const EmptyState = ({ icon, infoMessage, alt, marginBottom, maxWidth }) => {
  return (
    <Container>
      <img src={icon} alt={alt}
        style={{ marginBottom: `${marginBottom}` }}
      />
      <Description style={{ maxWidth: `${maxWidth}` }}>
        {infoMessage}
      </Description>
    </Container>
  )
};

export default EmptyState;