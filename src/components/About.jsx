import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Instagram, Globe, Search, ChevronLeft, ChevronRight } from 'lucide-react';

const PROJECTS = [
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
    title: 'Molte Vita',
    image: 'https://i.imgur.com/onRphz0.png',
    alt: 'Λογότυπο του καταστήματος Molte Vita',
    imageLink: 'https://moltevita.com',
    links: [
      { icon: <Instagram className="h-6 w-6" />, url: 'https://www.instagram.com/moltevita_/', label: 'Instagram Optimization' },
      { icon: <Globe className="h-6 w-6" />, url: 'https://moltevita.com', label: 'Website Creation' },
      { icon: <Search className="h-6 w-6" />, url: 'https://www.google.com/search?q=Molte+Vita', label: 'Google Profile Optimization' },
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
      { icon: <Search className="h-6 w-6" />, label: 'Google Profile Optimization' },
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
      { icon: <Search className="h-6 w-6" />, label: 'Google Profile Optimization' },
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
      { icon: <Search className="h-6 w-6" />, label: 'Google Profile Optimization' },
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
  <motion.article
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.4 }}
    transition={{ duration: 0.45, delay: Math.min(index, 4) * 0.08 }}
    whileHover={{ y: -6, scale: 1.02, boxShadow: '0 12px 34px rgba(1, 151, 178, 0.16)' }}
    className="snap-start min-w-[280px] sm:min-w-[320px] md:min-w-[340px] max-w-[340px] bg-slate-800/50 border border-slate-700/50 rounded-2xl p-5 project-card transition-all duration-300"
  >
    <a href={project.imageLink || '#'} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center mb-4">
      <motion.img
        whileHover={{ scale: 1.06, rotate: 3 }}
        src={project.image}
        alt={project.alt}
        onError={(event) => {
          if (event.currentTarget.src.includes('/AZ.png')) {
            event.currentTarget.src = '/AG.png';
          }
        }}
        className="w-20 h-20 rounded-full object-contain bg-slate-700 p-2 hover:ring-2 hover:ring-primary transition-all"
      />
    </a>
    <h4 className="text-lg font-bold text-white mb-3 leading-tight min-h-[3.2rem]">{project.title}</h4>
    <div className="flex items-center gap-3">
      {project.links.map((link, linkIndex) => (
        link.url ? (
          <motion.a
            key={linkIndex}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
            title={link.label}
            whileHover={{ scale: 1.18, y: -2 }}
            className="text-gray-300 hover:text-primary transition-colors"
          >
            {link.icon}
          </motion.a>
        ) : (
          <span key={linkIndex} title={link.label} className="text-gray-500 opacity-50 cursor-not-allowed">
            {link.icon}
          </span>
        )
      ))}
    </div>
  </motion.article>
);

const About = ({ language }) => {
  const t = ABOUT_TRANSLATIONS[language] || ABOUT_TRANSLATIONS.el;
  const railRef = useRef(null);

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
    <section id="about" className="py-20 md:py-28">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.h2
            className="relative text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 inline-block whitespace-nowrap group"
            whileHover="hover"
            initial="rest"
          >
            {t.titlePrefix} <span className="text-primary">{t.titleAccent}</span> {t.titleSuffix}
            <motion.div
              className="absolute bottom-[-10px] left-0 right-0 h-1 bg-primary"
              variants={{
                rest: { scaleX: 0, transition: { duration: 0.6, ease: 'easeOut' } },
                hover: { scaleX: 1, transition: { duration: 0.4, ease: 'easeIn' } },
              }}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1, transition: { duration: 0.8, ease: 'easeOut', once: true } }}
            />
          </motion.h2>
        </motion.div>

        <div className="flex items-center justify-end gap-2 mb-4">
          <button
            type="button"
            onClick={() => scrollRail('prev')}
            aria-label={t.prev}
            className="p-2.5 rounded-xl border border-slate-700/60 bg-slate-800/50 text-gray-300 hover:text-primary hover:border-primary/60 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={() => scrollRail('next')}
            aria-label={t.next}
            className="p-2.5 rounded-xl border border-slate-700/60 bg-slate-800/50 text-gray-300 hover:text-primary hover:border-primary/60 transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <div
          ref={railRef}
          className="flex gap-4 md:gap-5 overflow-x-auto pb-3 snap-x snap-mandatory [scrollbar-width:thin]"
        >
          {PROJECTS.map((project, index) => (
            <ProjectCard key={`${project.title}-${index}`} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
