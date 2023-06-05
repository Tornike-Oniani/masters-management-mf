import React from 'react';

import DynamicList from '../dynamic-list/dynamic-list.component';
import UserItem from '../user-item/user-item.component';

const UsersView = () => {
  const columns = [
    { accessor: 'id', label: '#' },
    { accessor: 'firstName', label: 'First Name' },
    { accessor: 'lastName', label: 'Last Name' },
    { accessor: 'email', label: 'Email' },
    { accessor: 'roles', label: 'Roles' },
    { accessor: 'actions', label: 'Actions' },
  ];
  const rows = [
    {
      id: 1,
      firstName: 'fHevW',
      lastName: 'tDOihyc',
      email: 'xnvDWvnt@hotmail.com',
      roles: ['User'],
    },
    {
      id: 2,
      firstName: 'JUpEZ',
      lastName: 'siPQMAB',
      email: 'oLcByIHB@gmail.com',
      roles: ['Admin'],
    },
    {
      id: 3,
      firstName: 'euAGm',
      lastName: 'EIpXnah',
      email: 'GQTmjczT@hotmail.com',
      roles: ['Guest', 'Admin'],
    },
    {
      id: 4,
      firstName: 'uShTO',
      lastName: 'eIzXMUc',
      email: 'UblAVmjG@gmail.com',
      roles: ['User', 'User'],
    },
    {
      id: 5,
      firstName: 'vRZid',
      lastName: 'uDjOqZM',
      email: 'IVOubicX@example.com',
      roles: ['User', 'Admin', 'Guest'],
    },
    {
      id: 6,
      firstName: 'DAbyY',
      lastName: 'kCmYKca',
      email: 'DcfFEaVt@gmail.com',
      roles: ['User', 'Admin', 'User'],
    },
    {
      id: 7,
      firstName: 'ZnjkM',
      lastName: 'kQwyzjR',
      email: 'JGxrmsiQ@example.com',
      roles: ['Admin'],
    },
    {
      id: 8,
      firstName: 'MocBI',
      lastName: 'uTrTpyJ',
      email: 'gihrIrhg@yahoo.com',
      roles: ['Admin', 'Admin', 'Guest'],
    },
    {
      id: 9,
      firstName: 'dMQHA',
      lastName: 'AwNaizu',
      email: 'gaDOesTK@gmail.com',
      roles: ['Guest'],
    },
    {
      id: 10,
      firstName: 'JnNuc',
      lastName: 'LQjCKQC',
      email: 'PsLmUMEE@example.com',
      roles: ['Admin'],
    },
    {
      id: 11,
      firstName: 'FaLUQ',
      lastName: 'xomneAR',
      email: 'vKWtEgbP@hotmail.com',
      roles: ['Admin', 'Guest', 'Admin'],
    },
    {
      id: 12,
      firstName: 'nOMnH',
      lastName: 'fECMDsm',
      email: 'heVpChxw@hotmail.com',
      roles: ['User'],
    },
    {
      id: 13,
      firstName: 'uchyn',
      lastName: 'DuTmyIm',
      email: 'GzTbOLxE@example.com',
      roles: ['Admin', 'User'],
    },
    {
      id: 14,
      firstName: 'RhFOi',
      lastName: 'tvahKtb',
      email: 'JmtIirfg@hotmail.com',
      roles: ['User'],
    },
    {
      id: 15,
      firstName: 'Icibq',
      lastName: 'oSdDypX',
      email: 'arJNBwdb@hotmail.com',
      roles: ['Admin', 'User', 'Guest'],
    },
    {
      id: 16,
      firstName: 'aufzM',
      lastName: 'OtGZqWr',
      email: 'yxCvnsNW@gmail.com',
      roles: ['User', 'Guest'],
    },
    {
      id: 17,
      firstName: 'RpErf',
      lastName: 'QWJDeeU',
      email: 'kwSHINOd@example.com',
      roles: ['User', 'Admin', 'Guest'],
    },
    {
      id: 18,
      firstName: 'jExKK',
      lastName: 'CnjYvOB',
      email: 'GrYKrbqp@hotmail.com',
      roles: ['Guest', 'Guest', 'User'],
    },
    {
      id: 19,
      firstName: 'gldMt',
      lastName: 'quNSrmS',
      email: 'REOJFjNS@hotmail.com',
      roles: ['Guest', 'Guest', 'User'],
    },
    {
      id: 20,
      firstName: 'hoXYQ',
      lastName: 'ddaiLyv',
      email: 'WeIYjTHW@gmail.com',
      roles: ['User'],
    },
    {
      id: 21,
      firstName: 'UgzbI',
      lastName: 'USBWwZD',
      email: 'wFImQXaG@example.com',
      roles: ['Admin', 'Admin'],
    },
    {
      id: 22,
      firstName: 'VezNL',
      lastName: 'McBmtEV',
      email: 'BNdIRjqk@gmail.com',
      roles: ['Guest', 'Guest'],
    },
    {
      id: 23,
      firstName: 'nctUI',
      lastName: 'NCrMdlm',
      email: 'QxnPenFk@yahoo.com',
      roles: ['Admin', 'User'],
    },
    {
      id: 24,
      firstName: 'aaqqr',
      lastName: 'LsMIils',
      email: 'xnrClVna@hotmail.com',
      roles: ['User', 'Admin', 'Admin'],
    },
    {
      id: 25,
      firstName: 'FNkBN',
      lastName: 'BxGPwUN',
      email: 'KmCVChqh@gmail.com',
      roles: ['Guest', 'Admin'],
    },
    {
      id: 26,
      firstName: 'ZRaAx',
      lastName: 'cBxwfFZ',
      email: 'WokuJTli@hotmail.com',
      roles: ['Guest', 'Guest', 'Guest'],
    },
    {
      id: 27,
      firstName: 'qaPMM',
      lastName: 'mhnjWoJ',
      email: 'jExCGsuK@hotmail.com',
      roles: ['User'],
    },
    {
      id: 28,
      firstName: 'fjgGx',
      lastName: 'hIbchgG',
      email: 'dSBFlPTj@gmail.com',
      roles: ['Guest', 'Admin', 'User'],
    },
    {
      id: 29,
      firstName: 'wcpJE',
      lastName: 'apKdseT',
      email: 'yDALgdTX@hotmail.com',
      roles: ['User'],
    },
    {
      id: 30,
      firstName: 'IONze',
      lastName: 'AYYjUsq',
      email: 'CeVRfHFj@yahoo.com',
      roles: ['User', 'Admin', 'User'],
    },
    {
      id: 31,
      firstName: 'tnJJF',
      lastName: 'hgltRAK',
      email: 'ujhNohwv@gmail.com',
      roles: ['Admin', 'Guest', 'Guest'],
    },
    {
      id: 32,
      firstName: 'mbzsV',
      lastName: 'LesKXaN',
      email: 'bQtMORUH@gmail.com',
      roles: ['Admin', 'Guest', 'Admin'],
    },
    {
      id: 33,
      firstName: 'gOggL',
      lastName: 'eleRrpp',
      email: 'HeBafqpK@yahoo.com',
      roles: ['Admin'],
    },
    {
      id: 34,
      firstName: 'njBUw',
      lastName: 'XDNSsAJ',
      email: 'nwSetWzL@yahoo.com',
      roles: ['User', 'User', 'User'],
    },
    {
      id: 35,
      firstName: 'mEyMp',
      lastName: 'bKyUCFa',
      email: 'pwrbjtBU@hotmail.com',
      roles: ['Admin'],
    },
  ];
  return (
    <div className="">
      <div className="flex items-center justify-between p-4">
        <button className="btn-primary">Add new User</button>
        <input type="text" placeholder="Search users" className="text-input" />
      </div>
      <DynamicList columns={columns} rows={rows} ItemComponent={UserItem} />
    </div>
  );
};

export default UsersView;
