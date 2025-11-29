import narutoSlider from '../assets/images/naruto-slider.jpg';
import moviePoster from '../assets/images/blech-slider.jpg';

export const seriesData = {
	hero: [
		{
			id: 1,
			title: 'Naruto',
			seasons: '2 Seasons',
			episodes: '700 Episodes',
			description: 'In this action-comedy...',
			image: narutoSlider,
			tags: ['STORY', 'ACTORS'],
		},
	],
	topRated: [
		{ id: 1, title: 'Demon Slayer', img: narutoSlider },
		{ id: 2, title: 'One Piece', img: narutoSlider },
	],
	latest: [
		{ id: 10, title: 'Solo Leveling', img: narutoSlider },
		{ id: 11, title: 'Attack on Titan', img: narutoSlider },
	],
};

export const moviesData = {
	hero: [
		{
			id: 1,
			title: 'The Last: Naruto Movie',
			duration: '1h 52m',
			description: 'Naruto embarks on a journey...',
			image: moviePoster,
			tags: ['ACTION', 'ROMANCE'],
		},
	],
	trending: [
		{ id: 1, title: 'Jujutsu Kaisen 0', img: moviePoster },
		{ id: 2, title: 'One Piece Film: Red', img: moviePoster },
	],
	newReleases: [
		{ id: 5, title: 'Spy x Family Movie', img: moviePoster },
		{ id: 6, title: 'Bubble', img: moviePoster },
	],
};
