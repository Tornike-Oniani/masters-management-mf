import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getApplicationById } from '../../services/applications';
import {
  getPermissions,
  addPermission,
  updatePermission,
} from '../../services/permissions';

import PermissionItem from '../permission-item/permission-item.component';
import Loader from '../loader/loader.component';
import EditIcon from '../../assets/pencil-icon.svg';

const PermissionsView = ({ setCrumbs, application }) => {
  const params = useParams();
  const [selectedApplication, setSelectedApplication] = useState({});
  const [permissions, setPermissions] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [permissionSearch, setPermissionSearch] = useState('');
  const [newPermissionName, setNewPermissionName] = useState('');
  const [newPermissionValue, setNewPermissionValue] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPermissions = async () => {
      const app = await getApplicationById(params.applicationId);
      setSelectedApplication(app);
      setPermissions(await getPermissions(app.id));
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
          label: app.name,
        },
      ]);
      setLoading(false);
    };
    fetchPermissions();
  }, []);

  const handleSearch = (event) => {
    setPermissionSearch(event.target.value);
  };

  const handleUpdatePermission = async (id, name, value) => {
    await updatePermission(id, name, value);
    const permissionsCopy = [...permissions];
    const perIndex = permissionsCopy.findIndex((per) => per.id === id);
    permissionsCopy[perIndex].name = name;
    permissionsCopy[perIndex].value = value;
    setPermissions(permissionsCopy);
  };

  const handleCreate = async () => {
    const newPermission = await addPermission(
      selectedApplication.id,
      newPermissionName,
      newPermissionValue
    );
    setPermissions([newPermission, ...permissions]);
    setShowAddForm(false);
    setNewPermissionName('');
    setNewPermissionValue('');
  };

  const filteredPermissions = permissions.filter((permission) =>
    permission.name
      .toLocaleLowerCase()
      .includes(permissionSearch.toLocaleLowerCase())
  );

  return (
    <div className="bg-white rounded shadow-md overflow-visible p-4">
      <h3 className="font-semibold text-xl text-gray-600">
        {selectedApplication.name}
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
              type="text"
              className="text-input mr-2"
              placeholder="Permission name"
              value={newPermissionName}
              onChange={(event) => setNewPermissionName(event.target.value)}
            />
            <input
              type="text"
              className="text-input mr-2"
              placeholder="Permission value"
              value={newPermissionValue}
              onChange={(event) => setNewPermissionValue(event.target.value)}
            />
            <button className="btn-primary w-24 mr-2" onClick={handleCreate}>
              Save
            </button>
            <button
              className="btn-primary w-24"
              onClick={() => {
                setShowAddForm(false);
                setNewPermissionName('');
                setNewPermissionValue('');
              }}
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
            <PermissionItem
              key={permission.id}
              id={permission.id}
              name={permission.name}
              value={permission.value}
              updateAction={handleUpdatePermission}
            />
          );
        })}
      </div>
    </div>
  );
};

export default PermissionsView;
