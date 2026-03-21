import React from 'react';
import LegalPageLayout from '@/components/legal/LegalPageLayout';

const TERMS_TRANSLATIONS = {
  el: {
    pageTitle: 'Όροι Χρήσης | UBD',
    pageDescription: 'Οι όροι χρήσης της UBD ορίζουν τους βασικούς κανόνες χρήσης του ιστότοπου και των υπηρεσιών μας.',
    badge: 'ΝΟΜΙΚΕΣ ΠΛΗΡΟΦΟΡΙΕΣ',
    title: 'Όροι Χρήσης',
    subtitle: 'Με την πρόσβαση στο site της UBD αποδέχεστε τους παρακάτω όρους, που διασφαλίζουν καθαρή και επαγγελματική χρήση της πλατφόρμας.',
    lastUpdatedLabel: 'Τελευταία ενημέρωση:',
    lastUpdated: '19 Μαρτίου 2026',
    legalNav: [
      { path: '/privacy', label: 'Απόρρητο' },
      { path: '/terms', label: 'Όροι' },
      { path: '/cookies', label: 'Cookies' },
    ],
    sections: [
      {
        title: 'Σκοπός ιστοσελίδας',
        body: 'Το περιεχόμενο της ιστοσελίδας παρέχεται για ενημέρωση σχετικά με τις υπηρεσίες της UBD, τα έργα και τους τρόπους επικοινωνίας. Δεν αποτελεί νομική ή χρηματοοικονομική συμβουλή.',
      },
      {
        title: 'Πνευματική ιδιοκτησία',
        body: 'Ο σχεδιασμός, τα κείμενα, το branding, τα γραφικά και το πρωτότυπο περιεχόμενο ανήκουν στην UBD ή στους νόμιμους κατόχους τους. Απαγορεύεται η αντιγραφή, αναπαραγωγή ή παραπλανητική χρήση χωρίς έγγραφη άδεια.',
      },
      {
        title: 'Ορθή χρήση φόρμας επικοινωνίας',
        body: 'Η φόρμα επικοινωνίας προορίζεται για νόμιμα και επαγγελματικά αιτήματα. Απαγορεύεται η αποστολή κακόβουλου, παραπλανητικού ή αυτοματοποιημένου περιεχομένου (spam).',
      },
      {
        title: 'Σύνδεσμοι τρίτων',
        body: 'Ο ιστότοπος μπορεί να περιέχει συνδέσμους προς υπηρεσίες τρίτων. Η UBD δεν ευθύνεται για το περιεχόμενο, την ασφάλεια ή τις πολιτικές απορρήτου αυτών των ιστοτόπων.',
      },
      {
        title: 'Περιορισμός ευθύνης',
        body: 'Καταβάλλουμε προσπάθεια για ακριβές και ενημερωμένο περιεχόμενο, χωρίς εγγύηση αδιάλειπτης διαθεσιμότητας ή πλήρους απουσίας σφαλμάτων. Η χρήση του ιστότοπου γίνεται με δική σας ευθύνη.',
      },
    ],
  },
  en: {
    pageTitle: 'Terms of Use | UBD',
    pageDescription: 'UBD terms of use define the basic rules for using our website and services.',
    badge: 'LEGAL INFORMATION',
    title: 'Terms of Use',
    subtitle: 'By accessing the UBD website, you agree to the following terms that support clear and professional platform usage.',
    lastUpdatedLabel: 'Last updated:',
    lastUpdated: 'March 19, 2026',
    legalNav: [
      { path: '/privacy', label: 'Privacy' },
      { path: '/terms', label: 'Terms' },
      { path: '/cookies', label: 'Cookies' },
    ],
    sections: [
      {
        title: 'Website purpose',
        body: 'This website provides information about UBD services, project work, and contact channels. Content is offered for general informational and professional communication purposes only.',
      },
      {
        title: 'Intellectual property',
        body: 'The design, copy, branding, visuals, and original content belong to UBD or their lawful owners. Copying, reproducing, or misleading reuse without written permission is not allowed.',
      },
      {
        title: 'Proper contact form use',
        body: 'The contact form is intended for legitimate project and collaboration inquiries. Sending abusive, misleading, or automated spam content is prohibited.',
      },
      {
        title: 'External links',
        body: 'The website may include links to third-party services. UBD is not responsible for the content, security, or privacy practices of websites outside our domain.',
      },
      {
        title: 'Limitation of liability',
        body: 'We aim to keep all content accurate and up to date, but we do not guarantee uninterrupted availability or absence of errors. Use of this website is at your own discretion.',
      },
    ],
  },
};

const TermsPage = ({ language }) => {
  const t = TERMS_TRANSLATIONS[language] || TERMS_TRANSLATIONS.el;
  return <LegalPageLayout t={t} currentPath="/terms" />;
};

export default TermsPage;
