import { IoMdNotificationsOutline } from 'react-icons/io';
import { Link } from 'react-router-dom';

import kakashiLogo from '../assets/images/kakashi-logo.jpg';

import MainHeroSlider from './sliders/MainHeroSlider';
import AnimeRowSlider from './sliders/AnimeRowSlider';

import { seriesData, moviesData } from '../data/contentData';

const Content = ({ type }) => {
	// pick dataset
	const isMovies = type === 'movies';
	const data = isMovies ? moviesData : seriesData;

	// titles for sliders
	const row1Title = isMovies ? 'Trending Movies' : 'Top Rated Anime';
	const row2Title = isMovies ? 'New Releases' : 'Latest Anime';

	return (
		<div className="flex flex-col h-full gap-6 border-b lg:border-b-0 lg:border-r border-border-primary overflow-hidden">
			{/* Top panel */}
			<div className="flex justify-between items-center p-6 flex-shrink-0">
				{/* tabs */}
				<div className="flex gap-3">
					<Link to="/movies">
						<p className={`${isMovies ? 'active-link-content' : ''} cursor-pointer`}>
							Movies
						</p>
					</Link>
					<Link to="/series">
						<p className={`${!isMovies ? 'active-link-content' : ''} cursor-pointer`}>
							Series
						</p>
					</Link>
				</div>

				{/* right actions */}
				<div className="flex gap-3">
					<div className="relative">
						<IoMdNotificationsOutline className="w-7 h-7 cursor-pointer hover:text-accent-primary transition-colors" />
						<span className="absolute -top-0 right-0 w-2 h-2 bg-red-500 rounded-full border-2 border-background-card"></span>
					</div>

					<img
						src={kakashiLogo}
						className="w-7 h-7 rounded-full cursor-pointer ring-2 ring-transparent hover:ring-accent-primary/50 transition-all"
						alt="account"
					/>
				</div>
			</div>

			{/* Hero */}
			<MainHeroSlider slides={data.hero} />

			{/* Sliders */}
			<div className="flex-1 overflow-y-auto px-6 pb-6">
				<AnimeRowSlider
					title={row1Title}
					items={isMovies ? data.trending : data.topRated}
				/>
				<AnimeRowSlider
					title={row2Title}
					items={isMovies ? data.newReleases : data.latest}
				/>
			</div>
		</div>
	);
};

export default Content;
