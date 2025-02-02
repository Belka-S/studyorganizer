import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';

import { useClusters } from 'utils/hooks';
import { getGdiveId } from 'utils/helpers';
import { addGroupThunk, updateClusterThunk } from 'store/cluster/clusterThunks';
import { titleSchema } from 'utils/validation';
import Button from 'components/shared/Button/Button';
import CreatableSelect from 'components/shared/Select/CreatableSelect';

import { Form, Label, Input } from './ClusterForms.styled';

const EditClusterForm = ({ el, setIsModal }) => {
  const { _id, cluster, title, group } = el;

  const dispatch = useDispatch();
  const [stateGroup, setStateGroup] = useState({ value: group, label: group });
  const { clusterGroups } = useClusters();

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(titleSchema),
    defaultValues: { cluster, title },
  });

  const onSubmit = async data => {
    const gdriveId = getGdiveId(data.cluster);
    dispatch(
      updateClusterThunk({ _id, ...data, group: stateGroup.value, gdriveId }),
    );
    setIsModal(false);
  };

  const options = clusterGroups
    .map(el => ({ value: el.clusterGroup, label: el.clusterGroup }))
    .sort((a, b) => a.value.localeCompare(b.value));

  const createGroup = value => {
    if (!watch('title')) {
      toast.error('Title is required');
    } else {
      dispatch(addGroupThunk({ clusterGroup: value }));
      setStateGroup({ value, label: value });
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
          value={stateGroup}
          options={options}
          onChange={data => setStateGroup(data ? data : '')}
          onCreateOption={createGroup}
          isClearable={stateGroup}
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
