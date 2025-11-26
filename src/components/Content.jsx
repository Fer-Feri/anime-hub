import { IoMdNotificationsOutline } from 'react-icons/io';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { FaPlay } from 'react-icons/fa';

import kakashiLogo from '../assets/images/kakashi-logo.jpg';
import narutoSlider from '../assets/images/naruto-slider.jpg';

const Content = () => {
	const slides = [
		{
			id: 1,
			title: 'Naruto',
			seasons: '2 Seasons',
			episodes: '700 Episodes',
			description:
				'In this new action-comedy, everything about a young man named Saitama screams "AVERAGE," from his lifeless expression, to his bald head, to his unimpressive physique.',
			image: narutoSlider,
			tags: ['STORY', 'ACTORS'],
		},
		{
			id: 2,
			title: 'Naruto baka',
			seasons: '2 Seasons',
			episodes: '700 Episodes',
			description:
				'In this new action-comedy, everything about a young man named Saitama screams "AVERAGE," from his lifeless expression, to his bald head, to his unimpressive physique.',
			image: narutoSlider,
			tags: ['STORY', 'ACTORS'],
		},
		// سایر اسلایدها...
	];

	return (
		<div className="flex flex-col h-full gap-6 border-b lg:border-b-0 lg:border-r border-border-primary overflow-hidden">
			{/* top content */}
			<div className="flex justify-between items-center p-6 flex-shrink-0">
				{/* left */}
				<div className="flex gap-3">
					<p className="active-link-content cursor-pointer">Movies</p>
					<p className="cursor-pointer">Series</p>
				</div>
				{/* right */}
				<div className="flex gap-3">
					<div className="relative">
						<IoMdNotificationsOutline className="w-7 h-7 cursor-pointer hover:text-accent-primary transition-colors" />
						<span className="absolute -top-0 right-0 w-2 h-2 bg-red-500 rounded-full border-2 border-background-card"></span>
					</div>

					<img
						src={kakashiLogo}
						className="w-7 h-7 rounded-full cursor-pointer ring-2 ring-transparent hover:ring-accent-primary/50 transition-all"
						alt="account"
					/>
				</div>
			</div>

			{/* slider */}
			<div className="px-6 flex-shrink-0 overflow-hidden">
				<Swiper
					modules={[Navigation, Pagination, Autoplay, EffectFade]}
					spaceBetween={0}
					slidesPerView={1}
					pagination={{ clickable: true }}
					autoplay={{ delay: 5000, disableOnInteraction: false }}
					effect="fade"
					fadeEffect={{ crossFade: true }}
					loop={true}
					className="rounded-2xl overflow-hidden w-full">
					{slides.map((slide) => (
						<SwiperSlide key={slide.id}>
							<div className="relative h-[350px] md:h-[450px]">
								{/* Background Image */}
								<img
									src={slide.image}
									alt={slide.title}
									className="absolute inset-0 w-full h-full object-cover"
								/>

								{/* Overlay Gradient */}
								<div className="absolute inset-0 bg-gradient-to-r from-background-dark via-background-dark/80 to-transparent"></div>

								{/* Content */}
								<div className="relative h-full flex flex-col justify-center p-8 md:p-12 max-w-2xl">
									<h2 className="mb-4 font-bold text-3xl md:text-4xl">
										{slide.title}
									</h2>

									<div className="flex gap-3 text-sm text-text-secondary mb-4">
										<span>{slide.seasons}</span>
										<span>|</span>
										<span>{slide.episodes}</span>
									</div>

									<div className="flex gap-2 mb-4">
										{slide.tags.map((tag, index) => (
											<span
												key={index}
												className="px-3 py-1 bg-background-card/50 backdrop-blur-sm border border-border-primary rounded-full text-xs text-text-primary">
												{tag}
											</span>
										))}
									</div>

									<p className="text-text-secondary text-sm md:text-base mb-6 line-clamp-3">
										{slide.description}
									</p>

									<button className="flex items-center gap-2 w-fit px-6 py-3 bg-accent-primary hover:bg-accent-primary/90 text-white rounded-full font-semibold transition-all hover:scale-105">
										<FaPlay size={14} />
										<span>Watch Now</span>
									</button>
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>

			{/* animes section - با اسکرول */}
			<div className="flex-1 overflow-y-auto px-6 pb-6">
				{/* محتوای بقیه صفحه اینجا میاد */}
			</div>
		</div>
	);
};

export default Content;
