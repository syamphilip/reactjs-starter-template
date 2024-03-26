import { Row, Col } from 'antd';
import { User } from '@/features/Home';
import UserItem from './UserItem';

type UsersListingProps = {
	data: User[];
};

const UsersListing = ({ data }: UsersListingProps) => {
	return (
		<Row gutter={16}>
			{data.map((user) => (
				<Col key={user.id} span={6} className="pt-5">
					<UserItem userData={user} />
				</Col>
			))}
		</Row>
	);
};

export default UsersListing;
