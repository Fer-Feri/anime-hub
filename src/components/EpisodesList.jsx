import { useState } from 'react';
import { FiPlay, FiCheck, FiClock } from 'react-icons/fi';

const EpisodesList = ({ episodes, currentEpisode, onEpisodeSelect }) => {
	const [filter, setFilter] = useState('all'); // all, watched, unwatched

	// If no data
	if (!episodes || episodes.length === 0) {
		return (
			<div className="bg-bg-secondary rounded-lg p-6">
				<h2 className="text-xl font-bold text-text-primary mb-4 flex items-center gap-2">
					<span className="w-1 h-6 bg-accent-primary rounded-full"></span>
					Episodes List
				</h2>
				<p className="text-text-secondary">No episodes available.</p>
			</div>
		);
	}

	// Filter episodes
	const filteredEpisodes = episodes.filter((ep) => {
		if (filter === 'watched') return ep.watched;
		if (filter === 'unwatched') return !ep.watched;
		return true;
	});

	return (
		<div className="bg-bg-secondary rounded-lg overflow-hidden">
			{/* Header */}
			<div className="p-6 border-b border-bg-primary">
				<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
					<h2 className="text-xl font-bold text-text-primary flex items-center gap-2">
						<span className="w-1 h-6 bg-accent-primary rounded-full"></span>
						Episodes ({filteredEpisodes.length})
					</h2>

					{/* Filter Buttons */}
					<div className="flex gap-2">
						<button
							onClick={() => setFilter('all')}
							className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
								filter === 'all'
									? 'bg-accent-primary text-white'
									: 'bg-bg-primary text-text-secondary hover:text-text-primary'
							}`}>
							All ({episodes.length})
						</button>
						<button
							onClick={() => setFilter('watched')}
							className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
								filter === 'watched'
									? 'bg-accent-primary text-white'
									: 'bg-bg-primary text-text-secondary hover:text-text-primary'
							}`}>
							Watched ({episodes.filter((e) => e.watched).length})
						</button>
						<button
							onClick={() => setFilter('unwatched')}
							className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
								filter === 'unwatched'
									? 'bg-accent-primary text-white'
									: 'bg-bg-primary text-text-secondary hover:text-text-primary'
							}`}>
							Unwatched ({episodes.filter((e) => !e.watched).length})
						</button>
					</div>
				</div>
			</div>

			{/* Episodes Grid */}
			<div className="p-6">
				<div className="grid grid-cols-1 gap-3 max-h-[600px] overflow-y-auto custom-scrollbar">
					{filteredEpisodes.map((episode) => {
						const isActive = currentEpisode === episode.number;

						return (
							<button
								key={episode.number}
								onClick={() => onEpisodeSelect(episode)}
								className={`group relative flex items-center gap-4 p-4 rounded-lg transition-all hover:scale-[1.02] ${
									isActive
										? 'bg-accent-primary shadow-lg shadow-accent-primary/20'
										: 'bg-bg-primary hover:bg-bg-primary/70'
								}`}>
								{/* Thumbnail */}
								<div className="relative w-32 h-20 flex-shrink-0 rounded-lg overflow-hidden">
									<img
										src={episode.thumbnail || '/placeholder-episode.jpg'}
										alt={`Episode ${episode.number}`}
										className="w-full h-full object-cover"
									/>
									{/* Play Overlay */}
									<div
										className={`absolute inset-0 flex items-center justify-center transition-opacity ${
											isActive
												? 'opacity-100'
												: 'opacity-0 group-hover:opacity-100'
										} bg-black bg-opacity-50`}>
										<FiPlay className="w-8 h-8 text-white" />
									</div>
									{/* Watched Badge */}
									{episode.watched && !isActive && (
										<div className="absolute top-2 right-2 bg-green-500 rounded-full p-1">
											<FiCheck className="w-3 h-3 text-white" />
										</div>
									)}
								</div>

								{/* Episode Info */}
								<div className="flex-1 text-left">
									<div className="flex items-center justify-between mb-1">
										<h3
											className={`font-bold text-lg ${
												isActive ? 'text-white' : 'text-text-primary'
											}`}>
											Episode {episode.number}
										</h3>
										{episode.duration && (
											<div
												className={`flex items-center gap-1 text-sm ${
													isActive
														? 'text-white/80'
														: 'text-text-secondary'
												}`}>
												<FiClock className="w-4 h-4" />
												<span>{episode.duration}</span>
											</div>
										)}
									</div>

									{episode.title && (
										<p
											className={`text-sm mb-2 font-medium ${
												isActive ? 'text-white/90' : 'text-text-secondary'
											}`}>
											{episode.title}
										</p>
									)}

									{episode.description && (
										<p
											className={`text-sm line-clamp-2 ${
												isActive ? 'text-white/70' : 'text-text-secondary'
											}`}>
											{episode.description}
										</p>
									)}
								</div>

								{/* Active Indicator */}
								{isActive && (
									<div className="absolute left-0 top-0 bottom-0 w-1 bg-white rounded-r-full"></div>
								)}
							</button>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default EpisodesList;
