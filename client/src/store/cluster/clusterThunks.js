import { createAsyncThunk } from '@reduxjs/toolkit';

import * as API from 'servises/mongoDB/clusterApi';

// Clusters
export const fetchClustersThunk = createAsyncThunk(
  'items/fetchClusters',
  async (query, thunkAPI) => {
    try {
      return await API.fetchClusters(query);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const getClusterByIdThunk = createAsyncThunk(
  'items/getCluster',
  async (id, thunkAPI) => {
    try {
      return await API.getClusterById(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const addClusterThunk = createAsyncThunk(
  'items/addCluster',
  async (cluster, thunkAPI) => {
    try {
      return await API.addCluster(cluster);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const updateClusterThunk = createAsyncThunk(
  'items/updateCluster',
  async (cluster, thunkAPI) => {
    try {
      return await API.updateCluster(cluster);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const deleteClusterThunk = createAsyncThunk(
  'items/deleteCluster',
  async (id, thunkAPI) => {
    try {
      return await API.deleteCluster(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

// Groups
export const fetchGroupsThunk = createAsyncThunk(
  'items/fetchGroups',
  async (query, thunkAPI) => {
    try {
      return await API.fetchGroups(query);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const addGroupThunk = createAsyncThunk(
  'items/addGroup',
  async (group, thunkAPI) => {
    try {
      return await API.addGroup(group);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const updateGroupThunk = createAsyncThunk(
  'items/updateGroup',
  async (group, thunkAPI) => {
    try {
      return await API.updateGroup(group);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const deleteGroupThunk = createAsyncThunk(
  'items/deleteGroup',
  async (id, thunkAPI) => {
    try {
      return await API.deleteGroup(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

// Subjects
export const fetchSubjectsThunk = createAsyncThunk(
  'items/fetchSubjects',
  async (_, thunkAPI) => {
    try {
      return await API.fetchSubjects();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const addSubjectThunk = createAsyncThunk(
  'items/addSubject',
  async (subject, thunkAPI) => {
    try {
      return await API.addSubject(subject);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const updateSubjectThunk = createAsyncThunk(
  'items/updateSubject',
  async (subject, thunkAPI) => {
    try {
      return await API.updateSubject(subject);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const deleteSubjectThunk = createAsyncThunk(
  'items/deleteSubject',
  async (id, thunkAPI) => {
    try {
      return await API.deleteSubject(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
