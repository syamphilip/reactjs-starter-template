import { Outlet } from 'react-router-dom';
import { Layout } from 'antd';
import PageHeader from '../common/Header';
import { Helmet } from 'react-helmet-async';

const { Content } = Layout;

const MainLayout = () => {
	return (
		<>
			<Helmet>
				<title>Vite ReactJS</title>
				<meta name="description" content="React JS + Vite Starter template" />
			</Helmet>
			<Layout className="bg-white">
				<PageHeader />
				<Content>
					<div className="bg-white h-screen w-screen p-5 md:px-0 text-black md:w-8/12 m-auto">
						<Outlet />
					</div>
				</Content>
			</Layout>
		</>
	);
};

export default MainLayout;
