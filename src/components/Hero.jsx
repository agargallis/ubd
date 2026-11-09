import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { CheckCircle, TrendingUp, Sparkles, Users, ArrowUpRight, ChevronDown } from 'lucide-react';
import { PROJECTS } from '@/components/About';
import { SpotlightCard, Magnetic, WordReveal, LUX_EASE, useFinePointer } from '@/components/lux/Lux';

export const HERO_TRANSLATIONS = {
  el: {
    headingTop: 'Ενδυναμώστε την επιχείρησή σας με',
    headingAccent: 'σύγχρονη τεχνολογία',
    description: 'Η UBD ειδικεύεται στη μετατροπή παραδοσιακών επιχειρήσεων σε ψηφιακές δυναμικές ομάδες μέσω βελτιστοποίησης και ασφάλειας social media, δημιουργία ιστοσελίδων, έξυπνες λύσεις καταστημάτων, ενσωμάτωσης Google Maps, συντήρησης e-services και όχι μόνο.',
    primaryCta: 'ΜΗΝ το χάσεις!',
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
    primaryCta: "Don't miss it!",
    features: [
      { title: '100% Success', description: 'Guaranteed results.' },
      { title: 'Fast outcomes', description: 'See growth quickly.' },
      { title: 'Close collaboration', description: 'We work with you at every step.' },
    ],
  },
};

const FEATURE_ICONS = [
  <CheckCircle className="h-7 w-7" />,
  <TrendingUp className="h-7 w-7" />,
  <Users className="h-7 w-7" />,
];

const PARTICLES = Array.from({ length: 18 }, (_, index) => ({
  left: `${(index * 53) % 100}%`,
  top: `${(index * 37) % 100}%`,
  size: 2 + (index % 3),
  delay: (index % 7) * -1.3,
  duration: 9 + (index % 5) * 2,
}));

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
      className="client-logo-item group relative flex h-24 w-36 shrink-0 items-center justify-center overflow-hidden rounded-2xl p-4 outline-none focus-visible:ring-2 focus-visible:ring-primary/60 sm:h-28 sm:w-44"
      onPointerDown={() => setIsPaused(true)}
      whileHover={{ y: -6, scale: 1.06 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 300, damping: 18 }}
    >
      <span className="client-logo-aura absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100" />
      <span className="client-logo-shine" aria-hidden="true" />
      <img
        src={project.image}
        alt={duplicate ? '' : project.alt}
        loading="lazy"
        className="relative z-10 max-h-16 max-w-[7.5rem] object-contain transition duration-500 group-hover:scale-110 sm:max-h-20 sm:max-w-[9rem]"
      />
    </motion.a>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      transition={{ duration: 1, ease: LUX_EASE, delay: 1.25 }}
      className="client-logo-stage relative mx-auto mb-16 max-w-5xl overflow-hidden py-4 md:mb-20"
      onPointerEnter={() => setIsPaused(true)}
      onPointerLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      <div className="client-logo-edge client-logo-edge-left" />
      <div className="client-logo-edge client-logo-edge-right" />
      <div className={`client-logo-track flex w-max items-center ${isPaused ? 'client-logo-track-paused' : ''}`}>
        <div className="client-logo-group flex items-center gap-5 px-2.5">
          {clients.map((project, index) => renderLogo(project, index))}
        </div>
        <div className="client-logo-group flex items-center gap-5 px-2.5" aria-hidden="true">
          {clients.map((project, index) => renderLogo(project, index, true))}
        </div>
      </div>
    </motion.div>
  );
};

const Hero = ({ language }) => {
  const t = HERO_TRANSLATIONS[language] || HERO_TRANSLATIONS.el;
  const features = t.features.map((feature, index) => ({ ...feature, icon: FEATURE_ICONS[index] }));
  const sectionRef = useRef(null);
  const isFine = useFinePointer();

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] });
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0.15]);
  const stageScale = useTransform(scrollYProgress, [0, 1], [1, 1.18]);

  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const smoothX = useSpring(pointerX, { stiffness: 50, damping: 18 });
  const smoothY = useSpring(pointerY, { stiffness: 50, damping: 18 });
  const ringX = useTransform(smoothX, (value) => value * 28);
  const ringY = useTransform(smoothY, (value) => value * 28);
  const orbX = useTransform(smoothX, (value) => value * -46);
  const orbY = useTransform(smoothY, (value) => value * -46);

  const handlePointerMove = (event) => {
    if (!isFine) return;
    const rect = event.currentTarget.getBoundingClientRect();
    pointerX.set((event.clientX - rect.left) / rect.width - 0.5);
    pointerY.set((event.clientY - rect.top) / rect.height - 0.5);
  };

  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={sectionRef}
      id="hero"
      onPointerMove={handlePointerMove}
      className="lux-hero relative -mt-24 pt-44 pb-20 md:mt-0 md:pt-32 md:pb-24 text-white overflow-hidden"
    >
      <motion.div className="lux-hero__stage" style={isFine ? { scale: stageScale } : undefined} aria-hidden="true">
        <div className="lux-hero__grid" />
        <div className="lux-aurora">
          <span className="lux-aurora__band lux-aurora__band--one" />
          <span className="lux-aurora__band lux-aurora__band--two" />
          <span className="lux-aurora__band lux-aurora__band--three" />
        </div>
        <motion.div className="lux-hero__rings" style={{ x: ringX, y: ringY }}>
          <span className="lux-ring lux-ring--one" />
          <span className="lux-ring lux-ring--two" />
          <span className="lux-ring lux-ring--three" />
        </motion.div>
        <motion.div className="lux-hero__orb" style={{ x: orbX, y: orbY }} />
        <div className="lux-particles">
          {PARTICLES.map((particle, index) => (
            <span
              key={index}
              className="lux-particle"
              style={{
                left: particle.left,
                top: particle.top,
                width: particle.size,
                height: particle.size,
                animationDelay: `${particle.delay}s`,
                animationDuration: `${particle.duration}s`,
              }}
            />
          ))}
        </div>
      </motion.div>

      <motion.div
        className="container mx-auto px-6 text-center relative z-10"
        style={isFine ? { y: contentY, opacity: contentOpacity } : undefined}
      >
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.92, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1.1, ease: LUX_EASE, delay: 0.15 }}
          whileHover={{ y: -3, scale: 1.02 }}
          className="hero-badge relative mb-10 inline-flex items-center overflow-hidden rounded-full border border-white/15 px-5 py-3 text-sm shadow-xl backdrop-blur-md md:px-7 md:text-base"
        >
          <span className="hero-badge-glow" />
          <span className="hero-badge-sheen" />
          <span className="relative z-10 inline-flex items-center text-white">
            <motion.span
              animate={{ rotate: [0, 14, 0, -10, 0], scale: [1, 1.18, 1, 1.1, 1] }}
              transition={{ duration: 4.2, ease: [0.45, 0, 0.55, 1], repeat: Infinity }}
              className="mr-2 inline-flex md:mr-3"
            >
              <Sparkles className="h-5 w-5 text-yellow-400 drop-shadow-[0_0_14px_rgba(250,204,21,0.75)]" />
            </motion.span>
            <span className="inline-block leading-tight">
              Upgrading Business Digitally -{' '}
              <span className="font-semibold text-amber-300 drop-shadow-[0_0_12px_rgba(251,191,36,0.35)]">
                Established in 2025
              </span>
            </span>
          </span>
        </motion.div>

        <h1 className="lux-hero__title text-4xl sm:text-5xl md:text-7xl font-bold mb-6 text-white luxury-heading leading-[1.08]">
          <WordReveal text={t.headingTop} inView={false} delay={0.45} stagger={0.07} />
          <br />
          <span className="relative inline-block mt-1 md:mt-2">
            <WordReveal
              text={t.headingAccent}
              inView={false}
              delay={0.85}
              stagger={0.09}
              wordClassName="lux-gold-text lux-gold-text--hero"
            />
            <svg className="lux-hero__swash" viewBox="0 0 600 40" preserveAspectRatio="none" aria-hidden="true">
              <defs>
                <linearGradient id="lux-swash-gradient" x1="0" x2="1" y1="0" y2="0">
                  <stop offset="0%" stopColor="rgba(34,211,238,0)" />
                  <stop offset="25%" stopColor="#22d3ee" />
                  <stop offset="55%" stopColor="#f5d58a" />
                  <stop offset="85%" stopColor="#22d3ee" />
                  <stop offset="100%" stopColor="rgba(34,211,238,0)" />
                </linearGradient>
              </defs>
              <motion.path
                d="M6 28 C 140 6, 300 6, 420 18 S 560 34, 594 14"
                fill="none"
                stroke="url(#lux-swash-gradient)"
                strokeWidth="3.5"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.6, ease: LUX_EASE, delay: 1.35 }}
              />
            </svg>
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 22, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1, ease: LUX_EASE, delay: 1.05 }}
          className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground mb-12 leading-relaxed"
        >
          {t.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, ease: LUX_EASE, delay: 1.2 }}
          className="flex justify-center mb-12 md:mb-14"
        >
          <Magnetic strength={0.35}>
            <a
              href="https://koulis80.gr"
              target="_blank"
              rel="noopener noreferrer"
              className="lux-btn lux-btn--primary lux-btn--lg"
            >
              <span className="lux-btn__glow" aria-hidden="true" />
              <span className="lux-btn__shine" aria-hidden="true" />
              <span className="relative z-10">{t.primaryCta}</span>
              <ArrowUpRight className="lux-btn__icon relative z-10 h-5 w-5" />
            </a>
          </Magnetic>
        </motion.div>

        <ClientLogoCarousel />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto [perspective:1200px]">
          {features.map((feature, index) => (
            <SpotlightCard
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: LUX_EASE, delay: 1.45 + index * 0.15 }}
              className="rounded-3xl p-7 md:p-8 text-center"
            >
              <div className="relative z-10 flex justify-center mb-5">
                <span className="lux-icon-orb">
                  <span className="lux-icon-orb__ring" aria-hidden="true" />
                  <span className="relative z-10 text-primary">{feature.icon}</span>
                </span>
              </div>
              <h3 className="relative z-10 text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="relative z-10 text-gray-400">{feature.description}</p>
            </SpotlightCard>
          ))}
        </div>

        <motion.button
          type="button"
          onClick={scrollToServices}
          aria-label="Scroll"
          className="lux-scroll-cue mx-auto mt-14 hidden md:flex"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 1 }}
        >
          <span className="lux-scroll-cue__mouse"><span className="lux-scroll-cue__wheel" /></span>
          <ChevronDown className="h-4 w-4 lux-scroll-cue__chevron" />
        </motion.button>
      </motion.div>
    </section>
  );
};
export default Hero;
