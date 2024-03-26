import { useGetUsers } from '../api/getUsers';
import Loader from '@/components/common/Loader';
import UsersListing from '../components/UsersListing';

const Home = (): React.ReactNode => {
	const userQuery = useGetUsers({});

	if (userQuery.isLoading) {
		return <Loader />;
	}

	if (!userQuery.data) {
		return null;
	}

	return (
		<div className="pb-[100px]">
			<UsersListing data={userQuery.data} />
		</div>
	);
};

export default Home;
