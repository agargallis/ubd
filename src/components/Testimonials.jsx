import React from 'react';
import { motion } from 'framer-motion';
import { Star, ArrowRight } from 'lucide-react';
const TESTIMONIALS_TRANSLATIONS = {
  el: {
    titlePrefix: 'Τι λένε οι',
    titleAccent: 'πελάτες',
    titleSuffix: 'μας;',
    seeAllTitle: 'Δείτε όλες τις κριτικές',
    seeAllSubtitle: 'στην Google',
    items: [
      {
        name: 'Λιοτρίβι',
        review: 'Ο Αντώνης κατάφερε να μας δημιουργήσει μια όμορφη ψηφιακή παρουσία ως "Λιοτρίβι", καθώς εμείς δεν γνωρίζουμε από αυτά και δεν είμαστε τόσο κοντά με την τεχνολογία. Μας ανανέωσε το προφίλ μας στο Google, μας δημιούργησε από το μηδέν Instagram, μας δημιούργησε μια απλή και καθωσπρέπει ιστοσελίδα με φόρμα κρατήσεων και πολλά πολλά ακόμη. Πλέον νιώθουμε πως η νέα γεννιά μπορεί να μας μάθει μέσα από το Ίντερνετ αλλά και να ανακαλύψει τι προσφέρουμε, πιο καλά από ποτέ. Ευχαριστούμε για όλα.',
      },
      {
        name: 'Eprepe',
        review: 'Μια φρέσκια παρουσία σε ο,τι αφορά computing , programming και online στήσιμο που αξιοποιήσαμε στο εστιατόριό μας . Ο Αντώνης κατασκεύασε πολύ έξυπνα και γρήγορα για εμάς μια όμορφη και φιλική για τον επισκέπτη ιστοσελίδα , καθώς επίσης και κάποιες πολύτιμες παρεμβάσεις στο instagram και το google προφίλ της επιχείρησής μας ! Ευχαριστούμε πολύ!!',
      },
      {
        name: 'aggelos myriounis',
        review: 'Πολύ φιλικός ο Αντώνης,συνεργάσιμος,έκατσε και άκουσε τι ήθελα και το αποτέλεσμα ήταν εκπληκτικό!!!',
      },
    ],
  },
  en: {
    titlePrefix: 'What our',
    titleAccent: 'clients',
    titleSuffix: 'say',
    seeAllTitle: 'See all reviews',
    seeAllSubtitle: 'on Google',
    items: [
      {
        name: 'Liotrivi',
        review: 'Antonis helped us build a beautiful digital presence for Liotrivi. He refreshed our Google profile, built our Instagram presence from scratch, and delivered a clean website with booking form and much more. We now feel the new generation can discover what we offer better than ever. Thank you for everything.',
      },
      {
        name: 'Eprepe',
        review: 'A fresh and professional approach to computing, programming, and online setup for our restaurant. Antonis built a smart and visitor-friendly website for us and made valuable improvements on Instagram and our Google profile. Thank you very much!',
      },
      {
        name: 'Aggelos Myriounis',
        review: 'Antonis was very friendly and collaborative, listened carefully to what I wanted, and the final result was outstanding!',
      },
    ],
  },
};

const TESTIMONIAL_META = [
  {
    image: 'https://i.imgur.com/NzHvqVX.png',
    alt: 'Profile picture of a client named Nikolas Georgiou in an office',
    link: 'https://maps.app.goo.gl/QUr7dB5sjK2zKjqD6',
  },
  {
    image: 'https://horizons-cdn.hostinger.com/ab233996-ef22-4e42-af30-3c354fc24334/cace6508675781cfd4122477e7a8ab0a.png',
    alt: 'Profile picture of a professional client named Eprepe',
    link: 'https://maps.app.goo.gl/DASDkMcWD4Rb51f96',
  },
  {
    image: 'https://i.imgur.com/GmA0Phi.png',
    alt: 'Profile picture of a happy client named aggelos myriounis',
    link: 'https://share.google/qyN0NbABH5Twwubx3',
  },
];
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: i => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' }
  })
};
const Testimonials = ({ language }) => {
  const t = TESTIMONIALS_TRANSLATIONS[language] || TESTIMONIALS_TRANSLATIONS.el;
  const testimonials = t.items.map((item, index) => ({ ...item, ...TESTIMONIAL_META[index] }));

  return <section id="testimonials" className="py-20 sm:py-32 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.6 }} className="flex justify-center mb-12">
        <motion.h2 
  className="
    relative
    text-3xl sm:text-4xl md:text-5xl
    font-bold
    text-white
    inline-block
    whitespace-nowrap
    group
  "
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => <motion.a 
              key={index} 
              href={testimonial.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              custom={index} 
              variants={cardVariants} 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ y: -3, scale: 1.02, boxShadow: "0 8px 22px rgba(1, 151, 178, 0.12)" }}
              className="bg-slate-800/40 p-6 rounded-lg border border-slate-700/50 shadow-lg flex flex-col transition-all duration-300 text-center md:text-left testimonial-card"
            >
              <div className="flex flex-col md:flex-row items-center mb-4">
                <img className="w-12 h-12 rounded-full mb-3 md:mb-0 md:mr-4 object-cover" alt={testimonial.alt} src={testimonial.image} />
                <div className="flex-grow">
                  <h4 className="font-bold text-white">{testimonial.name}</h4>
                  <div className="flex text-yellow-400 justify-center md:justify-start">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                  </div>
                </div>
              </div>
              <p className="text-gray-300 text-sm flex-grow">"{testimonial.review}"</p>
            </motion.a>)}

          <motion.a 
            href="https://www.google.com/search?sca_esv=07cdbffa48f41bdb&authuser=6&sxsrf=AE3TifPP1ExeZ9-w5A0F_5R5-egfNV5TtA%3A1761070162002&q=UBD%20-%20Upgrading%20Business%20Digitally&stick=H4sIAAAAAAAAAONgU1I1qLAwtDBOTjRMsjQwMk5LtEizMqgwSk41TjJISjUyMrVMNjQ3XMSqFOrkoqCrEFqQXpSYkpmXruBUWpyZl1pcrOCSmZ5ZkpiTUwkASX7LGk4AAAA&mat=CYdS5LXMVZw5&ved=2ahUKEwigirXL8bWQAxU9Q_EDHY94Bo8QrMcEegQIFxAC#lrd=0x14a1bd3eda516669:0x56d3a53c3386000,1" 
            target="_blank" 
            rel="noopener noreferrer" 
            custom={3} 
            variants={cardVariants} 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ scale: 1.02 }}
            className="bg-primary rounded-lg p-6 flex flex-col items-center justify-center text-primary-foreground text-center group hover:bg-primary/90 transition-all duration-300 no-underline"
          >
            <h4 className="font-bold text-lg">{t.seeAllTitle}</h4>
            <p className="text-sm mb-4">{t.seeAllSubtitle}</p>
            <motion.div 
              whileHover={{ scale: 1.08, rotate: 2 }}
              className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform"
            >
              <ArrowRight className="w-6 h-6" />
            </motion.div>
          </motion.a>
        </div>
      </div>
    </section>;
};
export default Testimonials;