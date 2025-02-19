import { useSelector } from 'react-redux';

import * as selectors from 'store/cluster/clusterSelectors';

export const useClusters = () => {
  const allClusters = useSelector(selectors.selectClusters);
  const activeCluster = useSelector(selectors.selectActiveCluster);
  const clusterGroups = useSelector(selectors.selectClusterGroups);
  const clusterSubjects = useSelector(selectors.selectClusterSubjects);
  const clusterFilter = useSelector(selectors.selectClusterFilter);
  const clusterSelect = useSelector(selectors.selectClusterSelect);
  const clusterTrash = useSelector(selectors.selectClusterTrash);

  const error = useSelector(selectors.selectError);
  const isLoading = useSelector(selectors.selectIsLoading);

  return {
    allClusters,
    activeCluster,
    clusterGroups,
    clusterSubjects,
    clusterFilter,
    clusterSelect,
    clusterTrash,

    error,
    isLoading,
  };
};
