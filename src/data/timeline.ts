
export type TimelineEvent = {
  title: string;
  from: string | number;
  to: string | number;
  description: string;
};

export const timeline: TimelineEvent[] = [
  {
    title: "Kumho Tire Georgia",
    from: 2023,
    to: "Present",
    description: "I am currently working as IT programmer for Kumho Tire Georgia.",
  },
  {
    title: "University of Bridgeport",
    from: 2020,
    to: 2022,
    description: "Completed Mathematics and Computer Science degrees in the University of Bridgeport.",
  },
  {
    title: "Speechout",
    from: "2021 July",
    to: "2021 August",
    description: "I worked as backend software engineer intern for Speechout.",
  },
  {
    title: "Republic of Korea Army",
    from: "2018 Oct",
    to: "2020 June",
    description: "",
  },
];
