import * as yup from 'yup'

// Login validation schema
export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email('Invalid email address')
    .required('Email is required'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
})

// Registration validation schema
export const registerSchema = yup.object().shape({
  name: yup
    .string()
    .min(2, 'Name must be at least 2 characters')
    .required('Full name is required'),
  email: yup
    .string()
    .email('Invalid email address')
    .required('Email is required'),
  phone: yup
    .string()
    .matches(/^[0-9]{11}$/, 'Phone number must be 11 digits')
    .optional(),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
      'Password must contain at least one uppercase, one lowercase, and one number'
    )
    .required('Password is required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Confirm password is required'),
})

// Contact form validation schema
export const contactSchema = yup.object().shape({
  name: yup
    .string()
    .min(2, 'Name must be at least 2 characters')
    .required('Full name is required'),
  email: yup
    .string()
    .email('Invalid email address')
    .required('Email is required'),
  phone: yup
    .string()
    .matches(/^[0-9]{11}$/, 'Phone number must be 11 digits')
    .optional(),
  message: yup
    .string()
    .min(10, 'Message must be at least 10 characters')
    .required('Message is required'),
})

// Service request validation schema
export const serviceRequestSchema = yup.object().shape({
  serviceType: yup
    .string()
    .oneOf(['installation', 'maintenance', 'customization', 'modernization'])
    .required('Service type is required'),
  description: yup
    .string()
    .min(20, 'Description must be at least 20 characters')
    .required('Description is required'),
  preferredDate: yup
    .date()
    .min(new Date(), 'Date must be in the future')
    .required('Preferred date is required'),
  address: yup
    .string()
    .min(10, 'Address must be at least 10 characters')
    .required('Address is required'),
})

// User profile update schema
export const profileUpdateSchema = yup.object().shape({
  name: yup
    .string()
    .min(2, 'Name must be at least 2 characters')
    .required('Full name is required'),
  phone: yup
    .string()
    .matches(/^[0-9]{11}$/, 'Phone number must be 11 digits')
    .optional(),
  address: yup.string().optional(),
})

// Password change schema
export const passwordChangeSchema = yup.object().shape({
  currentPassword: yup.string().required('Current password is required'),
  newPassword: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
      'Password must contain at least one uppercase, one lowercase, and one number'
    )
    .required('New password is required'),
  confirmNewPassword: yup
    .string()
    .oneOf([yup.ref('newPassword'), null], 'Passwords must match')
    .required('Confirm new password is required'),
})
