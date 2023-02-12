import { Box, Button, FormControl, FormErrorMessage, FormLabel, Input } from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { loginSchema } from '../utils/formValidation/RegisterFormUtils';

type LoginData = yup.InferType<typeof loginSchema>;

const SignInForm = () => {
	const {
		handleSubmit,
		register,
		formState: { errors, isSubmitting },
	} = useForm<LoginData>({
		resolver: yupResolver(loginSchema),
	});

	const onSubmit = (values: LoginData) => {
		console.log(values);
	};

	return (
		<Box p={5} shadow="md" borderWidth="1px" w={'30%'} borderRadius={'lg'}>
			<form onSubmit={handleSubmit(onSubmit)}>
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

				<Button mt={4} colorScheme="blue" isLoading={isSubmitting} type="submit">
					Submit
				</Button>
			</form>
		</Box>
	);
};

export default SignInForm;
