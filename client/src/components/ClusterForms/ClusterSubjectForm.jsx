import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { subjectSchema } from 'utils/validation';
import { addSubjectThunk } from 'store/cluster/clusterThunks';
import Button from 'components/shared/Button/Button';

import { Form, Label, Input } from './ClusterForms.styled';

const AddSubjectForm = ({ setIsModal }) => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(subjectSchema),
  });

  const onSubmit = data => {
    dispatch(addSubjectThunk({ subject: data.subject }));
    setIsModal(false);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Label>
        Subject <span> {errors.subject?.message}</span>
        <Input autoComplete="off" autoFocus {...register('subject')} />
      </Label>

      <Button variant="accent" type="submit" $s="l" $h="41px">
        Submit
      </Button>
    </Form>
  );
};

export default AddSubjectForm;

AddSubjectForm.propTypes = {
  setIsModal: PropTypes.func.isRequired,
};
