import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ErrorBoundary } from 'react-error-boundary';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { queryClient } from '@/lib/react-query';
import ErrorFallback from '@/components/Error';

type AppProviderProps = {
	children: React.ReactNode;
};

const AppProvider = ({ children }: AppProviderProps) => {
	return (
		<ErrorBoundary fallback={<ErrorFallback />}>
			<HelmetProvider>
				<QueryClientProvider client={queryClient}>
					{!import.meta.env.PROD && <ReactQueryDevtools />}
					<BrowserRouter>{children}</BrowserRouter>
				</QueryClientProvider>
			</HelmetProvider>
		</ErrorBoundary>
	);
};

export default AppProvider;
