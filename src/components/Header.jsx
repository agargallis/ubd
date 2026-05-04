import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon, BriefcaseBusiness, Users, PhoneCall } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

const HEADER_TRANSLATIONS = {
  el: {
    services: 'Υπηρεσίες',
    about: 'Σχετικά Με Εμάς',
    contact: 'Επικοινωνία',
    toggleTheme: 'Εναλλαγή Θέματος',
    greek: 'Ελληνικά',
    english: 'Αγγλικά',
  },
  en: {
    services: 'Services',
    about: 'About Us',
    contact: 'Contact',
    toggleTheme: 'Toggle theme',
    greek: 'Greek',
    english: 'English',
  },
};

const LanguageButton = ({ code, label, flag, isActive, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    aria-label={label}
    title={label}
    className={`group relative flex items-center justify-center rounded-lg border px-2.5 py-1.5 transition-all duration-300 touch-manipulation [webkit-tap-highlight-color:transparent] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 ${
      isActive
        ? 'border-white/15 bg-[linear-gradient(135deg,rgba(255,255,255,0.16),rgba(255,255,255,0.05))] shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_8px_20px_rgba(15,23,42,0.22)]'
        : 'border-slate-700/70 bg-slate-900/55 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] hover:border-slate-500/80 hover:bg-slate-800/70 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_10px_22px_rgba(15,23,42,0.18)]'
    }`}
  >
    <span
      className={`absolute inset-0 rounded-lg transition-opacity duration-300 ${
        isActive
          ? 'bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.18),transparent_60%)]'
          : 'opacity-0 group-hover:opacity-100 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_60%)]'
      }`}
    />
    <span className="relative rounded-[4px] ring-1 ring-black/10 shadow-[0_1px_2px_rgba(15,23,42,0.18)]">
      <img src={flag} alt={label} className="h-4 w-4 rounded-[4px] object-cover" />
    </span>
    <span className="sr-only">{code}</span>
  </button>
);

const Header = ({ theme, setTheme, language, setLanguage }) => {
  const [activeSection, setActiveSection] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  const t = HEADER_TRANSLATIONS[language] || HEADER_TRANSLATIONS.el;
  const logoFilter =
    theme === 'dark'
      ? 'brightness(0) invert(1) drop-shadow(0 0 10px rgba(91, 234, 255, 0.36))'
      : 'brightness(0)';

  const navItems = [
    { label: t.services, id: 'services', icon: BriefcaseBusiness },
    { label: t.about, id: 'about', icon: Users },
    { label: t.contact, id: 'contact', icon: PhoneCall }
  ];
  
  const scrollToSection = id => {
    if (location.pathname !== '/') {
      navigate(`/#${id}`);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    if (location.pathname !== '/') {
      setActiveSection('');
      return;
    }

    const sectionIds = navItems.map(item => item.id);
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-50% 0px -50% 0px' }
    );

    sectionIds.forEach(id => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      sectionIds.forEach(id => {
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
    };
  }, [navItems, location.pathname]);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-3 left-0 right-0 z-50"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="glass-shell rounded-[2rem] px-4 py-2.5 md:px-7 md:py-4 flex justify-between items-center backdrop-blur-xl">
          <div className="flex items-center">
            <img
              alt="UBD Logo"
              className="h-12 md:h-20 w-auto site-logo"
              src="https://i.imgur.com/I7mGxrV.png"
              style={{ filter: logoFilter }}
            />
          </div>

          <nav className="flex md:hidden items-center gap-1.5">
            {navItems.map(item => {
              const Icon = item.icon;
              const isActive = location.pathname === '/' && activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  title={item.label}
                  aria-label={item.label}
                  className={`relative rounded-full p-2 transition-colors duration-300 touch-manipulation [webkit-tap-highlight-color:transparent] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 ${isActive ? 'text-primary bg-primary/10' : 'text-foreground/80 hover:text-primary hover:bg-primary/5'}`}
                >
                  <Icon className="h-4 w-4" />
                  <span className="sr-only">{item.label}</span>
                </button>
              );
            })}
          </nav>

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map(item => {
              const Icon = item.icon;
              const isActive = location.pathname === '/' && activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  title={item.label}
                  aria-label={item.label}
                  className={`relative rounded-full px-3 py-1.5 transition-colors duration-300 touch-manipulation [webkit-tap-highlight-color:transparent] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 ${isActive ? 'text-primary bg-primary/10' : 'text-foreground/80 hover:text-primary hover:bg-primary/5'}`}
                >
                  <Icon className="h-5 w-5" />
                  <span className="sr-only">{item.label}</span>
                  {isActive && (
                    <motion.div
                      className="absolute bottom-[-4px] left-3 right-3 h-[2px] bg-primary"
                      layoutId="underline"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          <div className="flex items-center">
            <div className="hidden sm:flex items-center gap-2 mr-3">
              <LanguageButton
                code="EL"
                label={t.greek}
                flag="/gr.png"
                isActive={language === 'el'}
                onClick={() => setLanguage('el')}
              />
              <LanguageButton
                code="EN"
                label={t.english}
                flag="/uk.png"
                isActive={language === 'en'}
                onClick={() => setLanguage('en')}
              />
            </div>

            <div className="flex sm:hidden items-center gap-2 mr-3">
              <LanguageButton
                code="EL"
                label={t.greek}
                flag="/gr.png"
                isActive={language === 'el'}
                onClick={() => setLanguage('el')}
              />
              <LanguageButton
                code="EN"
                label={t.english}
                flag="/uk.png"
                isActive={language === 'en'}
                onClick={() => setLanguage('en')}
              />
            </div>

            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-full border border-border/60 transition-all duration-300 md:hover:bg-muted md:hover:scale-105 md:hover:shadow-[0_0_20px_rgba(73,226,255,0.35)] touch-manipulation [webkit-tap-highlight-color:transparent] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
              aria-label={t.toggleTheme}
            >
              {theme === 'dark' ? (
                <Sun className="h-6 w-6 text-yellow-400" />
              ) : (
                <Moon className="h-6 w-6 text-slate-800" />
              )}
            </button>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
