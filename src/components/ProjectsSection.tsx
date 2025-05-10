import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { projects } from '../constants';
import ProjectCard from './ProjectCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const ProjectsSection: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
 
  const handleClick = () => {
    navigate('/services');
  };
 
  return (
    <section id="projects" className="relative py-20 bg-[#050816]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t('projects.title')} <span className="text-fuchsia-400">{t('projects.subtitle')}</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            {t('projects.description')}
          </p>
        </div>
        
        <Swiper
  spaceBetween={30}
  slidesPerView={1}
  breakpoints={{
    640: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  }}
  loop={true}
  autoplay={{
    delay: 3000,
    disableOnInteraction: false,
  }}
  pagination={{ clickable: true }}
  navigation={true}
  modules={[Autoplay, Pagination, Navigation]}
  className="mySwiper"
>
  {projects.map((project, index) => (
    <SwiperSlide key={project.id}>
      <ProjectCard project={project} index={index} />
    </SwiperSlide>
  ))}
</Swiper>
        <div className="flex justify-center mt-12">
           <button
      onClick={handleClick}
      className="py-3 px-8 rounded-full border-2 border-cyan-400 hover:bg-cyan-400/20 text-white font-medium transition-all duration-300">
            {t('projects.viewAll')}
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
