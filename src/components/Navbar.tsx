import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { navLinks } from '../constants';

const Navbar: React.FC = () => {
  const [active, setActive] = useState<string>('');
  const [toggle, setToggle] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (id: string) => {
    setActive(id);
    setToggle(false);

    if (location.pathname !== '/') {
      navigate(`/#${id}`);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav
      className={`fixed w-full flex items-center py-5 top-0 z-20 ${
        scrolled ? 'bg-black/70 backdrop-blur-md' : 'bg-transparent'
      } transition-all duration-300`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto px-6">
        <button 
          onClick={() => handleNavigation('home')}
          className="flex items-center gap-2"
        >
          <span className="text-white text-xl font-bold cursor-pointer flex">
            <span className="text-white-400">Stanchev</span>
          </span>
        </button>

        <div className="hidden md:flex items-center gap-6">
          <ul className="list-none flex flex-row gap-10">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`${
                  active === nav.id ? 'text-white' : 'text-gray-400'
                } hover:text-cyan-400 text-lg font-medium cursor-pointer transition-colors duration-300`}
                onClick={() => handleNavigation(nav.id)}
              >
                {t(`nav.${nav.id}`)}
              </li>
            ))}
            <li>
              <Link
                to="/services"
                className="text-gray-400 hover:text-cyan-400 text-base font-medium transition-colors duration-300"
                onClick={() => setToggle(false)}
              >
                {t('nav.services')}
              </Link>
            </li>
          </ul>
        </div>

        <div className="md:hidden flex items-center gap-4">
          <button
            className="w-8 h-8 flex justify-center items-center text-white"
            onClick={() => setToggle(!toggle)}
            aria-label="Toggle menu"
          >
            {toggle ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div
            className={`${
              !toggle ? 'hidden' : 'flex'
            } p-6 bg-black/90 backdrop-blur-lg absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-medium cursor-pointer text-base ${
                    active === nav.id ? 'text-white' : 'text-gray-400'
                  }`}
                  onClick={() => handleNavigation(nav.id)}
                >
                  {t(`nav.${nav.id}`)}
                </li>
              ))}
              <li>
                <Link
                  to="/services"
                  className="text-gray-400 hover:text-cyan-400 text-base font-medium transition-colors duration-300"
                  onClick={() => setToggle(false)}
                >
                  {t('nav.services')}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
