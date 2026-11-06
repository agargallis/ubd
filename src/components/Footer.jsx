import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { LUX_EASE } from '@/components/lux/Lux';
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

  const links = [
    { to: '/privacy', label: t.privacyPolicy, icon: ShieldCheck },
    { to: '/terms', label: t.terms, icon: FileText },
    { to: '/cookies', label: t.cookies, icon: Cookie },
  ];

  return <motion.footer
      className="relative z-10 text-gray-400 py-14 md:py-20"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1, ease: LUX_EASE }}
    >
      <div className="container mx-auto px-6">
        <div className="footer-grid lux-footer glass-shell relative overflow-hidden rounded-[2rem] border px-6 py-10 md:px-12 md:py-12">
          <span className="lux-footer__beam" aria-hidden="true" />
          <motion.span
            className="lux-footer__watermark"
            aria-hidden="true"
            initial={{ opacity: 0, y: 60, letterSpacing: '0.6em' }}
            whileInView={{ opacity: 1, y: 0, letterSpacing: '0.12em' }}
            viewport={{ once: true }}
            transition={{ duration: 1.6, ease: LUX_EASE, delay: 0.2 }}
          >
            UBD
          </motion.span>

          <div className="relative z-10 flex justify-center mb-8">
            <div className="flex flex-wrap justify-center gap-3">
              {links.map(({ to, label, icon: Icon }, index) => (
                <motion.div
                  key={to}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, ease: LUX_EASE, delay: 0.3 + index * 0.1 }}
                >
                  <Link to={to} onClick={scrollToTop} aria-label={label} title={label} className="lux-pill">
                    <span className="lux-btn__shine" aria-hidden="true" />
                    <Icon className="h-4 w-4 mr-2 relative z-10" />
                    <span className="relative z-10">{label}</span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="lux-divider relative z-10 mb-6" />

          <div className="relative z-10 flex flex-col items-center md:flex-row md:justify-between text-sm gap-2 md:gap-4">
            <p className="text-center md:text-left">&copy; {new Date().getFullYear()} UBD. {t.rights}</p>
            <p className="text-center md:text-right">{t.builtWith}</p>
          </div>
        </div>
      </div>
    </motion.footer>;
};
export default Footer;
