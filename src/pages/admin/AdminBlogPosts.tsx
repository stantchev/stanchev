import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Plus, Search, Edit, Trash2, Check, X, ExternalLink } from 'lucide-react';
import SEOHead from '../../components/Layout/SEOHead';
import Input from '../../components/UI/Input';
import Button from '../../components/UI/Button';
import CyberCard from '../../components/UI/CyberCard';
import { useBlogStore } from '../../store/blogStore';
import { formatDate } from '../../utils/formatters';

const AdminBlogPosts: React.FC = () => {
  const navigate = useNavigate();
  const { posts, deletePost } = useBlogStore();
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'published' | 'draft'>('all');
  const [filteredPosts, setFilteredPosts] = useState(posts);
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null);

  // Filter posts based on search term and status
  useEffect(() => {
    let filtered = [...posts];
    
    // Filter by status
    if (statusFilter !== 'all') {
      filtered = filtered.filter(post => post.status === statusFilter);
    }
    
    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(post => 
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.content.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Sort by date (newest first)
    filtered.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
    
    setFilteredPosts(filtered);
  }, [posts, searchTerm, statusFilter]);

  const handleDelete = (id: string) => {
    if (deleteConfirm === id) {
      deletePost(id);
      setDeleteConfirm(null);
    } else {
      setDeleteConfirm(id);
    }
  };

  return (
    <>
      <SEOHead
        title="Управление на блога | SEO Специалист Станчев"
        description="Административен панел за управление на блог публикации"
        canonicalUrl="https://stanchev-seo.bg/admin/blog"
      />

      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <h1 className="text-3xl font-bold mb-4 md:mb-0">
              Управление на <span className="neon-text">блога</span>
            </h1>
            <Link to="/admin/blog/нов">
              <Button variant="primary" icon={<Plus size={20} />}>
                Нова публикация
              </Button>
            </Link>
          </div>

          {/* Filters */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="md:col-span-3">
              <Input
                placeholder="Търсене в публикациите..."
                icon={<Search size={18} />}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div>
              <select
                className="w-full px-4 py-3 bg-cyber-gray border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-cyber-purple focus:border-transparent"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value as any)}
              >
                <option value="all">Всички публикации</option>
                <option value="published">Само публикувани</option>
                <option value="draft">Само чернови</option>
              </select>
            </div>
          </div>

          {/* Blog Posts Table */}
          <CyberCard glowColor="purple">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-cyber-gray">
                    <th className="text-left py-4 px-4">Заглавие</th>
                    <th className="text-left py-4 px-4 hidden md:table-cell">Дата</th>
                    <th className="text-left py-4 px-4 hidden md:table-cell">Автор</th>
                    <th className="text-left py-4 px-4">Статус</th>
                    <th className="text-right py-4 px-4">Действия</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredPosts.length > 0 ? (
                    filteredPosts.map((post) => (
                      <tr key={post.id} className="border-b border-cyber-gray hover:bg-cyber-gray/20">
                        <td className="py-4 px-4">
                          <div className="font-medium">{post.title}</div>
                          <div className="text-sm text-gray-400 truncate md:hidden">
                            {formatDate(post.publishedAt)}
                          </div>
                        </td>
                        <td className="py-4 px-4 hidden md:table-cell">
                          {formatDate(post.publishedAt)}
                        </td>
                        <td className="py-4 px-4 hidden md:table-cell">{post.author}</td>
                        <td className="py-4 px-4">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            post.status === 'published' 
                              ? 'bg-cyber-green/20 text-cyber-green' 
                              : 'bg-cyber-yellow/20 text-cyber-yellow'
                          }`}>
                            {post.status === 'published' ? 'Публикувана' : 'Чернова'}
                          </span>
                        </td>
                        <td className="py-4 px-4 text-right whitespace-nowrap">
                          <div className="flex justify-end items-center space-x-2">
                            <button
                              onClick={() => navigate(`/blog/${post.slug}`)}
                              className="p-2 text-gray-400 hover:text-white transition-colors"
                              title="Преглед"
                            >
                              <ExternalLink size={18} />
                            </button>
                            <button
                              onClick={() => navigate(`/admin/blog/${post.id}`)}
                              className="p-2 text-gray-400 hover:text-cyber-blue transition-colors"
                              title="Редактиране"
                            >
                              <Edit size={18} />
                            </button>
                            <button
                              onClick={() => handleDelete(post.id!)}
                              className="p-2 text-gray-400 hover:text-cyber-red transition-colors"
                              title="Изтриване"
                            >
                              {deleteConfirm === post.id ? (
                                <Check size={18} className="text-cyber-red" />
                              ) : (
                                <Trash2 size={18} />
                              )}
                            </button>
                            {deleteConfirm === post.id && (
                              <button
                                onClick={() => setDeleteConfirm(null)}
                                className="p-2 text-gray-400 hover:text-white transition-colors"
                                title="Отказ"
                              >
                                <X size={18} />
                              </button>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={5} className="py-8 text-center text-gray-400">
                        Няма намерени публикации
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </CyberCard>
        </div>
      </div>
    </>
  );
};

export default AdminBlogPosts;