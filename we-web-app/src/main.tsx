import React from 'react';
import ReactDOM from 'react-dom/client';

import { ChakraProvider } from '@chakra-ui/react';
import { RouterProvider } from 'react-router-dom';
import router from './app/utils/routesConfig';
import theme from './theme';
import './theme/index.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
	<React.StrictMode>
		<ChakraProvider theme={theme} resetCSS>
			<RouterProvider router={router} />
		</ChakraProvider>
	</React.StrictMode>,
);
