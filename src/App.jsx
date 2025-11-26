import SideBar from './components/SideBar';
import Content from './components/Content';
import Menu from './components/Menu';
import Header from './components/Header';

const App = () => {
	return (
		<section className="app-container">
			<div className="flex flex-col min-h-screen w-full my-3 px-2">
				<Header />

				<div className="flex flex-col lg:flex-row flex-1 gap-3 bg-background-dark rounded-lg overflow-hidden">
					{/* Content - عرض اصلی */}
					<div className="flex-1 lg:flex-[1_1_60%] overflow-hidden">
						<Content />
					</div>

					{/* Sidebar - عرض ثابت */}
					<aside className="lg:flex-[0_0_350px] lg:max-w-[400px] overflow-hidden">
						<SideBar />
					</aside>
				</div>
			</div>
		</section>
	);
};

export default App;
