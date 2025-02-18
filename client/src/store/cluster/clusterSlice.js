import { createSlice, isAnyOf, combineReducers } from '@reduxjs/toolkit';

import * as TNK from './clusterThunks';

const thunkArr = [
  // Clusters
  TNK.fetchClustersThunk,
  TNK.getClusterByIdThunk,
  TNK.addClusterThunk,
  TNK.updateClusterThunk,
  TNK.deleteClusterThunk,
  // Groups
  TNK.fetchGroupsThunk,
  TNK.addGroupThunk,
  TNK.updateGroupThunk,
  TNK.deleteGroupThunk,
  // Subjects
  TNK.fetchSubjectsThunk,
  TNK.addSubjectThunk,
  TNK.updateSubjectThunk,
  TNK.deleteSubjectThunk,
];
const fn = type => thunkArr.map(el => el[type]);

// Clusters
const handleFetchClusters = (_, action) => {
  return action.payload.result.clusters;
};

const handleGetClusterById = (state, action) => {
  const { cluster } = action.payload.result;
  const index = state.findIndex(el => el._id === cluster._id);
  state.splice(index, 1, cluster);
};

const handleAddCluster = (state, action) => {
  state.unshift(action.payload.result.cluster);
};

const handleUpdateCluster = (state, action) => {
  const { cluster } = action.payload.result;
  const index = state.findIndex(el => el._id === cluster._id);
  state.splice(index, 1, cluster);
};

const handleDeleteCluster = (state, action) => {
  const { id } = action.payload.result;
  return state.filter(el => !id.includes(el._id));
};

// Groups
const handleFetchGroups = (_, action) => {
  return action.payload.result.groups;
};

const handleAddGroup = (state, action) => {
  state.unshift(action.payload.result.group);
};

const handleUpdateGroup = (state, action) => {
  const { group } = action.payload.result;
  const index = state.findIndex(el => el._id === group._id);
  state.splice(index, 1, group);
};

const handleDeleteGroup = (state, action) => {
  const { group } = action.payload.result;
  return state.filter(el => el._id !== group._id);
};

// Subjects
const handleFetchSubjects = (_, action) => {
  return action.payload.result.subjects;
};

const handleAddSubject = (state, action) => {
  state.unshift(action.payload.result.subject);
};

const handleUpdateSubject = (state, action) => {
  const { subject } = action.payload.result;
  const index = state.findIndex(el => el._id === subject._id);
  state.splice(index, 1, subject);
};

const handleDeleteSubject = (state, action) => {
  const { subject } = action.payload.result;
  return state.filter(el => el._id !== subject._id);
};

// fulfilled items slice
const clusterItemsSlice = createSlice({
  name: 'items',
  initialState: [],
  reducers: {
    cleanCluster: () => [],
  },
  extraReducers: builder => {
    builder
      .addCase(TNK.fetchClustersThunk.fulfilled, handleFetchClusters)
      .addCase(TNK.getClusterByIdThunk.fulfilled, handleGetClusterById)
      .addCase(TNK.addClusterThunk.fulfilled, handleAddCluster)
      .addCase(TNK.updateClusterThunk.fulfilled, handleUpdateCluster)
      .addCase(TNK.deleteClusterThunk.fulfilled, handleDeleteCluster);
  },
});

// fulfilled Groups slice
const clusterGroupsSlice = createSlice({
  name: 'groups',
  initialState: [],
  reducers: {
    cleanGroup: () => [],
  },
  extraReducers: builder => {
    builder
      .addCase(TNK.fetchGroupsThunk.fulfilled, handleFetchGroups)
      .addCase(TNK.addGroupThunk.fulfilled, handleAddGroup)
      .addCase(TNK.updateGroupThunk.fulfilled, handleUpdateGroup)
      .addCase(TNK.deleteGroupThunk.fulfilled, handleDeleteGroup);
  },
});

// fulfilled Subjects slice
const clusterSubjectsSlice = createSlice({
  name: 'subjects',
  initialState: [],
  reducers: {
    cleanSubject: () => [],
  },
  extraReducers: builder => {
    builder
      .addCase(TNK.fetchSubjectsThunk.fulfilled, handleFetchSubjects)
      .addCase(TNK.addSubjectThunk.fulfilled, handleAddSubject)
      .addCase(TNK.updateSubjectThunk.fulfilled, handleUpdateSubject)
      .addCase(TNK.deleteSubjectThunk.fulfilled, handleDeleteSubject);
  },
});

// fulfilled active slice
const clusterActiveSlice = createSlice({
  name: 'active',
  initialState: null,
  reducers: {
    setActiveCluster: (_, action) => action.payload,
  },
});

// fulfilled filter slice
const clusterFilterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    setClusterFilter: (_, action) => action.payload,
  },
});

// fulfilled select slice
const clusterSelectSlice = createSlice({
  name: 'select',
  initialState: '',
  reducers: {
    setClusterSelect: (_, action) => action.payload,
  },
});

// fulfilled trash slice
const clusterTrashSlice = createSlice({
  name: 'trash',
  initialState: [],
  reducers: {
    setClusterTrash: (state, { payload }) => {
      const isInTrash = state.find(el => el._id === payload._id);
      if (isInTrash) {
        return state.filter(el => el._id !== payload._id);
      } else {
        state.push(payload);
      }
    },
    emptyClusterTrash: () => [],
  },
});

// loading slice
const clusterIsLoadingSlice = createSlice({
  name: 'isLoading',
  initialState: false,
  extraReducers: builder => {
    builder
      .addMatcher(isAnyOf(...fn('pending')), () => true)
      .addMatcher(isAnyOf(...fn('fulfilled')), () => false)
      .addMatcher(isAnyOf(...fn('rejected')), () => false);
  },
});

// error slice
const clusterErrorSlice = createSlice({
  name: 'error',
  initialState: false,
  extraReducers: builder => {
    builder
      .addMatcher(isAnyOf(...fn('pending')), () => false)
      .addMatcher(isAnyOf(...fn('fulfilled')), () => false)
      .addMatcher(isAnyOf(...fn('rejected')), (_, action) => action.payload);
  },
});

export const clustersReducer = combineReducers({
  items: clusterItemsSlice.reducer,
  groups: clusterGroupsSlice.reducer,
  subjects: clusterSubjectsSlice.reducer,
  active: clusterActiveSlice.reducer,
  filter: clusterFilterSlice.reducer,
  select: clusterSelectSlice.reducer,
  trash: clusterTrashSlice.reducer,

  isLoading: clusterIsLoadingSlice.reducer,
  error: clusterErrorSlice.reducer,
});

export const { cleanCluster } = clusterItemsSlice.actions;
export const { cleanGroup } = clusterGroupsSlice.actions;
export const { setActiveCluster } = clusterActiveSlice.actions;
export const { setClusterFilter } = clusterFilterSlice.actions;
export const { setClusterSelect } = clusterSelectSlice.actions;
export const { setClusterTrash, emptyClusterTrash } = clusterTrashSlice.actions;
