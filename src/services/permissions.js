import axios from 'axios';

import { BASE_URL } from './config';

export async function getPermissionsForApplication(appId) {
  const response = await axios.get(
    `${BASE_URL}/application/${appId}/permission`
  );
  return response.data.permissions;
}

export async function getAllPermissions() {
  const response = await axios.get(`${BASE_URL}/permission`);
  return response.data.permissions;
}

export async function addPermission(appId, name, value) {
  const response = await axios.post(
    `${BASE_URL}/application/${appId}/permission`,
    { name, value }
  );
  return response.data.permission;
}

export async function updatePermission(id, name, value) {
  const response = await axios.patch(`${BASE_URL}/permission/${id}`, {
    name,
    value,
  });
  return response.data.permission;
}
