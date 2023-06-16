import React, { useState, useEffect } from 'react';
import { Routes, Route, NavLink, useParams } from 'react-router-dom';

import { getOrganizationById } from '../../services/organizations';

import ApplicationsView from '../applications-view/applications-view.component';
import RolesView from '../roles-view/roles-view.component';
import UsersView from '../users-view/users-view.component';
import Loader from '../loader/loader.component';

const OrganizationView = ({ setCrumbs, organization }) => {
  const params = useParams();
  const [selectedOrganization, setSelectedOrganization] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setCrumbs([
      {
        path: '/',
        label: 'Organizations',
      },
      {
        path: '/1/applications',
        label: 'Selected Organization',
      },
    ]);

    const getOrganization = async () => {
      const response = await getOrganizationById(params.organizationId);
      setSelectedOrganization(response);
      setLoading(false);
    };
    getOrganization();
  }, []);

  return (
    <div className="bg-white rounded shadow-md overflow-visible">
      <h3 className="font-semibold text-xl px-4 py-5 text-gray-600">
        {selectedOrganization.name}
      </h3>
      <div className="flex items-center">
        <NavLink
          to={'/' + selectedOrganization.id + '/applications'}
          className={({ isActive }) =>
            'text-lg px-6 py-3 border-b-2 cursor-pointer font-semibold' +
            (isActive
              ? ' border-cst-lavender-800 text-cst-lavender-800'
              : ' border-gray-400 text-cst-text-gray-800')
          }
        >
          Applications
        </NavLink>
        <NavLink
          to={'/' + selectedOrganization.id + '/roles'}
          className={({ isActive }) =>
            'text-lg px-6 py-3 border-b-2 cursor-pointer font-semibold' +
            (isActive
              ? ' border-cst-lavender-800 text-cst-lavender-800'
              : ' border-gray-400 text-cst-text-gray-800')
          }
        >
          Roles
        </NavLink>
        <NavLink
          to={'/' + selectedOrganization.id + '/users'}
          className={({ isActive }) =>
            'text-lg px-6 py-3 border-b-2 cursor-pointer font-semibold' +
            (isActive
              ? ' border-cst-lavender-800 text-cst-lavender-800'
              : ' border-gray-400 text-cst-text-gray-800')
          }
        >
          Users
        </NavLink>
        <div className="text-lg py-3 justify-stretch grow border-b-2 border-gray-400">
          &nbsp;
        </div>
      </div>

      {loading ? (
        <Loader />
      ) : (
        <Routes>
          <Route
            path="/applications"
            element={<ApplicationsView organization={selectedOrganization} />}
          />
          <Route path="/roles" element={<RolesView />} />
          <Route path="/users" element={<UsersView />} />
        </Routes>
      )}
    </div>
  );
};

export default OrganizationView;
