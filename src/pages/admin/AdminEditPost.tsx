import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import SEOHead from '../../components/Layout/SEOHead';
import BlogPostForm from '../../components/Admin/BlogPostForm';
import { useBlogStore } from '../../store/blogStore';
import { Post } from '../../types/blog';
import { slugify } from '../../utils/formatters';

const AdminEditPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { posts, addPost, updatePost } = useBlogStore();
  const [currentPost, setCurrentPost] = useState<Post | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const isNewPost = !id || id === 'нов';
  
  // Find post by ID if editing
  useEffect(() => {
    if (!isNewPost) {
      const post = posts.find((p) => p.id === id);
      if (post) {
        setCurrentPost(post);
      } else {
        setError('Публикацията не е намерена');
      }
    }
  }, [id, posts, isNewPost]);
  
  const handleSubmit = (formData: Post) => {
    setIsSubmitting(true);
    setError(null);
    
    try {
      // Generate slug if empty
      if (!formData.slug) {
        formData.slug = slugify(formData.title);
      }
      
      if (isNewPost) {
        // Create new post
        addPost({
          ...formData,
          publishedAt: new Date().toISOString(),
        });
      } else {
        // Update existing post
        updatePost(id!, formData);
      }
      
      navigate('/admin/blog');
    } catch (err) {
      setError('Възникна грешка при запазването на публикацията');
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SEOHead
        title={isNewPost ? 'Нова публикация | SEO Специалист Станчев' : 'Редактиране на публикация | SEO Специалист Станчев'}
        description="Административен панел за създаване и редактиране на блог публикации"
        canonicalUrl={`https://stanchev-seo.bg/admin/blog/${isNewPost ? 'нов' : id}`}
      />

      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <div className="mb-6">
            <button
              onClick={() => navigate('/admin/blog')}
              className="inline-flex items-center text-gray-400 hover:text-white transition-colors"
            >
              <ArrowLeft size={20} className="mr-2" />
              Назад към списъка
            </button>
          </div>
          
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold">
              {isNewPost ? 'Нова' : 'Редактиране на'} <span className="neon-text">публикация</span>
            </h1>
          </div>
          
          {/* Error Message */}
          {error && (
            <div className="bg-cyber-red/20 border border-cyber-red text-white p-4 rounded-md mb-6">
              {error}
            </div>
          )}
          
          {/* Form */}
          {(isNewPost || currentPost) && (
            <BlogPostForm
              post={isNewPost ? undefined : currentPost!}
              onSubmit={handleSubmit}
              isSubmitting={isSubmitting}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default AdminEditPost;