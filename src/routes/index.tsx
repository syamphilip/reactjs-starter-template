import React from 'react';
import { useRoutes } from 'react-router-dom';
import RootError from '@/components/Error';
import MainLayout from '@/components/layouts/MainLayout';
import { HomePage } from '@/features/Home';

const About = React.lazy(() => import('@/features/About/routes/About'));

const AppRouter = () => {
	const router = useRoutes([
		{
			path: '',
			element: <MainLayout />,
			errorElement: <RootError />,
			children: [
				{
					index: true,
					element: <HomePage />,
				},
				{
					path: '/about',
					element: <About />,
				},
			],
		},
	]);

	return router;
};

export default AppRouter;
