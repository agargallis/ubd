import React from 'react';
import { Briefcase, Info, Mail, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const MobileToolbar = () => {
  const navItems = [
    { id: 'services', icon: <Briefcase className="h-6 w-6" />, label: 'Υπηρεσίες' },
    { id: 'about', icon: <Info className="h-6 w-6" />, label: 'Projects' },
    { id: 'testimonials', icon: <Users className="h-6 w-6" />, label: 'Κριτικές' },
    { id: 'contact', icon: <Mail className="h-6 w-6" />, label: 'Επαφή' },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      className="fixed bottom-0 left-0 right-0 bg-[#0a192f]/80 backdrop-blur-sm border-t border-slate-700/50 h-20 flex justify-around items-center md:hidden z-50"
    >
      {navItems.map((item) => (
        <button
          key={item.id}
          onClick={() => scrollToSection(item.id)}
          className="flex flex-col items-center justify-center text-gray-400 hover:text-[#0197b2] transition-colors w-1/4"
        >
          {item.icon}
          <span className="text-xs mt-1">{item.label}</span>
        </button>
      ))}
    </motion.div>
  );
};

export default MobileToolbar;