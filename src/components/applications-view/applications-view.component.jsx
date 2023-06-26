import React, { useState, useEffect } from 'react';

import DynamicList from '../dynamic-list/dynamic-list.component';
import ApplicationItem from '../application-item/application-item.component';
import ApplicationAddForm from '../application-item/application-add-form.component';

import { getApplications, addApplication } from '../../services/applications';

const ApplicationsView = ({ organization }) => {
  const [filter, setFilter] = useState('');
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchApplications = async () => {
      setApplications(await getApplications(organization.id));
      setLoading(false);
    };
    fetchApplications();
  }, []);

  const columns = [
    { accessor: 'id', label: '#' },
    { accessor: 'name', label: 'Name' },
    { accessor: 'key', label: 'Access key' },
    { accessor: 'permissions', label: 'Permissions' },
    { accessor: 'actions', label: 'Actions' },
  ];

  const updateApplication = (id, name, key) => {
    const appsCopy = [...applications];
    const appIndex = appsCopy.findIndex((app) => app.id === id);
    appsCopy[appIndex].name = name;
    appsCopy[appIndex].key = key;
    setApplications(appsCopy);
  };

  const handleCreateApplication = async (name, key) => {
    const response = await addApplication(organization.id, name, key);

    setApplications([response, ...applications]);
  };

  return (
    <div className="">
      <div className="flex flex-col p-4 sm:flex-row sm:justify-between">
        <button
          className={
            'btn-primary mb-3 sm:mb-0' + (showCreateForm ? 'hidden' : '')
          }
          onClick={() => setShowCreateForm(true)}
        >
          Add new Application
        </button>
        <input
          type="text"
          className="text-input"
          placeholder="Search application"
          value={filter}
          onChange={(event) => setFilter(event.target.value)}
        />
      </div>
      <DynamicList
        columns={columns}
        rows={applications}
        filter={filter}
        filterBy="name"
        showAdd={showCreateForm}
        setShowAdd={setShowCreateForm}
        ItemComponent={ApplicationItem}
        AddFormComponent={ApplicationAddForm}
        updateAction={updateApplication}
        createAction={handleCreateApplication}
        loading={loading}
      />
    </div>
  );
};

export default ApplicationsView;
