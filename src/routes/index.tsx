import { createElement } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './home';
import About from './about';

const router = createBrowserRouter([
	{ path: '', element: <Home /> },
	{ path: '/about', element: <About /> },
]);

const Router = (): JSX.Element => {
	return createElement(RouterProvider, { router });
};

export default Router;
