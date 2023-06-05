import React, { useState } from 'react';

import DynamicList from '../dynamic-list/dynamic-list.component';
import ApplicationItem from '../application-item/application-item.component';
import Popup from '../popup/popup.component';

import KeyIcon from '../../assets/key.svg';

const ApplicationsView = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const columns = [
    { accessor: 'id', label: '#' },
    { accessor: 'name', label: 'Name' },
    { accessor: 'permissions', label: 'Permissions' },
    { accessor: 'actions', label: 'Actions' },
  ];
  const rows = [
    {
      id: 1,
      name: 'Application 1',
      permissions: 35,
    },
    {
      id: 2,
      name: 'Application 2',
      permissions: 44,
    },
  ];

  return (
    <div className="">
      <Popup
        isVisible={isPopupVisible}
        setIsVisible={setIsPopupVisible}
        title="Add new application"
        label="Please fill in all the mandatory fields."
      >
        <div className="flex flex-col">
          <label htmlFor="name" className="font-base font-semibold mb-1">
            Name*
          </label>
          <input
            type="text"
            id="name"
            placeholder="Application name"
            className="text-input mb-3"
          />
          <label htmlFor="key" className="font-base font-semibold mb-1">
            Key*
          </label>
          <input
            type="text"
            id="key"
            placeholder="Access key"
            className="text-input mb-3"
          />
          <div className="flex w-full">
            <button className="btn-primary flex-1 mr-3">Save</button>
            <button className="btn-primary flex-1">Cancel</button>
          </div>
        </div>
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
        rows={rows}
        ItemComponent={ApplicationItem}
      />
    </div>
  );
};

export default ApplicationsView;
