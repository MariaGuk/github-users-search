import React from 'react'

import RepositoryCard from 'components/RepositoryCard';

const UserRepositories = ({ id, name, description, html_url }) => (
  <RepositoryCard id={id} name={name} description={description} html_url={html_url} />
);

export default UserRepositories;