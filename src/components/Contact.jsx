import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin, Clock, Send, Facebook, Instagram, Linkedin } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { SpotlightCard, SectionHeading, Magnetic, LUX_EASE } from '@/components/lux/Lux';

const FORMSPREE_URL = 'https://formspree.io/f/xvgwwave';

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
      barberBooking: 'Barbershop Booking App',
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
    tiktokAria: 'TikTok',
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
      barberBooking: 'Barbershop Booking App',
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
    tiktokAria: 'TikTok',
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
  const t = CONTACT_TRANSLATIONS[language] || CONTACT_TRANSLATIONS.el;

  const handleSubmit = async e => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(e.target);

      const response = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: formData,
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
    <section id="contact" className="lux-section relative py-24 md:py-32">
      <div className="lux-section__glow lux-section__glow--left" aria-hidden="true" />
      <div className="container mx-auto px-6 relative">
        <SectionHeading prefix={t.headingPrefix} accent={t.headingAccent} className="mb-16 md:mb-20" />

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-10">
          <SpotlightCard
            initial={{ opacity: 0, x: -60, filter: 'blur(8px)' }}
            whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, ease: LUX_EASE }}
            tilt={0}
            className="lg:col-span-3 rounded-3xl p-8 md:p-10"
          >
            <h3 className="relative z-10 text-2xl font-bold text-white mb-8 flex items-center justify-center md:justify-start">
              <span className="lux-mini-icon mr-3">
                <Send className="h-5 w-5 text-primary" />
              </span>
              {t.formTitle}
            </h3>
            <form onSubmit={handleSubmit} className="lux-form relative z-10 space-y-6 text-left">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="lux-field">
                  <Label htmlFor="name">{t.name} <span className="text-primary">*</span></Label>
                  <Input id="name" name="name" placeholder={t.namePlaceholder} required disabled={isSubmitting} />
                </div>
                <div className="lux-field">
                  <Label htmlFor="email">{t.email} <span className="text-primary">*</span></Label>
                  <Input id="email" name="email" type="email" placeholder="your@email.com" required disabled={isSubmitting} />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="lux-field">
                  <Label htmlFor="company">{t.company}</Label>
                  <Input id="company" name="company" placeholder={t.companyPlaceholder} disabled={isSubmitting} />
                </div>
                <div className="lux-field">
                  <Label htmlFor="service">{t.service}</Label>
                  <Select name="service" onValueChange={setService} value={service} disabled={isSubmitting}>
                    <SelectTrigger>
                      <SelectValue placeholder={t.servicePlaceholder} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="learn-services">{t.services.learn}</SelectItem>
                      <SelectItem value="barbershop-booking">{t.services.barberBooking}</SelectItem>
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
              <div className="lux-field">
                <Label htmlFor="message">{t.message} <span className="text-primary">*</span></Label>
                <Textarea id="message" name="message" placeholder={t.messagePlaceholder} rows={5} required disabled={isSubmitting} />
              </div>

              <p className="text-xs text-muted-foreground text-center lg:text-left">
                {t.requiredHint} <span className="text-primary">*</span> {t.requiredHintSuffix}
              </p>

              <motion.button
                type="submit"
                className="lux-btn lux-btn--primary lux-btn--lg w-full disabled:opacity-50"
                disabled={isSubmitting}
                whileHover={{ scale: 1.015 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="lux-btn__glow" aria-hidden="true" />
                <span className="lux-btn__shine" aria-hidden="true" />
                {isSubmitting ? (
                  <span className="relative z-10 inline-flex items-center gap-3">
                    <span className="lux-spinner" aria-hidden="true" />
                    {t.sending}
                  </span>
                ) : (
                  <span className="relative z-10 inline-flex items-center">
                    {t.sendMessage} <Send className="lux-btn__icon ml-2 h-4 w-4" />
                  </span>
                )}
              </motion.button>
            </form>
          </SpotlightCard>

          <motion.div
            initial={{ opacity: 0, x: 60, filter: 'blur(8px)' }}
            whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, ease: LUX_EASE, delay: 0.15 }}
            className="lg:col-span-2 space-y-8 text-center md:text-left"
          >
            <SpotlightCard tilt={4} className="rounded-3xl p-8">
              <h3 className="relative z-10 text-2xl font-bold text-white mb-7 text-center md:text-left">{t.contactDetails}</h3>
              <div className="relative z-10 space-y-6">
                {[
                  { icon: <Mail className="text-blue-400" />, tone: 'blue', title: t.emailTitle, href: 'mailto:ubdgrofficial@gmail.com', value: 'ubdgrofficial@gmail.com', desc: t.emailDesc },
                  { icon: <Phone className="text-primary" />, tone: 'cyan', title: t.phoneTitle, href: 'tel:+306948957834', value: '+30 6948957834', desc: t.phoneDesc },
                  { icon: <MapPin className="text-teal-400" />, tone: 'teal', title: t.locationTitle, href: 'https://www.google.com/maps/place/Athens', value: t.location, desc: t.locationDesc, external: true },
                ].map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: LUX_EASE, delay: 0.3 + index * 0.12 }}
                    className="lux-contact-row flex flex-col md:flex-row items-center md:items-start"
                  >
                    <span className={`lux-contact-icon lux-contact-icon--${item.tone} mb-3 md:mb-0 md:mr-4 flex-shrink-0`}>
                      {item.icon}
                    </span>
                    <div>
                      <h4 className="font-bold text-white">{item.title}</h4>
                      <a
                        href={item.href}
                        className="contact-info-link lux-link"
                        {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      >
                        {item.value}
                      </a>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </SpotlightCard>

            <SpotlightCard tilt={4} className="lux-card--active rounded-3xl p-8">
              <h3 className="relative z-10 text-2xl font-bold text-white mb-6 flex items-center justify-center">
                <span className="lux-live-dot mr-3" aria-hidden="true" />
                <Clock className="mr-3 text-green-400" />
                {t.active}
              </h3>
              <div className="relative z-10 space-y-2 text-gray-300">
                <div className="lux-divider my-4"></div>
                <p className="flex items-center justify-center text-center">
                  {t.activeDesc}
                </p>

                <div className="flex justify-center gap-3 pt-4">
                  {[
                    { href: 'https://www.instagram.com/ubd.gr/', label: t.instagramAria, icon: <Instagram className="w-5 h-5" /> },
                    {
                      href: 'https://www.tiktok.com/@ubd.gr',
                      label: t.tiktokAria,
                      icon: (
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.3 6.3 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.15 8.15 0 0 0 4.77 1.52V6.76a4.85 4.85 0 0 1-1-.07z"/>
                        </svg>
                      ),
                    },
                    { href: 'https://www.linkedin.com/company/ubdgr/', label: t.linkedinAria, icon: <Linkedin className="w-5 h-5" /> },
                    { href: 'https://www.facebook.com/profile.php?id=61581820626835', label: t.facebookAria, icon: <Facebook className="w-5 h-5" /> },
                  ].map((social, index) => (
                    <Magnetic key={social.href} strength={0.4}>
                      <motion.a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        className="lux-social"
                        initial={{ opacity: 0, scale: 0.4 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: 'spring', stiffness: 300, damping: 16, delay: 0.4 + index * 0.08 }}
                      >
                        {social.icon}
                      </motion.a>
                    </Magnetic>
                  ))}
                </div>
              </div>
            </SpotlightCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
