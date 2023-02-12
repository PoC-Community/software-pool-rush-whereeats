import { Flex } from '@chakra-ui/react';
import NavBar from '../components/NavBar';
import SignUpForm from '../components/RegisterForm';

const RegisterPage = () => {
	return (
		<>
			<NavBar />
			<Flex justifyContent="center" alignItems="center" height="100vh">
				<SignUpForm />
			</Flex>
		</>
	);
};

export default RegisterPage;
