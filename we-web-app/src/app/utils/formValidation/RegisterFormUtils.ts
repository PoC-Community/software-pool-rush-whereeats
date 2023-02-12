import * as yup from 'yup';

export const registerSchema = yup.object().shape({
	firstName: yup.string().required('FirstName is required'),
	lastName: yup.string().required('FirstName is required'),
	email: yup.string().email('Invalid email address').required('Email is required'),
	password: yup.string().min(8, 'Password must be at least 8 characters long').required('Password is required'),
	confirmPassword: yup
		.string()
		.oneOf([yup.ref('password')], 'Passwords does not match')
		.required('Confirm password is required'),
});

export const loginSchema = yup.object().shape({
	email: yup.string().email('Invalid email address').required('Email is required'),
	password: yup.string().min(8, 'Password must be at least 8 characters long').required('Password is required'),
});

export const storeSchema = yup.object().shape({
	storeName: yup.string().required('storeName is required'),
	lastName: yup.string().required('Last firstName is required'),
	email: yup.string().email('Invalid email address').required('Email is required'),
	password: yup.string().min(8, 'Password must be at least 8 characters long').required('Password is required'),
	confirmPassword: yup
		.string()
		.oneOf([yup.ref('password')], 'Passwords does not match')
		.required('Confirm password is required'),
});
