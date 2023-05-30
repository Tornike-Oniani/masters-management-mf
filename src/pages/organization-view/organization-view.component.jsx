import React, { useState } from 'react';

import DynamicList from '../../components/dynamic-list/dynamic-list.component';
import RolesList from '../../components/roles-list/roles-list.component';

const OrganizationView = () => {
  const [activeTab, setActiveTab] = useState('Roles');

  const renderTabContent = () => {
    if (activeTab === 'Applications') {
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
      return <DynamicList columns={columns} rows={rows} />;
    }
    if (activeTab === 'Roles') {
      return (
        <div>
          <div className="flex items-center justify-between p-4">
            <button className="bg-purple-800 hover:bg-purple-900 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Add new role
            </button>
            <input
              type="text"
              placeholder="Search roles"
              className="appearance-none border border-gray-500 rounded py-2 px-3 text-gray-500 focus:outline-none focus:shadow-outline mr-3"
            />
          </div>
          <RolesList />
        </div>
      );
    }
    if (activeTab === 'Users') {
      const columns = [
        { accessor: 'id', label: '#' },
        { accessor: 'firstName', label: 'First Name' },
        { accessor: 'lastName', label: 'Last Name' },
        { accessor: 'email', label: 'Email' },
        { accessor: 'actions', label: 'Actions' },
      ];
      const rows = [
        {
          id: 369,
          firstName: 'fHevW',
          lastName: 'tDOihyc',
          email: 'xnvDWvnt@hotmail.com',
          roles: ['User'],
        },
        {
          id: 467,
          firstName: 'JUpEZ',
          lastName: 'siPQMAB',
          email: 'oLcByIHB@gmail.com',
          roles: ['Admin'],
        },
        {
          id: 189,
          firstName: 'euAGm',
          lastName: 'EIpXnah',
          email: 'GQTmjczT@hotmail.com',
          roles: ['Guest', 'Admin'],
        },
        {
          id: 380,
          firstName: 'uShTO',
          lastName: 'eIzXMUc',
          email: 'UblAVmjG@gmail.com',
          roles: ['User', 'User'],
        },
        {
          id: 259,
          firstName: 'vRZid',
          lastName: 'uDjOqZM',
          email: 'IVOubicX@example.com',
          roles: ['User', 'Admin', 'Guest'],
        },
        {
          id: 733,
          firstName: 'DAbyY',
          lastName: 'kCmYKca',
          email: 'DcfFEaVt@gmail.com',
          roles: ['User', 'Admin', 'User'],
        },
        {
          id: 124,
          firstName: 'ZnjkM',
          lastName: 'kQwyzjR',
          email: 'JGxrmsiQ@example.com',
          roles: ['Admin'],
        },
        {
          id: 949,
          firstName: 'MocBI',
          lastName: 'uTrTpyJ',
          email: 'gihrIrhg@yahoo.com',
          roles: ['Admin', 'Admin', 'Guest'],
        },
        {
          id: 949,
          firstName: 'dMQHA',
          lastName: 'AwNaizu',
          email: 'gaDOesTK@gmail.com',
          roles: ['Guest'],
        },
        {
          id: 706,
          firstName: 'JnNuc',
          lastName: 'LQjCKQC',
          email: 'PsLmUMEE@example.com',
          roles: ['Admin'],
        },
        {
          id: 168,
          firstName: 'FaLUQ',
          lastName: 'xomneAR',
          email: 'vKWtEgbP@hotmail.com',
          roles: ['Admin', 'Guest', 'Admin'],
        },
        {
          id: 183,
          firstName: 'nOMnH',
          lastName: 'fECMDsm',
          email: 'heVpChxw@hotmail.com',
          roles: ['User'],
        },
        {
          id: 183,
          firstName: 'uchyn',
          lastName: 'DuTmyIm',
          email: 'GzTbOLxE@example.com',
          roles: ['Admin', 'User'],
        },
        {
          id: 258,
          firstName: 'RhFOi',
          lastName: 'tvahKtb',
          email: 'JmtIirfg@hotmail.com',
          roles: ['User'],
        },
        {
          id: 474,
          firstName: 'Icibq',
          lastName: 'oSdDypX',
          email: 'arJNBwdb@hotmail.com',
          roles: ['Admin', 'User', 'Guest'],
        },
        {
          id: 683,
          firstName: 'aufzM',
          lastName: 'OtGZqWr',
          email: 'yxCvnsNW@gmail.com',
          roles: ['User', 'Guest'],
        },
        {
          id: 258,
          firstName: 'RpErf',
          lastName: 'QWJDeeU',
          email: 'kwSHINOd@example.com',
          roles: ['User', 'Admin', 'Guest'],
        },
        {
          id: 700,
          firstName: 'jExKK',
          lastName: 'CnjYvOB',
          email: 'GrYKrbqp@hotmail.com',
          roles: ['Guest', 'Guest', 'User'],
        },
        {
          id: 461,
          firstName: 'gldMt',
          lastName: 'quNSrmS',
          email: 'REOJFjNS@hotmail.com',
          roles: ['Guest', 'Guest', 'User'],
        },
        {
          id: 829,
          firstName: 'hoXYQ',
          lastName: 'ddaiLyv',
          email: 'WeIYjTHW@gmail.com',
          roles: ['User'],
        },
        {
          id: 45,
          firstName: 'UgzbI',
          lastName: 'USBWwZD',
          email: 'wFImQXaG@example.com',
          roles: ['Admin', 'Admin'],
        },
        {
          id: 996,
          firstName: 'VezNL',
          lastName: 'McBmtEV',
          email: 'BNdIRjqk@gmail.com',
          roles: ['Guest', 'Guest'],
        },
        {
          id: 367,
          firstName: 'nctUI',
          lastName: 'NCrMdlm',
          email: 'QxnPenFk@yahoo.com',
          roles: ['Admin', 'User'],
        },
        {
          id: 26,
          firstName: 'aaqqr',
          lastName: 'LsMIils',
          email: 'xnrClVna@hotmail.com',
          roles: ['User', 'Admin', 'Admin'],
        },
        {
          id: 650,
          firstName: 'FNkBN',
          lastName: 'BxGPwUN',
          email: 'KmCVChqh@gmail.com',
          roles: ['Guest', 'Admin'],
        },
        {
          id: 925,
          firstName: 'ZRaAx',
          lastName: 'cBxwfFZ',
          email: 'WokuJTli@hotmail.com',
          roles: ['Guest', 'Guest', 'Guest'],
        },
        {
          id: 376,
          firstName: 'qaPMM',
          lastName: 'mhnjWoJ',
          email: 'jExCGsuK@hotmail.com',
          roles: ['User'],
        },
        {
          id: 438,
          firstName: 'fjgGx',
          lastName: 'hIbchgG',
          email: 'dSBFlPTj@gmail.com',
          roles: ['Guest', 'Admin', 'User'],
        },
        {
          id: 767,
          firstName: 'wcpJE',
          lastName: 'apKdseT',
          email: 'yDALgdTX@hotmail.com',
          roles: ['User'],
        },
        {
          id: 613,
          firstName: 'IONze',
          lastName: 'AYYjUsq',
          email: 'CeVRfHFj@yahoo.com',
          roles: ['User', 'Admin', 'User'],
        },
        {
          id: 345,
          firstName: 'tnJJF',
          lastName: 'hgltRAK',
          email: 'ujhNohwv@gmail.com',
          roles: ['Admin', 'Guest', 'Guest'],
        },
        {
          id: 274,
          firstName: 'mbzsV',
          lastName: 'LesKXaN',
          email: 'bQtMORUH@gmail.com',
          roles: ['Admin', 'Guest', 'Admin'],
        },
        {
          id: 429,
          firstName: 'gOggL',
          lastName: 'eleRrpp',
          email: 'HeBafqpK@yahoo.com',
          roles: ['Admin'],
        },
        {
          id: 723,
          firstName: 'njBUw',
          lastName: 'XDNSsAJ',
          email: 'nwSetWzL@yahoo.com',
          roles: ['User', 'User', 'User'],
        },
        {
          id: 626,
          firstName: 'mEyMp',
          lastName: 'bKyUCFa',
          email: 'pwrbjtBU@hotmail.com',
          roles: ['Admin'],
        },
      ];
      return <DynamicList columns={columns} rows={rows} />;
    }
  };

  return (
    // Gray background
    <div className="w-full min-h-screen max-h-full bg-gray-200">
      <div className="w-4/5 m-auto">
        {/* Header with title, breadcrumbs, search, add */}
        <div className="flex justify-between py-8">
          {/* Title & breadcrumbs */}
          <div className="">
            <h3 className="font-bold text-2xl text-gray-600">
              Manage Applications
            </h3>
            <span className="text-base text-gray-600">
              Organizations / Applications
            </span>
          </div>
        </div>
        <div className="bg-white rounded shadow-md overflow-auto">
          <h3 className="p-8 text-xl font-semibold text-gray-600">
            Selected Organization
          </h3>
          <div className="flex items-center">
            <div
              className={
                'text-lg px-6 py-3 border-b-2 border-gray-400 cursor-pointer font-semibold text-gray-600' +
                (activeTab === 'Applications'
                  ? ' border-purple-800 text-purple-800'
                  : '')
              }
              onClick={() => setActiveTab('Applications')}
            >
              Applications
            </div>
            <div
              className={
                'text-lg px-6 py-3 border-b-2 border-gray-400 cursor-pointer font-semibold text-gray-600' +
                (activeTab === 'Roles'
                  ? ' border-purple-800 text-purple-800'
                  : '')
              }
              onClick={() => setActiveTab('Roles')}
            >
              Roles
            </div>
            <div
              className={
                'text-lg px-6 py-3 border-b-2 border-gray-400 cursor-pointer font-semibold text-gray-600' +
                (activeTab === 'Users'
                  ? ' border-purple-800 text-purple-800'
                  : '')
              }
              onClick={() => setActiveTab('Users')}
            >
              Users
            </div>
            <div className="text-lg py-3 justify-stretch grow border-b-2 border-gray-400">
              &nbsp;
            </div>
          </div>
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
};

export default OrganizationView;
