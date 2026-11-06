import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
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
  const [isScrolled, setIsScrolled] = useState(false);
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

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      initial={{ y: -120, opacity: 0, filter: 'blur(10px)' }}
      animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
      className="fixed top-3 left-0 right-0 z-50"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className={`glass-shell lux-header rounded-[2rem] px-4 py-2.5 md:px-7 flex justify-between items-center backdrop-blur-xl ${isScrolled ? 'lux-header--scrolled md:py-2.5' : 'md:py-4'}`}>
          <span className="lux-header__line" aria-hidden="true" />
          <motion.div
            className="flex items-center"
            whileHover={{ scale: 1.04 }}
            transition={{ type: 'spring', stiffness: 300, damping: 18 }}
          >
            <img
              alt="UBD Logo"
              className={`w-auto site-logo transition-all duration-500 ${isScrolled ? 'h-11 md:h-14' : 'h-12 md:h-20'}`}
              src="https://i.imgur.com/I7mGxrV.png"
              style={{ filter: logoFilter }}
            />
          </motion.div>

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

          <nav className="hidden md:flex items-center gap-3 lux-nav">
            {navItems.map(item => {
              const Icon = item.icon;
              const isActive = location.pathname === '/' && activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  title={item.label}
                  aria-label={item.label}
                  className={`lux-nav__item group relative rounded-full px-4 py-2 transition-colors duration-300 touch-manipulation [webkit-tap-highlight-color:transparent] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 ${isActive ? 'text-primary' : 'text-foreground/80 hover:text-primary'}`}
                >
                  {isActive && (
                    <motion.span
                      className="lux-nav__pill"
                      layoutId="lux-nav-pill"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <Icon className="relative z-10 h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                  <span className="sr-only">{item.label}</span>
                  {isActive && (
                    <motion.div
                      className="absolute bottom-[-6px] left-1/2 h-[3px] w-6 -translate-x-1/2 rounded-full lux-nav__dot"
                      layoutId="underline"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
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

            <motion.button
              onClick={toggleTheme}
              whileTap={{ scale: 0.88 }}
              className="lux-theme-toggle p-2.5 rounded-full border border-border/60 transition-all duration-300 md:hover:bg-muted md:hover:scale-105 md:hover:shadow-[0_0_20px_rgba(73,226,255,0.35)] touch-manipulation [webkit-tap-highlight-color:transparent] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
              aria-label={t.toggleTheme}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={theme}
                  className="block"
                  initial={{ rotate: -120, scale: 0.4, opacity: 0 }}
                  animate={{ rotate: 0, scale: 1, opacity: 1 }}
                  exit={{ rotate: 120, scale: 0.4, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  {theme === 'dark' ? (
                    <Sun className="h-6 w-6 text-yellow-400" />
                  ) : (
                    <Moon className="h-6 w-6 text-slate-800" />
                  )}
                </motion.span>
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
