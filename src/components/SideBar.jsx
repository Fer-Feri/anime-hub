import { MdKeyboardArrowRight } from 'react-icons/md';
import { CiSearch } from 'react-icons/ci';
import narutoPoster from '../assets/images/naruto-poster.jpg';

const SideBar = () => {
	return (
		<aside className="h-full bg-background-card py-4 px-3 flex flex-col gap-4 overflow-y-auto">
			{/* Popular Anime */}
			<div className="flex flex-col gap-3">
				<h3 className="text-lg font-semibold text-text-primary">Popular Anime</h3>

				{/* Anime Cards */}
				<div className="flex flex-col gap-3">
					{/* Card 1 */}
					<div className="group bg-background-dark p-3 rounded-lg border border-border-primary hover:border-accent-primary/50 hover:shadow-lg hover:shadow-accent-primary/20 transition-all cursor-pointer">
						<div className="flex gap-3">
							<img
								src={narutoPoster}
								alt="Anime"
								className="w-16 h-20 object-cover rounded-md"
							/>
							<div className="flex flex-col justify-between flex-1 min-w-0">
								<h4 className="text-sm font-semibold text-text-primary truncate">
									Naruto Shippuden
								</h4>
								<p className="text-xs text-text-secondary">500 Episodes</p>
								<div className="flex items-center gap-1 text-xs text-accent-primary">
									<span>⭐</span>
									<span>4.8</span>
								</div>
							</div>
						</div>
					</div>

					{/* بقیه کارت‌ها... */}
				</div>
				<div className="flex flex-col gap-3">
					{/* Card 1 */}
					<div className="group bg-background-dark p-3 rounded-lg border border-border-primary hover:border-accent-primary/50 hover:shadow-lg hover:shadow-accent-primary/20 transition-all cursor-pointer">
						<div className="flex gap-3">
							<img
								src={narutoPoster}
								alt="Anime"
								className="w-16 h-20 object-cover rounded-md"
							/>
							<div className="flex flex-col justify-between flex-1 min-w-0">
								<h4 className="text-sm font-semibold text-text-primary truncate">
									Naruto Shippuden
								</h4>
								<p className="text-xs text-text-secondary">500 Episodes</p>
								<div className="flex items-center gap-1 text-xs text-accent-primary">
									<span>⭐</span>
									<span>4.8</span>
								</div>
							</div>
						</div>
					</div>

					{/* بقیه کارت‌ها... */}
				</div>

				{/* See More Button */}
				<button className="mt-2 py-2 text-sm text-accent-primary hover:text-accent-primary/80 font-medium transition-colors">
					See More →
				</button>
			</div>

			{/* Watchlist */}
			<div className="flex flex-col gap-3 mt-4">
				<h3 className="text-lg font-semibold text-text-primary">My Watchlist</h3>

				{/* Watchlist Cards */}
				{/* 1 */}
				<div className="flex flex-col gap-3">
					<div className="group bg-background-dark p-3 rounded-lg border border-border-primary hover:border-accent-primary/50 hover:shadow-lg hover:shadow-accent-primary/20 transition-all cursor-pointer">
						<div className="flex gap-3">
							<img
								src={narutoPoster}
								alt="Anime"
								className="w-16 h-20 object-cover rounded-md"
							/>
							<div className="flex flex-col justify-between flex-1 min-w-0">
								<h4 className="text-sm font-semibold text-text-primary truncate">
									Naruto Shippuden
								</h4>
								<p className="text-xs text-text-secondary">500 Episodes</p>
								<div className="flex items-center gap-1 text-xs text-accent-primary">
									<span>⭐</span>
									<span>4.8</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* 1 */}
				<div className="flex flex-col gap-3">
					<div className="group bg-background-dark p-3 rounded-lg border border-border-primary hover:border-accent-primary/50 hover:shadow-lg hover:shadow-accent-primary/20 transition-all cursor-pointer">
						<div className="flex gap-3">
							<img
								src={narutoPoster}
								alt="Anime"
								className="w-16 h-20 object-cover rounded-md"
							/>
							<div className="flex flex-col justify-between flex-1 min-w-0">
								<h4 className="text-sm font-semibold text-text-primary truncate">
									Naruto Shippuden
								</h4>
								<p className="text-xs text-text-secondary">500 Episodes</p>
								<div className="flex items-center gap-1 text-xs text-accent-primary">
									<span>⭐</span>
									<span>4.8</span>
								</div>
							</div>
						</div>
					</div>
				</div>

				<button className="mt-2 py-2 text-sm text-accent-primary hover:text-accent-primary/80 font-medium transition-colors">
					See More →
				</button>
			</div>
		</aside>
	);
};

export default SideBar;
