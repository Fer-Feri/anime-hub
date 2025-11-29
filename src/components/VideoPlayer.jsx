import { useState, useRef, useEffect } from 'react';
import {
	FiPlay,
	FiPause,
	FiVolume2,
	FiVolumeX,
	FiMaximize,
	FiMinimize,
	FiSkipBack,
	FiSkipForward,
} from 'react-icons/fi';

const VideoPlayer = ({ videoUrl, title, onTimeUpdate }) => {
	const [isPlaying, setIsPlaying] = useState(false);
	const [volume, setVolume] = useState(1);
	const [isMuted, setIsMuted] = useState(false);
	const [played, setPlayed] = useState(0);
	const [buffered, setBuffered] = useState(0);
	const [duration, setDuration] = useState(0);
	const [isFullscreen, setIsFullscreen] = useState(false);
	const [showControls, setShowControls] = useState(true);
	const [isReady, setIsReady] = useState(false);

	const videoRef = useRef(null);
	const containerRef = useRef(null);
	const controlsTimeoutRef = useRef(null);

	// Format time (seconds to MM:SS)
	const formatTime = (seconds) => {
		if (!seconds || isNaN(seconds)) return '0:00';
		const mins = Math.floor(seconds / 60);
		const secs = Math.floor(seconds % 60);
		return `${mins}:${secs.toString().padStart(2, '0')}`;
	};

	// Toggle play/pause
	const togglePlay = () => {
		if (!isReady || !videoRef.current) return;
		if (isPlaying) {
			videoRef.current.pause();
		} else {
			videoRef.current.play();
		}
	};

	// Toggle mute
	const toggleMute = () => setIsMuted(!isMuted);

	// Handle volume change
	const handleVolumeChange = (e) => {
		const newVolume = parseFloat(e.target.value);
		setVolume(newVolume);
		setIsMuted(newVolume === 0);
		if (videoRef.current) {
			videoRef.current.volume = newVolume;
		}
	};

	// Seek to specific time
	const handleSeek = (e) => {
		const newPlayed = parseFloat(e.target.value);
		setPlayed(newPlayed);
		if (videoRef.current && duration) {
			videoRef.current.currentTime = newPlayed * duration;
		}
	};

	// Skip forward/backward
	const skipTime = (seconds) => {
		if (!isReady || !videoRef.current) return;
		const newTime = Math.max(0, Math.min(videoRef.current.currentTime + seconds, duration));
		videoRef.current.currentTime = newTime;
	};

	// Toggle fullscreen
	const toggleFullscreen = () => {
		if (!document.fullscreenElement) {
			containerRef.current?.requestFullscreen();
			setIsFullscreen(true);
		} else {
			document.exitFullscreen();
			setIsFullscreen(false);
		}
	};

	// Auto-hide controls
	const resetControlsTimeout = () => {
		setShowControls(true);
		if (controlsTimeoutRef.current) {
			clearTimeout(controlsTimeoutRef.current);
		}
		controlsTimeoutRef.current = setTimeout(() => {
			if (isPlaying) setShowControls(false);
		}, 3000);
	};

	// Keyboard shortcuts
	useEffect(() => {
		const handleKeyPress = (e) => {
			if (!isReady || !videoRef.current) return;

			switch (e.key.toLowerCase()) {
				case ' ':
					e.preventDefault();
					if (isPlaying) {
						videoRef.current.pause();
					} else {
						videoRef.current.play();
					}
					break;
				case 'f':
					if (!document.fullscreenElement) {
						containerRef.current?.requestFullscreen();
						setIsFullscreen(true);
					} else {
						document.exitFullscreen();
						setIsFullscreen(false);
					}
					break;
				case 'm':
					setIsMuted((prev) => !prev);
					break;
				case 'arrowleft':
					if (videoRef.current) {
						videoRef.current.currentTime = Math.max(
							0,
							videoRef.current.currentTime - 10
						);
					}
					break;
				case 'arrowright':
					if (videoRef.current) {
						videoRef.current.currentTime = Math.min(
							duration,
							videoRef.current.currentTime + 10
						);
					}
					break;
				default:
					break;
			}
		};

		window.addEventListener('keydown', handleKeyPress);
		return () => window.removeEventListener('keydown', handleKeyPress);
	}, [isPlaying, isReady, duration]);

	useEffect(() => {
		const handleFullscreenChange = () => {
			setIsFullscreen(!!document.fullscreenElement);
		};

		document.addEventListener('fullscreenchange', handleFullscreenChange);
		return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
	}, []);

	// ✅ Cleanup on unmount
	useEffect(() => {
		return () => {
			if (controlsTimeoutRef.current) {
				clearTimeout(controlsTimeoutRef.current);
			}
		};
	}, []);

	// Update volume when muted changes
	useEffect(() => {
		if (videoRef.current) {
			videoRef.current.muted = isMuted;
		}
	}, [isMuted]);

	return (
		<div
			ref={containerRef}
			className="relative w-full bg-black aspect-video"
			onMouseMove={resetControlsTimeout}
			onMouseLeave={() => isPlaying && setShowControls(false)}>
			{/* HTML5 Video Player */}
			<video
				ref={videoRef}
				src={videoUrl}
				className="w-full h-full"
				onLoadedMetadata={() => {
					console.log('✅ Video Ready');
					if (videoRef.current) {
						setDuration(videoRef.current.duration);
						videoRef.current.volume = volume;
						videoRef.current.muted = isMuted;
						setIsReady(true);
					}
				}}
				onPlay={() => {
					console.log('▶️ Playing');
					setIsPlaying(true);
				}}
				onPause={() => {
					console.log('⏸️ Paused');
					setIsPlaying(false);
				}}
				onTimeUpdate={() => {
					if (videoRef.current) {
						const currentTime = videoRef.current.currentTime;
						const dur = videoRef.current.duration;
						const playedRatio = dur > 0 ? currentTime / dur : 0;
						setPlayed(playedRatio);
						setBuffered(
							videoRef.current.buffered.length > 0
								? videoRef.current.buffered.end(
										videoRef.current.buffered.length - 1
								  ) / dur
								: 0
						);
						if (onTimeUpdate) {
							onTimeUpdate({ played: playedRatio, duration: dur });
						}
					}
				}}
				onError={(e) => {
					console.error('❌ Video Error:', e);
				}}
				playsInline
			/>

			{/* Play/Pause Overlay */}
			<div
				className="absolute inset-0 flex items-center justify-center cursor-pointer"
				onClick={togglePlay}>
				{!isPlaying && isReady && (
					<div className="bg-black/50 rounded-full p-6 hover:bg-black/70 transition-colors">
						<FiPlay className="text-white text-6xl" />
					</div>
				)}
			</div>

			{/* Loading State */}
			{!isReady && (
				<div className="absolute inset-0 flex items-center justify-center bg-black/80">
					<div className="text-white text-lg">Loading...</div>
				</div>
			)}

			{/* Controls */}
			<div
				className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4 transition-opacity duration-300 ${
					showControls || !isPlaying ? 'opacity-100' : 'opacity-0'
				}`}>
				{/* Title */}
				{title && (
					<div className="text-white font-medium mb-2 text-sm md:text-base">{title}</div>
				)}
				{/* Progress Bar */}
				<div className="mb-3">
					<input
						type="range"
						min={0}
						max={0.999999}
						step="any"
						value={played}
						onChange={handleSeek}
						disabled={!isReady}
						className="slider w-full"
						style={{
							background: `linear-gradient(to right, var(--accent-primary) 0%, var(--accent-primary) ${
								played * 100
							}%, rgba(255, 255, 255, 0.2) ${
								played * 100
							}%, rgba(255, 255, 255, 0.2) ${
								buffered * 100
							}%, rgba(255, 255, 255, 0.1) ${
								buffered * 100
							}%, rgba(255, 255, 255, 0.1) 100%)`,
						}}
					/>
				</div>{' '}
				{/* Control Buttons */}
				<div className="flex items-center justify-between gap-2">
					{/* Left: Play/Pause + Skip Buttons + Time */}
					<div className="flex items-center gap-2 md:gap-3">
						<button
							onClick={togglePlay}
							disabled={!isReady}
							className="text-white hover:text-accent-primary transition-colors p-1 disabled:opacity-50 disabled:cursor-not-allowed">
							{isPlaying ? <FiPause size={24} /> : <FiPlay size={24} />}
						</button>
						<button
							onClick={() => skipTime(-10)}
							disabled={!isReady}
							className="text-white hover:text-accent-primary transition-colors p-1 disabled:opacity-50">
							<FiSkipBack size={20} />
						</button>
						<button
							onClick={() => skipTime(10)}
							disabled={!isReady}
							className="text-white hover:text-accent-primary transition-colors p-1 disabled:opacity-50">
							<FiSkipForward size={20} />
						</button>{' '}
						<div className="text-white text-sm md:text-base">
							{formatTime(played * duration)} / {formatTime(duration)}
						</div>
					</div>

					{/* Right: Volume + Fullscreen */}
					<div className="flex items-center gap-2 md:gap-3">
						<div className="flex items-center gap-2">
							<button
								onClick={toggleMute}
								className="text-white hover:text-accent-primary transition-colors p-1">
								{isMuted || volume === 0 ? (
									<FiVolumeX size={20} />
								) : (
									<FiVolume2 size={20} />
								)}
							</button>
							<input
								type="range"
								min={0}
								max={1}
								step={0.01}
								value={isMuted ? 0 : volume}
								onChange={handleVolumeChange}
								className="slider w-16 md:w-20"
								style={{
									background: `linear-gradient(to right, var(--accent-primary) 0%, var(--accent-primary) ${
										(isMuted ? 0 : volume) * 100
									}%, rgba(255, 255, 255, 0.2) ${
										(isMuted ? 0 : volume) * 100
									}%, rgba(255, 255, 255, 0.2) 100%)`,
								}}
							/>
						</div>

						<button
							onClick={toggleFullscreen}
							className="text-white hover:text-accent-primary transition-colors p-1">
							{isFullscreen ? <FiMinimize size={20} /> : <FiMaximize size={20} />}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default VideoPlayer;
