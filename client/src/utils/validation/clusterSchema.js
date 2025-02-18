import * as Yup from 'yup';

import { regExp } from 'utils/constants';

const pattern = regExp => [regExp.pattern, `pattern: ${regExp.msg}`];

export const clusterSchema = Yup.object().shape({
  cluster: Yup.string()
    .matches(...pattern(regExp.HTTP))
    .required('required'),
});

export const addClusterSchema = Yup.object().shape({
  cluster: Yup.string()
    .matches(...pattern(regExp.HTTP))
    .required('required'),
  title: Yup.string()
    .matches(...pattern(regExp.NAME))
    .max(50, 'is too long')
    .required('required'),
  group: Yup.string(),
});

export const subjectSchema = Yup.object().shape({
  subject: Yup.string()
    .matches(...pattern(regExp.NAME))
    .max(20, 'is too long')
    .required('required'),
});
