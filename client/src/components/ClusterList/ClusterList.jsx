import { Fragment, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import {
  fetchClustersThunk,
  fetchGroupsThunk,
  fetchSubjectsThunk,
} from 'store/cluster/clusterThunks';
import { useAuth, useClusters } from 'utils/hooks';
import { scrollOnDomEl } from 'utils/helpers';

import LiGroup from './Li/LiGroup';
import LiCluster from './Li/LiCluster';
import { List } from './ClusterList.styled';

const ClusterList = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const { allClusters, clusterTrash, clusterFilter } = useClusters();

  let { clusterSelect } = useClusters();

  clusterSelect = !clusterSelect ? [] : clusterSelect;

  const [sortByDate, setSortByDate] = useState(false);

  useEffect(() => {
    const subject = user?.subject;
    if (!subject) return;
    dispatch(fetchClustersThunk({ subject }));
    dispatch(fetchGroupsThunk());
    dispatch(fetchSubjectsThunk());
  }, [dispatch, user.subject]);

  useEffect(() => {
    const activeDomEl = document.getElementById('active-cluster');
    activeDomEl && scrollOnDomEl(activeDomEl);
  }, []);

  // clusters filter+selector (trash/filter/favorite/checked)
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
  // groups filter+selector
  const clusterGroups = Array.from(
    new Set(filtredClusters.map(el => el.group)),
  ).sort((a, b) => a.localeCompare(b));

  let selectedGroups = clusterSelect.filter(el => clusterGroups.includes(el));
  selectedGroups = selectedGroups.length !== 0 ? selectedGroups : clusterGroups;

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
