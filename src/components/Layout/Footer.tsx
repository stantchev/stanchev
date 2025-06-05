import React from 'react';
import { Link } from 'react-router-dom';
import { Terminal, Github, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-cyber-dark border-t border-cyber-gray">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 text-2xl font-bold mb-4">
              <Terminal className="text-cyber-blue" size={28} />
              <span className="neon-text">Станчев SEO</span>
            </Link>
            <p className="text-gray-400 mb-4">
              Професионални SEO услуги за българския пазар. Помагам на бизнеси да подобрят своето онлайн присъствие и да постигнат по-високи позиции в търсачките.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="https://github.com/stantchev/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-cyber-blue transition-colors" aria-label="GitHub">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/stantcheff/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-cyber-purple transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="https://dev.to/stanchev" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-cyber-pink transition-colors" aria-label="Dev.to">
                DEV
              </a>
            </div>
          </div>
          
         <div className="col-span-1">
  <h3 className="text-xl font-bold mb-4">Страници</h3>
  <div className="grid grid-cols-2 gap-x-1 gap-y-2">
    <Link to="/" className="text-gray-400 hover:text-white transition-colors w-fit leading-tight">Начало</Link>
    <Link to="/услуги" className="text-gray-400 hover:text-white transition-colors w-fit leading-tight">Услуги</Link>
    <Link to="/blog" className="text-gray-400 hover:text-white transition-colors w-fit leading-tight">Блог</Link>
    <Link to="/за-мен" className="text-gray-400 hover:text-white transition-colors w-fit leading-tight">За мен</Link>
    <Link to="/ресурси" className="text-gray-400 hover:text-white transition-colors w-fit leading-tight">Ресурси</Link>
    <Link to="/контакти" className="text-gray-400 hover:text-white transition-colors w-fit leading-tight">Контакти</Link>
  </div>
          </div>
          <div className="col-span-1">
            <h3 className="text-xl font-bold mb-4">Контакти</h3>
            <ul className="space-y-2 text-gray-400">
              <li>София, България</li>
              <li>тел: +359 88 888 8888</li>
              <li>имейл: seo@stanchev.bg</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-cyber-gray text-center">
          <p className="text-gray-500">
            &copy; {currentYear} Станчев SEO. Всички права запазени.
          </p>
          <div className="mt-2 flex justify-center space-x-6">
            <Link to="/политика-за-поверителност" className="text-gray-500 hover:text-white text-sm transition-colors">
              Политика за поверителност
            </Link>
            <Link to="/общи-условия" className="text-gray-500 hover:text-white text-sm transition-colors">
              Общи условия
            </Link>
            <Link to="/бисквитки" className="text-gray-500 hover:text-white text-sm transition-colors">
              Бисквитки
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
