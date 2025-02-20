import { Fragment, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import {
  fetchClustersThunk,
  fetchGroupsThunk,
  fetchSubjectsThunk,
} from 'store/cluster/clusterThunks';
import { setActiveCluster, setClusterSelect } from 'store/cluster/clusterSlice';
import { useAuth, useClusters } from 'utils/hooks';
import { scrollOnDomEl } from 'utils/helpers';

import LiGroup from './Li/LiGroup';
import LiCluster from './Li/LiCluster';
import { List } from './ClusterList.styled';

const ClusterList = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const { allClusters, clusterGroups, activeCluster } = useClusters();
  const { clusterTrash, clusterFilter, clusterSelect } = useClusters();

  const [sortByDate, setSortByDate] = useState(false);

  useEffect(() => {
    if (!user.subject || !user.subjectId) return;
    dispatch(setActiveCluster(null));
    // Get Clusters
    dispatch(fetchClustersThunk({ subject: user.subject }))
      .unwrap()
      .then(res => {
        // Get Groups
        const { clusters } = res.result;
        const groups = Array.from(new Set(clusters.map(el => el.group)));
        dispatch(fetchGroupsThunk({ clusterGroup: groups }));
        // Get Subjects
        dispatch(fetchSubjectsThunk())
          .unwrap()
          .then(res => {
            const subject = res.result?.subjects.find(
              ({ _id }) => _id === user.subjectId,
            );
            // Set ClusterSelect
            dispatch(setClusterSelect(subject?.clusterSelect));
            // Set ActiveCluster
            const active = clusters.find(
              ({ _id }) => _id === subject?.activeCluster,
            );
            active && dispatch(setActiveCluster(active));
          });
      });
  }, [dispatch, user]);

  // Scroll on ActiveCluster
  useEffect(() => {
    const activeDomEl = document.getElementById('active-cluster');
    activeDomEl && scrollOnDomEl(activeDomEl);
  }, [activeCluster]);

  // Ger Clusters (filter + selector)
  const getClusters = () => {
    // trash
    const trashId = clusterTrash.map(el => el._id);
    const trashClusters = allClusters.filter(el => trashId.includes(el._id));
    if (clusterSelect.includes('trash')) return trashClusters;
    return allClusters;
  };

  const filtredClusters = getClusters()
    .filter(({ group, title, favorite, checked }) => {
      // filter
      const allFiltred =
        group.toLowerCase().includes(clusterFilter) ||
        title.toLowerCase().includes(clusterFilter);
      // favorite
      const getFavorite = () => {
        if (clusterSelect.some(op => ['favorite', 'unfavorite'].includes(op))) {
          return clusterSelect.includes('favorite')
            ? allFiltred && favorite === true
            : allFiltred && favorite === false;
        } else {
          return allFiltred;
        }
      };
      // checked
      const getCheckedFavorite = () => {
        if (clusterSelect.some(op => ['checked', 'unchecked'].includes(op))) {
          return clusterSelect.includes('checked')
            ? getFavorite() && checked === true
            : getFavorite() && checked === false;
        } else {
          return getFavorite();
        }
      };
      return getCheckedFavorite();
    })
    .sort(
      sortByDate
        ? (a, b) => b.createdAt.localeCompare(a.createdAt)
        : (a, b) => a.title.localeCompare(b.title),
    );

  // Get Groups (filter + selector)
  const allGroupsSet = new Set(clusterGroups.map(el => el.clusterGroup));
  let selectedGroups = [...allGroupsSet.intersection(new Set(clusterSelect))];
  selectedGroups = selectedGroups[0] ? selectedGroups : [...allGroupsSet];

  if (allClusters.length === 0 || clusterGroups.length === 0) return;
  return (
    <List>
      {selectedGroups.map(group => (
        <Fragment key={group}>
          <LiGroup group={group} />

          {filtredClusters.map(
            cluster =>
              cluster.group === group && (
                <LiCluster
                  key={cluster._id}
                  el={cluster}
                  sortByDate={sortByDate}
                  setSortByDate={setSortByDate}
                />
              ),
          )}
        </Fragment>
      ))}
    </List>
  );
};

export default ClusterList;
