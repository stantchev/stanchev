import React, { useState } from 'react';
import { Copy, Code, FileDown } from 'lucide-react';
import CyberCard from '../../components/UI/CyberCard';
import SEOHead from '../../components/Layout/SEOHead';

const SchemaGenerator: React.FC = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [url, setUrl] = useState('');
  const [type, setType] = useState('Organization');
  const [darkMode, setDarkMode] = useState(true);

	const toggleDarkMode = () => setDarkMode(!darkMode);

  const schema = {
    "@context": "https://schema.org",
    "@type": type,
    "name": name,
    "url": url,
    "description": description
  };

  const schemaText = JSON.stringify(schema, null, 2);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(schemaText);
    alert('Schema JSON-LD е копиран!');
  };

  const downloadSchema = () => {
    const blob = new Blob([schemaText], { type: 'application/json' });
    const urlBlob = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = urlBlob;
    link.download = 'schema.jsonld';
    link.click();
  };

  return (
    <>
      <SEOHead
        title="Генератор на Schema.org | SEO ресурси"
        description="Създайте JSON-LD Schema за вашия сайт с лесен за използване генератор на структурирани данни."
        keywords="schema генератор, структурирани данни, JSON-LD, SEO инструменти"
        canonicalUrl="https://stanchev.bg/tools/schema-generator"
      />

      <div className={`pt-24 pb-20 ${darkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-10 text-center">
            <span className="neon-text">Schema.org</span> Генератор
          </h1>

          <CyberCard className="mb-10">
            <form className="space-y-6">
              <div>
                <label className="block font-medium mb-2">Тип обект</label>
                <select
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  className="w-full p-2 bg-gray-800 text-white rounded"
                >
                  <option value="Organization">Организация</option>
                  <option value="Person">Човек</option>
                  <option value="LocalBusiness">Локален Бизнес</option>
                  <option value="WebSite">Уебсайт</option>
                  <option value="Product">Продукт</option>
                </select>
              </div>
              <div>
                <label className="block font-medium mb-2">Име</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-2 bg-gray-800 text-white rounded"
                  placeholder="Пример: Stanchev SEO"
                />
              </div>
              <div>
                <label className="block font-medium mb-2">URL адрес</label>
                <input
                  type="url"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  className="w-full p-2 bg-gray-800 text-white rounded"
                  placeholder="https://example.com"
                />
              </div>
              <div>
                <label className="block font-medium mb-2">Описание</label>
                <textarea
                  rows={4}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full p-2 bg-gray-800 text-white rounded"
                  placeholder="Кратко описание на бизнеса или сайта"
                />
              </div>
            </form>
          </CyberCard>

          <CyberCard>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">Преглед на Schema JSON-LD</h2>
              <div className="flex space-x-4">
                <button onClick={handleCopy} className="btn-secondary flex items-center space-x-2">
                  <Copy size={16} />
                  <span>Копирай</span>
                </button>
                <button onClick={downloadSchema} className="btn-secondary flex items-center space-x-2">
                  <FileDown size={16} />
                  <span>Изтегли</span>
                </button>
              </div>
            </div>
            <pre className="bg-gray-900 text-green-400 p-4 rounded overflow-auto text-sm">
              <code>{schemaText}</code>
            </pre>
          </CyberCard>

          <div className="mt-10 text-center">
            <a
              href="https://search.google.com/test/rich-results"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center"
            >
              <Code className="mr-2" size={18} />
              Тествай в Google Rich Results
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default SchemaGenerator;