import React from 'react';
import { useTranslation } from 'react-i18next';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const { t } = useTranslation();

  return (
    <div
      className="group relative overflow-hidden rounded-xl bg-[#1e293b] p-5 transition-all duration-500 hover:translate-y-[-10px]"
      style={{
        animationDelay: `${index * 200}ms`,
      }}
    >
      <div className="relative h-56 w-full overflow-hidden rounded-lg mb-5">
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 to-transparent"></div>
        <img
          src={project.image}
          alt={project.name}
          loading="lazy"
          width="400"
          height="225"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      <h2 className="text-xl font-bold text-white mb-2">{project.name}</h2>

      <p className="text-gray-300 mb-4 h-24 overflow-hidden">
         {t(project.descriptionKey)}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag, tagIndex) => (
          <span
            key={tagIndex}
            className="px-3 py-1 text-xs bg-black/30 text-cyan-400 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block py-2 px-4 rounded-lg bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white text-sm font-medium hover:opacity-90 transition-opacity duration-300"
      >
        {t('projects.viewProject')}
      </a>
    </div>
  );
};

export default ProjectCard;