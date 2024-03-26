import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Layout } from 'antd';
import PageHeader from '../common/Header';

const { Content } = Layout;

const MainLayout = () => {
	return (
		<Suspense>
			<Layout className="bg-white">
				<PageHeader />
				<Content>
					<div className="bg-white h-screen w-screen p-5 md:px-0 text-black md:w-8/12 m-auto">
						<Outlet />
					</div>
				</Content>
			</Layout>
		</Suspense>
	);
};

export default MainLayout;
