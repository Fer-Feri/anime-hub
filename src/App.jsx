import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import MainLayouts from './layouts/MainLayouts';
import Home from './pages/Home';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';
import Watch from './pages/Watch';

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				{/* Layout اصلی با Nested Routes */}
				<Route path="/" element={<MainLayouts />}>
					{/* Redirect اصلی به Series */}
					<Route index element={<Navigate to="/series" replace />} />

					{/* صفحات Movies/Series */}
					<Route path="movies" element={<Home type="movies" />} />
					<Route path="series" element={<Home type="series" />} />

					{/* صفحه پخش - Dynamic Route */}
					<Route path="watch/:id" element={<Watch />} />

					{/* صفحات دیگر */}
					<Route path="profile" element={<Profile />} />
				</Route>

				{/* 404 - خارج از Layout */}
				<Route path="*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
