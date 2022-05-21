import React from 'react'
import Loader from 'react-loader-spinner';

import { Container } from './styled';

const Loading = () => {
  return (
    <Container>
      <Loader
        type="Oval"
        color='#0064EB'
        width={150}
        height={150}
        timeout={14000}
      />
    </Container>
  )
};

export default Loading;