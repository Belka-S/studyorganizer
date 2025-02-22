import { useDispatch } from 'react-redux';
import { toast } from 'sonner';
import { HiX } from 'react-icons/hi';

import Button from 'components/shared/Button/Button';
import {
  setActiveCluster,
  emptyClusterTrash,
} from 'store/cluster/clusterSlice';
import {
  deleteClusterThunk,
  fetchGroupsThunk,
} from 'store/cluster/clusterThunks';
import { useClusters } from 'utils/hooks';

import { themes } from 'styles/themes';

const { button } = themes.shadows;

const DeleteBtn = () => {
  const dispatch = useDispatch();
  const { allClusters, activeCluster, clusterTrash } = useClusters();

  const emptyTrash = e => {
    e?.currentTarget.blur();
    // if (!confirm('Are you sure you want to delete the selected Cluster(s)?')) return;
    toast.error('Are you sure you want to delete the selected Cluster(s)?', {
      duration: Infinity,
      position: 'bottom-center',
      closeButton: true,
      // cancel: { label: 'No' },
      action: {
        label: 'Yes',
        onClick: () => {
          // delete trash clusters
          dispatch(deleteClusterThunk(clusterTrash.map(el => el._id).join('&')))
            .then(() => {
              const trashId = clusterTrash.map(el => el._id);
              const { _id } = activeCluster;
              trashId.includes(_id) && dispatch(setActiveCluster(null));
            })
            .then(() => {
              dispatch(emptyClusterTrash());
              const groupId = [...new Set(allClusters.map(el => el.groupId))];
              dispatch(fetchGroupsThunk({ _id: groupId }));
            });
        },
      },
    });
  };

  return (
    <Button onClick={emptyTrash} $s="m" $round={true} $bs={button}>
      <HiX size={16} />
    </Button>
  );
};

export default DeleteBtn;
