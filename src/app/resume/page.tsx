
import { Mail, Github, Linkedin } from 'lucide-react';
import { languages } from '@/data/languages';
import { technicalSkills } from '@/data/technical-skills';
import { timeline } from '@/data/timeline';

const author = {
  name: "Junyeong Choi",
  email: "showmethr23@hotmail.com",
  github: "showmethr23",
  linkedin: "juny-choi",
};

const typeBadge: Record<string, string> = {
  work:      "bg-blue-50 text-blue-500",
  education: "bg-emerald-50 text-emerald-600",
  military:  "bg-stone-100 text-stone-500",
};

const typeLabel: Record<string, string> = {
  work:      "Work",
  education: "Education",
  military:  "Military",
};

const skillColors: Record<string, { bg: string; text: string; border: string }> = {
  "HTML5/CSS3": { bg: "#FFF0EB", text: "#C4330F", border: "#FCCFBE" },
  "Python":     { bg: "#EEF4FF", text: "#2B5B8E", border: "#BFCFE8" },
  "Java":       { bg: "#FFF7ED", text: "#B85C00", border: "#F9D8A8" },
  "Django":     { bg: "#ECFDF5", text: "#065F46", border: "#A7F3D0" },
  "Spring":     { bg: "#F0FDF4", text: "#15803D", border: "#86EFAC" },
  "AWS":        { bg: "#FFFBEB", text: "#92400E", border: "#FDE68A" },
  "MySQL":      { bg: "#EFF6FF", text: "#1A5F9A", border: "#BFDBFE" },
};

function SkillBadge({ name }: { name: string }) {
  const color = skillColors[name];
  return (
    <span
      className="px-3 py-1.5 text-sm font-semibold rounded-lg"
      style={
        color
          ? { backgroundColor: color.bg, color: color.text, border: `1px solid ${color.border}` }
          : { backgroundColor: "#fff", color: "#1c1a17", border: "1px solid #e8e3d9" }
      }
    >
      {name}
    </span>
  );
}

export default function Resume() {
  return (
    <div className="min-h-screen py-16">
      <div className="page-container">

        {/* ── Header ── */}
        <header className="mb-12 text-center">
          <h1 className="text-6xl font-bold tracking-tight text-[#1c1a17] mb-2">
            {author.name}
          </h1>
          <p className="text-base text-[#6b6862] mb-5">IT Programmer</p>
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm text-[#6b6862]">
            <a href={`mailto:${author.email}`} className="flex items-center gap-2 hover:text-[#1c1a17] transition-colors">
              <Mail size={18} color="#E0392A" strokeWidth={2} />
              {author.email}
            </a>
            <span className="text-[#e8e3d9]">·</span>
            <a href={`https://github.com/${author.github}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#1c1a17] transition-colors">
              <Github size={18} color="#1c1a17" strokeWidth={2} />
              github.com/{author.github}
            </a>
            <span className="text-[#e8e3d9]">·</span>
            <a href={`https://linkedin.com/in/${author.linkedin}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#1c1a17] transition-colors">
              <Linkedin size={18} color="#0A66C2" strokeWidth={2} />
              linkedin.com/in/{author.linkedin}
            </a>
          </div>
        </header>

        <div className="h-px bg-[#e8e3d9] mb-10" />

        {/* ── Skills ── */}
        <section className="mb-12">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-[#6b6862] text-center mb-7">
            Skills
          </h2>
          <div className="flex flex-col sm:flex-row gap-8">

            <div className="flex-1">
              <p className="text-sm font-medium text-[#1c1a17] mb-3">Languages</p>
              <div className="flex flex-wrap gap-2.5">
                {languages.map(skill => <SkillBadge key={skill.name} name={skill.name} />)}
              </div>
            </div>

            <div className="hidden sm:block w-px bg-[#e8e3d9]" />

            <div className="flex-1">
              <p className="text-sm font-medium text-[#1c1a17] mb-3">Frameworks & Tools</p>
              <div className="flex flex-wrap gap-2.5">
                {technicalSkills.map(skill => <SkillBadge key={skill.name} name={skill.name} />)}
              </div>
            </div>

          </div>
        </section>

        <div className="h-px bg-[#e8e3d9] mb-10" />

        {/* ── Experience & Education ── */}
        <section>
          <h2 className="text-xs font-semibold uppercase tracking-widest text-[#6b6862] text-center mb-8">
            Experience & Education
          </h2>

          <ol className="relative border-l border-[#e8e3d9] space-y-10 ml-4 md:ml-[20%]">
            {timeline.map((item, index) => (
              <li key={index} className="pl-8">
                <span className="absolute -left-[5px] w-2.5 h-2.5 rounded-full bg-[#f7f4ef] border-2 border-[#c9c4ba] mt-1.5" />

                <div className="flex flex-wrap items-center gap-2 mb-1.5">
                  <span className="text-sm text-[#6b6862] tabular-nums">
                    {item.from} – {item.to}
                  </span>
                  {item.type && (
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${typeBadge[item.type]}`}>
                      {typeLabel[item.type]}
                    </span>
                  )}
                </div>

                <h3 className="text-base font-semibold text-[#1c1a17] leading-snug">
                  {item.title}
                </h3>

                {item.subtitle && (
                  <p className="text-sm text-[#6b6862] mt-1">
                    {item.subtitle}
                  </p>
                )}

                {item.description && (
                  <p className="text-base text-[#6b6862] mt-2 leading-relaxed">
                    {item.description}
                  </p>
                )}

                {item.bullets && item.bullets.length > 0 && (
                  <ul className="mt-3 space-y-1.5">
                    {item.bullets.map((bullet, i) => (
                      <li key={i} className="flex gap-2.5 text-sm text-[#6b6862]">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#c9c4ba] flex-shrink-0" />
                        <span className="leading-relaxed">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ol>
        </section>

      </div>
    </div>
  );
}
