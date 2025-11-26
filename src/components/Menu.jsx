import { useState } from 'react';
import animeHubLogo from '../assets/logo/anime-hub-logo.png';

import { IoHomeOutline } from 'react-icons/io5';
import { RiUserCommunityLine } from 'react-icons/ri';
import { LuGrid2X2Plus } from 'react-icons/lu';
import { BiCameraMovie } from 'react-icons/bi';
import { TbMovie } from 'react-icons/tb';
import { IoIosTimer } from 'react-icons/io';
import { FiDownload } from 'react-icons/fi';
import { IoSettingsOutline } from 'react-icons/io5';
import { FaPowerOff } from 'react-icons/fa6';

const Menu = () => {
	const [isExpanded, setIsExpanded] = useState(false);

	return (
		<div
			className={`transition-all duration-300 
			${isExpanded ? 'basis-[50%] md:basis-[15%]' : 'basis-[15%] md:basis-[5%]'} 
			flex flex-col items-center gap-3 py-3 overflow-x-hidden
			md:hover:basis-[15%] group`}
			onMouseEnter={() => window.innerWidth >= 768 && setIsExpanded(true)}
			onMouseLeave={() => window.innerWidth >= 768 && setIsExpanded(false)}
			onClick={() => window.innerWidth < 768 && setIsExpanded(!isExpanded)}>
			{/* LOGO */}
			<div className="flex items-center gap-2 px-3">
				<img
					src={animeHubLogo}
					className="w-9 h-9 rounded-full flex-shrink-0 !cursor-default"
					alt="anime-hub-logo"
				/>
				<h1
					className={`font-bold whitespace-nowrap transition-all duration-300 ${
						isExpanded ? 'opacity-100 w-auto' : 'opacity-0 w-0'
					} md:group-hover:opacity-100 md:group-hover:w-auto`}>
					ANIME HUB
				</h1>
			</div>

			{/* MENU */}
			<div className={` w-full pl-4 ${isExpanded ? 'mt-6 w-full pl-4' : 'mt-0'}`}>
				<h3
					className={`font-bold mb-3 text-text-secondary text-sm transition-all duration-300 ${
						isExpanded ? 'opacity-100' : 'opacity-0'
					} md:group-hover:opacity-100`}>
					Menu
				</h3>
				<a
					href="#"
					className="flex items-center gap-3 mb-3 py-2 pr-4 border-r-4 border-r-transparent hover:border-accent-primary hover:text-accent-primary transition-all">
					<IoHomeOutline className="text-xl flex-shrink-0" />
					<p
						className={`font-normal whitespace-nowrap transition-all duration-300 ${
							isExpanded ? 'opacity-100 w-auto' : 'opacity-0 w-0'
						} md:group-hover:opacity-100 md:group-hover:w-auto`}>
						Home
					</p>
				</a>
				<a
					href="#"
					className="flex items-center gap-3 mb-3 py-2 pr-4 border-r-4 border-r-transparent hover:border-accent-primary hover:text-accent-primary transition-all">
					<RiUserCommunityLine className="text-xl flex-shrink-0" />
					<p
						className={`font-normal whitespace-nowrap transition-all duration-300 ${
							isExpanded ? 'opacity-100 w-auto' : 'opacity-0 w-0'
						} md:group-hover:opacity-100 md:group-hover:w-auto`}>
						Community
					</p>
				</a>
				<a
					href="#"
					className="flex items-center gap-3 py-2 pr-4 border-r-4 border-r-transparent hover:border-accent-primary hover:text-accent-primary transition-all">
					<LuGrid2X2Plus className="text-xl flex-shrink-0" />
					<p
						className={`font-normal whitespace-nowrap transition-all duration-300 ${
							isExpanded ? 'opacity-100 w-auto' : 'opacity-0 w-0'
						} md:group-hover:opacity-100 md:group-hover:w-auto`}>
						Events
					</p>
				</a>
			</div>

			{/* CATEGORY */}
			<div className={` w-full pl-4 ${isExpanded ? 'mt-6 w-full pl-4' : 'mt-0'}`}>
				<h3
					className={`font-bold mb-3 text-text-secondary text-sm transition-all duration-300 ${
						isExpanded ? 'opacity-100' : 'opacity-0'
					} md:group-hover:opacity-100`}>
					Categories
				</h3>
				<a
					href="#"
					className="flex items-center gap-3 mb-3 py-2 pr-4 border-r-4 border-r-transparent hover:border-accent-primary hover:text-accent-primary transition-all">
					<BiCameraMovie className="text-xl flex-shrink-0" />
					<p
						className={`font-normal whitespace-nowrap transition-all duration-300 ${
							isExpanded ? 'opacity-100 w-auto' : 'opacity-0 w-0'
						} md:group-hover:opacity-100 md:group-hover:w-auto`}>
						Movies
					</p>
				</a>
				<a
					href="#"
					className="flex items-center gap-3 py-2 pr-4 border-r-4 border-r-transparent hover:border-accent-primary hover:text-accent-primary transition-all">
					<TbMovie className="text-xl flex-shrink-0" />
					<p
						className={`font-normal whitespace-nowrap transition-all duration-300 ${
							isExpanded ? 'opacity-100 w-auto' : 'opacity-0 w-0'
						} md:group-hover:opacity-100 md:group-hover:w-auto`}>
						Series
					</p>
				</a>
			</div>

			{/* LIBRARY */}
			<div className={` w-full pl-4 ${isExpanded ? 'mt-6 w-full pl-4' : 'mt-0'}`}>
				<h3
					className={`font-bold mb-3 text-text-secondary text-sm transition-all duration-300 ${
						isExpanded ? 'opacity-100' : 'opacity-0'
					} md:group-hover:opacity-100`}>
					LIBRARY
				</h3>
				<a
					href="#"
					className="flex items-center gap-3 mb-3 py-2 pr-4 border-r-4 border-r-transparent hover:border-accent-primary hover:text-accent-primary transition-all">
					<IoIosTimer className="text-xl flex-shrink-0" />
					<p
						className={`font-normal whitespace-nowrap transition-all duration-300 ${
							isExpanded ? 'opacity-100 w-auto' : 'opacity-0 w-0'
						} md:group-hover:opacity-100 md:group-hover:w-auto`}>
						Recent
					</p>
				</a>
				<a
					href="#"
					className="flex items-center gap-3 py-2 pr-4 border-r-4 border-r-transparent hover:border-accent-primary hover:text-accent-primary transition-all">
					<FiDownload className="text-xl flex-shrink-0" />
					<p
						className={`font-normal whitespace-nowrap transition-all duration-300 ${
							isExpanded ? 'opacity-100 w-auto' : 'opacity-0 w-0'
						} md:group-hover:opacity-100 md:group-hover:w-auto`}>
						Downloaded
					</p>
				</a>
			</div>

			{/* GENERAL */}
			<div className={` w-full pl-4 ${isExpanded ? 'mt-6 w-full pl-4' : 'mt-0'}`}>
				<h3
					className={`font-bold mb-3 text-text-secondary text-sm transition-all duration-300 ${
						isExpanded ? 'opacity-100' : 'opacity-0'
					} md:group-hover:opacity-100`}>
					GENERAL
				</h3>
				<a
					href="#"
					className="flex items-center gap-3 mb-3 py-2 pr-4 border-r-4 border-r-transparent hover:border-accent-primary hover:text-accent-primary transition-all">
					<IoSettingsOutline className="text-xl flex-shrink-0" />
					<p
						className={`font-normal whitespace-nowrap transition-all duration-300 ${
							isExpanded ? 'opacity-100 w-auto' : 'opacity-0 w-0'
						} md:group-hover:opacity-100 md:group-hover:w-auto`}>
						Settings
					</p>
				</a>
				<a
					href="#"
					className="flex items-center gap-3 py-2 pr-4 border-r-4 border-r-transparent hover:border-accent-primary hover:text-accent-primary transition-all">
					<FaPowerOff className="text-xl flex-shrink-0" />
					<p
						className={`font-normal whitespace-nowrap transition-all duration-300 ${
							isExpanded ? 'opacity-100 w-auto' : 'opacity-0 w-0'
						} md:group-hover:opacity-100 md:group-hover:w-auto`}>
						Sign in
					</p>
				</a>
			</div>
		</div>
	);
};

export default Menu;
