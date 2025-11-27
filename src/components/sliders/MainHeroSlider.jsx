// src/components/sliders/MainHeroSlider.jsx

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { FaPlay } from 'react-icons/fa';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const MainHeroSlider = ({ slides }) => {
	return (
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
							<img
								src={slide.image}
								alt={slide.title}
								className="absolute inset-0 w-full h-full object-cover"
							/>

							<div className="absolute inset-0 bg-gradient-to-r from-background-dark via-background-dark/80 to-transparent"></div>

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
	);
};

export default MainHeroSlider;
