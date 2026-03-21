import React from 'react';
    import { motion } from 'framer-motion';
    import { Button } from '@/components/ui/button';

    const Cta = () => {
      const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };

      return (
        <section id="cta" className="py-20">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6 }}
              className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-12 text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Έτοιμοι να Μεταμορφώσετε την Επιχείρησή σας;</h2>
              <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
                Ας συζητήσουμε πώς οι τεχνολογικές μας λύσεις μπορούν να επιταχύνουν την ανάπτυξη και την ψηφιακή σας παρουσία.
              </p>
              <Button size="lg" className="bg-[#0197b2] text-white font-bold hover:opacity-90 transition-opacity" onClick={() => scrollToSection('contact')}>
                Ζητήστε Δωρεάν Συμβουλευτική
              </Button>
            </motion.div>
          </div>
        </section>
      );
    };

    export default Cta;