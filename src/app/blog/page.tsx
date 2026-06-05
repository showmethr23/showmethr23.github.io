'use client';

import React, { useState, useMemo } from 'react';
import { posts, Post } from '@/data/posts';
import Link from 'next/link';
import { Search } from 'lucide-react';

const BlogPage = () => {
  const [selectedTag, setSelectedTag] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Extract all unique tags from posts
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    tags.add('All');
    posts.forEach((post) => {
      post.tags.forEach((tag) => tags.add(tag));
    });
    return Array.from(tags);
  }, []);

  // Filter posts based on selected tag and search query
  const filteredPosts = useMemo(() => {
    let filtered = [...posts];

    // Filter by tag
    if (selectedTag !== 'All') {
      filtered = filtered.filter((post) => post.tags.includes(selectedTag));
    }

    // Filter by search query (title)
    if (searchQuery.trim() !== '') {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter((post) => 
        post.title.toLowerCase().includes(query)
      );
    }

    // Sort by date
    return filtered.sort((a, b) => new Date(b.date.replace(/\./g, '-')).getTime() - new Date(a.date.replace(/\./g, '-')).getTime());
  }, [selectedTag, searchQuery]);

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
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
          {/* Tag Filter Bar */}
          <div className="flex flex-wrap gap-3">
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

          {/* Search Bar */}
          <div className="relative w-full md:w-64 lg:w-80">
            <input
              type="text"
              placeholder="Search posts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-[#f7f4ef] border border-[#e8e3d9] rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-[#1c1a17] focus:border-transparent transition-all"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6b6862]" />
          </div>
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
            <div className="text-center py-20 flex flex-col items-center gap-4">
              <Search className="w-12 h-12 text-[#e8e3d9]" />
              <p className="text-[#6b6862] text-lg">
                {searchQuery 
                  ? `No posts found matching "${searchQuery}"`
                  : "No posts found for this tag."}
              </p>
              <button 
                onClick={() => {setSelectedTag('All'); setSearchQuery('');}}
                className="text-sm font-semibold text-[#1c1a17] underline underline-offset-4 hover:opacity-70 transition-opacity"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
