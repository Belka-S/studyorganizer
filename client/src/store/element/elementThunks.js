import { createAsyncThunk } from '@reduxjs/toolkit';

import * as API from 'servises/mongoDB/elementApi';

// Elements

export const fetchElementsThunk = createAsyncThunk(
  'items/fetchElements',
  async (params, thunkAPI) => {
    try {
      return await API.fetchElements(params);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const addElementThunk = createAsyncThunk(
  'items/addElement',
  async (element, thunkAPI) => {
    try {
      return await API.addElement(element);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const updateElementThunk = createAsyncThunk(
  'items/updateElement',
  async (element, thunkAPI) => {
    try {
      return await API.updateElement(element);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const deleteElementThunk = createAsyncThunk(
  'items/deleteElement',
  async (id, thunkAPI) => {
    try {
      return await API.deleteElement(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
