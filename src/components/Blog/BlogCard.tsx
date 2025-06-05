import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, User, Tag, ArrowRight } from 'lucide-react';
import { formatDate } from '../../utils/formatters';
import { Post } from '../../types/blog';
import CyberCard from '../UI/CyberCard';

interface BlogCardProps {
  post: Post;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  // Extract keywords from content for internal linking
  const keywords = [
    { word: 'SEO одит', link: '/услуги#seo-odit' },
    { word: 'ключови думи', link: '/услуги#klyuchovi-dumi' },
    { word: 'техническо SEO', link: '/услуги#tehnichesko-seo' },
    { word: 'локално SEO', link: '/услуги#lokalno-seo' },
    { word: 'структурирани данни', link: '/услуги#strukturirani-danni' }
  ];

  // Add internal links to excerpt
  let enhancedExcerpt = post.excerpt;
  keywords.forEach(({ word, link }) => {
    const regex = new RegExp(`(${word})`, 'gi');
    enhancedExcerpt = enhancedExcerpt.replace(regex, `<a href="${link}" class="text-cyber-blue hover:text-cyber-purple">$1</a>`);
  });

  return (
    <CyberCard className="h-full transition-transform duration-300 hover:translate-y-[-5px]">
      <article className="flex flex-col h-full">
        <Link to={`/blog/${post.slug}`} className="block mb-4">
          <h3 className="text-xl font-bold mb-2 hover:text-cyber-purple transition-colors">
            {post.title}
          </h3>
        </Link>
        
        <div className="flex items-center space-x-4 text-sm text-gray-400 mb-3">
          <div className="flex items-center">
            <Clock size={14} className="mr-1" />
            <span>{formatDate(post.publishedAt)}</span>
          </div>
          <div className="flex items-center">
            <User size={14} className="mr-1" />
            <span>{post.author}</span>
          </div>
        </div>
        
        <p 
          className="text-gray-300 mb-4 flex-grow"
          dangerouslySetInnerHTML={{ __html: enhancedExcerpt }}
        />
        
        <div className="mt-auto">
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag, index) => (
              <span
                key={index}
                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-cyber-gray text-cyber-blue"
              >
                <Tag size={12} className="mr-1" />
                {tag}
              </span>
            ))}
          </div>
          
          <Link
            to={`/blog/${post.slug}`}
            className="text-cyber-blue hover:text-cyber-purple transition-colors inline-flex items-center"
          >
            Прочети повече
            <ArrowRight className="ml-2" size={16} />
          </Link>
        </div>
      </article>
    </CyberCard>
  );
};

export default BlogCard;