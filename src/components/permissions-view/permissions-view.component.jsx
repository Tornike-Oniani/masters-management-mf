import React, { useState, useEffect, useRef } from 'react';

import Popup from '../popup/popup.component';

import EditIcon from '../../assets/pencil-icon.svg';

const PermissionsView = ({ setCrumbs }) => {
  const addPermissionRef = useRef(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [permissionSearch, setPermissionSearch] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [currentEditPermission, setCurrentEditPermission] = useState({
    id: 0,
    name: '',
    value: '',
  });

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
      {
        path: '/1/applications/1',
        label: 'Selected Application',
      },
    ]);

    if (showAddForm) {
      addPermissionRef.current.focus();
    }
  }, [showAddForm]);

  const handleSearch = (event) => {
    setPermissionSearch(event.target.value);
  };

  const handleEdit = (permission) => (event) => {
    setCurrentEditPermission({ ...permission });
    console.log(currentEditPermission);
    setShowPopup(true);
  };

  const permissions = [
    {
      id: 1,
      name: 'Create article',
      value: 'article_create',
    },
    {
      id: 2,
      name: 'Read article',
      value: 'article_read',
    },
    {
      id: 3,
      name: 'Update article',
      value: 'article_update',
    },
    {
      id: 4,
      name: 'Delete article',
      value: 'article_delete',
    },
    {
      id: 5,
      name: 'Create bookmark',
      value: 'bookmark_create',
    },
    {
      id: 6,
      name: 'Read bookmark',
      value: 'bookmark_read',
    },
    {
      id: 7,
      name: 'Update bookmark',
      value: 'bookmark_update',
    },
    {
      id: 8,
      name: 'Delete bookmark',
      value: 'bookmark_delete',
    },
  ];

  const filteredPermissions = permissions.filter((permission) =>
    permission.name
      .toLocaleLowerCase()
      .includes(permissionSearch.toLocaleLowerCase())
  );

  return (
    <div className="bg-white rounded shadow-md overflow-visible p-4">
      <Popup
        isVisible={showPopup}
        setIsVisible={setShowPopup}
        title="Edit permission"
        label="Please change the fields you whish to update."
      >
        <div className="flex flex-col">
          <label htmlFor="name" className="font-base font-semibold mb-1">
            Name*
          </label>
          <input
            type="text"
            id="name"
            placeholder="Permission name"
            value={currentEditPermission.name}
            className="text-input mb-3"
          />
          <label htmlFor="value" className="font-base font-semibold mb-1">
            Value*
          </label>
          <input
            type="text"
            id="value"
            placeholder="Permission value"
            value={currentEditPermission.value}
            className="text-input mb-3"
          />
          <div className="flex w-full">
            <button className="btn-primary flex-1 mr-3">Save</button>
            <button className="btn-primary flex-1">Cancel</button>
          </div>
        </div>
      </Popup>
      <h3 className="font-semibold text-xl text-gray-600">
        Selected Application
      </h3>

      <h2 className="text-lg text-gray-600 py-4">Permissions:</h2>

      <div className="flex justify-between mb-3">
        <div className="">
          <button
            className={'btn-primary ' + (showAddForm ? 'hidden' : '')}
            onClick={() => {
              setShowAddForm(true);
            }}
          >
            Add Permission
          </button>
          <div className={'flex items-center ' + (showAddForm ? '' : 'hidden')}>
            <input
              ref={addPermissionRef}
              type="text"
              className="text-input mr-2"
              placeholder="Permission name"
            />
            <input
              type="text"
              className="text-input mr-2"
              placeholder="Permission value"
            />
            <button
              className="btn-primary w-24 mr-2"
              onClick={() => setShowAddForm(false)}
            >
              Save
            </button>
            <button
              className="btn-primary w-24"
              onClick={() => setShowAddForm(false)}
            >
              Cancel
            </button>
          </div>
        </div>

        <input
          type="text"
          placeholder="Search permission"
          id="searchPermission"
          className="text-input"
          onChange={handleSearch}
        />
      </div>
      <div className="bg-gray-100 p-4 pb-0 flex flex-wrap">
        {filteredPermissions.map((permission) => {
          return (
            <div
              key={permission.id}
              className="px-3 py-2 text-lg text-white bg-cst-cyan-800 hover:bg-cst-cyan-900 rounded mr-3 mb-3 flex items-center"
            >
              <span className="block mr-2">{permission.name}</span>
              <div
                className="border rounded border-white p-1 cursor-pointer"
                onClick={handleEdit(permission)}
              >
                <EditIcon className="fill-white" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PermissionsView;
