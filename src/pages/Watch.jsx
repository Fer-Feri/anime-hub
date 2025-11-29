import { useParams } from 'react-router-dom';
import VideoPlayer from '../components/VideoPlayer';
import AnimeInfo from '../components/AnimeInfo';
import EpisodesList from '../components/EpisodesList';

const Watch = () => {
	const { id } = useParams();

	// ✅ URL واقعی YouTube
	const animeData = {
		id: id,
		title: 'Attack on Titan - Episode 1',
		description:
			'Centuries ago, mankind was slaughtered to near extinction by monstrous humanoid creatures called Titans...',
		currentEpisode: 1,
		totalEpisodes: 25,
		// ✅ استفاده از YouTube URL
		videoUrl: '/video/khan.mp4',
		episodes: Array.from({ length: 25 }, (_, i) => ({
			number: i + 1,
			title: `Episode ${i + 1}`,
			thumbnail: `https://placehold.co/160x90/1a1a2e/ff6b6b?text=EP${i + 1}`,
			watched: i < 5, // اولین 5 قسمت watched
		})),
	};

	const handleTimeUpdate = ({ played, duration }) => {
		console.log(`Progress: ${(played * 100).toFixed(2)}% - ${(played * duration).toFixed(2)}s`);
		// اینجا میتونی watch progress رو save کنی
	};

	return (
		<div className="min-h-screen bg-background-main pb-8">
			{/* Video Player */}
			<VideoPlayer
				videoUrl={animeData.videoUrl}
				title={`${animeData.title} - Episode ${animeData.currentEpisode}`}
				onTimeUpdate={handleTimeUpdate}
			/>

			<div className="container mx-auto px-4 mt-6 space-y-6">
				{/* Anime Info */}
				<AnimeInfo
					title={animeData.title}
					description={animeData.description}
					currentEpisode={animeData.currentEpisode}
					totalEpisodes={animeData.totalEpisodes}
				/>

				{/* Episodes List */}
				<EpisodesList
					episodes={animeData.episodes}
					currentEpisode={animeData.currentEpisode}
				/>
			</div>
		</div>
	);
};

export default Watch;
