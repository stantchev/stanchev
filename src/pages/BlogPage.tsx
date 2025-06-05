import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, Tag } from 'lucide-react';
import SEOHead from '../components/Layout/SEOHead';
import BlogCard from '../components/Blog/BlogCard';
import Input from '../components/UI/Input';
import { useBlogStore } from '../store/blogStore';
import { Post } from '../types/blog';

const BlogPage: React.FC = () => {
  const { posts } = useBlogStore();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('');
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);

  // Get all unique tags from posts
  const allTags = Array.from(
    new Set(
      posts
        .filter(post => post.status === 'published')
        .flatMap(post => post.tags)
    )
  );

  // Filter posts based on search term and selected tag
  useEffect(() => {
    const filtered = posts
      .filter(post => post.status === 'published')
      .filter(post => {
        const matchesSearch = searchTerm === '' || 
          post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
        
        const matchesTag = selectedTag === '' || post.tags.includes(selectedTag);
        
        return matchesSearch && matchesTag;
      })
      .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
      
    setFilteredPosts(filtered);
  }, [posts, searchTerm, selectedTag]);

  return (
    <>
      <SEOHead
        title="Блог за SEO | Съвети и стратегии за българския пазар"
        description="Полезни статии, съвети и стратегии за SEO оптимизация, специално насочени към българския пазар и особеностите на местното търсене."
        keywords="SEO блог, SEO съвети, SEO България, стратегии за оптимизация, дигитален маркетинг"
        canonicalUrl="https://stanchev-seo.bg/blog"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Blog",
          "name": "Блог за SEO оптимизация",
          "description": "Полезни статии, съвети и стратегии за SEO оптимизация, специално насочени към българския пазар",
          "url": "https://stanchev-seo.bg/blog",
          "author": {
            "@type": "Person",
            "name": "Станчев"
          }
        }}
      />

      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="neon-text">SEO</span> Блог
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Полезни статии, съвети и стратегии за SEO оптимизация, специално насочени към българския пазар.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row gap-4 md:items-center mb-8">
              <div className="flex-grow">
                <Input
                  placeholder="Търсене в блога..."
                  icon={<Search size={18} />}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="flex-shrink-0">
                <select
                  className="w-full px-4 py-3 bg-cyber-gray border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-cyber-purple focus:border-transparent"
                  value={selectedTag}
                  onChange={(e) => setSelectedTag(e.target.value)}
                >
                  <option value="">Всички тагове</option>
                  {allTags.map((tag) => (
                    <option key={tag} value={tag}>
                      {tag}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            
            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              <button
                className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                  selectedTag === '' ? 'bg-cyber-purple text-white' : 'bg-cyber-gray text-gray-300 hover:bg-cyber-gray/80'
                }`}
                onClick={() => setSelectedTag('')}
              >
                <Tag size={14} className="mr-1" />
                Всички
              </button>
              {allTags.map((tag) => (
                <button
                  key={tag}
                  className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                    selectedTag === tag ? 'bg-cyber-blue text-white' : 'bg-cyber-gray text-gray-300 hover:bg-cyber-gray/80'
                  }`}
                  onClick={() => setSelectedTag(tag)}
                >
                  <Tag size={14} className="mr-1" />
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Blog Posts */}
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-xl text-gray-400">
                Няма намерени публикации, отговарящи на критериите за търсене.
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default BlogPage;