export interface Post {
  id?: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  tags: string[];
  seoTitle: string;
  seoDescription: string;
  seoKeywords: string;
  author: string;
  publishedAt: string;
  status: 'draft' | 'published';
}