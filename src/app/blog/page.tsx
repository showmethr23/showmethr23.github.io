'use client';

import React, { useState, useMemo } from 'react';
import { posts, Post } from '@/data/posts';
import Link from 'next/link';

const BlogPage = () => {
  const [selectedTag, setSelectedTag] = useState('All');

  // Extract all unique tags from posts
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    tags.add('All');
    posts.forEach((post) => {
      post.tags.forEach((tag) => tags.add(tag));
    });
    return Array.from(tags);
  }, []);

  // Filter posts based on selected tag
  const filteredPosts = useMemo(() => {
    if (selectedTag === 'All') {
      return [...posts].sort((a, b) => new Date(b.date.replace(/\./g, '-')).getTime() - new Date(a.date.replace(/\./g, '-')).getTime());
    }
    return posts
      .filter((post) => post.tags.includes(selectedTag))
      .sort((a, b) => new Date(b.date.replace(/\./g, '-')).getTime() - new Date(a.date.replace(/\./g, '-')).getTime());
  }, [selectedTag]);

  // Define custom colors for each tag
  const getTagStyles = (tag: string, isActive: boolean = false) => {
    const colorMap: Record<string, { bg: string; text: string; border: string }> = {
      Tech: { bg: 'bg-[#e0f2fe]', text: 'text-[#0369a1]', border: 'border-[#bae6fd]' },
      Food: { bg: 'bg-[#fff7ed]', text: 'text-[#ea580c]', border: 'border-[#fed7aa]' },
      Design: { bg: 'bg-[#faf5ff]', text: 'text-[#9333ea]', border: 'border-[#f3e8ff]' },
      Life: { bg: 'bg-[#f0fdf4]', text: 'text-[#16a34a]', border: 'border-[#dcfce7]' },
      Project: { bg: 'bg-[#f5f3ff]', text: 'text-[#5b21b6]', border: 'border-[#ddd6fe]' },
      All: { bg: 'bg-[#1c1a17]', text: 'text-white', border: 'border-[#1c1a17]' },
    };

    const style = colorMap[tag] || { bg: 'bg-[#f4f4f5]', text: 'text-[#71717a]', border: 'border-[#e4e4e7]' };

    if (tag === 'All') {
      return isActive 
        ? `${style.bg} ${style.text} border ${style.border} shadow-md` 
        : 'bg-[#f0f0f0] text-[#6b6862] hover:bg-[#e8e3d9] border border-transparent';
    }

    // Filter tags and post tags will now both have the colored background
    // Active filter tag gets a shadow and a more prominent border
    return isActive
      ? `${style.bg} ${style.text} border-2 ${style.border} shadow-md scale-105`
      : `${style.bg} ${style.text} border border-transparent opacity-70 hover:opacity-100 hover:border-${style.border} transition-all`;
  };

  return (
    <div className="bg-white min-h-screen pb-20">
      {/* Hero & Category Section */}
      <section className="page-container pt-16 pb-12">
        <h1 className="text-5xl font-bold mb-10 text-[#1c1a17] tracking-tight font-inter">
          Blog
        </h1>
        
        {/* Tag Filter Bar */}
        <div className="flex flex-wrap gap-3 mb-8">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${getTagStyles(tag, selectedTag === tag)}`}
            >
              {tag === 'All' ? tag : `#${tag}`}
            </button>
          ))}
        </div>
      </section>

      {/* Post List Section */}
      <section className="page-container">
        <div className="max-w-[750px] mx-auto">
          <div className="flex flex-col gap-12">
            {filteredPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.id}`}>
                <article className="group cursor-pointer">
                  <div className="flex flex-col gap-2">
                    <span className="text-xs text-[#999999] font-medium tracking-wider">
                      {post.date}
                    </span>
                    <h2 className="text-2xl font-bold text-[#1c1a17] group-hover:text-main transition-colors duration-200 leading-snug">
                      {post.title}
                    </h2>
                    <p className="text-[#333333] text-base leading-relaxed line-clamp-2 font-pretendard">
                      {post.summary}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {post.tags.map((tag) => {
                        const styles = getTagStyles(tag, true); // Use active styles for post tags
                        return (
                          <span
                            key={tag}
                            className={`px-4 py-1 rounded-full text-xs font-bold ${styles}`}
                          >
                            #{tag}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                  {/* Divider */}
                  <div className="mt-12 border-b border-[#eeeeee]" />
                </article>
              </Link>
            ))}
          </div>
          
          {filteredPosts.length === 0 && (
            <p className="text-center py-20 text-[#6b6862]">
              No posts found for this tag.
            </p>
          )}
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
