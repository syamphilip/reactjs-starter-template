import { axios } from '@/lib/axios';
import { QueryClientConfig, useQuery } from '@tanstack/react-query';
import { User } from '../types';

type UseGetUserOptions = {
	config?: QueryClientConfig;
};

const getUsers = (): Promise<User[]> => {
	return axios.get('/users');
};

export const useGetUsers = ({ config }: UseGetUserOptions) => {
	return useQuery({
		...config,
		queryKey: ['get-users'],
		queryFn: () => getUsers(),
	});
};
