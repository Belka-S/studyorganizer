import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Fragment } from 'react';
import { Formik } from 'formik';
import { toast } from 'react-toastify';

import { forgotPassThunk } from 'store/auth/authThunks';

import { forgotSchema } from 'utils/validation';

import SignBtn from './AuthBtns/SignBtn';
import {
  Form,
  ErrorMsg,
  Label,
  Field,
  FieldWrap,
  Title,
  SuccessIcon,
  ErrorIcon,
} from './AuthForms.styled';

const ForgotForm = ({ setIsFM, email }) => {
  const dispatch = useDispatch();

  const isValid = ({ values, errors }) => {
    const noValue = !Object.values(values)[0] && 'noValue';
    const isError = Object.values(errors).length ? 'error' : 'success';
    return noValue || isError;
  };

  const isDisabled = ({ errors }) => Object.keys(errors).length;

  const onSubmit = values => {
    dispatch(forgotPassThunk(values))
      .unwrap() // .then(pld => console.log(pld))
      .catch(err => toast.error(err.message));

    setIsFM(false); // actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ email }}
      validationSchema={forgotSchema}
      onSubmit={onSubmit}
    >
      {({ values, errors }) => (
        <Form>
          <Title>
            <h2>Get reset link</h2>
          </Title>

          <Fragment>
            <Label>
              Email
              <pre> </pre>
              <ErrorMsg name="email" component="span" />
            </Label>

            <FieldWrap>
              <Field
                type="email"
                name="email"
                $validation={isValid({ values, errors })}
              />

              {isValid({ values, errors }) === 'error' && <ErrorIcon />}
              {isValid({ values, errors }) === 'success' && <SuccessIcon />}
            </FieldWrap>
          </Fragment>

          <SignBtn disabled={isDisabled({ errors })}>Submit</SignBtn>
        </Form>
      )}
    </Formik>
  );
};

export default ForgotForm;

ForgotForm.propTypes = {
  setIsFM: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
};
