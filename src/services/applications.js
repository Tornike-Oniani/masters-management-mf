import axios from 'axios';

import { BASE_URL } from './config';

export async function getApplications(organizationId) {
  const response = await axios.get(
    `${BASE_URL}/organization/${organizationId}/application`
  );
  return response.data.applications;
}

export async function getApplicationById(id) {
  const response = await axios.get(`${BASE_URL}/application/${id}`);
  return response.data.application;
}

export async function addApplication(organizationId, name, key) {
  const response = await axios.post(
    `${BASE_URL}/organization/${organizationId}/application`,
    { name, key, permissions: 0 }
  );
  return response.data.application;
}

export async function updateApplication(id, name, key) {
  const response = await axios.patch(`${BASE_URL}/application/${id}`, {
    name,
    key,
  });
  return response.data.application;
}
