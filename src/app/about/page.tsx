
import { languages, Language } from '@/data/languages';
import { technicalSkills, Skill } from '@/data/technical-skills';
import { timeline, TimelineEvent } from '@/data/timeline';

const authorName = "Junyeong Choi";

function Skills({ title, skills }: { title: string, skills: (Language[] | Skill[]) }) {
  return (
    <div className="w-full md:w-1/2 p-4">
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <ul>
        {skills.map((skill, index) => (
          <li key={index} className="mb-2">
            <div className="flex justify-between">
              <span>{skill.name}</span>
              <span>{skill.percentage}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div 
                className={`h-2.5 rounded-full`} 
                style={{ width: `${skill.percentage}%`, backgroundColor: getSkillColor(skill.color) }}
              ></div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Helper to map Jekyll colors to Tailwind/CSS colors
function getSkillColor(color: string) {
    switch (color) {
        case 'danger': return '#dc3545';
        case 'primary': return '#007bff';
        case 'success': return '#28a745';
        case 'light': return '#f8f9fa';
        case 'secondary': return '#6c757d';
        default: return color;
    }
}


function Timeline() {
  return (
    <div className="w-full p-4">
      <h3 className="text-xl font-bold mb-4">Timeline</h3>
      <div className="relative border-l border-gray-200 dark:border-gray-700">
        {timeline.map((event, index) => (
          <div key={index} className="mb-10 ml-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              {event.from} - {event.to}
            </time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{event.title}</h3>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function About() {
  return (
    <section className="py-24">
      <div className="container px-4 mx-auto">
        <h1 className="text-3xl font-bold mb-4">About Me</h1>
        <p className="mb-8 text-lg">
          Hi I am <strong>{authorName}</strong> 👋,
          <br />
          :)
        </p>

        <div className="flex flex-wrap -mx-4">
          <Skills title="Languages" skills={languages} />
          <Skills title="Technical-Skills" skills={technicalSkills} />
        </div>

        <div className="flex flex-wrap -mx-4">
          <Timeline />
        </div>
      </div>
    </section>
  );
}
