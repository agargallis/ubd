import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Instagram, Globe, Search, ChevronLeft, ChevronRight, MenuSquare } from 'lucide-react';
import { SpotlightCard, SectionHeading, LUX_EASE } from '@/components/lux/Lux';

export const PROJECTS = [
  {
    title: 'Άσπρο Πρόβατο Κρεατοφαγείον',
    image: 'https://i.imgur.com/8mTd5fq.png',
    alt: 'Λογότυπο του εστιατορίου Άσπρο Πρόβατο',
    imageLink: 'https://aspro-provato.gr',
    links: [
      { icon: <Instagram className="h-6 w-6" />, url: 'https://www.instagram.com/aspro_provato/', label: 'Instagram Page' },
      { icon: <Globe className="h-6 w-6" />, url: 'https://aspro-provato.gr', label: 'Website Creation' },
      { icon: <Search className="h-6 w-6" />, url: 'https://go.screenpal.com/watch/cT63Djnbmvl', label: 'Google My Business' },
    ],
  },
  {
    title: 'Έπρεπε',
    image: 'https://i.imgur.com/y0MDg7Y.png',
    alt: 'Λογότυπο του εστιατορίου Έπρεπε',
    imageLink: 'https://eprepe-salamina.gr',
    links: [
      { icon: <Instagram className="h-6 w-6" />, url: 'https://www.instagram.com/eprepemplelimanaki/', label: 'Instagram Page' },
      { icon: <Globe className="h-6 w-6" />, url: 'https://eprepe-salamina.gr', label: 'Website Creation' },
      { icon: <Search className="h-6 w-6" />, url: 'https://www.google.com/search?q=%CE%88%CF%80%CF%81%CE%B5%CF%80%CE%B5+%CE%A3%CE%B1%CE%BB%CE%B1%CE%BC%CE%AF%CE%BD%CE%B1', label: 'Google Profile Optimization' },
    ],
  },
  {
    title: 'Λιοτρίβι',
    image: 'https://i.imgur.com/NzHvqVX.png',
    alt: 'Λογότυπο του καταστήματος Λιοτρίβι',
    imageLink: 'https://liotriviperisteri.gr',
    links: [
      { icon: <Instagram className="h-6 w-6" />, url: 'https://www.instagram.com/liotrivi_peristeri/', label: 'Instagram Optimization' },
      { icon: <Globe className="h-6 w-6" />, url: 'https://liotriviperisteri.gr', label: 'Website Creation' },
      { icon: <Search className="h-6 w-6" />, url: 'https://share.google/qhHt8f0MH0VmF0FSI', label: 'Google Profile Optimization' },
      { icon: <MenuSquare className="h-6 w-6" />, url:'https://cm2qcx.csb.app/',label: 'React App' },
    ],
  },
  {
    title: 'Giafaliscar',
    image: 'https://i.imgur.com/swE8yJq.png',
    alt: 'Λογότυπο του Giafaliscar',
    imageLink: 'https://giafaliscar.gr',
    links: [
      { icon: <Instagram className="h-6 w-6" />, url: 'https://www.instagram.com/giafaliscar/', label: 'Instagram Page' },
      { icon: <Globe className="h-6 w-6" />, url: 'https://giafaliscar.gr', label: 'Website Creation' },
      { icon: <Search className="h-6 w-6" />, url: 'https://share.google/pxrx9DO7Jne7QEd7m', label: 'Google Profile Optimization' },
    ],
  },
  {
    title: 'Jim Vlachos',
    image: 'https://i.imgur.com/DqZTyop.png',
    alt: 'Λογότυπο του Jim Vlachos',
    imageLink: 'https://jimvlachos.gr/',
    links: [
      { icon: <Instagram className="h-6 w-6" />, url: 'https://www.instagram.com/jim.vlachos/', label: 'Instagram Page' },
      { icon: <Globe className="h-6 w-6" />, url: 'https://jimvlachos.gr/', label: 'Website Creation' },
    ],
  },
  {
    title: 'Kalamaki Lab',
    image: 'https://i.imgur.com/lk2rBNd.png',
    alt: 'Λογότυπο του Kalamaki Lab',
    imageLink: 'https://linktr.ee/kalamakilab',
    links: [
      { icon: <Instagram className="h-6 w-6" />, url: 'https://www.instagram.com/kalamaki_lab/', label: 'Instagram Page' },
      { icon: <Globe className="h-6 w-6" />, url: 'https://linktr.ee/kalamakilab', label: 'Website Creation' },
      { icon: <Search className="h-6 w-6" />, url: 'https://share.google/cRAX6gvTvt2XhT1R0', label: 'Google Profile Optimization' },
    ],
  },
  /*
  {
    title: 'Barbershop Queue System',
    image: 'https://i.imgur.com/6mkuHi8.png',
    alt: 'Λογότυπο του Queue System',
    imageLink: 'https://barbershop-qr.vercel.app/',
    links: [
      { icon: <Instagram className="h-6 w-6" />, label: 'Instagram Page' },
      { icon: <Globe className="h-6 w-6" />, url: 'https://barbershop-qr.vercel.app/', label: 'Website Creation' },
      { icon: <Search className="h-6 w-6" />, label: 'Google Profile Optimization' },
    ],
  },/*
  {
    title: 'Barbershop Booking App',
    image: 'https://i.imgur.com/0JIuRWN.png',
    alt: 'Λογότυπο του Booking App',
    imageLink: 'https://barbershop-booking-jet.vercel.app/',
    links: [
      { icon: <Instagram className="h-6 w-6" />, label: 'Instagram Page' },
      { icon: <Globe className="h-6 w-6" />, url: 'https://barbershop-booking-jet.vercel.app/', label: 'Website Creation' },
      { icon: <Search className="h-6 w-6" />, label: 'Google Profile Optimization' },
    ],
  },*/
  /*
  {
    title: 'Antonis Gargallis',
    image: 'https://i.imgur.com/v0LMlvm.png',
    alt: 'Λογότυπο του Antonis Gargallis',
    imageLink: 'https://agargallis.github.io/',
    links: [
      { icon: <Instagram className="h-6 w-6" />,url: 'https://www.instagram.com/agargallis/', label: 'Instagram Page' },
      { icon: <Globe className="h-6 w-6" />, url: 'https://agargallis.github.io/', label: 'Website Creation' },
      { icon: <Search className="h-6 w-6" />, label: 'Google Profile Optimization' },
    ],
  },*/
  {
    title: 'Aggelos Zaxariou',
    image: '/AG.png',
    alt: 'Teammate personal portfolio logo',
    imageLink: 'https://aggeloszax.github.io',
    links: [
      { icon: <Instagram className="h-6 w-6" />, url: 'https://www.instagram.com/_zaxariou/', label: 'Instagram Page' },
      { icon: <Globe className="h-6 w-6" />, url: 'https://aggeloszax.github.io', label: 'Website Creation' },
    ],
  },
  {
    title: 'Μεταξύ Μας',
    image: '/2.png',
    alt: 'Λογότυπο του Μεταξύ Μας',
    imageLink: 'https://metaxumas.gr/',
    links: [
      { icon: <Instagram className="h-6 w-6" />, url: 'https://www.instagram.com/metaxu.mas/', label: 'Instagram Page' },
      { icon: <Globe className="h-6 w-6" />, url: 'https://metaxumas.gr/', label: 'Website Creation' },
      { icon: <Search className="h-6 w-6" />, url: 'https://shorturl.at/C4e8i', label: 'Google Profile Optimization' },
      { icon: <MenuSquare className="h-6 w-6" />, url: 'https://www.papermark.com/view/cmocy7tdd002ol204d6ttqqtu', label: 'React App' },
    ],
  },
  {
    title: 'Noobs BC',
    image: 'https://i.imgur.com/r4zoNQ3.png',
    alt: 'Basketball Team Website logo',
    imageLink: 'https://noobs.gr',
    links: [
      { icon: <Instagram className="h-6 w-6" />, url: 'https://www.instagram.com/noobs.gr/', label: 'Instagram Page' },
      { icon: <Globe className="h-6 w-6" />, url: 'https://noobs.gr', label: 'Website Creation' },
      { icon: <Search className="h-6 w-6" />, url: 'https://shorturl.at/1kQpW',label: 'Google Profile Optimization' },
    ],
  },
  {
    title: 'SS Moto',
    image: 'https://i.imgur.com/jzgQAv4.png',
    alt: 'SS Moto logo',
    imageLink: 'https://ssmoto.gr',
    links: [
      { icon: <Instagram className="h-6 w-6" />, url: 'https://www.instagram.com/ssmoto.gr/', label: 'Instagram Page' },
      { icon: <Globe className="h-6 w-6" />, url: 'https://ssmoto.gr', label: 'Website Creation' },
      { icon: <Search className="h-6 w-6" />, url: 'https://share.google/7wUWURyRpx8mh3fK7', label: 'Google Profile Optimization' },
    ],
  },
  {
    title: 'AEK of Peristeri BC',
    image: 'https://i.imgur.com/hMB8R7q.png',
    alt: 'AEK of Peristeri BC logo',
    imageLink: 'https://aekperisterioubc.gr',
    links: [
      { icon: <Instagram className="h-6 w-6" />, url: 'https://www.instagram.com/aekperisterioubc/', label: 'Instagram Page' },
      { icon: <Globe className="h-6 w-6" />, url: 'https://aekperisterioubc.gr', label: 'Website Creation' },
      { icon: <Search className="h-6 w-6" />, url: 'https://share.google/m8aCoXfevK1UnRg6o', label: 'Google Profile Optimization' },
    ],
  },
  {
    title: 'Mathletes',
    image: '/mathletes.webp',
    alt: 'Λογότυπο της πλατφόρμας Mathletes',
    imageLink: 'https://mathletes.gr',
    links: [
      { icon: <Instagram className="h-6 w-6" />, url: 'https://www.instagram.com/mathletes_gr', label: 'Instagram Page' },
      { icon: <Globe className="h-6 w-6" />, url: 'https://mathletes.gr', label: 'Website Creation' },
    ],
  },
  {
    title: 'Koulis 1980',
    image: '/koulis1980.webp',
    alt: 'Λογότυπο του κουρείου Koulis 1980',
    imageLink: 'https://koulis80.gr',
    links: [
      { icon: <Instagram className="h-6 w-6" />, url: 'https://www.instagram.com/koulis_1980/', label: 'Instagram Page' },
      { icon: <Globe className="h-6 w-6" />, url: 'https://koulis80.gr', label: 'Website Creation' },
      { icon: <Search className="h-6 w-6" />, url: 'https://www.google.com/maps/search/?api=1&query=Koulis%201980%2C%20Leof.%20Salaminos%20292%2C%20Salamina%20189%2000', label: 'Google Profile Optimization' },
    ],
  },
];
  
const ABOUT_TRANSLATIONS = {
  el: {
    titlePrefix: 'Τα',
    titleAccent: 'projects',
    titleSuffix: 'μας',
    prev: 'Προηγούμενα',
    next: 'Επόμενα',
  },
  en: {
    titlePrefix: 'Our',
    titleAccent: 'projects',
    titleSuffix: '',
    prev: 'Previous',
    next: 'Next',
  },
};

const ProjectCard = ({ project, index }) => (
  <SpotlightCard
    as="article"
    initial={{ opacity: 0, y: 40, scale: 0.94 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.8, ease: LUX_EASE, delay: Math.min(index, 4) * 0.09 }}
    tilt={7}
    className="project-card snap-start min-w-[280px] sm:min-w-[320px] md:min-w-[340px] max-w-[340px] rounded-3xl p-6"
  >
    <a href={project.imageLink || '#'} target="_blank" rel="noopener noreferrer" className="relative z-10 inline-flex items-center justify-center mb-5">
      <span className="lux-logo-ring">
        <span className="lux-logo-ring__spin" aria-hidden="true" />
        <motion.img
          whileHover={{ scale: 1.1, rotate: 4 }}
          transition={{ type: 'spring', stiffness: 260, damping: 14 }}
          src={project.image}
          alt={project.alt}
          onError={(event) => {
            if (event.currentTarget.src.includes('/AZ.png')) {
              event.currentTarget.src = '/AG.png';
            }
          }}
          className="lux-logo-ring__img"
        />
      </span>
    </a>
    <h4 className="relative z-10 text-lg font-bold text-white mb-4 leading-tight min-h-[3.2rem]">{project.title}</h4>
    <div className="relative z-10 flex items-center gap-2.5">
      {project.links.map((link, linkIndex) => (
        link.url ? (
          <motion.a
            key={linkIndex}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
            title={link.label}
            whileHover={{ scale: 1.15, y: -3 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 320, damping: 16 }}
            className="lux-chip text-gray-300 hover:text-primary"
          >
            {link.icon}
          </motion.a>
        ) : (
          <span key={linkIndex} title={link.label} className="lux-chip text-gray-500 opacity-50 cursor-not-allowed">
            {link.icon}
          </span>
        )
      ))}
    </div>
  </SpotlightCard>
);

const About = ({ language }) => {
  const t = ABOUT_TRANSLATIONS[language] || ABOUT_TRANSLATIONS.el;
  const railRef = useRef(null);
  const { scrollXProgress } = useScroll({ container: railRef });
  const progress = useSpring(scrollXProgress, { stiffness: 140, damping: 24 });

  const scrollRail = (direction) => {
    const rail = railRef.current;
    if (!rail) return;

    const shift = Math.max(rail.clientWidth * 0.85, 320);
    rail.scrollBy({
      left: direction === 'next' ? shift : -shift,
      behavior: 'smooth',
    });
  };

  return (
    <section id="about" className="lux-section relative py-24 md:py-32">
      <div className="lux-section__glow lux-section__glow--right" aria-hidden="true" />
      <div className="container mx-auto px-6 relative">
        <SectionHeading
          prefix={t.titlePrefix}
          accent={t.titleAccent}
          suffix={t.titleSuffix}
          className="mb-12 md:mb-14"
        />

        <div className="flex items-center justify-end gap-3 mb-6">
          <motion.button
            type="button"
            onClick={() => scrollRail('prev')}
            aria-label={t.prev}
            whileHover={{ scale: 1.08, x: -2 }}
            whileTap={{ scale: 0.94 }}
            className="lux-round-btn"
          >
            <ChevronLeft className="w-5 h-5" />
          </motion.button>
          <motion.button
            type="button"
            onClick={() => scrollRail('next')}
            aria-label={t.next}
            whileHover={{ scale: 1.08, x: 2 }}
            whileTap={{ scale: 0.94 }}
            className="lux-round-btn"
          >
            <ChevronRight className="w-5 h-5" />
          </motion.button>
        </div>

        <div
          ref={railRef}
          className="lux-rail flex gap-5 md:gap-6 overflow-x-auto px-1 pt-4 pb-20 -mb-12 snap-x snap-mandatory"
        >
          {[...PROJECTS].reverse().map((project, index) => (
            <ProjectCard key={`${project.title}-${index}`} project={project} index={index} />
          ))}
        </div>

        <div className="lux-rail-progress" aria-hidden="true">
          <motion.span className="lux-rail-progress__fill" style={{ scaleX: progress }} />
        </div>
      </div>
    </section>
  );
};

export default About;
