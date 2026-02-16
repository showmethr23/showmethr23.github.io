
import { languages } from '@/data/languages';
import { technicalSkills } from '@/data/technical-skills';
import { timeline } from '@/data/timeline';
import Link from 'next/link';

const author = {
  name: "Junyeong Choi",
  email: "showmethr23@hotmail.com",
  github: "showmethr23",
  linkedin: "juny-choi",
};

export default function Resume() {
  return (
    <section className="py-24">
      <div className="container px-4 mx-auto prose lg:prose-xl">
        <h1>{author.name}</h1>
        <div className="text-gray-500">
          <a href={`mailto:${author.email}`}>{author.email}</a> &middot; {' '}
          <a href={`https://github.com/${author.github}`} target="_blank" rel="noopener noreferrer">GitHub</a> &middot; {' '}
          <a href={`https://linkedin.com/in/${author.linkedin}`} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>

        <div className="mt-8">
          <h2>Skills</h2>

          <h3>Languages</h3>
          <ul className="list-disc list-inside">
            {languages.map(skill => <li key={skill.name}>{skill.name}</li>)}
          </ul>

          <h3>Technical Skills</h3>
          <ul className="list-disc list-inside">
            {technicalSkills.map(skill => <li key={skill.name}>{skill.name}</li>)}
          </ul>
        </div>

        <div className="mt-8">
          <h2>Work Experience & Education</h2>
          <ul>
            {timeline.map((item, index) => (
              <li key={index} className="mb-4">
                <h4 className="font-bold">{item.title}</h4>
                <div className="text-sm text-gray-500">{item.from} - {item.to}</div>
                <p>{item.description}</p>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}
