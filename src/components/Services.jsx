import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Share2, Globe, Home, MapPin, Wrench, BarChart } from 'lucide-react';
import { cn } from '@/lib/utils';

const SERVICES_TRANSLATIONS = {
  el: {
    titlePrefix: 'Οι',
    titleAccent: 'υπηρεσίες',
    titleSuffix: 'μας',
    learnMore: 'Μάθετε περισσότερα',
    items: [
      {
        title: 'Βελτιστοποίηση & Ασφάλεια Social Media',
        description: 'Μεταμορφώστε την παρουσία σας στα social media με στρατηγικό περιεχόμενο και ευπαρουσίαστο υλικό.',
        features: ['Insta, L/In, Fb, T/T, Gmail', 'Bitwarden safety system', 'Content building'],
      },
      {
        title: 'Σύγχρονη Ανάπτυξη Ιστοσελίδων',
        description: 'Δημιουργήστε εντυπωσιακές, responsive ιστοσελίδες που μετατρέπουν τους επισκέπτες σε πελάτες με κορυφαίο σχεδιασμό και λειτουργικότητα.',
        features: ['Δωρεάν παροχή hosting', 'Domain management', 'Automations', 'Contact form management'],
      },
      {
        title: 'Έξυπνες Λύσεις για Καταστήματα',
        description: 'Επαναπροσδιορίστε τις λειτουργίες του καταστήματός σας με διαχείριση αποθεμάτων, συστήματα πωλήσεων και ανάλυση πελατών.',
        features: ['QR cards για αξιολόγηση', 'Διαχείριση e-services', 'Παρακολούθηση e-sales'],
      },
      {
        title: 'Ενσωμάτωση Google Maps',
        description: 'Μεγιστοποιήστε την τοπική σας προβολή με βελτιστοποίηση του Google My Business και του Google Search Appearance.',
        features: ['Δημιουργία linktree urls', 'Διαχείριση κριτικών', 'Δημιουργία papermark urls', 'Βελτιστοποίηση προφίλ'],
      },
      {
        title: 'Συντήρηση Ψηφιακών Υπηρεσιών',
        description: 'Διασφαλίζουμε την ομαλή και αδιάλειπτη λειτουργία των ψηφιακών σας υποδομών με μηνιαία πακέτα συντήρησης και υποστήριξης.',
        features: ['Συντήρηση των media', 'Βελτιστοποίηση απόδοσης', 'Άμεση τεχνική υποστήριξη'],
      },
      {
        title: 'Εξυπηρέτηση Ψηφιακών Αναγκών Πελάτη',
        description: 'Βοηθάμε τον επιχειρηματία σε οποιαδήποτε άλλα ψηφιακά ζητήματα που του προκύπτουν και συντηρούμε το καθήκον του.',
        features: ['Real time services', 'Άμεση επικοινωνία', 'Αποφυγή σφαλμάτων'],
      },
    ],
  },
  en: {
    titlePrefix: 'Our',
    titleAccent: 'services',
    titleSuffix: '',
    learnMore: 'Learn more',
    items: [
      {
        title: 'Social Media Optimization & Security',
        description: 'Transform your social media presence with strategic content and a polished digital identity.',
        features: ['Insta, L/In, Fb, T/T, Gmail', 'Bitwarden safety system', 'Content giving'],
      },
      {
        title: 'Modern Website Development',
        description: 'Create impressive, responsive websites that convert visitors into customers with top-tier design and functionality.',
        features: ['Free hosting setup', 'Domain management', 'Mini e-shop', 'Contact form management'],
      },
      {
        title: 'Smart Solutions for Stores',
        description: 'Redefine your store operations with inventory management, sales systems, and customer analytics.',
        features: ['QR cards for reviews', 'Integration with simple system', 'e-sales monitoring'],
      },
      {
        title: 'Google Maps Integration',
        description: 'Maximize your local visibility by optimizing your Google My Business and Google Search presence.',
        features: ['Linktree URL creation', 'Review management', 'Papermark URL creation', 'Profile optimization'],
      },
      {
        title: 'Digital Service Maintenance',
        description: 'We ensure smooth and uninterrupted operation of your digital infrastructure with monthly support plans.',
        features: ['Media maintenance', 'Performance optimization', 'Immediate technical support'],
      },
      {
        title: 'Customer Digital Support',
        description: 'We help business owners with any additional digital needs and keep their operations stable.',
        features: ['Real-time services', 'Immediate communication', 'Error prevention'],
      },
    ],
  },
};

const SERVICE_META = [
  { icon: <Share2 className="h-8 w-8 text-white" />, color: 'cyan' },
  { icon: <Globe className="h-8 w-8 text-white" />, color: 'blue' },
  { icon: <Home className="h-8 w-8 text-white" />, color: 'green' },
  { icon: <MapPin className="h-8 w-8 text-white" />, color: 'red' },
  { icon: <Wrench className="h-8 w-8 text-white" />, color: 'orange' },
  { icon: <BarChart className="h-8 w-8 text-white" />, color: 'purple' },
];
const colorVariants = {
  cyan: { iconBg: "bg-cyan-500", colorVar: "#06b6d4" },
  blue: { iconBg: "bg-blue-500", colorVar: "#3b82f6" },
  green: { iconBg: "bg-green-500", colorVar: "#22c55e" },
  red: { iconBg: "bg-red-500", colorVar: "#ef4444" },
  orange: { iconBg: "bg-orange-500", colorVar: "#f97316" },
  purple: { iconBg: "bg-purple-500", colorVar: "#a855f7" }
};
const ServiceCard = ({ service, ctaLabel }) => {
  const colors = colorVariants[service.color] || colorVariants.cyan;
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -4, scale: 1.015, boxShadow: "0 8px 22px rgba(1, 151, 178, 0.12)" }}
      className={cn("bg-slate-800/50 border border-slate-700/50 rounded-xl p-8 flex flex-col h-full text-center md:text-left transition-all duration-300 cursor-pointer service-card")}
      style={{ '--service-color': colors.colorVar }}
    >
      <div className={`w-16 h-16 rounded-lg flex items-center justify-center mb-6 ${colors.iconBg} mx-auto md:mx-0`}>
        {service.icon}
      </div>
      <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
      <p className="text-gray-400 mb-6 flex-grow">{service.description}</p>
      <ul className="space-y-2.5 mb-8 text-gray-300 text-left text-sm md:text-base w-full max-w-xs mx-auto md:max-w-none md:mx-0">
        {service.features.map((feature, i) => (
          <li
  key={i}
  className="flex items-start justify-center md:justify-start gap-3 text-center md:text-left leading-relaxed"
>
  <span
    className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${colors.iconBg}`}
  ></span>
  <span>{feature}</span>
</li>

        ))}
      </ul>
      <Button onClick={scrollToContact} className={`bg-primary text-primary-foreground font-bold mt-auto hover:bg-primary/90 transition-opacity`}>
        {ctaLabel}
      </Button>
    </motion.div>
  );
};

const Services = ({ language }) => {
  const t = SERVICES_TRANSLATIONS[language] || SERVICES_TRANSLATIONS.el;
  const servicesData = t.items.map((item, index) => ({ ...item, ...SERVICE_META[index] }));

  return (
    <section id="services" className="py-20 md:py-28">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="relative text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 inline-block group"
            whileHover="hover"
            initial="rest"
          >
            {t.titlePrefix} <span className="text-primary">{t.titleAccent}</span> {t.titleSuffix}
            <motion.div
              className="absolute bottom-[-10px] left-0 right-0 h-1 bg-primary"
              variants={{
                rest: { scaleX: 0, transition: { duration: 0.6, ease: "easeOut" } },
                hover: { scaleX: 1, transition: { duration: 0.4, ease: "easeIn" } }
              }}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1, transition: { duration: 0.8, ease: "easeOut", once: true } }}
            />
          </motion.h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard key={index} service={service} ctaLabel={t.learnMore} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Services;