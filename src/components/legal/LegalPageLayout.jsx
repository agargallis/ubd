import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const LegalPageLayout = ({ t, currentPath }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  return (
    <>
      <Helmet>
        <title>{t.pageTitle}</title>
        <meta name="description" content={t.pageDescription} />
      </Helmet>

      <div className="py-24 md:py-32 text-foreground">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="glass-shell rounded-3xl border px-6 py-8 md:px-10 md:py-10 mb-8 text-center"
          >
            <p className="text-xs uppercase tracking-[0.18em] text-primary/80 font-semibold mb-3">
              {t.badge}
            </p>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-3 text-white">
              {t.title}
            </h1>
            <p className="text-base md:text-lg text-gray-300 mb-4 max-w-3xl mx-auto">
              {t.subtitle}
            </p>
            <p className="text-xs md:text-sm text-gray-400">
              {t.lastUpdatedLabel} {t.lastUpdated}
            </p>

            <div className="mt-6 flex flex-wrap justify-center gap-3">
              {t.legalNav.map((item) => {
                const active = item.path === currentPath;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={scrollToTop}
                    className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                      active
                        ? 'border-primary/70 bg-primary/15 text-primary'
                        : 'border-slate-700/60 bg-slate-800/40 text-gray-300 hover:text-primary hover:border-primary/60'
                    }`}
                    aria-current={active ? 'page' : undefined}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </motion.div>

          <div className="space-y-6">
            {t.sections.map((section, index) => (
              <motion.section
                key={section.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.04 }}
                className="glass-shell rounded-2xl border px-6 py-6 md:px-8 md:py-7"
              >
                <h2 className="text-xl md:text-2xl font-bold text-white mb-3">{section.title}</h2>
                <p className="text-gray-300 leading-relaxed">{section.body}</p>
              </motion.section>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default LegalPageLayout;
