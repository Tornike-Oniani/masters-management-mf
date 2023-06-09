import axios from 'axios';

import { BASE_URL } from './config';

export async function getOrganizations() {
  const response = await axios.get(`${BASE_URL}/organization`);
  return response.data.organizations;
}

export async function addOrganization(name) {
  const response = await axios.post(`${BASE_URL}/organization`, { name });

  return response.data.organization;
}

export async function updateOrganization(id, name) {
  const response = await axios.patch(`${BASE_URL}/organization/${id}`, {
    name,
  });

  return response.data.organization;
}

export async function getOrganizationById(id) {
  const response = await axios.get(`${BASE_URL}/organization/${id}`);

  return response.data.organization;
}
