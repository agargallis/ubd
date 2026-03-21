import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin, Clock, Send, Facebook, Instagram, Linkedin } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const RECAPTCHA_SITE_KEY = '6LfaXAwsAAAAAPwkFIKF-b5PZ--OV0xCqx4LfbVV';

const CONTACT_TRANSLATIONS = {
  el: {
    headingPrefix: 'Επικοινωνήστε',
    headingAccent: 'μαζί μας',
    formTitle: 'Στείλτε μας μήνυμα',
    name: 'Ονοματεπώνυμο',
    namePlaceholder: 'Το ονοματεπώνυμό σας',
    email: 'Διεύθυνση Email',
    company: 'Όνομα Εταιρείας',
    companyPlaceholder: 'Η εταιρεία σας',
    service: 'Υπηρεσία Ενδιαφέροντος',
    servicePlaceholder: 'Επιλέξτε υπηρεσία',
    services: {
      learn: 'Μάθε για τις υπηρεσίες μας',
      social: 'Βελτιστοποίηση & Ασφάλεια Social Media',
      web: 'Σύγχρονη Ανάπτυξη Ιστοσελίδων',
      ecommerce: 'Έξυπνες Λύσεις για Καταστήματα',
      maps: 'Ενσωμάτωση Google Maps',
      maintenance: 'Συντήρηση Ψηφιακών Υπηρεσιών',
      data: 'Εξυπηρέτηση Ψηφιακών Αναγκών Πελάτη',
      other: 'Άλλο',
    },
    message: 'Μήνυμα',
    messagePlaceholder: 'Πείτε μας για το project σας...',
    requiredHint: 'Τα πεδία με',
    requiredHintSuffix: 'είναι υποχρεωτικά.',
    sending: 'Αποστολή...',
    sendMessage: 'Αποστολή μηνύματος',
    contactDetails: 'Στοιχεία Επικοινωνίας',
    emailTitle: 'Στείλτε μας email',
    emailDesc: 'Στείλτε μας email οποιαδήποτε στιγμή',
    phoneTitle: 'Καλέστε μας',
    phoneDesc: 'Για άμεση επικοινωνία',
    locationTitle: 'Η έδρα μας',
    location: 'Αθήνα, Ελλάδα',
    locationDesc: 'Βρείτε μας στον χάρτη',
    active: 'Ενεργή δραστηριότητα',
    activeDesc: 'Συνεχώς διαθέσιμοι για τους πελάτες μας.',
    facebookAria: 'Facebook',
    instagramAria: 'Instagram',
    linkedinAria: 'LinkedIn',
    successTitle: '✅ Το μήνυμά σας στάλθηκε με επιτυχία!',
    successDesc: 'Ευχαριστούμε για την επικοινωνία. Θα επικοινωνήσουμε μαζί σας σύντομα.',
    errorTitle: '❌ Σφάλμα Αποστολής',
    errorDesc: 'Δεν ήταν δυνατή η αποστολή του μηνύματός σας. Παρακαλώ δοκιμάστε ξανά.',
  },
  en: {
    headingPrefix: 'Get in',
    headingAccent: 'touch',
    formTitle: 'Send us a message',
    name: 'Full Name',
    namePlaceholder: 'Your full name',
    email: 'Email Address',
    company: 'Company Name',
    companyPlaceholder: 'Your company',
    service: 'Service of Interest',
    servicePlaceholder: 'Select a service',
    services: {
      learn: 'Learn about our services',
      social: 'Social Media Optimization & Security',
      web: 'Modern Website Development',
      ecommerce: 'Smart Solutions for Stores',
      maps: 'Google Maps Integration',
      maintenance: 'Digital Service Maintenance',
      data: 'Customer Digital Support',
      other: 'Other',
    },
    message: 'Message',
    messagePlaceholder: 'Tell us about your project...',
    requiredHint: 'Fields marked with',
    requiredHintSuffix: 'are required.',
    sending: 'Sending...',
    sendMessage: 'Send message',
    contactDetails: 'Contact Details',
    emailTitle: 'Email us',
    emailDesc: 'Send us an email anytime',
    phoneTitle: 'Call us',
    phoneDesc: 'For direct communication',
    locationTitle: 'Our location',
    location: 'Athens, Greece',
    locationDesc: 'Find us on the map',
    active: 'Active operation',
    activeDesc: 'Continuously available for our clients.',
    facebookAria: 'Facebook',
    instagramAria: 'Instagram',
    linkedinAria: 'LinkedIn',
    successTitle: '✅ Your message was sent successfully!',
    successDesc: 'Thank you for contacting us. We will get back to you shortly.',
    errorTitle: '❌ Submission Error',
    errorDesc: 'Your message could not be sent. Please try again.',
  },
};

const Contact = ({ language }) => {
  const { toast } = useToast();
  const [service, setService] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const recaptchaRef = useRef(null);
  const widgetIdRef = useRef(null);
  const t = CONTACT_TRANSLATIONS[language] || CONTACT_TRANSLATIONS.el;

  useEffect(() => {
    const loadRecaptcha = () => {
      if (document.getElementById('recaptcha-script')) {
        if (window.grecaptcha && window.grecaptcha.render) {
          renderBadge();
        }
        return;
      }

      const script = document.createElement('script');
      script.id = 'recaptcha-script';
      script.src = `https://www.google.com/recaptcha/api.js?render=explicit`;
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);

      script.onload = () => {
        window.grecaptcha.ready(() => {
          renderBadge();
        });
      };
    };

    const renderBadge = () => {
      if (recaptchaRef.current && widgetIdRef.current === null) {
        try {
          widgetIdRef.current = window.grecaptcha.render(recaptchaRef.current, {
            'sitekey': RECAPTCHA_SITE_KEY,
            'badge': 'inline',
            'size': 'invisible'
          });
        } catch (e) {
          console.error("Recaptcha render error:", e);
        }
      }
    };

    loadRecaptcha();
  }, []);
  
  const handleSubmit = async e => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Execute using the specific widget ID to ensure it uses the inline configuration
      let recaptchaToken;
      if (widgetIdRef.current !== null) {
         recaptchaToken = await window.grecaptcha.execute(widgetIdRef.current, { action: 'submit' });
      } else {
         // Fallback if widget didn't render (shouldn't happen if loaded correctly)
         recaptchaToken = await window.grecaptcha.execute(RECAPTCHA_SITE_KEY, { action: 'submit' });
      }
      
      const formData = new FormData(e.target);
      const data = {
        ...Object.fromEntries(formData.entries()),
        recaptchaToken
      };

      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast({
          title: t.successTitle,
          description: t.successDesc
        });
        e.target.reset();
        setService('');
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Network response was not ok.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      toast({
        title: t.errorTitle,
        description: t.errorDesc,
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="container mx-auto px-6">
        <motion.div 
  initial={{ opacity: 0, y: 20 }} 
  whileInView={{ opacity: 1, y: 0 }} 
  viewport={{ once: true }} 
  transition={{ duration: 0.6 }} 
  className="flex justify-center mb-16"
>
  <motion.h2 
    className="
      relative
      text-3xl sm:text-4xl md:text-5xl
      font-bold
      text-white
      mb-4
      inline-block
      whitespace-nowrap
      group
    "
    whileHover="hover"
    initial="rest"
  >
    {t.headingPrefix} <span className="text-primary">{t.headingAccent}</span>
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


        <div className="grid lg:grid-cols-5 gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -50 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true, amount: 0.2 }} 
            transition={{ duration: 0.8 }} 
            className="lg:col-span-3 bg-slate-800/50 border border-slate-700/50 rounded-xl p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center justify-center md:justify-start">
              <Send className="mr-3 text-primary" />
              {t.formTitle}
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6 text-left">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name">{t.name} <span className="text-primary">*</span></Label>
                  <Input id="name" name="name" placeholder={t.namePlaceholder} required disabled={isSubmitting} />
                </div>
                <div>
                  <Label htmlFor="email">{t.email} <span className="text-primary">*</span></Label>
                  <Input id="email" name="email" type="email" placeholder="your@email.com" required disabled={isSubmitting} />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="company">{t.company}</Label>
                  <Input id="company" name="company" placeholder={t.companyPlaceholder} disabled={isSubmitting} />
                </div>
                <div>
                  <Label htmlFor="service">{t.service}</Label>
                  <Select name="service" onValueChange={setService} value={service} disabled={isSubmitting}>
                    <SelectTrigger>
                      <SelectValue placeholder={t.servicePlaceholder} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="learn-services">{t.services.learn}</SelectItem>
                      <SelectItem value="social">{t.services.social}</SelectItem>
                      <SelectItem value="web">{t.services.web}</SelectItem>
                      <SelectItem value="ecommerce">{t.services.ecommerce}</SelectItem>
                      <SelectItem value="maps">{t.services.maps}</SelectItem>
                      <SelectItem value="maintenance">{t.services.maintenance}</SelectItem>
                      <SelectItem value="data">{t.services.data}</SelectItem>
                      <SelectItem value="other">{t.services.other}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div>
                <Label htmlFor="message">{t.message} <span className="text-primary">*</span></Label>
                <Textarea id="message" name="message" placeholder={t.messagePlaceholder} rows={5} required disabled={isSubmitting} />
              </div>
              
              <p className="text-xs text-muted-foreground text-center lg:text-left">
                {t.requiredHint} <span className="text-primary">*</span> {t.requiredHintSuffix}
              </p>

              
              {/* ReCAPTCHA Inline Badge Container */}
              <div
                ref={recaptchaRef}
                className="my-4 min-h-[60px] flex justify-center lg:justify-start"
              ></div>


              <div>
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-primary text-primary-foreground font-bold hover:bg-primary/90 transition-opacity disabled:opacity-50" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? t.sending : (
                    <>
                      {t.sendMessage} <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </div>
            </form>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true, amount: 0.2 }} 
            transition={{ duration: 0.8, delay: 0.2 }} 
            className="lg:col-span-2 space-y-8 text-center md:text-left"
          >
            <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 text-center md:text-left">{t.contactDetails}</h3>
              <div className="space-y-6">
                <div className="flex items-start flex-col md:flex-row items-center md:items-start">
                  <div className="bg-blue-500/20 p-3 rounded-lg mb-3 md:mb-0 md:mr-4 flex-shrink-0">
                    <Mail className="text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">{t.emailTitle}</h4>
                    <a href="mailto:ubdgrofficial@gmail.com" className="contact-info-link">
                      ubdgrofficial@gmail.com
                    </a>
                    <p className="text-sm text-muted-foreground">{t.emailDesc}</p>
                  </div>
                </div>
                <div className="flex items-start flex-col md:flex-row items-center md:items-start">
                  <div className="bg-primary/20 p-3 rounded-lg mb-3 md:mb-0 md:mr-4 flex-shrink-0">
                    <Phone className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">{t.phoneTitle}</h4>
                    <a href="tel:+306948957834" className="contact-info-link">
                      +30 6948957834
                    </a>
                    <p className="text-sm text-muted-foreground">{t.phoneDesc}</p>
                  </div>
                </div>
                <div className="flex items-start flex-col md:flex-row items-center md:items-start">
                  <div className="bg-teal-500/20 p-3 rounded-lg mb-3 md:mb-0 md:mr-4 flex-shrink-0">
                    <MapPin className="text-teal-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">{t.locationTitle}</h4>
                    <a href="https://www.google.com/maps/place/Athens" target="_blank" rel="noopener noreferrer" className="contact-info-link">
                      {t.location}
                    </a>
                    <p className="text-sm text-muted-foreground">{t.locationDesc}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center justify-center">
                <Clock className="mr-3 text-green-400" />
                {t.active}
              </h3>
              <div className="space-y-2 text-gray-300">
              
                <div className="border-t border-green-500/30 my-4"></div>
                <p className="flex items-center justify-center text-center">
                  {t.activeDesc}
                </p>

                <div className="flex justify-center gap-3 pt-3">
                  <a href="https://www.facebook.com/profile.php?id=61581820626835" target="_blank" rel="noopener noreferrer" aria-label={t.facebookAria} className="p-2.5 bg-slate-800 rounded-full border border-slate-700/70 hover:bg-primary transition-all duration-300 hover:-translate-y-1">
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a href="https://www.instagram.com/ubd.gr/" target="_blank" rel="noopener noreferrer" aria-label={t.instagramAria} className="p-2.5 bg-slate-800 rounded-full border border-slate-700/70 hover:bg-primary transition-all duration-300 hover:-translate-y-1">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href="https://www.linkedin.com/company/ubdgr/" target="_blank" rel="noopener noreferrer" aria-label={t.linkedinAria} className="p-2.5 bg-slate-800 rounded-full border border-slate-700/70 hover:bg-primary transition-all duration-300 hover:-translate-y-1">
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;