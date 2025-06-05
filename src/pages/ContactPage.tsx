import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import SEOHead from '../components/Layout/SEOHead';
import Input from '../components/UI/Input';
import TextArea from '../components/UI/TextArea';
import Button from '../components/UI/Button';
import CyberCard from '../components/UI/CyberCard';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    Status: 'ново',
    Pinned: 'false',
    DeletedAt: '',
    Date: new Date().toISOString(),
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Моля, въведете вашето име';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Моля, въведете вашия имейл';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Моля, въведете валиден имейл адрес';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Моля, въведете вашето съобщение';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);

    try {
      const response = await fetch('/.netlify/functions/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Грешка при изпращане');

      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });

      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error('Form error:', error);
      alert('Възникна грешка при изпращане. Моля, опитайте отново.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SEOHead
        title="Контакти | SEO Специалист Станчев"
        description="Свържете се със Станчев - SEO специалист за българския пазар. Безплатна консултация и персонализирани решения за вашия бизнес."
        keywords="контакти, SEO консултация, SEO специалист, Станчев контакти"
        canonicalUrl="https://stanchev.bg/контакти"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "name": "Контакти",
          "description": "Свържете се със Станчев - SEO специалист за българския пазар",
          "url": "https://stanchev.bg/контакти",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+359 88 888 8888",
            "contactType": "customer service",
            "areaServed": "BG",
            "availableLanguage": "Bulgarian"
          }
        }}
      />

      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="neon-text">Свържете се</span> с мен
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Имате въпроси или искате да обсъдим вашия проект? Свържете се с мен и ще ви отговоря възможно най-скоро.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1 space-y-6">
              <CyberCard glowColor="purple">
                <div className="flex items-start">
                  <div className="mr-4">
                    <MapPin className="text-cyber-purple" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Адрес</h3>
                    <p className="text-gray-300">София, България</p>
                  </div>
                </div>
              </CyberCard>

              <CyberCard glowColor="blue">
                <div className="flex items-start">
                  <div className="mr-4">
                    <Phone className="text-cyber-blue" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Телефон</h3>
                    <p className="text-gray-300">+359 88 888 8888</p>
                  </div>
                </div>
              </CyberCard>

              <CyberCard glowColor="teal">
                <div className="flex items-start">
                  <div className="mr-4">
                    <Mail className="text-cyber-teal" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Имейл</h3>
                    <p className="text-gray-300">seo@stanchev.bg</p>
                  </div>
                </div>
              </CyberCard>

              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4">Работно време</h3>
                <div className="space-y-2 text-gray-300">
                  <div className="flex justify-between">
                    <span>Понеделник - Петък:</span>
                    <span>09:00 - 17:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Събота:</span>
                    <span>Затворено</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Неделя:</span>
                    <span>Затворено</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <CyberCard glowColor="pink" className="h-full">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="text-cyber-green text-5xl mb-4">✓</div>
                    <h3 className="text-2xl font-bold mb-4">Съобщението е изпратено успешно!</h3>
                    <p className="text-gray-300 mb-6">
                      Благодаря за съобщението. Ще се свържа с вас възможно най-скоро.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Input
                        label="Име"
                        name="name"
                        placeholder="Вашето име"
                        value={formData.name}
                        onChange={handleChange}
                        error={errors.name}
                      />
                      <Input
                        label="Имейл"
                        name="email"
                        type="email"
                        placeholder="вашият@имейл.бг"
                        value={formData.email}
                        onChange={handleChange}
                        error={errors.email}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Input
                        label="Телефон (незадължително)"
                        name="phone"
                        placeholder="Вашият телефонен номер"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                      <Input
                        label="Тема"
                        name="subject"
                        placeholder="Тема на съобщението"
                        value={formData.subject}
                        onChange={handleChange}
                      />
                    </div>

                    <TextArea
                      label="Съобщение"
                      name="message"
                      placeholder="Вашето съобщение..."
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      error={errors.message}
                    />

                    <div className="text-right">
                      <Button
                        type="submit"
                        variant="primary"
                        icon={<Send size={20} />}
                        isLoading={isSubmitting}
                      >
                        Изпрати съобщение
                      </Button>
                    </div>
                  </form>
                )}
              </CyberCard>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
