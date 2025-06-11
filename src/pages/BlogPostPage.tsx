import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock, User, Tag, Edit } from 'lucide-react';
import SEOHead from '../components/Layout/SEOHead';
import CyberCard from '../components/UI/CyberCard';
import { useBlogStore } from '../store/blogStore';
import { formatDate } from '../utils/formatters';
import { useAuth } from '../context/AuthContext';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';


const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { getPostBySlug, posts } = useBlogStore();
  const { isAuthenticated } = useAuth();

  const post = getPostBySlug(slug || '');

  if (!post) {
    return (
      <div className="min-h-screen pt-24 flex flex-col items-center justify-center text-center px-4">
        <div className="bg-cyber-gray/10 p-10 rounded-xl border border-cyber-gray/30">
          <h1 className="text-3xl font-bold mb-4">Публикацията не е намерена</h1>
          <p className="text-gray-400 mb-8">Страницата, която търсите, не съществува или е преместена.</p>
          <Link to="/blog" className="btn-primary">
            Върнете се към блога
          </Link>
        </div>
      </div>
    );
  }

  const relatedPosts = posts
    .filter(p => p.id !== post.id && p.status === 'published' && p.tags.some(tag => post.tags.includes(tag)))
    .slice(0, 3);

  return (
    <>
      <SEOHead
        title={post.seoTitle || post.title}
        description={post.seoDescription || post.excerpt}
        keywords={post.seoKeywords || `${post.tags.join(", ")}, SEO блог, дигитален маркетинг, съдържание, ключови думи, Google търсене, онлайн видимост, статия за SEO`}
        ogType="article"
        canonicalUrl={`https://stanchev.bg/blog/${post.slug}`}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          description: post.excerpt,
          keywords: `${post.tags.join(", ")}, SEO блог, дигитален маркетинг, съдържание, ключови думи, Google търсене, онлайн видимост, статия за SEO`,
          author: { "@type": "Person", name: post.author },
          datePublished: post.publishedAt,
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `https://stanchev.bg/blog/${post.slug}`,
          },
        }}
      />

      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <Link
              to="/blog"
              className="inline-flex items-center text-gray-400 hover:text-white transition-all duration-200"
            >
              <ArrowLeft size={20} className="mr-2" /> Назад към блога
            </Link>
          </div>

          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight mb-6 text-white">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center text-gray-400 mb-6 gap-x-6 gap-y-2">
              <div className="flex items-center">
                <Clock size={18} className="mr-2" />
                <span>{formatDate(post.publishedAt)}</span>
              </div>
              <div className="flex items-center">
                <User size={18} className="mr-2" />
                <span>{post.author}</span>
              </div>
              {isAuthenticated && (
                <button
                  onClick={() => navigate(`/admin/blog/${post.id}`)}
                  className="flex items-center text-cyber-blue hover:text-cyber-purple transition-colors"
                >
                  <Edit size={18} className="mr-2" /> <span>Редактирай</span>
                </button>
              )}
            </div>

            <div className="flex flex-wrap gap-2 mb-8 overflow-x-auto scrollbar-hide">
              {post.tags.map((tag, index) => (
                <Link
                  key={index}
                  to={`/blog?tag=${tag}`}
                  className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-cyber-gray text-cyber-blue hover:bg-cyber-gray/80 transition-all duration-200"
                >
                  <Tag size={14} className="mr-1" /> {tag}
                </Link>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-4 gap-y-12 gap-x-8">
            <div className="xl:col-span-3">
              <CyberCard glowColor="purple" className="article-content shadow-lg border border-cyber-gray/30">
                <article className="prose prose-invert lg:prose-xl prose-headings:text-white prose-a:text-cyber-blue hover:prose-a:text-cyber-purple prose-img:rounded-xl prose-img:shadow-lg max-w-none">
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                      {post.content}
                  </ReactMarkdown>
                </article>
              </CyberCard>
            </div>

            <div className="xl:col-span-1">
              <CyberCard glowColor="blue" className="mb-8">
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-3">За автора</h3>
                  <p className="text-gray-300 mb-4">
                    Станчев е SEO експерт с 1 година опит в оптимизацията за търсачки за българския пазар. Публикациите му обхващат SEO стратегии, онлайн маркетинг, копирайтинг и техническа оптимизация на сайтове.
                  </p>
                  <Link to="/за-мен" className="text-cyber-blue hover:text-cyber-purple transition-colors">
                    Научете повече
                  </Link>
                </div>
              </CyberCard>

              {relatedPosts.length > 0 && (
                <CyberCard glowColor="teal">
                  <h3 className="text-xl font-bold mb-4">Свързани статии</h3>
                  <div className="space-y-4">
                    {relatedPosts.map((relatedPost) => (
                      <div
                        key={relatedPost.id}
                        className="border-b border-cyber-gray pb-4 last:border-0 last:pb-0"
                      >
                        <Link
                          to={`/blog/${relatedPost.slug}`}
                          className="block font-medium hover:text-cyber-purple transition-colors"
                        >
                          {relatedPost.title}
                        </Link>
                        <div className="text-sm text-gray-400 mt-1">
                          {formatDate(relatedPost.publishedAt)}
                        </div>
                      </div>
                    ))}
                  </div>
                </CyberCard>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPostPage;
