
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
  work: "bg-blue-50 text-blue-500",
  education: "bg-emerald-50 text-emerald-600",
  military: "bg-stone-100 text-stone-500",
};

const typeLabel: Record<string, string> = {
  work: "Work",
  education: "Education",
  military: "Military",
};

export default function Resume() {
  return (
    <div className="min-h-screen py-14">
      <div className="page-container">

        {/* ── Header ── */}
        <header className="mb-10">
          <h1 className="text-5xl font-bold tracking-tight text-[#1c1a17] mb-1">
            {author.name}
          </h1>
          <p className="text-sm text-[#6b6862] mb-4">IT Programmer</p>
          <div className="h-px bg-gradient-to-r from-[#e8e3d9] to-transparent mb-4" />
          <div className="flex flex-wrap gap-x-5 gap-y-1 text-sm text-[#6b6862]">
            <a
              href={`mailto:${author.email}`}
              className="hover:text-[#1c1a17] transition-colors"
            >
              {author.email}
            </a>
            <a
              href={`https://github.com/${author.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#1c1a17] transition-colors"
            >
              github.com/{author.github}
            </a>
            <a
              href={`https://linkedin.com/in/${author.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#1c1a17] transition-colors"
            >
              linkedin.com/in/{author.linkedin}
            </a>
          </div>
        </header>

        {/* ── Body: 2-column on md+, 1-column on mobile ── */}
        <div className="flex flex-col md:flex-row gap-10">

          {/* ── Left sidebar ── */}
          <aside className="md:w-52 flex-shrink-0 space-y-8">

            <div>
              <h2 className="text-[10px] font-semibold uppercase tracking-widest text-[#6b6862] mb-3">
                Languages
              </h2>
              <div className="flex flex-wrap gap-2">
                {languages.map(skill => (
                  <span
                    key={skill.name}
                    className="px-2.5 py-1 text-xs font-medium bg-white border border-[#e8e3d9] text-[#1c1a17] rounded-md"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-[10px] font-semibold uppercase tracking-widest text-[#6b6862] mb-3">
                Frameworks & Tools
              </h2>
              <div className="flex flex-wrap gap-2">
                {technicalSkills.map(skill => (
                  <span
                    key={skill.name}
                    className="px-2.5 py-1 text-xs font-medium bg-white border border-[#e8e3d9] text-[#1c1a17] rounded-md"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>

          </aside>

          {/* ── Dividers ── */}
          <div className="hidden md:block w-px bg-[#e8e3d9] self-stretch" />
          <div className="block md:hidden h-px bg-[#e8e3d9]" />

          {/* ── Right: Experience & Education ── */}
          <main className="flex-1 min-w-0">
            <h2 className="text-[10px] font-semibold uppercase tracking-widest text-[#6b6862] mb-6">
              Experience & Education
            </h2>

            <ol className="relative border-l border-[#e8e3d9] space-y-8 ml-2">
              {timeline.map((item, index) => (
                <li key={index} className="pl-6">
                  <span className="absolute -left-[5px] flex items-center justify-center w-2.5 h-2.5 rounded-full bg-[#f7f4ef] border-2 border-[#c9c4ba] mt-1" />

                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="text-xs text-[#6b6862] tabular-nums">
                      {item.from} – {item.to}
                    </span>
                    {item.type && (
                      <span className={`text-[10px] font-semibold px-1.5 py-0.5 rounded ${typeBadge[item.type]}`}>
                        {typeLabel[item.type]}
                      </span>
                    )}
                  </div>

                  <h3 className="text-sm font-semibold text-[#1c1a17] leading-snug">
                    {item.title}
                  </h3>

                  {item.subtitle && (
                    <p className="text-xs text-[#6b6862] mt-0.5 mb-1">
                      {item.subtitle}
                    </p>
                  )}

                  {item.description && (
                    <p className="text-sm text-[#6b6862] mt-1 leading-relaxed">
                      {item.description}
                    </p>
                  )}

                  {item.bullets && item.bullets.length > 0 && (
                    <ul className="mt-2 space-y-1">
                      {item.bullets.map((bullet, i) => (
                        <li key={i} className="flex gap-2 text-sm text-[#6b6862]">
                          <span className="mt-[7px] w-1 h-1 rounded-full bg-[#c9c4ba] flex-shrink-0" />
                          <span className="leading-relaxed">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ol>
          </main>

        </div>
      </div>
    </div>
  );
}
