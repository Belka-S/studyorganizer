import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'sonner';

import { useAuth, useClusters } from 'utils/hooks';
import { getGdiveId } from 'utils/helpers';
import { addGroupThunk, updateClusterThunk } from 'store/cluster/clusterThunks';
import { addClusterSchema } from 'utils/validation';
import Button from 'components/shared/Button/Button';
import CreatableSelect from 'components/shared/Select/CreatableSelect';

import { Form, Label, Input } from './ClusterForms.styled';

const EditClusterForm = ({ el, setIsModal }) => {
  const { _id, cluster, title, group } = el;

  const dispatch = useDispatch();
  const { user } = useAuth();
  const { clusterGroups } = useClusters();
  const [state, setState] = useState({ value: group, label: group });

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

  const onSubmit = async data => {
    const gdriveId = getGdiveId(data.cluster);
    const group = await state.value;
    const groupId = await clusterGroups.find(el => el.group === group)._id;
    dispatch(updateClusterThunk({ _id, ...data, group, groupId, gdriveId }));
    setIsModal(false);
  };

  const options = clusterGroups
    .map(el => ({ value: el.group, label: el.group }))
    .sort((a, b) => a.value.localeCompare(b.value));

  const createGroup = value => {
    if (!watch('title')) {
      toast.error('Title is required');
    } else {
      dispatch(addGroupThunk({ group: value, subject: user.subjectId }));
      setState({ value, label: value });
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Label>
        Cluster <span> {errors.cluster?.message}</span>
        <Input {...register('cluster')} onFocus={e => e.target.select()} />
      </Label>

      <Label>
        Title <span> {errors.title?.message}</span>
        <Input {...register('title')} onFocus={e => e.target.select()} />
      </Label>

      <Label>
        Group
        <CreatableSelect
          value={state}
          options={options}
          onChange={data => setState(data ? data : '')}
          onCreateOption={createGroup}
          isClearable={state}
          $ph="left"
        />
      </Label>

      <Button variant="accent" type="submit" $s="l" $h="41px">
        Submit
      </Button>
    </Form>
  );
};

export default EditClusterForm;

EditClusterForm.propTypes = {
  el: PropTypes.object,
  setIsModal: PropTypes.func.isRequired,
};
