import React from 'react';
import { NavLink } from 'react-router-dom';

const Breadcrumbs = ({ crumbs }) => {
  return (
    <div className="text-base text-cst-text-gray-800">
      {crumbs.map((crumb, index) => {
        return (
          <span key={index}>
            <NavLink
              to={crumb.path}
              className="text-base text-cst-text-gray-800 tracking-wide"
            >
              {crumb.label}
            </NavLink>
            {index < crumbs.length - 1 ? ' / ' : ''}
          </span>
        );
      })}
    </div>
  );
};

export default Breadcrumbs;
