import React, { useMemo } from 'react';
import { CheckCircle, AlertCircle, XCircle } from 'lucide-react';
import CyberCard from '../UI/CyberCard';

interface SEOAnalyzerProps {
  title: string;
  content: string;
  seoTitle: string;
  seoDescription: string;
  seoKeywords: string;
}

interface SEOCheck {
  label: string;
  check: () => boolean;
  suggestion?: string;
}

const SEOAnalyzer: React.FC<SEOAnalyzerProps> = ({
  title,
  content,
  seoTitle,
  seoDescription,
  seoKeywords,
}) => {
  const keywordsList = useMemo(() => {
    return seoKeywords.split(',').map(k => k.trim().toLowerCase()).filter(Boolean);
  }, [seoKeywords]);

  const mainKeyword = keywordsList[0] || '';

  const seoChecks: SEOCheck[] = useMemo(() => [
    {
      label: 'Дължина на SEO заглавието',
      check: () => {
        const length = seoTitle.length;
        return length >= 40 && length <= 65;
      },
      suggestion: 'SEO заглавието трябва да бъде между 40 и 65 символа.'
    },
    {
      label: 'Дължина на SEO описанието',
      check: () => {
        const length = seoDescription.length;
        return length >= 120 && length <= 160;
      },
      suggestion: 'SEO описанието трябва да бъде между 120 и 160 символа.'
    },
    {
      label: 'Ключова дума в SEO заглавието',
      check: () => {
        if (!mainKeyword) return false;
        return seoTitle.toLowerCase().includes(mainKeyword);
      },
      suggestion: 'Основната ключова дума трябва да присъства в SEO заглавието.'
    },
    {
      label: 'Ключова дума в SEO описанието',
      check: () => {
        if (!mainKeyword) return false;
        return seoDescription.toLowerCase().includes(mainKeyword);
      },
      suggestion: 'Основната ключова дума трябва да присъства в SEO описанието.'
    },
    {
      label: 'Ключова дума в съдържанието',
      check: () => {
        if (!mainKeyword || !content) return false;
        
        const contentLower = content.toLowerCase();
        const mainKeywordCount = (contentLower.match(new RegExp(mainKeyword, 'g')) || []).length;
        
        // Check keyword density (0.5% to 2.5% is generally good)
        const wordCount = content.split(/\s+/).length;
        const keywordDensity = (mainKeywordCount / wordCount) * 100;
        
        return keywordDensity >= 0.5 && keywordDensity <= 2.5;
      },
      suggestion: 'Основната ключова дума трябва да присъства в съдържанието с оптимална плътност (0.5%-2.5%).'
    },
    {
      label: 'Дължина на съдържанието',
      check: () => {
        const wordCount = content.split(/\s+/).filter(Boolean).length;
        return wordCount >= 300;
      },
      suggestion: 'Съдържанието трябва да бъде поне 300 думи за добро SEO.'
    },
    {
      label: 'Заглавие на статията',
      check: () => {
        return title.length >= 10 && title.length <= 70;
      },
      suggestion: 'Заглавието на статията трябва да бъде между 10 и 70 символа.'
    },
    {
      label: 'Използване на подзаглавия',
      check: () => {
        // Check for markdown headings or HTML heading tags
        const hasHeadings = /#{2,}|\<h[2-6]/i.test(content);
        return hasHeadings;
      },
      suggestion: 'Използвайте подзаглавия (H2, H3, и т.н.) за по-добра структура на съдържанието.'
    },
    {
      label: 'Вътрешни или външни връзки',
      check: () => {
        return content.includes('http') || content.includes('href=');
      },
      suggestion: 'Добавете вътрешни или външни връзки за по-добро SEO.'
    },
  ], [title, content, seoTitle, seoDescription, mainKeyword]);

  const calculateScore = () => {
    const passedChecks = seoChecks.filter(check => check.check()).length;
    return Math.floor((passedChecks / seoChecks.length) * 100);
  };

  const score = calculateScore();
  
  const getScoreColor = () => {
    if (score >= 80) return 'text-cyber-green';
    if (score >= 50) return 'text-cyber-yellow';
    return 'text-cyber-red';
  };

  return (
    <CyberCard className="sticky top-24">
      <h3 className="text-xl font-bold mb-4">SEO Анализатор</h3>
      
      <div className="mb-6 flex items-center justify-between">
        <span className="text-gray-300">Общ SEO резултат:</span>
        <span className={`text-3xl font-bold ${getScoreColor()}`}>{score}%</span>
      </div>
      
      <div className="space-y-4">
        {seoChecks.map((check, index) => {
          const passed = check.check();
          return (
            <div key={index} className="flex items-start">
              <div className="mt-1 mr-3">
                {passed ? (
                  <CheckCircle className="text-cyber-green\" size={20} />
                ) : (
                  <XCircle className="text-cyber-red" size={20} />
                )}
              </div>
              <div>
                <div className="font-medium">{check.label}</div>
                {!passed && check.suggestion && (
                  <div className="text-sm text-gray-400 mt-1">{check.suggestion}</div>
                )}
              </div>
            </div>
          );
        })}
      </div>
      
      {mainKeyword && (
        <div className="mt-6 pt-6 border-t border-cyber-gray">
          <h4 className="font-medium mb-2">Основна ключова дума:</h4>
          <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-cyber-gray text-cyber-blue">
            {mainKeyword}
          </div>
        </div>
      )}
      
      {score < 70 && (
        <div className="mt-6 p-4 bg-cyber-gray/50 rounded-md flex items-start">
          <AlertCircle className="text-cyber-yellow mt-1 mr-3 flex-shrink-0" size={20} />
          <p className="text-sm text-gray-300">
            Подобрете SEO резултата си, като следвате препоръките по-горе. Фокусирайте се върху ключовите думи и структурата на съдържанието.
          </p>
        </div>
      )}
    </CyberCard>
  );
};

export default SEOAnalyzer;