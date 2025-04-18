import * as yup from 'yup'
export const AddEditSchema = yup
  .object({
    firmName: yup
      .string()
      .required('Name is required')
      .matches(/^[A-Za-z\s]{2,50}$/, 'Invalid name'),
    email: yup.string().email('Invalid email').required('Email is required'),
  })
  .required()
