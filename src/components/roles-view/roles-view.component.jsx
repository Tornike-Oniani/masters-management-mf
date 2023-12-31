import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateTitle } from '../../redux/headerSlice';

import { getRoles } from '../../services/roles';
import { getAllPermissions } from '../../services/permissions';
import { getApplications } from '../../services/applications';

import RolePermissionItem from '../role-permission-item/role-permission-item.component';
import MenuIcon from '../../assets/menu.svg';
import CloseIcon from '../../assets/cross.svg';

const RolesView = ({ organization }) => {
  const dispatch = useDispatch();
  const [roles, setRoles] = useState([]);
  const [applications, setApplications] = useState([]);
  const [selectedApplication, setSelectedApplication] = useState('');
  const [permissions, setPermissions] = useState([]);
  const [selectedRole, setSelectedRole] = useState({});
  const [selectedPermissions, setSelectedPermissions] = useState([]);
  const [filter, setFilter] = useState('');
  const [rolesExpanded, setRolesExpanded] = useState(false);
  const [roleAddFormVisible, setRoleAddFormVisible] = useState(false);

  const rolePermissions = permissions.map((p) => {
    return {
      ...p,
      assigned: selectedPermissions.some((p1) => p1 === p.id),
    };
  });

  useEffect(() => {
    dispatch(updateTitle('Manage Roles'));
    const fetchData = async () => {
      const fRoles = await getRoles(organization.id);
      const apps = await getApplications(organization.id);
      const fApplications = [
        {
          id: '-1',
          name: 'All',
        },
        ...apps.map((app) => {
          return {
            id: app.id,
            name: app.name,
          };
        }),
      ];
      setRoles(fRoles);
      setSelectedRole(fRoles[0]);
      setSelectedPermissions([...fRoles[0].permissions]);
      setApplications(fApplications);
      setSelectedApplication(fApplications[0]);
      setPermissions(await getAllPermissions());
    };
    fetchData();
  }, []);

  const handleSelectRole = (event) => {
    const id = event.target.getAttribute('role-id');
    setSelectedRole(roles[roles.findIndex((r) => r.id === id)]);
    setSelectedPermissions(
      roles[roles.findIndex((r) => r.id === id)].permissions
    );
    console.log(rolePermissions);
  };

  const handleSelectApplication = (event) => {
    const index = applications.findIndex(
      (app) => app.id === event.target.value
    );
    setSelectedApplication(applications[index]);
  };

  const handleAssign = (id, checked) => {
    if (checked) {
      setSelectedPermissions([id, ...selectedPermissions]);
    } else {
      const index = selectedPermissions.findIndex((p) => p === id);
      const arrCopy = [...selectedPermissions];
      arrCopy.splice(index, 1);
      setSelectedPermissions(arrCopy);
    }
  };

  const handleSearch = (event) => {
    setFilter(event.target.value);
  };

  const scopedRolePermissions = rolePermissions.filter((permission) => {
    if (selectedApplication.name === 'All') {
      return true;
    }

    return permission.application.name === selectedApplication.name;
  });
  const filteredRolePermissions = rolePermissions.filter((permission) =>
    permission.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
  );

  return (
    <div>
      <div className="flex relative">
        <div className="flex-col bg-gray-100 p-4 hidden md:flex">
          <input
            type="text"
            placeholder="Search role"
            className="text-input rounded mb-3"
          />
          <button
            className={
              'btn-primary mb-3 ' + (roleAddFormVisible ? 'hidden' : '')
            }
            onClick={() => setRoleAddFormVisible(true)}
          >
            New Role
          </button>

          <div
            className={
              'flex flex-col mb-3 ' + (roleAddFormVisible ? '' : 'hidden')
            }
          >
            <input
              type="text"
              className="text-input mb-1"
              placeholder="Role name"
            />
            <button
              className="btn-primary"
              onClick={() => setRoleAddFormVisible(false)}
            >
              Add role
            </button>
          </div>

          {roles.map((role) => {
            return (
              <div
                key={role.name}
                role-id={role.id}
                className={
                  'px-3 py-3 hover:bg-gray-200 cursor-pointer rounded' +
                  (selectedRole.name === role.name ? ' bg-gray-200' : '')
                }
                onClick={handleSelectRole}
              >
                {role.name}
              </div>
            );
          })}
        </div>
        <div
          className={
            'bg-gray-100 flex flex-col md:hidden ' +
            (rolesExpanded ? 'absolute h-full w-full' : '')
          }
        >
          <div
            className={'p-2 cursor-pointer ' + (rolesExpanded ? 'hidden' : '')}
            onClick={() => setRolesExpanded(true)}
          >
            <MenuIcon className="block w-7 h-7 fill-gray-500" />
          </div>
          <div
            className={
              'p-2 cursor-pointer self-end ' + (rolesExpanded ? '' : 'hidden')
            }
            onClick={() => setRolesExpanded(false)}
          >
            <CloseIcon className="block w-7 h-7 fill-gray-500" />
          </div>
          <div className={'flex flex-col ' + (rolesExpanded ? '' : 'hidden')}>
            <input
              type="text"
              placeholder="Search role"
              className="text-input rounded mb-3"
            />
            <button
              className={
                'btn-primary mb-3 ' + (roleAddFormVisible ? 'hidden' : '')
              }
              onClick={() => setRoleAddFormVisible(true)}
            >
              New Role
            </button>

            <div
              className={
                'flex flex-col mb-3 ' + (roleAddFormVisible ? '' : 'hidden')
              }
            >
              <input
                type="text"
                className="text-input mb-1"
                placeholder="Role name"
              />
              <button
                className="btn-primary"
                onClick={() => setRoleAddFormVisible(false)}
              >
                Add role
              </button>
            </div>

            {roles.map((role) => {
              return (
                <div
                  key={role.name}
                  role-id={role.id}
                  className={
                    'px-3 py-3 hover:bg-gray-200 cursor-pointer rounded' +
                    (selectedRole.name === role.name ? ' bg-gray-200' : '')
                  }
                  onClick={handleSelectRole}
                >
                  {role.name}
                </div>
              );
            })}
          </div>
        </div>
        <div className=""></div>
        <div className="w-full flex flex-col p-4">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center p-3">
            <div className="flex items-center mb-2 md:m-0">
              <span className="block mr-2 font-bold text-cst-text-gray-800">
                View:{' '}
              </span>
              <select
                name="applications"
                id="applications"
                className="px-3 py-2 border border-gray-500 bg-white rounded"
                onChange={handleSelectApplication}
              >
                {applications.map((app) => {
                  return (
                    <option value={app.id} key={app.id}>
                      {app.name}
                    </option>
                  );
                })}
              </select>
            </div>
            <input
              type="text"
              className="text-input"
              placeholder="Search permission"
              onChange={handleSearch}
            />
          </div>
          <div className="">
            <table className="w-full">
              <thead className="border-b border-gray-300 font-semibold">
                <tr>
                  <td className="border-r border-gray-300 p-3">Name</td>
                  <td className="border-r border-gray-300 p-3">Application</td>
                  <td className="p-3">Assigned?</td>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-300">
                {scopedRolePermissions.map((permission) => {
                  return (
                    <RolePermissionItem
                      key={permission.id}
                      id={permission.id}
                      name={permission.name}
                      value={permission.value}
                      application={permission.application.name}
                      assigned={permission.assigned}
                      assignAction={handleAssign}
                    />
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RolesView;
