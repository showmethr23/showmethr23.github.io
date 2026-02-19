
export type TimelineEvent = {
  title: string;
  subtitle?: string;
  from: string | number;
  to: string | number;
  description?: string;
  bullets?: string[];
  type?: 'work' | 'education' | 'military';
};

export const timeline: TimelineEvent[] = [
  {
    title: "Kumho Tire Georgia",
    subtitle: "IT Programmer",
    from: 2023,
    to: "Present",
    type: "work",
    bullets: [
      // 예시: "Developed internal ERP tools using Spring Boot and AWS",
    ],
  },
  {
    title: "Georgia Institute of Technology",
    subtitle: "M.S. Computer Science",
    from: "2024 Fall",
    to: "Present",
    type: "education",
    bullets: [
      // 예시: "Developed internal ERP tools using Spring Boot and AWS",
    ],
  },
  {
    title: "University of Bridgeport",
    subtitle: "B.S. Computer Science",
    from: 2020,
    to: 2022,
    type: "education",
    bullets: [
      // 예시: "Graduated with honors",
    ],
  },
  {
    title: "Republic of Korea Army",
    subtitle: "Mandatory Military Service",
    from: 2018,
    to: 2020,
    type: "military",
  },
  {
    title: "University of Bridgeport",
    subtitle: "B.S. Mathematics ",
    from: 2018,
    to: 2014,
    type: "education",
    bullets: [
      // 예시: "Graduated with honors",
    ],
  },
];
