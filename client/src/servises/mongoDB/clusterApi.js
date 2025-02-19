import { apiClient } from './apiClient';

// Clusters
export const fetchClusters = async params => {
  const path = !params
    ? '/clusters'
    : Object.entries(params).reduce((acc, el) => {
        acc += `${el[0]}=${el[1]}`;
        return acc;
      }, '/clusters?');
  const { data } = await apiClient.get(path);
  return data;
};

export const getClusterById = async id => {
  const { data } = await apiClient.get(`/clusters/${id}`);
  return data;
};

export const addCluster = async cluster => {
  const { data } = await apiClient.post('/clusters', cluster);
  return data;
};

export const updateCluster = async ({ _id, ...cluster }) => {
  const { data } = await apiClient.patch(`/clusters/${_id}`, cluster);
  return data;
};

export const deleteCluster = async id => {
  const { data } = await apiClient.delete(`/clusters/${id}`);
  return data;
};

// Groups
export const fetchGroups = async () => {
  const { data } = await apiClient.get('/clustergroups');
  return data;
};

export const addGroup = async group => {
  const { data } = await apiClient.post('/clustergroups', group);
  return data;
};

export const updateGroup = async ({ _id, ...group }) => {
  const { data } = await apiClient.put(`/clustergroups/${_id}`, group);
  return data;
};

export const deleteGroup = async id => {
  const { data } = await apiClient.delete(`/clustergroups/${id}`);
  return data;
};

// Subjects
export const fetchSubjects = async () => {
  const { data } = await apiClient.get('/clustersubjects');
  return data;
};

export const addSubject = async subject => {
  const { data } = await apiClient.post('/clustersubjects', subject);
  return data;
};

export const updateSubject = async ({ _id, ...subject }) => {
  const { data } = await apiClient.patch(`/clustersubjects/${_id}`, subject);
  return data;
};

export const deleteSubject = async id => {
  const { data } = await apiClient.delete(`/clustersubjects/${id}`);
  return data;
};
