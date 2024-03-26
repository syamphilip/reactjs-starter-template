import { Avatar, Card } from 'antd';
import { Cog, Settings2, Shield } from 'lucide-react';
import { User } from '../types';

type UserItemProps = {
	userData: User;
};

const { Meta } = Card;

const UserItem = ({ userData }: UserItemProps) => {
	return (
		<Card
			style={{ width: 300 }}
			cover={
				<img
					alt="example"
					src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
				/>
			}
			actions={[
				<div key="setting" className="flex items-center justify-center">
					<Cog />
				</div>,
				<div key="setting" className="flex items-center justify-center">
					<Settings2 key="edit" />
				</div>,
				<div key="setting" className="flex items-center justify-center">
					<Shield key="ellipsis" />
				</div>,
			]}
		>
			<Meta
				avatar={
					<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />
				}
				title={userData.name}
				description={userData.email}
			/>
		</Card>
	);
};

export default UserItem;
