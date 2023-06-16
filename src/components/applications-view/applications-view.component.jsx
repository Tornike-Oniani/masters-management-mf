import React, { useState, useEffect } from 'react';

import DynamicList from '../dynamic-list/dynamic-list.component';
import ApplicationItem from '../application-item/application-item.component';
import Popup from '../popup/popup.component';

import { getApplications, addApplication } from '../../services/applications';

import KeyIcon from '../../assets/key.svg';

const ApplicationsView = ({ organization }) => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newApplicationName, setNewApplicationName] = useState('');
  const [newApplicationKey, setNewApplicationKey] = useState('');

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

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await addApplication(
      organization.id,
      newApplicationName,
      newApplicationKey
    );

    setApplications([response, ...applications]);
    setNewApplicationName('');
    setNewApplicationKey('');
    setIsPopupVisible(false);
  };

  return (
    <div className="">
      <Popup
        isVisible={isPopupVisible}
        setIsVisible={setIsPopupVisible}
        title={'Add new application in "' + organization.name + '"'}
        label="Please fill in all the mandatory fields."
      >
        <form onSubmit={handleSubmit} className="flex flex-col">
          <label htmlFor="name" className="font-base font-semibold mb-1">
            Name*
          </label>
          <input
            type="text"
            id="name"
            placeholder="Application name"
            className="text-input mb-3"
            value={newApplicationName}
            onChange={(event) => setNewApplicationName(event.target.value)}
          />
          <label htmlFor="key" className="font-base font-semibold mb-1">
            Key*
          </label>
          <input
            type="text"
            id="key"
            placeholder="Access key"
            className="text-input mb-3"
            value={newApplicationKey}
            onChange={(event) => setNewApplicationKey(event.target.value)}
          />
          <div className="flex w-full">
            <input
              type="submit"
              className="btn-primary flex-1 mr-3"
              value="Save"
            />
            <button type="button" className="btn-primary flex-1">
              Cancel
            </button>
          </div>
        </form>
      </Popup>
      <div className="flex items-center justify-between p-4">
        <button className="btn-primary" onClick={() => setIsPopupVisible(true)}>
          Add new Application
        </button>
        <input
          type="text"
          className="text-input"
          placeholder="Search application"
        />
      </div>
      <DynamicList
        columns={columns}
        rows={applications}
        ItemComponent={ApplicationItem}
        updateAction={updateApplication}
        loading={loading}
      />
    </div>
  );
};

export default ApplicationsView;
