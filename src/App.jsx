import React, { useState, useEffect } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CookieBanner from '@/components/CookieBanner';
import BackToTopButton from '@/components/BackToTopButton';
import PrivacyPage from '@/components/legal/PrivacyPage';
import TermsPage from '@/components/legal/TermsPage';
import CookiesPage from '@/components/legal/CookiesPage';
import HomePage from '@/pages/HomePage';
import NotFoundPage from '@/pages/NotFoundPage';
import IntroLoader from '@/components/IntroLoader';

const ScrollToSection = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView();
        }, 100);
      }
    }
  }, [hash]);

  return null;
};

function App() {
  const APP_TRANSLATIONS = {
    el: {
      description: 'Η UBD ειδικεύεται στη μετατροπή παραδοσιακών επιχειρήσεων σε ψηφιακές δυναμικές ομάδες.',
    },
    en: {
      description: 'UBD specializes in transforming traditional businesses into dynamic digital teams.',
    },
  };

  const getInitialTheme = () => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const storedPrefs = window.localStorage.getItem('theme');
      if (typeof storedPrefs === 'string') {
        return storedPrefs;
      }
    }
    return 'light';
  };

  const getInitialLanguage = () => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const storedLanguage = window.localStorage.getItem('language');
      if (storedLanguage === 'en' || storedLanguage === 'el') {
        return storedLanguage;
      }
    }
    return 'el';
  };

  const [theme, setTheme] = useState(getInitialTheme);
  const [language, setLanguage] = useState(getInitialLanguage);
  const appText = APP_TRANSLATIONS[language] || APP_TRANSLATIONS.el;

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(theme === 'dark' ? 'light' : 'dark');
    root.classList.add(theme);
    root.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  return (
    <HelmetProvider>
      <Router>
        <ScrollToSection />
        <div className="relative isolate min-h-screen min-h-[100dvh] text-foreground transition-colors duration-300 overflow-x-hidden flex flex-col">
          <IntroLoader />
          <div className="site-ambience" aria-hidden="true">
            <div className="ambient-orb ambient-orb-cyan" />
            <div className="ambient-orb ambient-orb-gold" />
            <div className="ambient-orb ambient-orb-blue" />
            <div className="ambient-halo" />
          </div>
          <Helmet>
            <title>UBD</title>
            <meta name="description" content={appText.description} />
            <link rel="icon" type="image/png" href="https://i.imgur.com/ESL8NlL.png" />
          </Helmet>

          <Header theme={theme} setTheme={setTheme} language={language} setLanguage={setLanguage} />

          <main className="relative z-10 pt-24 flex-1">
            <Routes>
              <Route path="/" element={<HomePage language={language} />} />
              <Route path="/privacy" element={<PrivacyPage language={language} />} />
              <Route path="/terms" element={<TermsPage language={language} />} />
              <Route path="/cookies" element={<CookiesPage language={language} />} />
              <Route path="/privacy-policy" element={<Navigate to="/privacy" replace />} />
              <Route path="*" element={<NotFoundPage language={language} />} />
            </Routes>
          </main>

          <Footer language={language} />
          <BackToTopButton language={language} />
          <CookieBanner language={language} />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
