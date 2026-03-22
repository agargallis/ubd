import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Compass, Home, LifeBuoy, Search, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';

const NOT_FOUND_TRANSLATIONS = {
  el: {
    pageTitle: '404 | Η σελίδα δεν βρέθηκε',
    pageDescription: 'Η σελίδα που ζητήσατε δεν υπάρχει ή έχει μετακινηθεί.',
    badge: 'UBD NAVIGATION ERROR',
    eyebrow: 'Ψάχνατε κάτι συγκεκριμένο;',
    titleStart: 'Η διαδρομή σας',
    titleAccent: 'έσπασε',
    titleEnd: 'κάπου στο δίκτυο.',
    subtitle:
      'Το link ίσως είναι παλιό, λανθασμένο ή η σελίδα μετακινήθηκε. Μπορείτε να επιστρέψετε στην αρχική ή να συνεχίσετε από τα βασικά σημεία του site.',
    pathLabel: 'Διαδρομή που ζητήθηκε',
    backHome: 'Αρχική σελίδα',
    exploreServices: 'Δείτε υπηρεσίες',
    contactUs: 'Επικοινωνία',
    panelTitle: 'Τι μπορείτε να κάνετε τώρα',
    panelItems: [
      {
        title: 'Επιστροφή στην αρχική',
        description: 'Ξεκινήστε ξανά από το κεντρικό landing page της UBD.',
      },
      {
        title: 'Πλοήγηση στις υπηρεσίες',
        description: 'Μεταβείτε κατευθείαν στις λύσεις που προσφέρουμε.',
      },
      {
        title: 'Άμεση επικοινωνία',
        description: 'Στείλτε μας μήνυμα αν ψάχνατε κάτι πιο συγκεκριμένο.',
      },
    ],
    destinationsTitle: 'Γρήγοροι προορισμοί',
    destinations: [
      { label: 'Υπηρεσίες', to: '/#services' },
      { label: 'Σχετικά με εμάς', to: '/#about' },
      { label: 'Testimonials', to: '/#testimonials' },
      { label: 'Contact', to: '/#contact' },
    ],
    assuranceTitle: 'Το site λειτουργεί κανονικά',
    assuranceText:
      'Το πρόβλημα αφορά μόνο αυτή τη διαδρομή, όχι τη διαθεσιμότητα της σελίδας ή των υπηρεσιών μας.',
  },
  en: {
    pageTitle: '404 | Page Not Found',
    pageDescription: 'The page you requested does not exist or has been moved.',
    badge: 'UBD NAVIGATION ERROR',
    eyebrow: 'Looking for something specific?',
    titleStart: 'Your route',
    titleAccent: 'broke',
    titleEnd: 'somewhere in the network.',
    subtitle:
      'The link may be outdated, mistyped, or the page was moved. You can return to the homepage or jump into the main sections of the site.',
    pathLabel: 'Requested path',
    backHome: 'Back to home',
    exploreServices: 'View services',
    contactUs: 'Contact us',
    panelTitle: 'What you can do now',
    panelItems: [
      {
        title: 'Return to the homepage',
        description: 'Restart from the main UBD landing page.',
      },
      {
        title: 'Browse the services',
        description: 'Jump directly to the solutions we offer.',
      },
      {
        title: 'Reach out directly',
        description: 'Send us a message if you were looking for something specific.',
      },
    ],
    destinationsTitle: 'Quick destinations',
    destinations: [
      { label: 'Services', to: '/#services' },
      { label: 'About', to: '/#about' },
      { label: 'Testimonials', to: '/#testimonials' },
      { label: 'Contact', to: '/#contact' },
    ],
    assuranceTitle: 'The site is working normally',
    assuranceText:
      'The issue is limited to this route, not to the availability of the website or our services.',
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: custom => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: 'easeOut',
      delay: 0.12 * custom,
    },
  }),
};

const NotFoundPage = ({ language }) => {
  const location = useLocation();
  const t = NOT_FOUND_TRANSLATIONS[language] || NOT_FOUND_TRANSLATIONS.el;

  return (
    <>
      <Helmet>
        <title>{t.pageTitle}</title>
        <meta name="description" content={t.pageDescription} />
      </Helmet>

      <section className="relative isolate overflow-hidden py-16 md:py-24 lg:py-28">
        <div className="absolute inset-0 bg-grid-primary/[0.05] [mask-image:linear-gradient(to_bottom,white_8%,transparent_100%)]" />
        <div className="pointer-events-none absolute left-[-6rem] top-20 h-56 w-56 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="pointer-events-none absolute right-[-4rem] top-1/3 h-64 w-64 rounded-full bg-amber-300/20 blur-3xl" />

        <div className="container relative z-10 mx-auto px-6">
          <div className="grid items-stretch gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)]">
            <motion.div
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="glass-shell rounded-[2rem] border px-6 py-8 md:px-10 md:py-12"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-700/50 bg-slate-800/50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-primary">
                <Compass className="h-4 w-4" />
                {t.badge}
              </div>

              <p className="mt-6 text-sm font-medium uppercase tracking-[0.24em] text-foreground/70">
                {t.eyebrow}
              </p>

              <div className="mt-4 flex items-end gap-4 md:gap-6">
                <span className="text-7xl font-black leading-none text-white sm:text-8xl md:text-9xl">
                  404
                </span>
                <div className="hidden h-px flex-1 bg-gradient-to-r from-primary/70 to-transparent md:block" />
              </div>

              <h1 className="mt-6 max-w-3xl text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
                {t.titleStart} <span className="text-primary">{t.titleAccent}</span> {t.titleEnd}
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-relaxed text-gray-300 md:text-lg">
                {t.subtitle}
              </p>

              <div className="mt-8 rounded-2xl border border-slate-700/50 bg-slate-800/40 p-4 md:p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary/80">
                  {t.pathLabel}
                </p>
                <p className="mt-3 break-all font-mono text-sm text-gray-300 md:text-base">
                  {location.pathname || '/'}
                  {location.search}
                  {location.hash}
                </p>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button asChild size="lg" className="rounded-full px-6 font-semibold">
                  <Link to="/">
                    <Home className="mr-2 h-4 w-4" />
                    {t.backHome}
                  </Link>
                </Button>

                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-full border-slate-700/60 bg-slate-800/50 px-6 font-semibold text-gray-300 hover:border-primary/60 hover:text-primary"
                >
                  <Link to="/#services">
                    <Search className="mr-2 h-4 w-4" />
                    {t.exploreServices}
                  </Link>
                </Button>

                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-full border-slate-700/60 bg-transparent px-6 font-semibold text-gray-300 hover:border-primary/60 hover:text-primary"
                >
                  <Link to="/#contact">
                    <LifeBuoy className="mr-2 h-4 w-4" />
                    {t.contactUs}
                  </Link>
                </Button>
              </div>
            </motion.div>

            <div className="grid gap-6">
              <motion.div
                custom={2}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="glass-shell rounded-[2rem] border px-6 py-7 md:px-8"
              >
                <div className="mb-6 flex items-center gap-3">
                  <div className="rounded-2xl bg-primary/15 p-3 text-primary">
                    <ArrowRight className="h-5 w-5" />
                  </div>
                  <h2 className="text-xl font-bold text-white md:text-2xl">{t.panelTitle}</h2>
                </div>

                <div className="space-y-4">
                  {t.panelItems.map(item => (
                    <div
                      key={item.title}
                      className="rounded-2xl border border-slate-700/50 bg-slate-800/40 p-4"
                    >
                      <h3 className="text-base font-bold text-white">{item.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-gray-300">{item.description}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                custom={3}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="glass-shell rounded-[2rem] border px-6 py-7 md:px-8"
              >
                <h2 className="text-xl font-bold text-white md:text-2xl">{t.destinationsTitle}</h2>

                <div className="mt-5 space-y-3">
                  {t.destinations.map(destination => (
                    <Link
                      key={destination.to}
                      to={destination.to}
                      className="group flex items-center justify-between rounded-2xl border border-slate-700/50 bg-slate-800/40 px-4 py-3 text-gray-300 transition-all duration-300 hover:border-primary/60 hover:text-primary"
                    >
                      <span className="font-medium">{destination.label}</span>
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  ))}
                </div>

                <div className="mt-6 rounded-2xl border border-primary/20 bg-primary/10 p-4">
                  <div className="flex items-start gap-3">
                    <ShieldCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                    <div>
                      <h3 className="font-bold text-white">{t.assuranceTitle}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-gray-300">{t.assuranceText}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFoundPage;
