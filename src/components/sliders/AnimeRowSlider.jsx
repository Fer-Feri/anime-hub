// src/components/sliders/AnimeRowSlider.jsx

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const AnimeRowSlider = ({ title, items }) => {
	return (
		<div className="mb-10">
			<h3 className="text-lg font-semibold text-text-primary mb-4">{title}</h3>

			<Swiper
				modules={[Navigation]}
				spaceBetween={15}
				slidesPerView="auto"
				grabCursor={true}
				className="w-full">
				{items.map((anime) => (
					<SwiperSlide
						key={anime.id}
						className="!w-[130px] sm:!w-[150px] md:!w-[170px] cursor-pointer">
						<div className="flex flex-col gap-2">
							<img
								src={anime.img}
								alt={anime.title}
								className="w-full h-[180px] sm:h-[200px] md:h-[220px] object-cover rounded-xl border border-border-primary hover:border-accent-primary transition-all"
							/>
							<p className="text-center text-sm text-text-primary">{anime.title}</p>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default AnimeRowSlider;
