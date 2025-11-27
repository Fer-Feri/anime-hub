import { IoMdNotificationsOutline } from 'react-icons/io';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import kakashiLogo from '../assets/images/kakashi-logo.jpg';
import narutoSlider from '../assets/images/naruto-slider.jpg';
import MainHeroSlider from './sliders/MainHeroSlider';
import AnimeRowSlider from './sliders/AnimeRowSlider';

const Content = () => {
	const heroSlides = [
		{
			id: 1,
			title: 'Naruto',
			seasons: '2 Seasons',
			episodes: '700 Episodes',
			description: 'In this action-comedy...',
			image: narutoSlider,
			tags: ['STORY', 'ACTORS'],
		},
		{
			id: 2,
			title: 'Naruto Baka',
			seasons: '2 Seasons',
			episodes: '700 Episodes',
			description: '...',
			image: narutoSlider,
			tags: ['STORY', 'ACTORS'],
		},
	];

	const topRated = [
		{ id: 1, title: 'Demon Slayer', img: narutoSlider },
		{ id: 2, title: 'One Piece', img: narutoSlider },
		{ id: 3, title: 'Naruto', img: narutoSlider },
		{ id: 4, title: 'Dragon Ball Z', img: narutoSlider },
		{ id: 5, title: 'Death Note', img: narutoSlider },
	];

	const latest = [
		{ id: 10, title: 'Solo Leveling', img: narutoSlider },
		{ id: 11, title: 'Jujutsu Kaisen', img: narutoSlider },
		{ id: 12, title: 'Attack on Titan', img: narutoSlider },
		{ id: 13, title: 'Chainsaw Man', img: narutoSlider },
	];

	return (
		<div className="flex flex-col h-full gap-6 border-b lg:border-b-0 lg:border-r border-border-primary overflow-hidden">
			{/* top content */}
			<div className="flex justify-between items-center p-6 flex-shrink-0">
				{/* left */}
				<div className="flex gap-3">
					<p className="active-link-content cursor-pointer">Movies</p>
					<p className="cursor-pointer">Series</p>
				</div>
				{/* right */}
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

			{/* Main Slider */}
			<MainHeroSlider slides={heroSlides} />

			{/* Anime Sections */}
			<div className="flex-1 overflow-y-auto px-6 pb-6">
				<AnimeRowSlider title="Top Rated Anime" items={topRated} />
				<AnimeRowSlider title="Latest Anime" items={latest} />
			</div>
		</div>
	);
};

export default Content;
