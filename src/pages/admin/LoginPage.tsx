import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, User } from 'lucide-react';
import SEOHead from '../../components/Layout/SEOHead';
import Input from '../../components/UI/Input';
import Button from '../../components/UI/Button';
import CyberCard from '../../components/UI/CyberCard';
import { useAuth } from '../../context/AuthContext';

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  // Redirect if already logged in
  React.useEffect(() => {
    if (isAuthenticated) {
      navigate('/admin');
    }
  }, [isAuthenticated, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    
    try {
      const success = await login(username, password);
      
      if (success) {
        navigate('/admin');
      } else {
        setError('Невалидно потребителско име или парола');
      }
    } catch (err) {
      setError('Възникна грешка при входа. Моля, опитайте отново.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <SEOHead
        title="Вход | SEO Специалист Станчев"
        description="Вход към административния панел"
        canonicalUrl="https://stanchev-seo.bg/вход"
      />

      <div className="min-h-screen pt-24 flex items-center justify-center px-4">
        <div className="w-full max-w-md">
          <CyberCard glowColor="purple" className="p-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold">
                <span className="neon-text">Вход</span> в администрацията
              </h1>
              <p className="text-gray-400 mt-2">
                Въведете вашите данни за достъп
              </p>
            </div>
            
            {error && (
              <div className="bg-cyber-red/20 border border-cyber-red text-white p-4 rounded-md mb-6">
                {error}
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                label="Потребителско име"
                placeholder="Въведете потребителско име"
                icon={<User size={18} />}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              
              <Input
                label="Парола"
                type="password"
                placeholder="Въведете парола"
                icon={<Lock size={18} />}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              
              <Button 
                type="submit" 
                variant="primary" 
                fullWidth 
                isLoading={isLoading}
              >
                Вход
              </Button>
            </form>
          </CyberCard>
        </div>
      </div>
    </>
  );
};

export default LoginPage;