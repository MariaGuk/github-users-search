import React from 'react'
import { useNavigate } from 'react-router-dom';

import  PageNotFound  from './PageNotFound';

const PageNotFoundContainer = () => {
  const navigate = useNavigate();

  return (
    <PageNotFound navigate={navigate} />
  )
}

export default PageNotFoundContainer;