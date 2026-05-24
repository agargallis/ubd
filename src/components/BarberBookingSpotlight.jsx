import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  ExternalLink,
  Sparkles,
  Smartphone,
} from 'lucide-react';

const DEMO_URL = 'https://barbershop-booking-jet.vercel.app/';
const REEL_URL = 'https://www.instagram.com/reel/DW7iTw2CN9X/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==';

const BARBER_SPOTLIGHT_TRANSLATIONS = {
  el: {
    badge: 'bestforbarbershops',
    titleParts: [
      { text: 'Το ' },
      { text: 'booking app', accent: true },
      { text: ' που όχι απλά σε ' },
      { text: 'αυτοματοποιεί', accent: true },
      { text: ' αλλά παύει να σε γεμίζει με πολλαπλά έξοδα και πονοκέφαλο, ' },
      { text: 'όλα έτοιμα από εμάς!', accent: true },
    ],
    titlePrefix: 'Η booking εφαρμογή που κάνει ένα',
    titleAccent: 'barbershop πιο εύκολο',
    titleSuffix: 'να δουλέψει',
    description:
      'Πανέτοιμο barber booking app που το πληρώνεις μια φορά και το κρατάς για πάντα, πλήρως λειτουργικό χωρίς μηνιαία έξοδα και 24/7 υποστήριξη από εμάς παντελώς δωρεάν σε οτιδήποτε χρειαστεί. Αρχικά, μπορεί ωστόσο να χρησιμοποιηθεί δοκιμαστικά παντελώς ΔΩΡΕΑΝ!',
    demoCta: 'Live Demo',
    contactCta: 'Το θέλω!',
    appTitle: 'Barbershop Booking App',
    presentationLine: 'Και σελίδα παρουσίασης και σύστημα κρατήσεων!',
    taxLine: 'Tax free, επικοινώνησε μαζί μου και θα καταλάβεις!',
  },
  en: {
    badge: 'bestforbarbershops',
    titleParts: [
      { text: 'The ' },
      { text: 'booking app', accent: true },
      { text: ' that does more than automate you: it stops multiple costs and headaches from piling up, ' },
      { text: 'everything ready from us!', accent: true },
    ],
    titlePrefix: 'The booking app that makes a',
    titleAccent: 'barbershop easier',
    titleSuffix: 'to run',
    description:
      'A ready barber booking app that you pay for once and keep forever. Fully functional, with no monthly fees and completely free 24/7 support from us for anything you need. At first, it can also be used as a trial completely FREE!',
    demoCta: 'Live Demo',
    contactCta: 'I want it!',
    appTitle: 'Barbershop Booking App',
    presentationLine: 'Both a presentation page and a booking system!',
    taxLine: 'Tax free, contact me and you will understand!',
  },
};

const BarberBookingSpotlight = ({ language }) => {
  const t = BARBER_SPOTLIGHT_TRANSLATIONS[language] || BARBER_SPOTLIGHT_TRANSLATIONS.el;

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="barber-booking" className="relative overflow-hidden py-16 md:py-20">
      <div className="absolute inset-x-0 top-1/2 -z-10 h-64 -translate-y-1/2 bg-primary/10 blur-3xl" />
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="grid items-center gap-8 rounded-2xl border border-slate-700/50 bg-slate-800/50 p-6 shadow-2xl md:p-8 lg:grid-cols-[1.12fr_0.88fr]"
        >
          <div className="text-center lg:text-left">
            <div className="mb-5 flex justify-center lg:justify-start">
              <span className="inline-flex items-center rounded-full border border-amber-300/50 bg-gradient-to-r from-amber-300 to-primary px-5 py-2 text-sm font-black uppercase tracking-[0.16em] text-slate-950 shadow-[0_10px_30px_rgba(251,191,36,0.22)]">
                <Sparkles className="mr-2 h-4 w-4" />
                {t.badge}
              </span>
            </div>

            <motion.h2
              animate={{
                y: [0, -4, 0],
                scale: [1, 1.012, 1],
                textShadow: ['0 0 0 rgba(34,211,238,0)', '0 0 26px rgba(34,211,238,0.28)', '0 0 0 rgba(34,211,238,0)'],
              }}
              transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut' }}
              className="relative mb-5 inline-block text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl"
            >
              <motion.span
                aria-hidden="true"
                className="absolute -bottom-3 left-0 right-0 h-1 rounded-full bg-[linear-gradient(90deg,transparent,hsl(var(--primary)),#fcd34d,hsl(var(--primary)),transparent)] bg-[length:220%_100%]"
                animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'], opacity: [0.45, 1, 0.45] }}
                transition={{ duration: 2.7, repeat: Infinity, ease: 'easeInOut' }}
              />
              {t.titleParts ? (
                t.titleParts.map((part, index) => (
                  <React.Fragment key={`${part.text}-${index}`}>
                    {part.accent ? (
                      <motion.span
                        animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                        transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut', delay: index * 0.12 }}
                        className="inline-block bg-[linear-gradient(90deg,hsl(var(--primary)),#fcd34d,hsl(var(--primary)))] bg-[length:220%_100%] bg-clip-text text-transparent"
                      >
                        {part.text}
                      </motion.span>
                    ) : (
                      part.text
                    )}
                  </React.Fragment>
                ))
              ) : (
                <>
                  {t.titlePrefix}{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-amber-300">
                    {t.titleAccent}
                  </span>{' '}
                  {t.titleSuffix}
                </>
              )}
            </motion.h2>

            <p className="mx-auto mb-7 max-w-2xl text-base leading-relaxed text-gray-300 md:text-lg lg:mx-0">
              {t.description}
            </p>

            <div className="flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
              <Button asChild size="lg" className="bg-primary text-primary-foreground font-bold hover:bg-primary/90">
                <a href={DEMO_URL} target="_blank" rel="noopener noreferrer">
                  {t.demoCta}
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button
                type="button"
                size="lg"
                variant="outline"
                className="border-primary text-foreground hover:bg-primary/10 hover:text-primary"
                onClick={scrollToContact}
              >
                {t.contactCta}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          <motion.a
            href={REEL_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t.appTitle}
            animate={{ y: [0, -7, 0] }}
            transition={{ duration: 4.6, repeat: Infinity, ease: 'easeInOut' }}
            whileHover={{ scale: 1.02 }}
            className="group relative mx-auto block w-full max-w-sm overflow-hidden rounded-[2rem] p-[2px] shadow-[0_26px_70px_rgba(0,0,0,0.35)] transition-all duration-300"
          >
            <motion.span
              className="absolute -inset-24 bg-[conic-gradient(from_90deg,rgba(34,211,238,0.12),rgba(251,191,36,0.9),rgba(34,211,238,0.7),rgba(251,191,36,0.9),rgba(34,211,238,0.12))]"
              animate={{ rotate: 360 }}
              transition={{ duration: 7, repeat: Infinity, ease: 'linear' }}
            />
            <motion.span
              className="absolute inset-y-0 -left-1/2 w-1/3 skew-x-[-18deg] bg-white/25 blur-xl"
              animate={{ x: ['0%', '520%'] }}
              transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut', repeatDelay: 1.1 }}
            />

            <div className="relative rounded-[1.85rem] bg-slate-950/90 p-4 ring-1 ring-white/10 transition-colors duration-300 group-hover:bg-slate-900/95">
              <div className="mb-4 flex items-center justify-between px-2">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400 shadow-[0_0_14px_rgba(248,113,113,0.6)]" />
                  <span className="h-3 w-3 rounded-full bg-amber-300 shadow-[0_0_14px_rgba(252,211,77,0.6)]" />
                  <span className="h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_14px_rgba(52,211,153,0.6)]" />
                </div>
              </div>

              <div className="overflow-hidden rounded-[1.5rem] border border-slate-700/70 bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-950 p-5">
                <div className="mb-7 flex items-center gap-4">
                  <motion.div
                    animate={{ scale: [1, 1.05, 1], rotate: [0, -2, 2, 0] }}
                    transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut' }}
                    className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white p-2 shadow-lg"
                  >
                    <img
                      src="https://i.imgur.com/0JIuRWN.png"
                      alt={t.appTitle}
                      className="h-full w-full object-contain"
                      loading="lazy"
                    />
                  </motion.div>
                  <div>
                    <div className="text-xl font-bold text-slate-100">{t.appTitle}</div>
                  </div>
                </div>

                <p className="rounded-xl bg-white/[0.08] px-4 py-4 text-center text-sm leading-relaxed text-slate-300 ring-1 ring-white/10">
                  {t.presentationLine}
                </p>

                <div className="mt-5 rounded-2xl bg-primary p-4 text-center font-bold text-primary-foreground">
                  <Smartphone className="mx-auto mb-2 h-6 w-6" />
                  {t.taxLine}
                </div>
              </div>
            </div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default BarberBookingSpotlight;
