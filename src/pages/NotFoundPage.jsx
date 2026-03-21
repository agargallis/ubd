import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, LifeBuoy } from 'lucide-react';
import { Button } from '@/components/ui/button';

const NOT_FOUND_TRANSLATIONS = {
  el: {
    pageTitle: '404 | Η σελίδα δεν βρέθηκε',
    pageDescription: 'Η σελίδα που αναζητάτε δεν υπάρχει ή μετακινήθηκε.',
    badge: 'ΣΦΑΛΜΑ 404',
    title: 'Η σελίδα δεν βρέθηκε',
    subtitle: 'Το link μπορεί να είναι παλιό ή να έχει πληκτρολογηθεί λάθος. Μπορείτε να επιστρέψετε στην αρχική σελίδα ή να επικοινωνήσετε μαζί μας.',
    backHome: 'Επιστροφή στην Αρχική',
    contactUs: 'Επικοινωνία',
  },
  en: {
    pageTitle: '404 | Page Not Found',
    pageDescription: 'The page you are looking for does not exist or has been moved.',
    badge: 'ERROR 404',
    title: 'Page not found',
    subtitle: 'The link may be outdated or typed incorrectly. You can go back to the homepage or contact us directly.',
    backHome: 'Back to Home',
    contactUs: 'Contact Us',
  },
};

const NotFoundPage = ({ language }) => {
  const t = NOT_FOUND_TRANSLATIONS[language] || NOT_FOUND_TRANSLATIONS.el;

  return (
    <>
      <Helmet>
        <title>{t.pageTitle}</title>
        <meta name="description" content={t.pageDescription} />
      </Helmet>

      <section className="py-24 md:py-32 min-h-[70vh] flex items-center">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="glass-shell rounded-3xl border px-6 py-12 md:px-10 md:py-14 text-center"
          >
            <p className="text-xs uppercase tracking-[0.18em] text-primary/80 font-semibold mb-4">
              {t.badge}
            </p>

            <h1 className="text-5xl md:text-7xl font-black leading-none text-white mb-4">404</h1>
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">{t.title}</h2>
            <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto mb-8">{t.subtitle}</p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button asChild size="lg" className="rounded-full font-semibold px-6">
                <Link to="/">
                  <Home className="h-4 w-4 mr-2" />
                  {t.backHome}
                </Link>
              </Button>

              <Button asChild size="lg" variant="outline" className="rounded-full font-semibold px-6 border-slate-700/60 bg-slate-800/50 text-gray-300 hover:text-primary hover:border-primary/60">
                <Link to="/#contact">
                  <LifeBuoy className="h-4 w-4 mr-2" />
                  {t.contactUs}
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default NotFoundPage;
