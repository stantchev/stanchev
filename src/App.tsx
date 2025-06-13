import React, { useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import LoginPage from './pages/admin/LoginPage';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminBlogPosts from './pages/admin/AdminBlogPosts';
import AdminEditPost from './pages/admin/AdminEditPost';
import PrivateRoute from './components/Auth/PrivateRoute';
import NotFoundPage from './pages/NotFoundPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import CookiesPage from './pages/CookiesPage';
import { ScrollToTop } from './components/Layout/ScrollToTop';
import AdminRequests from './pages/admin/AdminRequests';
import ConsultationPage from './pages/services/ConsultationPage';
import AuditPage from './pages/services/AuditPage';
import StrategyPage from './pages/services/StrategyPage';
import OnPagePage from './pages/services/OnPagePage';
import KeywordResearchPage from './pages/services/KeywordResearchPage';
import TechnicalSEOPage from './pages/services/TechnicalSEOPage';
import ContentOptimizationPage from './pages/services/ContentOptimizationPage';
import LocalSEOPage from './pages/services/LocalSEOPage';
import StructuredDataPage from './pages/services/StructuredDataPage';
import LinkBuildingPage from './pages/services/LinkBuildingPage';
import MonitoringPage from './pages/services/MonitoringPage';
import ResourcesHomePage from './pages/resources/ResourcesHomePage';
import MetaTagGenerator from './pages/tools/MetaTagGenerator';
import SchemaGenerator from './pages/tools/SchemaGenerator';
import { shouldRedirect } from './utils/transliteration';

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  // Handle client-side redirects for transliterated URLs
  useEffect(() => {
    const redirectCheck = shouldRedirect(location.pathname);
    if (redirectCheck.redirect && redirectCheck.to) {
      navigate(redirectCheck.to, { replace: true });
    }
  }, [location.pathname, navigate]);

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="blog/:slug" element={<BlogPostPage />} />
          
          {/* Cyrillic routes */}
          <Route path="услуги" element={<ServicesPage />} />
          <Route path="за-мен" element={<AboutPage />} />
          <Route path="контакти" element={<ContactPage />} />
          <Route path="вход" element={<LoginPage />} />
          <Route path="политика-за-поверителност" element={<PrivacyPage />} />
          <Route path="общи-условия" element={<TermsPage />} />
          <Route path="бисквитки" element={<CookiesPage />} />
          <Route path="ресурси" element={<ResourcesHomePage />} />
          
          {/* Service pages - Cyrillic */}
          <Route path="услуги/консултация" element={<ConsultationPage />} />
          <Route path="услуги/seo-одит" element={<AuditPage />} />
          <Route path="услуги/стратегия" element={<StrategyPage />} />
          <Route path="услуги/on-page-оптимизация" element={<OnPagePage />} />
          <Route path="услуги/ключови-думи" element={<KeywordResearchPage />} />
          <Route path="услуги/техническо-seo" element={<TechnicalSEOPage />} />
          <Route path="услуги/оптимизация-на-съдържание" element={<ContentOptimizationPage />} />
          <Route path="услуги/локално-seo" element={<LocalSEOPage />} />
          <Route path="услуги/структурирани-данни" element={<StructuredDataPage />} />
          <Route path="услуги/линк-билдинг" element={<LinkBuildingPage />} />
          <Route path="услуги/seo-мониторинг" element={<MonitoringPage />} />
          
          {/* Transliterated routes for SEO */}
          <Route path="uslugi" element={<ServicesPage />} />
          <Route path="za-men" element={<AboutPage />} />
          <Route path="kontakti" element={<ContactPage />} />
          <Route path="vhod" element={<LoginPage />} />
          <Route path="politika-za-poveritelnost" element={<PrivacyPage />} />
          <Route path="obshti-usloviya" element={<TermsPage />} />
          <Route path="biskvitki" element={<CookiesPage />} />
          <Route path="resursi" element={<ResourcesHomePage />} />
          
          {/* Service pages - Transliterated */}
          <Route path="uslugi/konsultatsiya" element={<ConsultationPage />} />
          <Route path="uslugi/seo-odit" element={<AuditPage />} />
          <Route path="uslugi/strategiya" element={<StrategyPage />} />
          <Route path="uslugi/on-page-optimizatsiya" element={<OnPagePage />} />
          <Route path="uslugi/klyuchovi-dumi" element={<KeywordResearchPage />} />
          <Route path="uslugi/tehnichesko-seo" element={<TechnicalSEOPage />} />
          <Route path="uslugi/optimizatsiya-na-sadarzhanie" element={<ContentOptimizationPage />} />
          <Route path="uslugi/lokalno-seo" element={<LocalSEOPage />} />
          <Route path="uslugi/strukturirani-danni" element={<StructuredDataPage />} />
          <Route path="uslugi/link-bilding" element={<LinkBuildingPage />} />
          <Route path="uslugi/seo-monitoring" element={<MonitoringPage />} />
          
          {/* Tools */}
          <Route path="tools/meta-tag-generator" element={<MetaTagGenerator />} />
          <Route path="tools/schema-generator" element={<SchemaGenerator />} />
          
          {/* Special redirect for local-seo */}
          <Route path="local-seo" element={<LocalSEOPage />} />
          <Route path="lokalno-seo" element={<LocalSEOPage />} />
          
          <Route path="*" element={<NotFoundPage />} />
          
          {/* Admin Routes */}
          <Route path="admin" element={<PrivateRoute><AdminDashboard /></PrivateRoute>} />
          <Route path="admin/blog" element={<PrivateRoute><AdminBlogPosts /></PrivateRoute>} />
          <Route path="admin/blog/нов" element={<PrivateRoute><AdminEditPost /></PrivateRoute>} />
          <Route path="admin/blog/:id" element={<PrivateRoute><AdminEditPost /></PrivateRoute>} />
          <Route path="admin/заявки" element={<PrivateRoute><AdminRequests /></PrivateRoute>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;