import SideBar from './components/SideBar';
import Content from './components/Content';
import Menu from './components/Menu';

const App = () => {
	return (
		<section className="app-container bg-background-dark">
			<div className="flex min-h-screen justify-center  w-full h-full my-3">
				<Menu />
				<Content />
				<SideBar />
			</div>
		</section>
	);
};

export default App;
