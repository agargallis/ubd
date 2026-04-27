import React from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { CheckCircle, TrendingUp, Sparkles, Users } from 'lucide-react';
import { PROJECTS } from '@/components/About';

const HERO_TRANSLATIONS = {
  el: {
    headingTop: 'Ενδυναμώστε την επιχείρησή σας με',
    headingAccent: 'σύγχρονη τεχνολογία',
    description: 'Η UBD ειδικεύεται στη μετατροπή παραδοσιακών επιχειρήσεων σε ψηφιακές δυναμικές ομάδες μέσω βελτιστοποίησης και ασφάλειας social media, δημιουργία ιστοσελίδων, έξυπνες λύσεις καταστημάτων, ενσωμάτωσης Google Maps, συντήρησης e-services και όχι μόνο.',
    primaryCta: 'Ξεκινήστε την διαδικασία',
    secondaryCta: 'Εξερευνήστε τις υπηρεσίες',
    features: [
      { title: '100% Επιτυχία', description: 'Εγγυημένα αποτελέσματα.' },
      { title: 'Γρήγορα αποτελέσματα', description: 'Δείτε ανάπτυξη σύντομα.' },
      { title: 'Στενή συνεργασία', description: 'Δουλεύουμε μαζί σας σε κάθε βήμα.' },
    ],
  },
  en: {
    headingTop: 'Empower your business with',
    headingAccent: 'modern technology',
    description: 'UBD specializes in transforming traditional businesses into dynamic digital teams through social media optimization and security, website creation, smart store solutions, Google Maps integration, e-services maintenance, and more.',
    primaryCta: 'Start the process',
    secondaryCta: 'Explore services',
    features: [
      { title: '100% Success', description: 'Guaranteed results.' },
      { title: 'Fast outcomes', description: 'See growth quickly.' },
      { title: 'Close collaboration', description: 'We work with you at every step.' },
    ],
  },
};

const FEATURE_ICONS = [
  <CheckCircle className="h-8 w-8 text-primary" />,
  <TrendingUp className="h-8 w-8 text-primary" />,
  <Users className="h-8 w-8 text-primary" />,
];

const ClientLogoCarousel = () => {
  const [isPaused, setIsPaused] = React.useState(false);
  const clients = PROJECTS.filter((project) => project.image && project.imageLink);
  const renderLogo = (project, index, duplicate = false) => (
    <motion.a
      key={`${duplicate ? 'duplicate' : 'primary'}-${project.title}-${index}`}
      href={project.imageLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={project.title}
      title={project.title}
      tabIndex={duplicate ? -1 : 0}
      className="client-logo-item group relative flex h-24 w-36 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-white/[0.06] p-4 outline-none transition-colors duration-300 hover:border-primary/70 focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/60 sm:h-28 sm:w-44"
      onPointerDown={() => setIsPaused(true)}
      whileHover={{ y: -3, scale: 1.035 }}
      whileTap={{ scale: 0.98 }}
    >
      <span className="client-logo-aura absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100" />
      <img
        src={project.image}
        alt={duplicate ? '' : project.alt}
        loading="lazy"
        className="relative z-10 max-h-16 max-w-[7.5rem] object-contain transition duration-300 group-hover:scale-105 sm:max-h-20 sm:max-w-[9rem]"
      />
    </motion.a>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, ease: 'easeOut', delay: 0.95 }}
      className="client-logo-stage relative mx-auto mb-16 max-w-5xl overflow-hidden py-3 md:mb-20"
      onPointerEnter={() => setIsPaused(true)}
      onPointerLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      <div className="client-logo-edge client-logo-edge-left" />
      <div className="client-logo-edge client-logo-edge-right" />
      <div className={`client-logo-track flex w-max items-center ${isPaused ? 'client-logo-track-paused' : ''}`}>
        <div className="client-logo-group flex items-center gap-4 px-2">
          {clients.map((project, index) => renderLogo(project, index))}
        </div>
        <div className="client-logo-group flex items-center gap-4 px-2" aria-hidden="true">
          {clients.map((project, index) => renderLogo(project, index, true))}
        </div>
      </div>
    </motion.div>
  );
};

const Hero = ({ language }) => {
  const t = HERO_TRANSLATIONS[language] || HERO_TRANSLATIONS.el;
  const features = t.features.map((feature, index) => ({ ...feature, icon: FEATURE_ICONS[index] }));

  const scrollToSection = id => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
    return <section id="hero" className="relative -mt-24 pt-44 pb-20 md:mt-0 md:pt-28 md:pb-20 text-white overflow-hidden">
      <div className="absolute inset-0 bg-grid-primary/[0.07] [mask-image:linear-gradient(to_bottom,white_5%,transparent_100%)]"></div>
      <div className="pointer-events-none absolute -top-16 left-1/2 h-64 w-[38rem] -translate-x-1/2 rounded-full bg-cyan-400/20 blur-3xl"></div>
          <div className="container mx-auto px-6 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 18, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              whileHover={{ y: -2, scale: 1.015 }}
              className="hero-badge relative mb-8 inline-flex items-center overflow-hidden rounded-full border border-white/15 px-5 py-3 text-sm shadow-xl backdrop-blur-md md:px-6 md:text-base"
            >
              <span className="hero-badge-glow" />
              <span className="hero-badge-sheen" />
              <span className="relative z-10 inline-flex items-center text-white">
                <motion.span
                  animate={{ rotate: [0, 8, -6, 0], scale: [1, 1.08, 1] }}
                  transition={{ duration: 3.6, ease: 'easeInOut', repeat: Infinity, repeatDelay: 0.5 }}
                  className="mr-2 inline-flex md:mr-3"
                >
                  <Sparkles className="h-5 w-5 text-yellow-400 drop-shadow-[0_0_12px_rgba(250,204,21,0.55)]" />
                </motion.span>
                <span className="inline-block leading-tight">
                  Upgrading Business Digitally -{' '}
                  <span className="font-semibold text-amber-300 drop-shadow-[0_0_12px_rgba(251,191,36,0.35)]">
                    Established in 2025
                  </span>
                </span>
              </span>
            </motion.div>


            <motion.h1 initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6,
        delay: 0.4
      }} className="text-4xl md:text-6xl font-bold mb-4 text-white luxury-heading leading-tight">
              {t.headingTop} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500 text-glow">
                {t.headingAccent}
              </span>
            </motion.h1>

            <motion.p initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6,
        delay: 0.6
      }} className="max-w-3xl mx-auto text-lg text-muted-foreground mb-10 leading-relaxed">{t.description}</motion.p>

            <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6,
        delay: 0.8
      }} className="flex flex-col justify-center gap-4 mb-8 sm:flex-row md:mb-10">
              <Button size="lg" className="bg-primary text-primary-foreground font-bold hover:bg-primary/90 transition-opacity duration-300" onClick={() => scrollToSection('contact')}>{t.primaryCta}</Button>
              <Button size="lg" variant="outline" className="text-foreground border-primary hover:bg-primary/10 hover:text-primary" onClick={() => scrollToSection('services')}>
                {t.secondaryCta}
              </Button>
            </motion.div>

            <ClientLogoCarousel />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {features.map((feature, index) => <motion.div key={index} initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5,
          delay: 1 + index * 0.2
        }} whileHover={{
          y: -10,
          scale: 1.05,
          boxShadow: "0 10px 30px rgba(1, 151, 178, 0.2)"
        }} className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 text-center cursor-pointer backdrop-blur-sm">
                  <div className="flex justify-center mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </motion.div>)}
            </div>
          </div>
        </section>;
};
export default Hero;
