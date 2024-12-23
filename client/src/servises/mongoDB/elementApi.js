import { apiClient } from './apiClient';

// Elements

export const fetchElements = async params => {
  const { cluster } = params;
  const { data } = await apiClient.get(`/elements?cluster=${cluster}`);
  return data;
};

export const addElement = async element => {
  const { data } = await apiClient.post('/elements', element);
  return data;
};

export const updateElement = async ({ _id, ...element }) => {
  const { data } = await apiClient.patch(`/elements/${_id}`, element);
  return data;
};

export const deleteElement = async id => {
  const { data } = await apiClient.delete(`/elements/${id}`);
  return data;
};
