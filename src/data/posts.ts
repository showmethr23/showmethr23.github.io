export interface Post {
  id: string;
  title: string;
  summary: string;
  date: string;
  tags: string[];
}

export const posts: Post[] = [
  {
    id: '1',
    title: 'IT 기업의 사내 식당 정산 시스템 개발기',
    summary: '맛집 추천 앱을 개발하고 사내 시스템에 적용하면서 겪은 기술적 도전과 해결 과정을 공유합니다.',
    date: '2026.06.04',
    tags: ['Tech', 'Food', 'Project'],
  },
  {
    id: '2',
    title: 'Figma를 활용한 포트폴리오 사이트 레이아웃 가이드',
    summary: '디자인 시스템 구축부터 그리드 레이아웃 설정까지, 피그마를 활용한 효율적인 포트폴리오 설계법을 소개합니다.',
    date: '2026.05.20',
    tags: ['Design', 'Project'],
  },
  {
    id: '3',
    title: 'Next.js 16과 Tailwind CSS v4로 시작하는 블로그 개발',
    summary: '최신 프레임워크와 스타일링 도구를 사용하여 고성능 블로그를 구축하는 방법을 알아봅니다.',
    date: '2026.05.10',
    tags: ['Tech', 'Project'],
  },
  {
    id: '4',
    title: '주말 한강 산책과 사진 기록',
    summary: '바쁜 일상 속에서 잠시 여유를 찾기 위해 다녀온 한강 산책로와 촬영한 사진들을 정리했습니다.',
    date: '2026.05.05',
    tags: ['Life'],
  },
  {
    id: '5',
    title: '효율적인 업무 협업을 위한 슬랙 활용 팁',
    summary: '팀원들과 더 원활하게 소통하고 업무 생산성을 높일 수 있는 슬랙의 다양한 기능들을 살펴봅니다.',
    date: '2026.04.28',
    tags: ['Tech', 'Life'],
  },
];
