import React, { useState, useEffect, useRef } from 'react';

import {
  getOrganizations,
  addOrganization,
  updateOrganization,
} from '../../services/organizations';

import OrganizationItem from '../../components/organization-item/organization-item.component';
import DynamicList from '../../components/dynamic-list/dynamic-list.component';
import Loader from '../loader/loader.component';

const Organizations = ({ setCrumbs }) => {
  // Filter text to search organizations
  const [filter, setFilter] = useState('');
  // Determines whether "Add Organization" button is visible or input + Save and Cancel buttons
  const [addFormIsVisible, setAddFromIsVisible] = useState(false);
  // List of organizations to display
  const [organizations, setOrganizations] = useState([]);
  // Used to display loader while async fetching is being finished
  const [loading, setLoading] = useState(true);
  // Organization name used for adding new organization
  const [organizationName, setOrganizationName] = useState('');

  useEffect(() => {
    // Set current navigation breadcrumbs
    setCrumbs([
      {
        path: '/',
        label: 'Organizations',
      },
    ]);

    // Fetch data from API
    const fetchOrganizations = async () => {
      setOrganizations(await getOrganizations());
      setLoading(false);
    };
    fetchOrganizations();
  }, []);

  // Handles search of organizations in table
  const handleSearch = (event) => {
    setFilter(event.target.value);
  };

  // Handles submit of adding new organization
  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await addOrganization(organizationName);

    setOrganizations([response, ...organizations]);
    setOrganizationName('');
    setAddFromIsVisible(false);
  };

  const updateOrganization = (id, name) => {
    const orgCopy = [...organizations];
    const orgIndex = orgCopy.findIndex((org) => org.id === id);
    orgCopy[orgIndex].name = name;
    setOrganizations(orgCopy);
  };

  // Column headers for dynamic list to show
  const columns = [
    { accessor: 'id', label: '#' },
    { accessor: 'name', label: 'Name' },
    { accessor: 'roles', label: 'Roles' },
    { accessor: 'applications', label: 'Applications' },
    { accessor: 'users', label: 'Users' },
    { accessor: 'actions', label: 'Actions' },
  ];

  return (
    <div className="bg-white rounded shadow-md overflow-auto">
      <h3 className="font-semibold text-xl px-4 py-5 text-gray-600">
        Available Organizations
      </h3>
      <div className="flex justify-between p-4">
        <div className="">
          <button
            className={'btn-primary ' + (addFormIsVisible ? 'hidden' : '')}
            onClick={() => {
              setAddFromIsVisible(true);
            }}
          >
            Add Organization
          </button>
          <form
            onSubmit={handleSubmit}
            className={
              'flex items-center ' + (addFormIsVisible ? '' : 'hidden')
            }
          >
            <input
              type="text"
              className="text-input mr-2"
              placeholder="Organization name"
              value={organizationName}
              onChange={(event) => setOrganizationName(event.target.value)}
            />
            <input
              type="submit"
              className="btn-primary w-24 mr-2"
              value="Save"
            />
            <button
              type="button"
              className="btn-primary w-24"
              onClick={() => {
                setOrganizationName('');
                setAddFromIsVisible(false);
              }}
            >
              Cancel
            </button>
          </form>
        </div>
        <input
          type="text"
          placeholder="Search organization"
          id="searchOrganization"
          className="text-input"
          onChange={handleSearch}
        />
      </div>
      {loading ? (
        <Loader label="Loading organizations" />
      ) : (
        <DynamicList
          columns={columns}
          rows={organizations}
          filter={filter}
          updateAction={updateOrganization}
          ItemComponent={OrganizationItem}
        />
      )}
    </div>
  );
};

export default Organizations;
