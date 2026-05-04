
import { Mail, Github, Linkedin } from 'lucide-react';
import { skillCategories } from '@/data/skills';
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

/**
 * 간단한 텍스트 컬러 결정 함수 (배경색의 밝기에 따라 흰색/검정색 선택)
 */
function getContrastColor(hexColor: string) {
  const hex = hexColor.replace("#", "");
  const r = parseInt(hex.substr(0, 2), 16);
  const g = parseInt(hex.substr(2, 2), 16);
  const b = parseInt(hex.substr(4, 2), 16);
  const yiq = (r * 299 + g * 587 + b * 114) / 1000;
  return yiq >= 128 ? "#1c1a17" : "#ffffff";
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
          <h2 className="text-sm font-semibold uppercase tracking-widest text-[#6b6862] text-center mb-10">
            Skills
          </h2>
          <div className="max-w-3xl mx-auto space-y-6 px-4">
            {skillCategories.map((category) => (
              <div key={category.title} className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
                <h3 className="w-full sm:w-40 text-base font-semibold text-[#1c1a17] sm:text-right shrink-0">
                  {category.title} :
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill.name}
                      style={{
                        backgroundColor: `${skill.color}15`, // 15% 투명도 배경
                        color: skill.color,
                        borderColor: `${skill.color}30` // 30% 투명도 테두리
                      }}
                      className="px-3 py-1 text-xs font-semibold rounded-md border transition-all hover:scale-105"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="h-px bg-[#e8e3d9] mb-10" />

        {/* ── Experience & Education ── */}
        <section>
          <h2 className="text-sm font-semibold uppercase tracking-widest text-[#6b6862] text-center mb-8">
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
