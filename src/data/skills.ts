
export interface Skill {
  name: string;
  color: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    skills: [
      { name: "Python", color: "#3776AB" },
      { name: "Java", color: "#ED8B00" },
      { name: "HTML/CSS", color: "#E34F26" },
      { name: "C#", color: "#239120" },
    ],
  },
  {
    title: "Frameworks",
    skills: [
      { name: "Django", color: "#092E20" },
      { name: "Spring", color: "#6DB33F" },
    ],
  },
  {
    title: "Databases & Tools",
    skills: [
      { name: "MySQL", color: "#4479A1" },
      { name: "AWS", color: "#FF9900" },
    ],
  },
];
