import { Flex } from '@chakra-ui/react';
import SignInForm from '../components/LoginForm';
import NavBar from '../components/NavBar';

const LoginPage = () => {
	return (
		<>
			<NavBar />
			<Flex justifyContent="center" alignItems="center" height="100vh">
				<SignInForm />
			</Flex>
		</>
	);
};

export default LoginPage;
