import { projects } from '@/data/projects';
import FeaturedProjectCard from '@/components/FeaturedProjectCard';
import ProjectCard from '@/components/ProjectCard';

const ProjectsPage: React.FC = () => {
  const featuredProject = projects.find((project) => project.isFeatured);
  const otherProjects = projects.filter((project) => !project.isFeatured);

  return (
    <div className="page-container py-16">

      {featuredProject && (
        <section className="mb-12">
          <h2 className="text-3xl font-semibold font-geist mb-6 text-[#6b6862] text-center md:text-left">
            Featured Project
          </h2>
          <FeaturedProjectCard project={featuredProject} />
        </section>
      )}

      <section>
        <h2 className="text-3xl font-semibold font-geist mb-6 text-[#6b6862] text-center md:text-left">
          Other Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;
