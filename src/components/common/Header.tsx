import { Flex, Layout } from 'antd';
import { Link } from 'react-router-dom';

const { Header } = Layout;

const PageHeader = () => {
	return (
		<Header className="bg-white sticky top-0 left-0 z-10">
			<div className="w-screen md:w-9/12 m-auto px-4 border-b">
				<Flex gap="middle">
					<Link to="/home" className="hover:text-blue-600 hover:font-semibold">
						Home
					</Link>
					<Link to="/about" className="hover:text-blue-600 hover:font-semibold">
						About
					</Link>
				</Flex>
			</div>
		</Header>
	);
};

export default PageHeader;
