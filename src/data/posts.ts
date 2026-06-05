export interface Post {
  id: string;
  title: string;
  summary: string;
  date: string;
  tags: string[];
}

export const posts: Post[] = [
  {
    id: 'intro-to-computer-science',
    title: 'Computer Science: 디지털 세상을 이해하는 첫 걸음',
    summary: '컴퓨터 과학은 단순히 프로그래밍을 배우는 것을 넘어, 효율적인 문제 해결과 논리적 사고의 정수를 다루는 학문입니다.',
    date: '2026.06.05',
    tags: ['Tech'],
  },
  // 여기에 새로운 포스트를 추가하세요.
  // 예시 데이터 (manual.md를 참고하세요):
  /*
  {
    id: '1',
    title: '나의 첫 블로그 포스트',
    summary: '이곳에 글의 요약을 적어주세요.',
    date: '2026.06.05',
    tags: ['Tech', 'Life'],
  },
  */
];
