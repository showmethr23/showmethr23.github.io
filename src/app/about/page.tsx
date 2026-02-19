
import { languages, Language } from '@/data/languages';
import { technicalSkills, Skill } from '@/data/technical-skills';
import { timeline } from '@/data/timeline';

const authorName = "Junyeong Choi";

function getSkillColor(color: string) {
  switch (color) {
    case 'danger':    return '#dc3545';
    case 'primary':   return '#007bff';
    case 'success':   return '#28a745';
    case 'light':     return '#adb5bd';
    case 'secondary': return '#6c757d';
    default:          return color;
  }
}

function Skills({ title, skills }: { title: string; skills: Language[] | Skill[] }) {
  return (
    <div className="w-full md:w-1/2">
      <h3 className="text-base font-semibold text-[#1c1a17] mb-4">{title}</h3>
      <ul className="space-y-3">
        {skills.map((skill, index) => (
          <li key={index}>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-[#1c1a17]">{skill.name}</span>
              <span className="text-[#6b6862]">{skill.percentage}%</span>
            </div>
            <div className="w-full bg-[#e8e3d9] rounded-full h-1.5">
              <div
                className="h-1.5 rounded-full"
                style={{ width: `${skill.percentage}%`, backgroundColor: getSkillColor(skill.color) }}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Timeline() {
  return (
    <div className="w-full">
      <h3 className="text-base font-semibold text-[#1c1a17] mb-6">Timeline</h3>
      <div className="relative border-l border-[#e8e3d9]">
        {timeline.map((event, index) => (
          <div key={index} className="mb-8 ml-6">
            <span className="absolute -left-[5px] w-2.5 h-2.5 rounded-full bg-[#f7f4ef] border-2 border-[#c9c4ba] mt-1" />
            <time className="block text-xs text-[#6b6862] mb-1">
              {event.from} – {event.to}
            </time>
            <h4 className="text-sm font-semibold text-[#1c1a17]">{event.title}</h4>
            {event.subtitle && (
              <p className="text-xs text-[#6b6862] mt-0.5">{event.subtitle}</p>
            )}
            {event.description && (
              <p className="text-sm text-[#6b6862] mt-1 leading-relaxed">{event.description}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function About() {
  return (
    <section className="py-20">
      <div className="page-container">
        <h1 className="text-3xl font-bold text-[#1c1a17] mb-3">About Me</h1>
        <p className="text-[#6b6862] mb-12 text-base leading-relaxed">
          Hi, I am <strong className="text-[#1c1a17]">{authorName}</strong> 👋
        </p>

        <h2 className="text-[10px] font-semibold uppercase tracking-widest text-[#6b6862] mb-6">
          Skills
        </h2>
        <div className="flex flex-col md:flex-row gap-10 mb-14">
          <Skills title="Languages" skills={languages} />
          <Skills title="Technical Skills" skills={technicalSkills} />
        </div>

        <h2 className="text-[10px] font-semibold uppercase tracking-widest text-[#6b6862] mb-6">
          Experience & Education
        </h2>
        <Timeline />
      </div>
    </section>
  );
}
