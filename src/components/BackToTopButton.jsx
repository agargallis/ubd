import React, { useEffect, useState } from 'react';
import { ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const BACK_TO_TOP_TRANSLATIONS = {
  el: {
    label: 'Πάνω',
    ariaLabel: 'Επιστροφή στην κορυφή',
  },
  en: {
    label: 'Top',
    ariaLabel: 'Back to top',
  },
};

const SHOW_AFTER_SCROLL_Y = 700;

const BackToTopButton = ({ language }) => {
  const [isVisible, setIsVisible] = useState(false);
  const t = BACK_TO_TOP_TRANSLATIONS[language] || BACK_TO_TOP_TRANSLATIONS.el;

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > SHOW_AFTER_SCROLL_Y);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      className={`fixed bottom-6 right-6 z-40 transition-all duration-300 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <Button
        type="button"
        onClick={scrollToTop}
        size="sm"
        aria-label={t.ariaLabel}
        title={t.ariaLabel}
        className="rounded-full h-11 px-4 bg-primary text-primary-foreground shadow-lg shadow-primary/30 hover:bg-primary/90"
      >
        <ChevronUp className="h-4 w-4 mr-1" />
        {t.label}
      </Button>
    </div>
  );
};

export default BackToTopButton;
