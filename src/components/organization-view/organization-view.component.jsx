import React, { useState, useEffect } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';

import ApplicationsView from '../applications-view/applications-view.component';
import RolesView from '../roles-view/roles-view.component';
import UsersView from '../users-view/users-view.component';

const OrganizationView = ({ setCrumbs }) => {
  const organizationId = 1;

  useEffect(() => {
    setCrumbs([
      {
        path: '/',
        label: 'Organizations',
      },
      {
        path: '/1',
        label: 'Selected Organization',
      },
    ]);
  }, []);

  return (
    <div className="bg-white rounded shadow-md overflow-auto">
      <h3 className="font-semibold text-xl px-4 pt-4 text-gray-600">
        Selected Organization
      </h3>
      <div className="flex items-center">
        <NavLink
          to={'/' + organizationId + '/applications'}
          className={({ isActive }) =>
            'text-lg px-6 py-3 border-b-2 border-gray-400 cursor-pointer font-semibold text-cst-text-gray-800' +
            (isActive ? ' border-cst-lavender-800 text-cst-lavender-800' : '')
          }
        >
          Applications
        </NavLink>
        <NavLink
          to={'/' + organizationId + '/roles'}
          className="text-lg px-6 py-3 border-b-2 border-gray-400 cursor-pointer font-semibold text-cst-text-gray-800"
        >
          Roles
        </NavLink>
        <NavLink
          to={'/' + organizationId + '/users'}
          className="text-lg px-6 py-3 border-b-2 border-gray-400 cursor-pointer font-semibold text-cst-text-gray-800"
        >
          Users
        </NavLink>
        <div className="text-lg py-3 justify-stretch grow border-b-2 border-gray-400">
          &nbsp;
        </div>
      </div>

      <Routes>
        <Route path="/applications" element={<ApplicationsView />} />
        <Route path="/roles" element={<RolesView />} />
        <Route path="/users" element={<UsersView />} />
      </Routes>
    </div>
  );
};

export default OrganizationView;
