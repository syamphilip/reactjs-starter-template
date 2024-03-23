import { Flex, Typography } from 'antd';

const Home = (): React.ReactNode => {
	const { Title, Paragraph } = Typography;
	return (
		<div className="bg-white flex h-screen w-screen p-5 md:p-0 text-black items-center justify-center md:w-8/12 m-auto">
			<Flex vertical gap={10}>
				<Typography>
					<Paragraph className="text-slate-400">version 1.0</Paragraph>
					<Title>Welcome to react + vite starter template</Title>
					<Paragraph>
						This is a simple starter template for ReactJS with Vite. It provides
						you with a basic structure to kickstart your React projects
						efficiently. With Vite as the build tool, you can enjoy fast
						development and optimized production builds. This template includes
						essential configurations and setups, allowing you to focus on
						building your application logic without worrying about the initial
						setup hassles.
					</Paragraph>

					<Title level={3}>
						This template pre-configured with the support following packages.
					</Title>

					<Paragraph>📦 Package Manager : PNPM</Paragraph>
					<Paragraph>🧰 State Management : Zustand</Paragraph>
					<Paragraph>🎨 CSS library : Tailwind CSS</Paragraph>
					<Paragraph>🧭 Navigation : React-router-dom</Paragraph>
					<Paragraph>🧩 Code formatting : Eslint & Prettier</Paragraph>
					<Paragraph>🧿 Icon Package : Lucid React</Paragraph>
					<Paragraph>🎴 UI Library : Ant Designs</Paragraph>

					<p>
						Additionally added support of husky and pre-configured vscode
						snippets workspace settings
					</p>
				</Typography>
				{/* <Flex gap={10}>
          <Button>Increment</Button>
          <Button>Decrement</Button>
        </Flex> */}
			</Flex>
		</div>
	);
};

export default Home;
