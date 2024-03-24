import { Suspense } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Flex, Layout } from 'antd';

const { Header, Content } = Layout;

const MainLayout = () => {
	return (
		<Suspense>
			<Layout className="bg-white">
				<Header className="bg-white sticky top-0 left-0">
					<div className="w-screen md:w-9/12 m-auto px-4 border-b">
						<Flex gap="middle">
							<Link
								to="/home"
								className="hover:text-blue-600 hover:font-semibold"
							>
								Home
							</Link>
							<Link
								to="/about"
								className="hover:text-blue-600 hover:font-semibold"
							>
								About
							</Link>
						</Flex>
					</div>
				</Header>
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
