import { Navigate, useRoutes } from 'react-router-dom';
import RootError from '@/components/Error';
import MainLayout from '@/components/layouts/MainLayout';
import { AboutPage } from '@/features/About';
import { HomePage } from '@/features/Home';

const AppRouter = () => {
	const router = useRoutes([
		{
			path: '',
			element: <MainLayout />,
			errorElement: <RootError />,
			children: [
				{
					index: true,
					element: <Navigate to="/home" />,
					errorElement: <RootError />,
				},
				{
					path: '/home',
					element: <HomePage />,
				},
				{
					path: '/about',
					element: <AboutPage />,
				},
			],
		},
	]);

	return router;
};

export default AppRouter;
