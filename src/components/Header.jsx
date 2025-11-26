import animeHubLogo from '../assets/logo/anime-hub-logo.png';
import { BsMenuUp } from 'react-icons/bs';
import { CiSearch } from 'react-icons/ci';
import { useState } from 'react';
import Menu from './Menu';

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<div className="relative w-full flex gap-4 items-center justify-between p-3 bg-background-card border border-text-secondary rounded-lg mb-3 shadow-sm">
			{/* Logo */}
			<div className="flex items-center gap-2">
				<img
					src={animeHubLogo}
					className="w-9 h-9 rounded-full ring-2 ring-accent-primary/20"
					alt="anime-hub-logo"
				/>
				<h1 className="font-bold text-text-primary hidden md:block">ANIME HUB</h1>
			</div>

			{/* Search */}
			<div className="header-search">
				<CiSearch
					size={20}
					className="text-text-secondary transition-colors focus-within:text-accent-primary"
				/>

				<input
					type="search"
					placeholder="Search anime..."
					className="w-full bg-transparent focus:outline-none text-text-primary placeholder:text-text-secondary"
				/>
			</div>

			{/* Menu Icon */}
			<div className="relative">
				<BsMenuUp
					className="w-7 h-7 cursor-pointer text-text-primary hover:text-accent-primary transition-colors"
					onClick={() => setIsMenuOpen(!isMenuOpen)}
				/>

				{isMenuOpen && <Menu onClose={() => setIsMenuOpen(false)} />}
			</div>
		</div>
	);
};

export default Header;
