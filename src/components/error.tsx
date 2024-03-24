import { Typography } from 'antd';
import { useRouteError } from 'react-router-dom';

type RouteError = Error & { status?: number; statusText?: string };

const { Title, Paragraph } = Typography;

const RootError = (): React.ReactNode => {
	const err = useRouteError() as RouteError;
	return (
		<div className="h-screen w-screen px-4 md:px-0 md:w-8/12 m-auto">
			<div className="flex items-center h-full">
				<div className="border rounded-md p-4 border-slate-400 w-full">
					<Typography>
						<Title level={3}>Oops! Something went wrong.</Title>
						<Paragraph>We&apos;re sorry, but an error has occurred.</Paragraph>
						<Paragraph>{err.message}</Paragraph>
						<Paragraph>Please try again later.</Paragraph>
					</Typography>
				</div>
			</div>
		</div>
	);
};

export default RootError;
