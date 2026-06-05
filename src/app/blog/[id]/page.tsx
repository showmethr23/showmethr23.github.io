import React from 'react';
import { posts } from '@/data/posts';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface PostPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return posts.map((post) => ({
    id: post.id,
  }));
}

export default async function PostPage({ params }: PostPageProps) {
  const { id } = await params;
  const post = posts.find((p) => p.id === id);

  if (!post) {
    notFound();
  }

  // Tag styles mapping (matching the blog list)
  const getTagStyles = (tag: string) => {
    const colorMap: Record<string, { bg: string; text: string; border: string }> = {
      Tech: { bg: 'bg-[#e0f2fe]', text: 'text-[#0369a1]', border: 'border-[#bae6fd]' },
      Food: { bg: 'bg-[#fff7ed]', text: 'text-[#ea580c]', border: 'border-[#fed7aa]' },
      Design: { bg: 'bg-[#faf5ff]', text: 'text-[#9333ea]', border: 'border-[#f3e8ff]' },
      Life: { bg: 'bg-[#f0fdf4]', text: 'text-[#16a34a]', border: 'border-[#dcfce7]' },
      Project: { bg: 'bg-[#f5f3ff]', text: 'text-[#5b21b6]', border: 'border-[#ddd6fe]' },
    };

    const style = colorMap[tag] || { bg: 'bg-[#f4f4f5]', text: 'text-[#71717a]', border: 'border-[#e4e4e7]' };
    return `${style.bg} ${style.text} border ${style.border}`;
  };

  return (
    <div className="bg-white min-h-screen pb-20">
      <article className="page-container pt-16 max-w-[750px] mx-auto">
        <Link 
          href="/blog" 
          className="text-sm text-[#6b6862] hover:text-[#1c1a17] mb-12 inline-flex items-center gap-1 transition-colors group"
        >
          <span className="group-hover:-translate-x-1 transition-transform">←</span> Back to Blog
        </Link>
        
        <header className="mb-12">
          <span className="text-sm text-[#999999] font-medium tracking-wider block mb-3">
            {post.date}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-[#1c1a17] leading-tight mb-8 tracking-tight font-inter">
            {post.title}
          </h1>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className={`px-4 py-1 rounded-full text-xs font-bold ${getTagStyles(tag)}`}
              >
                #{tag}
              </span>
            ))}
          </div>
        </header>

        <div className="prose prose-neutral max-w-none font-pretendard text-[#212529] leading-relaxed">
          <p className="text-xl text-[#333333] mb-10 font-medium leading-relaxed">
            {post.summary}
          </p>
          
          <div className="mt-12 border-t border-[#eeeeee] pt-12 space-y-6">
            <p>
              이 글은 현재 샘플 데이터로 작성된 페이지입니다. 실제 블로그 시스템에서는 Markdown 파일이나 CMS를 통해 상세 내용을 불러오게 됩니다.
            </p>
            <p>
              Next.js의 동적 라우팅(Dynamic Routing) 기능을 사용하여 각 포스트마다 고유한 URL(<code>/blog/[id]</code>)을 가지도록 구현되었습니다.
            </p>
            
            <h3 className="text-2xl font-bold text-[#1c1a17] mt-12 mb-4">개발 과정 요약</h3>
            <ul className="list-disc pl-5 space-y-3">
              <li>App Router의 dynamic segments 설정</li>
              <li>데이터 파일(posts.ts)과의 연동 및 예외 처리</li>
              <li>Pretendard와 Inter 폰트를 활용한 가독성 높은 레이아웃 설계</li>
              <li>기존 디자인 시스템(태그 컬러 등)의 일관성 유지</li>
            </ul>
          </div>
        </div>
      </article>
    </div>
  );
}
