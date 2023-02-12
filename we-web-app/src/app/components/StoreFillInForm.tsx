import { Box, Button, FormControl, FormErrorMessage, FormLabel, Input } from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { registerSchema } from '../utils/formValidation/RegisterFormUtils';

type FormData = yup.InferType<typeof registerSchema>;

const StoreFillInForm = () => {
	const {
		handleSubmit,
		register,
		formState: { errors, isSubmitting },
	} = useForm<FormData>({
		resolver: yupResolver(registerSchema),
	});

	const onSubmit = (values: FormData) => {
		console.log(values);
	};

	return (
		<Box p={5} shadow="md" borderWidth="1px" w={'30%'} borderRadius={'lg'}>
			<form onSubmit={handleSubmit(onSubmit)}>
				<FormControl isInvalid={!!errors.firstName}>
					<FormLabel htmlFor="firstName">FirstName</FormLabel>
					<Input id="firstName" placeholder="firstName" {...register('firstName')} />
					<FormErrorMessage>{errors.firstName && errors.firstName.message}</FormErrorMessage>
				</FormControl>

				<FormControl isInvalid={!!errors.firstName}>
					<FormLabel htmlFor="lastName">FirstName</FormLabel>
					<Input id="lastName" placeholder="lastName" {...register('lastName')} />
					<FormErrorMessage>{errors.firstName && errors.firstName.message}</FormErrorMessage>
				</FormControl>

				<FormControl isInvalid={!!errors.email}>
					<FormLabel htmlFor="email">Email</FormLabel>
					<Input id="email" placeholder="johndoe@email.com" {...register('email')} />
					<FormErrorMessage>{errors.email && errors.email.message}</FormErrorMessage>
				</FormControl>

				<FormControl isInvalid={!!errors.password}>
					<FormLabel htmlFor="password">Password</FormLabel>
					<Input id="password" {...register('password')} />
					<FormErrorMessage>{errors.password && errors.password.message}</FormErrorMessage>
				</FormControl>

				<FormControl isInvalid={!!errors.confirmPassword}>
					<FormLabel htmlFor="confirmPassword">Confirm Password</FormLabel>
					<Input id="confirmPassword" {...register('confirmPassword')} />
					<FormErrorMessage>{errors.confirmPassword && errors.confirmPassword.message}</FormErrorMessage>
				</FormControl>

				<Button mt={4} colorScheme="blue" isLoading={isSubmitting} type="submit">
					Submit
				</Button>
			</form>
		</Box>
	);
};

export default StoreFillInForm;
