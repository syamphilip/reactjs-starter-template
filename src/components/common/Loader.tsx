import { Download } from 'lucide-react';

const Loader = () => {
	return (
		<div className="h-full w-full flex items-center justify-center flex-col gap-3">
			<Download className="text-blue-600" size={30} />
			<p className="font-mono">Loading, Please wait</p>
		</div>
	);
};

export default Loader;
