import React from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { CheckCircle, TrendingUp, Sparkles, Users } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

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




const Hero = ({ language }) => {
  const isMobile = useIsMobile();
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
  initial={{ opacity: 0, y: 20, scale: 0.98 }}
  animate={{ opacity: 1, y: 0, scale: 1 }}
  transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
  className="
    relative
    inline-flex
    items-center
    rounded-full
    px-6
    py-3
    md:px-6
    md:py-3
    text-sm
    md:text-base
    shadow-md
    mb-8
    overflow-hidden
    border border-gray-600/40
    backdrop-blur-md
  "
>
  {/* WAVE BACKGROUND */}
  <motion.div
    className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-500/30 to-cyan-500/20"
    animate={{ backgroundPositionX: ["0%", "200%"] }}
    transition={{ duration: 8, ease: "linear", repeat: Infinity }}
    style={{ backgroundSize: "200% 100%" }}
  />

  {/* CONTENT */}
  <span className="relative z-10 inline-flex items-center text-white">
    <Sparkles className="h-5 w-5 text-yellow-400 mr-2 md:mr-3 animate-pulse" />
    <motion.span
  animate={
    isMobile
      ? { scale: [1, 1.03, 1], opacity: [1, 0.92, 1] }
      : { letterSpacing: ["0em", "0.04em", "0em"] }
  }
  transition={{
    duration: 5,
    ease: "easeInOut",
    repeat: Infinity
  }}
  className="font-medium tracking-wide leading-tight inline-block origin-center [will-change:transform]"
>
  Upgrading Business Digitally -{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-500 font-semibold">
              Established in 2025
            </span>

</motion.span>
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
      }} className="flex justify-center gap-4 mb-16 md:mb-24">
              <Button size="lg" className="bg-primary text-primary-foreground font-bold hover:bg-primary/90 transition-opacity duration-300" onClick={() => scrollToSection('contact')}>{t.primaryCta}</Button>
              <Button size="lg" variant="outline" className="text-foreground border-primary hover:bg-primary/10 hover:text-primary" onClick={() => scrollToSection('services')}>
                {t.secondaryCta}
              </Button>
            </motion.div>

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