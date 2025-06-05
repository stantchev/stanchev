import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import Button from '../components/UI/Button';

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-24 flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-6xl md:text-8xl font-bold mb-6 neon-text">404</h1>
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Страницата не е намерена</h2>
      <p className="text-xl text-gray-400 max-w-2xl mb-8">
        Съжаляваме, но страницата, която търсите, не съществува или е преместена на друго място.
      </p>
      <Link to="/">
        <Button variant="primary" icon={<Home size={20} />}>
          Към началната страница
        </Button>
      </Link>
    </div>
  );
};

export default NotFoundPage;