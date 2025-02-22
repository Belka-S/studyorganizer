import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'sonner';

import { useAuth, useClusters } from 'utils/hooks';
import { getGdiveId } from 'utils/helpers';
import {
  addClusterThunk,
  addGroupThunk,
  fetchGroupsThunk,
} from 'store/cluster/clusterThunks';
import { addClusterSchema } from 'utils/validation';
import Button from 'components/shared/Button/Button';
import CreatableSelect from 'components/shared/Select/CreatableSelect';

import { Form, Label, Input, Hidden } from './ClusterForms.styled';

const AddClusterForm = ({ cluster, title, group, setGroup, setIsModal }) => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const { clusterGroups } = useClusters();

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(addClusterSchema),
    defaultValues: { cluster, title },
  });

  const onSubmit = data => {
    const gdriveId = getGdiveId(data.cluster);
    const { value } = group;
    const groupId = clusterGroups.find(el => el.group === value)._id;

    const subject = user.subject;
    const payload = { group: value, groupId, subject, gdriveId };
    dispatch(addClusterThunk({ ...data, ...payload })).unwrap();
    setIsModal(false);
  };

  const options = clusterGroups
    .map(el => ({ value: el.group, label: el.group }))
    .sort((a, b) => a.value.localeCompare(b.value));

  const createGroup = value => {
    if (!watch('title')) {
      toast.error('Title is required');
    } else {
      dispatch(addGroupThunk({ group: value, subjectId: user.subjectId }))
        .unwrap()
        .then(dispatch(fetchGroupsThunk({ subjectId: user.subjectId })));

      setGroup({ value, label: value });
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Label>
        {cluster.length <= 48
          ? cluster
          : cluster.substring(0, 30) +
            `...${cluster.substring(cluster.length - 15)}`}
        <Hidden {...register('cluster')} />
      </Label>

      <Label>
        Title <span> {errors.title?.message}</span>
        <Input autoFocus {...register('title')} />
      </Label>

      <Label>
        Group
        <CreatableSelect
          value={group}
          options={options}
          onChange={data => setGroup(data ? data : '')}
          onCreateOption={createGroup}
          isClearable={group}
          $ph="left"
        />
      </Label>

      <Button variant="accent" type="submit" $s="l" $h="41px">
        Submit
      </Button>
    </Form>
  );
};

export default AddClusterForm;

AddClusterForm.propTypes = {
  cluster: PropTypes.string.isRequired,
  title: PropTypes.string,
  group: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  setGroup: PropTypes.func.isRequired,
  setIsModal: PropTypes.func.isRequired,
};
