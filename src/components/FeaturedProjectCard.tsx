import Image from 'next/image';
import Link from 'next/link';
import { Project } from '@/data/projects';

interface FeaturedProjectCardProps {
  project: Project;
}

const FeaturedProjectCard: React.FC<FeaturedProjectCardProps> = ({ project }) => {
  return (
    <div className="flex flex-col md:flex-row bg-[#f7f4ef] text-[#1c1a17] rounded-lg shadow-lg overflow-hidden mb-8 md:mb-12 p-6 md:p-8 items-center border border-[#e8e3d9]">
      <div className="md:w-1/2 w-full flex justify-center items-center p-4">
        <Image
          src={project.thumbnail}
          alt={project.title}
          width={500}
          height={300}
          layout="responsive"
          objectFit="cover"
          className="rounded-lg shadow-md"
        />
      </div>
      <div className="md:w-1/2 w-full p-4 md:pl-8 flex flex-col justify-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 font-geist text-[#1c1a17]">
          {project.title}
        </h2>
        <p className="text-lg md:text-xl mb-4 leading-relaxed text-[#6b6862]">
          {project.summary}
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.techTags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-[#e8e3d9] text-[#6b6862] rounded-md text-sm font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          {project.githubLink && (
            <Link
              href={project.githubLink}
              className="inline-flex items-center px-6 py-3 border border-[#e8e3d9] text-base font-medium rounded-md shadow-sm text-[#6b6862] hover:bg-[#e8e3d9] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#e8e3d9] transition ease-in-out duration-300"
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

export default FeaturedProjectCard;
