import { createElement } from 'react';
import {
	createBrowserRouter,
	Navigate,
	RouterProvider,
} from 'react-router-dom';
import Home from './home';
import About from './about';
import RootError from '../components/error';
import MainLayout from '../components/layouts/main-layout';

const router = createBrowserRouter([
	{
		path: '',
		element: <MainLayout />,
		errorElement: <RootError />,
		children: [
			{
				index: true,
				element: <Navigate to="/home" />,
			},
			{
				path: '/home',
				element: <Home />,
			},
			{
				path: '/about',
				element: <About />,
			},
		],
	},
]);

const Router = (): JSX.Element => {
	return createElement(RouterProvider, { router });
};

export default Router;
