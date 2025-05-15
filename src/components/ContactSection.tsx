import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Mail, Github, Linkedin } from 'lucide-react';
import { FaDev } from 'react-icons/fa';
import { SiWebflow } from 'react-icons/si';
import emailjs from '@emailjs/browser';
import { ContactFormData } from '../types';

const ContactSection: React.FC = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .send(
        'service_7xhpxuz',
        'template_mr55u1m',
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' });

        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      })
      .catch((error) => {
        console.error('EmailJS error:', error);
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contact" className="relative py-20 bg-[#050816]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t('contact.title')} <span className="text-fuchsia-400">{t('contact.subtitle')}</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            {t('contact.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <div className="bg-[#1e293b] p-8 rounded-2xl">
            {isSubmitted ? (
              <div className="h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-fuchsia-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {t('contact.form.success.title')}
                  </h3>
                  <p className="text-gray-300">{t('contact.form.success.message')}</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label htmlFor="name" className="block text-white mb-2">
                    {t('contact.form.name')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#0c1424] border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 text-white"
                    placeholder={t('contact.form.name')}
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="email" className="block text-white mb-2">
                    {t('contact.form.email')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#0c1424] border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 text-white"
                    placeholder={t('contact.form.email')}
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-white mb-2">
                    {t('contact.form.message')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-[#0c1424] border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 text-white resize-none"
                    placeholder={t('contact.form.placeholder.message')}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 rounded-full bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white font-medium transition-all duration-300 ${
                    isSubmitting ? 'opacity-70' : 'hover:opacity-90'
                  }`}
                >
                  {isSubmitting ? t('contact.form.sending') : t('contact.form.send')}
                </button>
              </form>
            )}
          </div>

          <div className="flex flex-col justify-center">
            <div className="mb-8">
              <h3 className="text-xl font-bold text-white mb-4">{t('contact.info.title')}</h3>
              <p className="text-gray-300 mb-6">{t('contact.info.description')}</p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-[#1e293b] flex items-center justify-center mr-4">
                    <Mail className="h-5 w-5 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">{t('contact.info.email')}</h4>
                    <p className="text-gray-300">hello@stanchev.bg</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-[#1e293b] flex items-center justify-center mr-4">
                    <Mail className="h-5 w-5 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">{t('contact.info.location')}</h4>
                    <p className="text-gray-300">Sofia, Bulgaria</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-4">{t('contact.social.title')}</h3>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/stantcheff/"
                  className="w-10 h-10 rounded-full bg-[#1e293b] flex items-center justify-center hover:bg-[#2a3c58] transition-colors duration-300"
		  aria-label="LinkedIn профил на Станчев SEO експерт"
                >
                  <Linkedin className="h-5 w-5 text-cyan-400" />
                </a>
                <a
                  href="https://github.com/stantchev/"
                  className="w-10 h-10 rounded-full bg-[#1e293b] flex items-center justify-center hover:bg-[#2a3c58] transition-colors duration-300"
		  aria-label="GitHub профил на Станчев SEO експерт"
                >
                  <Github className="h-5 w-5 text-fuchsia-400" />
                </a>
                {}
                <a
                  href="https://dev.to/stanchev"
                  className="w-10 h-10 rounded-full bg-[#1e293b] flex items-center justify-center hover:bg-[#2a3c58] transition-colors duration-300"
		  aria-label="Dev.to профил на Станчев SEO експерт"
                >
                  <FaDev className="h-5 w-5 text-cyan-400" />
                </a>
                <a
  	   	 href="https://webflow.com/@stantchev"
		 className="w-10 h-10 rounded-full bg-[#1e293b] flex items-center justify-center hover:bg-[#2a3c58] transition-colors duration-300"
		 aria-label="Webflow профил на Станчев SEO експерт"
		>
		  <SiWebflow className="h-5 w-5 text-fuchsia-400" />
		</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
