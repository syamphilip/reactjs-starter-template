import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from '@/routes';
import AppProvider from '@/provider/app';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<AppProvider>
			<AppRouter />
		</AppProvider>
	</React.StrictMode>
);
