import React from 'react';

const OrganizationItemDesktop = ({ isInEditMode }) => {
  return isInEditMode ? <h1></h1> : <h2></h2>;
};

export default OrganizationItemDesktop;
