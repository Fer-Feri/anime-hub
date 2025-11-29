import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import SideBar from '../components/SideBar';

const MainLayouts = () => {
	return (
		<section className="app-container">
			<div className="flex flex-col min-h-screen w-full my-3 px-2">
				<div className="flex flex-col flex-1 gap-3 bg-background-dark rounded-lg overflow-hidden">
					{/* ✅ Header باید بالای همه باشه */}
					<Header />

					{/* محتوا + Sidebar در یک Flex-Row */}
					<div className="flex flex-col lg:flex-row flex-1 gap-3 overflow-hidden">
						{/* Main Content */}
						<main className="flex-1 lg:flex-[1_1_60%] overflow-hidden">
							<Outlet />
						</main>

						{/* Sidebar */}
						<aside className="lg:flex-[0_0_350px] lg:max-w-[400px] overflow-hidden">
							<SideBar />
						</aside>
					</div>
				</div>
			</div>
		</section>
	);
};

export default MainLayouts;
