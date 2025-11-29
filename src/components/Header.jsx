import animeHubLogo from '../assets/logo/anime-hub-logo.png';

import { useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import { IoMdMenu } from 'react-icons/io';
import Menu from './Menu';

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<>
			<header className="bg-background-card border-b border-border-primary px-4 py-6 flex items-center gap-2 md:gap-6">
				{/* LOGO */}
				<div className="flex items-center gap-2 flex-shrink-0">
					<img src={animeHubLogo} className="w-10 h-10 rounded-full" alt="logo" />
					<h1 className="font-bold text-text-primary hidden md:block">ANIME HUB</h1>
				</div>
				{/* Search Box */}
				<div className="flex-1">
					<div className="relative flex items-center bg-background-dark border border-border-primary rounded-lg px-3 focus-within:border-accent-primary focus-within:ring-1 focus-within:ring-accent-primary transition-all h-10">
						<CiSearch className="w-5 h-5 text-text-secondary mr-2" />
						<input
							type="text"
							placeholder="Search anime..."
							className="flex-1 w-full bg-transparent outline-none text-text-primary placeholder:text-text-secondary text-sm"
						/>
					</div>
				</div>

				{/* Menu Icon */}
				<IoMdMenu
					className="w-10 h-10 cursor-pointer flex-shrink-0 text-text-primary hover:text-accent-primary transition-colors "
					onClick={() => setIsMenuOpen(true)}
				/>
			</header>

			{/* Menu Component */}
			{isMenuOpen && <Menu onClose={() => setIsMenuOpen(false)} />}
		</>
	);
};

export default Header;
