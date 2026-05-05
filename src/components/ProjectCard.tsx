import Image from 'next/image';
import Link from 'next/link';
import { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="flex flex-col bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full border border-[#e8e3d9]">
      <div className="relative w-full h-48">
        <Image
          src={project.thumbnail}
          alt={project.title}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-xl font-bold font-geist mb-2 text-[#1c1a17]">
          {project.title}
        </h3>
        <p className="text-[#6b6862] text-sm mb-4 flex-grow">
          {project.summary}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techTags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-[#e8e3d9] text-[#6b6862] rounded-md text-xs font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-3 mt-auto">
          {project.githubLink && (
            <Link
              href={project.githubLink}
              className="inline-flex items-center px-4 py-2 border border-[#e8e3d9] text-sm font-medium rounded-md shadow-sm text-[#6b6862] hover:bg-[#e8e3d9] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#e8e3d9] transition ease-in-out duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
