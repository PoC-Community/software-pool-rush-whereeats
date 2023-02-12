import { createBrowserRouter } from 'react-router-dom';
import HomePages from '../pages/HomePages';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';

const router = createBrowserRouter([
	{
		path: '/',
		element: <HomePages />,
	},
	{
		path: '/register',
		element: <RegisterPage />,
	},
	{
		path: '/login',
		element: <LoginPage />,
	},
]);

export default router;
