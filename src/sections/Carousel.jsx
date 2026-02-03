import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper/modules";
import { useTranslation } from 'react-i18next';

const sliderData = [
  {
    id: 1,
    image: "/assets/1.jpeg",
  },
  {
    id: 2,
    image: "/assets/2.jpeg", 
  },
  {
    id: 3,
    image: "/assets/3.jpeg", 
  },
  {
    id: 4,
    image: "/assets/4.jpeg", 
  },
  {
    id: 5,
    image: "/assets/5.jpeg",
  },
  {
    id: 6,
    image: "/assets/6.jpeg",
  },
    {
    id: 7,
    image: "/assets/7.jpeg",
  },
    {
    id: 8,
    image: "/assets/8.jpeg",
  },
    {
    id: 9,
    image: "/assets/9.jpeg",
  },
    {
    id: 10,
    image: "/assets/10.jpeg",
  },
    {
    id: 11,
    image: "/assets/11.jpeg",
  },
    {
    id: 12,
    image: "/assets/12.jpeg",
  },
    {
    id: 13,
    image: "/assets/13.jpeg",
  },
    {
    id: 14,
    image: "/assets/14.jpeg",
  },
    {
    id: 15,
    image: "/assets/15.jpeg",
  },
    {
    id: 16,
    image: "/assets/16.jpeg",
  },
    {
    id: 17,
    image: "/assets/17.jpeg",
  },
    {
    id: 18,
    image: "/assets/18.jpeg",
  },
    {
    id: 19,
    image: "/assets/19.jpeg",
  },
    
    

];

const Carousel = () => {
  const swiperRef = useRef(null);
const {t,i18n} = useTranslation("carousel");
  return (
    <div className="relative w-full max-w-7xl mx-auto py-16 px-4">
      
    
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white -z-10"></div>
      
      <div className="text-center mb-12">
        <h1 className={`text-4xl md:text-5xl font-bold text-green-800 ${(i18n.language) === "ur" ? "mb-6" : "mb-3"}` }>
          {t("exploreZikr")} <span className="text-green-600">{t("appFeature")}</span>
        </h1>
        <p className="text-green-600 text-lg max-w-2xl mx-auto">
        {t("carouselHeading")}
        </p>
      </div>

      {/* Swiper Slider */}
      <Swiper
      key={i18n.language}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 200,
          modifier: 2.5,
          slideShadows: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        className="!pb-16"
      >
        {sliderData.map((item) => (
          <SwiperSlide 
            key={item.id} 
            className="!w-[300px] !h-[400px] md:!w-[400px] md:!h-[500px] lg:!w-[400px] lg:!h-[400px]"
          >
            {/* Card Container*/}
            <div className="relative w-full h-full rounded-3xl overflow-hidden">
              
              {/* Image Only */}
              <img 
                src={item.image} 
                alt={`Slide ${item.id}`}
                className="w-full h-full object-contain"
              />
              
        
              <div className="absolute inset-0 bg-white/1 group-hover:bg-white/10 transition-all duration-300"></div>
              
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation */}
      <div className="flex flex-col items-center">
        
        {/* Arrow Buttons */}
        <div className="flex items-center justify-center space-x-8">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className={`group w-16 h-16 bg-gradient-to-r from-green-800 to-green-600 rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 ${i18n.dir(i18n.language) === "rtl" ? "rotate-180" : ""}`}
          >
            <svg className="w-8 h-8 text-white transform -translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          {/* Slide Counter */}
       
          
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className={`group w-16 h-16 bg-gradient-to-r from-green-800 to-green-600 rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 ${i18n.dir(i18n.language) === "rtl" ? "rotate-180" : ""} ` }
          >
            <svg className="w-8 h-8 text-white transform translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        
      </div>
      
    </div>
  );
};

export default Carousel;