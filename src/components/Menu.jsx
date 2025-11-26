import animeHubLogo from '../assets/logo/anime-hub-logo.png';
import { IoHomeOutline, IoSettingsOutline } from 'react-icons/io5';
import { IoIosTimer } from 'react-icons/io';
import { RiUserCommunityLine } from 'react-icons/ri';
import { LuGrid2X2Plus } from 'react-icons/lu';
import { BiCameraMovie } from 'react-icons/bi';
import { TbMovie } from 'react-icons/tb';
import { FiDownload } from 'react-icons/fi';
import { FaPowerOff } from 'react-icons/fa6';
import { IoClose } from 'react-icons/io5';

const Menu = ({ onClose }) => {
	return (
		<>
			{/* Overlay با fade-in */}
			<div className="fixed inset-0 bg-black/95 z-40 animate-fadeIn" onClick={onClose} />

			{/* Menu Panel با slide-down */}
			<div className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-background-card border-l border-border-primary shadow-2xl z-50 overflow-y-auto animate-slideDown">
				{/* Header */}
				<div className="flex items-center justify-between p-4 border-b border-border-primary sticky top-0 bg-background-card">
					<div className="flex items-center gap-2">
						<img src={animeHubLogo} className="w-9 h-9 rounded-full" alt="logo" />
						<h1 className="font-bold text-text-primary">ANIME HUB</h1>
					</div>
					<IoClose
						className="w-6 h-6 cursor-pointer text-text-secondary hover:text-text-primary transition-colors"
						onClick={onClose}
					/>
				</div>

				{/* Menu Items */}
				<div className="p-4 space-y-6">
					{/* MENU */}
					<div>
						<h3 className="font-bold mb-3 text-text-secondary text-xs uppercase tracking-wider">
							Menu
						</h3>
						<div className="space-y-1">
							<a
								href="#"
								className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-background-dark transition-colors">
								<IoHomeOutline className="text-xl text-accent-primary" />
								<p className="font-normal text-text-primary">Home</p>
							</a>
							<a
								href="#"
								className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-background-dark transition-colors">
								<RiUserCommunityLine className="text-xl text-accent-primary" />
								<p className="font-normal text-text-primary">Community</p>
							</a>
							<a
								href="#"
								className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-background-dark transition-colors">
								<LuGrid2X2Plus className="text-xl text-accent-primary" />
								<p className="font-normal text-text-primary">Events</p>
							</a>
						</div>
					</div>

					{/* CATEGORY */}
					<div>
						<h3 className="font-bold mb-3 text-text-secondary text-xs uppercase tracking-wider">
							Categories
						</h3>
						<div className="space-y-1">
							<a
								href="#"
								className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-background-dark transition-colors">
								<BiCameraMovie className="text-xl text-accent-primary" />
								<p className="font-normal text-text-primary">Movies</p>
							</a>
							<a
								href="#"
								className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-background-dark transition-colors">
								<TbMovie className="text-xl text-accent-primary" />
								<p className="font-normal text-text-primary">Series</p>
							</a>
						</div>
					</div>

					{/* LIBRARY */}
					<div>
						<h3 className="font-bold mb-3 text-text-secondary text-xs uppercase tracking-wider">
							Library
						</h3>
						<div className="space-y-1">
							<a
								href="#"
								className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-background-dark transition-colors">
								<IoIosTimer className="text-xl text-accent-primary" />
								<p className="font-normal text-text-primary">Recent</p>
							</a>
							<a
								href="#"
								className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-background-dark transition-colors">
								<FiDownload className="text-xl text-accent-primary" />
								<p className="font-normal text-text-primary">Downloaded</p>
							</a>
						</div>
					</div>

					{/* GENERAL */}
					<div>
						<h3 className="font-bold mb-3 text-text-secondary text-xs uppercase tracking-wider">
							General
						</h3>
						<div className="space-y-1">
							<a
								href="#"
								className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-background-dark transition-colors">
								<IoSettingsOutline className="text-xl text-accent-primary" />
								<p className="font-normal text-text-primary">Settings</p>
							</a>
							<a
								href="#"
								className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-background-dark transition-colors">
								<FaPowerOff className="text-xl text-accent-primary" />
								<p className="font-normal text-text-primary">Sign in</p>
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Menu;
