import React, { useState, useEffect, useRef } from 'react';

import {
  getOrganizations,
  addOrganization,
  updateOrganization,
} from '../../services/organizations';

import OrganizationItem from '../../components/organization-item/organization-item.component';
import OrganizationAddForm from '../organization-item/organization-add-form.component';
import OrganizationItemVertical from '../organization-item/organization-item-vertical.component';
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

  // Handles submit of adding new organization
  const handleCreateOrganization = async (name) => {
    const response = await addOrganization(name);

    setOrganizations([response, ...organizations]);
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
      <div className="flex flex-col p-4 sm:flex-row sm:justify-between">
        <button
          className={
            'btn-primary mb-3 sm:mb-0 ' + (addFormIsVisible ? 'hidden' : '')
          }
          onClick={() => {
            setAddFromIsVisible(true);
          }}
        >
          Add Organization
        </button>

        <input
          type="text"
          placeholder="Search organization"
          id="searchOrganization"
          className="text-input"
          onChange={(event) => setFilter(event.target.value)}
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
          createAction={handleCreateOrganization}
          ItemComponent={OrganizationItem}
          AddFormComponent={OrganizationAddForm}
          ItemVerticalComponent={OrganizationItemVertical}
          showAdd={addFormIsVisible}
          setShowAdd={setAddFromIsVisible}
        />
      )}
    </div>
  );
};

export default Organizations;
