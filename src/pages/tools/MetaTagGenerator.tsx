import React, { useState } from 'react';
import { Copy, Moon, Sun } from 'lucide-react';
import CyberCard from '../../components/UI/CyberCard';
import SEOHead from '../../components/Layout/SEOHead';

const MetaTagGeneratorPage: React.FC = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [keywords, setKeywords] = useState('');
  const [url, setUrl] = useState('');
  const [image, setImage] = useState('');
  const [author, setAuthor] = useState('');
  const [favicon, setFavicon] = useState('');
  const [themeColor, setThemeColor] = useState('#ffffff');
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const metaTags = `
    <title>${title}</title>
    <meta name="description" content="${description}">
    <meta name="keywords" content="${keywords}">
    <meta name="author" content="${author}">
    <meta name="theme-color" content="${themeColor}">
    <link rel="canonical" href="${url}">
    <link rel="icon" href="${favicon}">
    <meta property="og:title" content="${title}">
    <meta property="og:description" content="${description}">
    <meta property="og:image" content="${image}">
    <meta property="og:url" content="${url}">
    <meta property="og:type" content="website">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${title}">
    <meta name="twitter:description" content="${description}">
    <meta name="twitter:image" content="${image}">
  `;

  const handleCopy = () => {
    navigator.clipboard.writeText(metaTags);
    alert('Мета таговете са копирани!');
  };

  return (
    <>
      <SEOHead
        title="Генератор на Мета Тагове | SEO инструменти за разработчици"
        description="Генерирайте лесно и бързо SEO мета тагове за вашия уебсайт с реален преглед, копиране и експортиране."
        keywords="meta тагове, SEO генератор, OpenGraph, JSON-LD, разработчици"
        canonicalUrl="https://stanchev.bg/tools/meta-tag-generator"
      />
      <div className={`pt-24 pb-20 ${darkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold">Генератор на Мета Тагове</h1>
            <button onClick={toggleDarkMode} className="btn-primary flex items-center">
              {darkMode ? <Sun className="mr-2" /> : <Moon className="mr-2" />}
              {darkMode ? 'Светъл режим' : 'Тъмен режим'}
            </button>
          </div>
          <CyberCard>
            <div className="grid gap-4">
              <input placeholder="Заглавие на страницата" value={title} onChange={e => setTitle(e.target.value)} className="input" />
              <input placeholder="Описание" value={description} onChange={e => setDescription(e.target.value)} className="input" />
              <input placeholder="Ключови думи (разделени със запетая)" value={keywords} onChange={e => setKeywords(e.target.value)} className="input" />
              <input placeholder="URL адрес на страницата" value={url} onChange={e => setUrl(e.target.value)} className="input" />
              <input placeholder="URL на изображение" value={image} onChange={e => setImage(e.target.value)} className="input" />
              <input placeholder="Автор" value={author} onChange={e => setAuthor(e.target.value)} className="input" />
              <input placeholder="Favicon URL" value={favicon} onChange={e => setFavicon(e.target.value)} className="input" />
              <input placeholder="Цвят на темата (#hex)" value={themeColor} onChange={e => setThemeColor(e.target.value)} className="input" />
            </div>
          </CyberCard>

          <div className="mt-8">
            <CyberCard>
              <h2 className="text-xl font-bold mb-4">Преглед на мета таговете</h2>
              <pre className="bg-gray-900 text-green-400 p-4 rounded overflow-auto text-sm whitespace-pre-wrap">{metaTags}</pre>
              <button onClick={handleCopy} className="btn-secondary mt-4 inline-flex items-center">
                <Copy className="mr-2" size={16} />
                Копирай таговете
              </button>
              <a href="https://developers.facebook.com/tools/debug/" target="_blank" rel="noopener noreferrer" className="btn-link mt-2 block">
                Отвори OpenGraph Debugger
              </a>
            </CyberCard>
          </div>
        </div>
      </div>
    </>
  );
};

export default MetaTagGeneratorPage;
