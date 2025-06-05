import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Save, X, Plus, Trash2 } from 'lucide-react';
import Input from '../UI/Input';
import TextArea from '../UI/TextArea';
import Button from '../UI/Button';
import SEOAnalyzer from './SEOAnalyzer';
import { Post } from '../../types/blog';

interface BlogPostFormProps {
  post?: Post;
  onSubmit: (data: Post) => void;
  isSubmitting: boolean;
}

const BlogPostForm: React.FC<BlogPostFormProps> = ({
  post,
  onSubmit,
  isSubmitting,
}) => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<Post>({
    defaultValues: post || {
      title: '',
      slug: '',
      content: '',
      excerpt: '',
      tags: [],
      seoTitle: '',
      seoDescription: '',
      seoKeywords: '',
      author: 'Станчев',
      publishedAt: new Date().toISOString(),
      status: 'draft',
    },
  });

  const [tags, setTags] = useState<string[]>(post?.tags || []);
  const [tagInput, setTagInput] = useState('');
  const [showSeoAnalyzer, setShowSeoAnalyzer] = useState(false);

  const watchedTitle = watch('title');
  const watchedContent = watch('content');
  const watchedSeoTitle = watch('seoTitle');
  const watchedSeoDescription = watch('seoDescription');
  const watchedSeoKeywords = watch('seoKeywords');

  const addTag = () => {
    if (tagInput.trim() !== '' && !tags.includes(tagInput.trim())) {
      const newTags = [...tags, tagInput.trim()];
      setTags(newTags);
      setValue('tags', newTags);
      setTagInput('');
    }
  };

  const removeTag = (index: number) => {
    const newTags = tags.filter((_, i) => i !== index);
    setTags(newTags);
    setValue('tags', newTags);
  };

  const handleFormSubmit = (data: Post) => {
    onSubmit({
      ...data,
      tags,
    });
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2">
        <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-6">
          <Input
            label="Заглавие"
            placeholder="Въведете заглавие"
            {...register('title', { required: 'Заглавието е задължително' })}
            error={errors.title?.message}
          />

          <Input
            label="Slug (URL)"
            placeholder="url-na-statiyata"
            {...register('slug', { required: 'URL е задължителен' })}
            error={errors.slug?.message}
          />

          <TextArea
            label="Кратко описание"
            placeholder="Въведете кратко описание (ще се показва в списъка със статии)"
            {...register('excerpt', { required: 'Краткото описание е задължително' })}
            error={errors.excerpt?.message}
          />

          <TextArea
            label="Съдържание"
            placeholder="Въведете съдържанието на статията..."
            className="min-h-[300px]"
            {...register('content', { required: 'Съдържанието е задължително' })}
            error={errors.content?.message}
          />

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Тагове
            </label>
            <div className="flex items-center">
              <Input
                placeholder="Добави таг"
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                className="mr-2"
              />
              <Button
                type="button"
                onClick={addTag}
                icon={<Plus size={16} />}
                variant="secondary"
              >
                Добави
              </Button>
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              {tags.map((tag, index) => (
                <div
                  key={index}
                  className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-cyber-gray text-cyber-blue"
                >
                  {tag}
                  <button
                    type="button"
                    onClick={() => removeTag(index)}
                    className="ml-2 text-gray-400 hover:text-cyber-red"
                  >
                    <X size={14} />
                  </button>
                </div>
              ))}
            </div>
          </div>

          <h3 className="text-xl font-bold mt-8 mb-4">SEO Настройки</h3>

          <Input
            label="SEO Заглавие"
            placeholder="SEO заглавие (препоръчително 50-60 символа)"
            {...register('seoTitle')}
          />

          <TextArea
            label="SEO Описание"
            placeholder="SEO описание (препоръчително 150-160 символа)"
            {...register('seoDescription')}
          />

          <Input
            label="SEO Ключови думи"
            placeholder="Ключови думи, разделени със запетая"
            {...register('seoKeywords')}
          />

          <div className="flex justify-between mt-6">
            <Button
              type="button"
              variant="outline"
              onClick={() => setShowSeoAnalyzer(!showSeoAnalyzer)}
            >
              {showSeoAnalyzer ? 'Скрий SEO Анализатор' : 'Покажи SEO Анализатор'}
            </Button>
            <div className="flex space-x-4">
              <Button type="submit" variant="primary" icon={<Save size={20} />} isLoading={isSubmitting}>
                Запази
              </Button>
            </div>
          </div>
        </form>
      </div>

      <div className="lg:col-span-1">
        {showSeoAnalyzer && (
          <SEOAnalyzer
            title={watchedTitle || ''}
            content={watchedContent || ''}
            seoTitle={watchedSeoTitle || ''}
            seoDescription={watchedSeoDescription || ''}
            seoKeywords={watchedSeoKeywords || ''}
          />
        )}
      </div>
    </div>
  );
};

export default BlogPostForm;