import { FiStar, FiCalendar, FiTv, FiClock, FiTag } from 'react-icons/fi';

const AnimeInfo = ({ anime }) => {
	// If no data
	if (!anime) {
		return (
			<div className="bg-bg-secondary rounded-lg p-6">
				<div className="animate-pulse">
					<div className="h-8 bg-gray-700 rounded w-3/4 mb-4"></div>
					<div className="h-4 bg-gray-700 rounded w-full mb-2"></div>
					<div className="h-4 bg-gray-700 rounded w-5/6"></div>
				</div>
			</div>
		);
	}

	return (
		<div className="bg-bg-secondary rounded-lg overflow-hidden">
			{/* Header with Banner */}
			<div className="relative h-48 bg-gradient-to-r from-accent-primary to-accent-secondary">
				{anime.bannerImage && (
					<img
						src={anime.bannerImage}
						alt={anime.title}
						className="w-full h-full object-cover opacity-30"
					/>
				)}
				<div className="absolute inset-0 bg-gradient-to-t from-bg-secondary to-transparent"></div>
			</div>

			{/* Content */}
			<div className="p-6 -mt-20 relative">
				{/* Poster and Title */}
				<div className="flex gap-6 mb-6">
					{/* Poster */}
					<img
						src={anime.poster || '/placeholder-anime.jpg'}
						alt={anime.title}
						className="w-32 h-44 object-cover rounded-lg shadow-lg border-2 border-accent-primary"
					/>

					{/* Title and Quick Info */}
					<div className="flex-1 mt-12">
						<h1 className="text-3xl font-bold text-text-primary mb-2">{anime.title}</h1>
						{anime.titleJapanese && (
							<p className="text-lg text-text-secondary mb-4">
								{anime.titleJapanese}
							</p>
						)}

						{/* Stats */}
						<div className="flex flex-wrap gap-4 items-center">
							{/* Score */}
							<div className="flex items-center gap-2 bg-bg-primary px-3 py-2 rounded-lg">
								<FiStar className="text-yellow-400" />
								<span className="font-bold text-text-primary">
									{anime.score || 'N/A'}
								</span>
								<span className="text-text-secondary text-sm">/ 10</span>
							</div>

							{/* Type */}
							<div className="flex items-center gap-2 bg-bg-primary px-3 py-2 rounded-lg">
								<FiTv className="text-accent-primary" />
								<span className="text-text-primary">{anime.type || 'TV'}</span>
							</div>

							{/* Episodes Count */}
							<div className="flex items-center gap-2 bg-bg-primary px-3 py-2 rounded-lg">
								<FiClock className="text-accent-secondary" />
								<span className="text-text-primary">
									{anime.episodes || '?'} Episodes
								</span>
							</div>

							{/* Status */}
							<div className="flex items-center gap-2 bg-bg-primary px-3 py-2 rounded-lg">
								<FiCalendar className="text-green-400" />
								<span className="text-text-primary">
									{anime.status || 'Unknown'}
								</span>
							</div>
						</div>
					</div>
				</div>

				{/* Synopsis */}
				<div className="mb-6">
					<h2 className="text-xl font-bold text-text-primary mb-3 flex items-center gap-2">
						<span className="w-1 h-6 bg-accent-primary rounded-full"></span>
						Synopsis
					</h2>
					<p className="text-text-secondary leading-relaxed">
						{anime.synopsis || 'No synopsis available.'}
					</p>
				</div>

				{/* Genres */}
				{anime.genres && anime.genres.length > 0 && (
					<div className="mb-6">
						<h2 className="text-xl font-bold text-text-primary mb-3 flex items-center gap-2">
							<FiTag className="text-accent-primary" />
							Genres
						</h2>
						<div className="flex flex-wrap gap-2">
							{anime.genres.map((genre, index) => (
								<span
									key={index}
									className="bg-accent-primary bg-opacity-20 text-accent-primary px-4 py-2 rounded-full text-sm font-medium hover:bg-opacity-30 transition-colors cursor-pointer">
									{genre}
								</span>
							))}
						</div>
					</div>
				)}

				{/* Additional Info */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					{/* Studio */}
					{anime.studio && (
						<div className="bg-bg-primary p-4 rounded-lg">
							<p className="text-text-secondary text-sm mb-1">Studio</p>
							<p className="text-text-primary font-medium">{anime.studio}</p>
						</div>
					)}

					{/* Year */}
					{anime.year && (
						<div className="bg-bg-primary p-4 rounded-lg">
							<p className="text-text-secondary text-sm mb-1">Release Year</p>
							<p className="text-text-primary font-medium">{anime.year}</p>
						</div>
					)}

					{/* Rating */}
					{anime.rating && (
						<div className="bg-bg-primary p-4 rounded-lg">
							<p className="text-text-secondary text-sm mb-1">Age Rating</p>
							<p className="text-text-primary font-medium">{anime.rating}</p>
						</div>
					)}

					{/* Duration */}
					{anime.duration && (
						<div className="bg-bg-primary p-4 rounded-lg">
							<p className="text-text-secondary text-sm mb-1">Duration</p>
							<p className="text-text-primary font-medium">{anime.duration}</p>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default AnimeInfo;
