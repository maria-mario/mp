// components/sections/LatestBlogPosts.tsx
'use client';

import Link from 'next/link';
import { Calendar, ArrowRight, Clock } from 'lucide-react';

// Mock blog posts
const blogPosts = [
  {
    id: 1,
    title: 'Of Wolves, Rivers, and Us',
    excerpt: 'Exploring the interconnected systems that shape leadership and organizational dynamics...',
    category: 'Leadership Power',
    date: '2024-03-15',
    readTime: '6 min read',
    slug: 'of-wolves-rivers-and-us',
  },
  {
    id: 2,
    title: 'The Detour That Made the Book Better',
    excerpt: 'Sometimes the obstacles we face become the very things that transform our path...',
    category: 'SkillfullyAware',
    date: '2024-03-10',
    readTime: '4 min read',
    slug: 'detour-made-book-better',
  },
  {
    id: 3,
    title: 'From State to Trait',
    excerpt: 'Understanding how temporary states of awareness can become permanent leadership traits...',
    category: 'Shadow Work',
    date: '2024-03-05',
    readTime: '8 min read',
    slug: 'from-state-to-trait',
  },
];

export function LatestBlogPosts() {
  return (
    <section className="py-24 bg-dark-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <div className="inline-block px-4 py-2 bg-primary-100 rounded-full text-primary-700 text-sm font-medium mb-4">
              The Blog
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-dark-900 mb-4">
              Breaking Bad <span className="italic">(habits)</span>
            </h2>
            <p className="text-xl text-dark-600 max-w-2xl">
              Insights on the hidden "shadow" patterns shaping our lives and clear solutions 
              to address the root causes.
            </p>
          </div>

          <Link
            href="/blog"
            className="mt-6 md:mt-0 inline-flex items-center space-x-2 px-6 py-3 bg-dark-900 hover:bg-dark-800 text-white rounded-lg font-semibold transition-all hover:scale-105"
          >
            <span>View All Posts</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-premium transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-primary-100 to-primary-50 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-premium opacity-0 group-hover:opacity-10 transition-opacity" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-primary-700 text-xs font-semibold">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Meta */}
                <div className="flex items-center space-x-4 text-sm text-dark-500 mb-3">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-dark-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-dark-600 leading-relaxed mb-4 line-clamp-2">
                  {post.excerpt}
                </p>

                {/* Read More */}
                <div className="flex items-center text-primary-600 font-semibold group-hover:text-primary-700">
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}