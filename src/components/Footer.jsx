import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Cookie, FileText, ShieldCheck } from 'lucide-react';

const FOOTER_TRANSLATIONS = {
  el: {
    privacyPolicy: 'Πολιτική Απορρήτου',
    terms: 'Όροι Χρήσης',
    cookies: 'Πολιτική Cookies',
    rights: 'Με επιφύλαξη παντός δικαιώματος.',
    builtWith: 'Φτιαγμένο με ❤️ για σύγχρονες επιχειρήσεις.',
  },
  en: {
    privacyPolicy: 'Privacy Policy',
    terms: 'Terms of Use',
    cookies: 'Cookie Policy',
    rights: 'All rights reserved.',
    builtWith: 'Built with ❤️ for modern businesses.',
  },
};

const Footer = ({ language }) => {
  const t = FOOTER_TRANSLATIONS[language] || FOOTER_TRANSLATIONS.el;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  const footerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };
  return <motion.footer className="relative z-10 text-gray-400 py-14 md:py-16" variants={footerVariants} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true
  }}>
      <div className="container mx-auto px-6">
        <div className="footer-grid glass-shell relative overflow-hidden rounded-3xl border px-6 py-8 md:px-10 md:py-10">
        <div className="relative z-10 flex justify-center mb-6">
          <div className="flex flex-wrap justify-center gap-3">
            <Button asChild variant="outline" className="rounded-full border-slate-700/60 bg-slate-800/50 text-gray-300 hover:text-primary hover:border-primary/60">
              <Link to="/privacy" onClick={scrollToTop} aria-label={t.privacyPolicy} title={t.privacyPolicy}>
                <ShieldCheck className="h-4 w-4 mr-2" />
                {t.privacyPolicy}
              </Link>
            </Button>

            <Button asChild variant="outline" className="rounded-full border-slate-700/60 bg-slate-800/50 text-gray-300 hover:text-primary hover:border-primary/60">
              <Link to="/terms" onClick={scrollToTop} aria-label={t.terms} title={t.terms}>
                <FileText className="h-4 w-4 mr-2" />
                {t.terms}
              </Link>
            </Button>

            <Button asChild variant="outline" className="rounded-full border-slate-700/60 bg-slate-800/50 text-gray-300 hover:text-primary hover:border-primary/60">
              <Link to="/cookies" onClick={scrollToTop} aria-label={t.cookies} title={t.cookies}>
                <Cookie className="h-4 w-4 mr-2" />
                {t.cookies}
              </Link>
            </Button>
          </div>
        </div>

        <div className="relative z-10 border-t border-slate-700/50 pt-6 flex flex-col items-center md:flex-row md:justify-between text-sm gap-2 md:gap-4">
          <p className="text-center md:text-left">&copy; {new Date().getFullYear()} UBD. {t.rights}</p>
          <p className="text-center md:text-right">{t.builtWith}</p>
        </div>
        </div>
      </div>
    </motion.footer>;
};
export default Footer;