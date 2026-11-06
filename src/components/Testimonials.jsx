import React from 'react';
import { motion } from 'framer-motion';
import { Star, ArrowRight, Quote } from 'lucide-react';
import { SpotlightCard, SectionHeading, LUX_EASE } from '@/components/lux/Lux';

const TESTIMONIALS_TRANSLATIONS = {
  el: {
    titlePrefix: 'Τι λένε οι',
    titleAccent: 'πελάτες',
    titleSuffix: 'μας;',
    seeAllTitle: 'Δείτε όλες τις κριτικές',
    seeAllSubtitle: 'στην Google',
    items: [
      {
        name: 'Μεταξύ μας',
        review: 'Μια πολύ καλή δουλειά κ προσεγμένη από ένα νέο παιδί γεμάτο όρεξη να σου προσφέρει ότι χρειαστείς..!',
      },
      {
        name: 'aggelos myriounis',
        review: 'Πολύ φιλικός ο Αντώνης,συνεργάσιμος,έκατσε και άκουσε τι ήθελα και το αποτέλεσμα ήταν εκπληκτικό!!!',
      },
            {
        name: 'Eprepe',
        review: 'Μια φρέσκια παρουσία σε ο,τι αφορά computing , programming και online στήσιμο που αξιοποιήσαμε στο εστιατόριό μας . Ο Αντώνης κατασκεύασε πολύ έξυπνα και γρήγορα για εμάς μια όμορφη και φιλική για τον επισκέπτη ιστοσελίδα , καθώς επίσης και κάποιες πολύτιμες παρεμβάσεις στο instagram και το google προφίλ της επιχείρησής μας ! Ευχαριστούμε πολύ!!',
      }
    ],
  },
  en: {
    titlePrefix: 'What our',
    titleAccent: 'clients',
    titleSuffix: 'say?',
    seeAllTitle: 'See all reviews',
    seeAllSubtitle: 'on Google',
    items: [
      {
        name: 'Metaxu mas',
        review: 'A very good job and attentive from a new kid full of enthusiasm to provide what you need..!',
      },
      {
        name: 'aggelos myriounis',
        review: 'Antonis was very friendly and collaborative, listened carefully to what I wanted, and the final result was outstanding!',
      },
            {
        name: 'Eprepe',
        review: 'A fresh and professional approach to computing, programming, and online setup for our restaurant. Antonis built a smart and visitor-friendly website for us and made valuable improvements on Instagram and our Google profile. Thank you very much!',
      }
    ],
  },
};

const TESTIMONIAL_META = [
  {
    image: 'https://i.imgur.com/6bWOW3A.png',
    alt: 'Profile picture of a client named Metaxu mas in a restaurant',
    link: 'https://maps.app.goo.gl/sXcV52CgP5E7NoyT7',
  },
    {
    image: 'https://i.imgur.com/GmA0Phi.png',
    alt: 'Profile picture of a happy client named aggelos myriounis',
    link: 'https://share.google/qyN0NbABH5Twwubx3',
  },
  {
    image: 'https://i.imgur.com/XB1qSoY.png',
    alt: 'Profile picture of a professional client named Eprepe',
    link: 'https://maps.app.goo.gl/DASDkMcWD4Rb51f96',
  }
];
const Testimonials = ({ language }) => {
  const t = TESTIMONIALS_TRANSLATIONS[language] || TESTIMONIALS_TRANSLATIONS.el;
  const testimonials = t.items.map((item, index) => ({ ...item, ...TESTIMONIAL_META[index] }));

  return <section id="testimonials" className="lux-section lux-section--band relative py-24 sm:py-32">
      <div className="lux-section__glow lux-section__glow--center" aria-hidden="true" />
      <div className="container mx-auto px-6 relative">
        <SectionHeading
          prefix={t.titlePrefix}
          accent={t.titleAccent}
          suffix={t.titleSuffix}
          className="mb-14 md:mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 [perspective:1200px]">
          {testimonials.map((testimonial, index) => (
            <SpotlightCard
              as="a"
              key={index}
              href={testimonial.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 50, rotateY: -12 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.9, ease: LUX_EASE, delay: index * 0.14 }}
              tilt={7}
              className="testimonial-card rounded-3xl p-7 flex flex-col text-center md:text-left"
            >
              <Quote className="lux-quote-mark" aria-hidden="true" />
              <div className="relative z-10 flex flex-col md:flex-row items-center mb-5">
                <span className="lux-avatar mb-3 md:mb-0 md:mr-4">
                  <img className="w-12 h-12 rounded-full object-cover" alt={testimonial.alt} src={testimonial.image} />
                </span>
                <div className="flex-grow">
                  <h4 className="font-bold text-white">{testimonial.name}</h4>
                  <motion.div
                    className="flex text-yellow-400 justify-center md:justify-start gap-0.5 mt-1"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.09, delayChildren: 0.4 + index * 0.14 } } }}
                  >
                    {[...Array(5)].map((_, i) => (
                      <motion.span
                        key={i}
                        variants={{
                          hidden: { opacity: 0, scale: 0, rotate: -90 },
                          visible: { opacity: 1, scale: 1, rotate: 0, transition: { type: 'spring', stiffness: 380, damping: 14 } },
                        }}
                      >
                        <Star className="w-4 h-4 fill-current lux-star" />
                      </motion.span>
                    ))}
                  </motion.div>
                </div>
              </div>
              <p className="relative z-10 text-gray-300 text-sm leading-relaxed flex-grow italic">"{testimonial.review}"</p>
            </SpotlightCard>
          ))}

          <SpotlightCard
            as="a"
            href="https://www.google.com/search?sca_esv=07cdbffa48f41bdb&authuser=6&sxsrf=AE3TifPP1ExeZ9-w5A0F_5R5-egfNV5TtA%3A1761070162002&q=UBD%20-%20Upgrading%20Business%20Digitally&stick=H4sIAAAAAAAAAONgU1I1qLAwtDBOTjRMsjQwMk5LtEizMqgwSk41TjJISjUyMrVMNjQ3XMSqFOrkoqCrEFqQXpSYkpmXruBUWpyZl1pcrOCSmZ5ZkpiTUwkASX7LGk4AAAA&mat=CYdS5LXMVZw5&ved=2ahUKEwigirXL8bWQAxU9Q_EDHY94Bo8QrMcEegQIFxAC#lrd=0x14a1bd3eda516669:0x56d3a53c3386000,1"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 50, rotateY: -12 }}
            whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: LUX_EASE, delay: 3 * 0.14 }}
            tilt={7}
            className="lux-card--feature rounded-3xl p-7 flex flex-col items-center justify-center text-center no-underline"
          >
            <h4 className="lux-feature-title relative z-10 font-bold text-lg">{t.seeAllTitle}</h4>
            <p className="lux-feature-sub relative z-10 text-sm mb-5">{t.seeAllSubtitle}</p>
            <span className="lux-feature-arrow relative z-10">
              <span className="lux-feature-arrow__pulse" aria-hidden="true" />
              <ArrowRight className="w-6 h-6 relative z-10" />
            </span>
          </SpotlightCard>
        </div>
      </div>
    </section>;
};
export default Testimonials;
