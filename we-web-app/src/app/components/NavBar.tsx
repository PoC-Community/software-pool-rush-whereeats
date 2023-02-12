import { Button, Flex } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const NavBar = () => {
	return (
		<Flex bg="teal" p={4} justifyContent="flex-end">
			<Flex alignItems={'center'}>
				<Button variant="outline" mr={2}>
					<span>
						<Link to="/login">Sign In</Link>
					</span>
				</Button>
				<Button variantColor="white">
					<span>
						<Link to="/register">Sign Up</Link>
					</span>
				</Button>
			</Flex>
		</Flex>
	);
};

export default NavBar;
