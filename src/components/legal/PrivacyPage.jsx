import React from 'react';
import LegalPageLayout from '@/components/legal/LegalPageLayout';

const PRIVACY_TRANSLATIONS = {
  el: {
    pageTitle: 'Πολιτική Απορρήτου | UBD',
    pageDescription: 'Μάθετε πώς η UBD συλλέγει και διαχειρίζεται προσωπικά δεδομένα με διαφάνεια και ασφάλεια.',
    badge: 'ΝΟΜΙΚΕΣ ΠΛΗΡΟΦΟΡΙΕΣ',
    title: 'Πολιτική Απορρήτου',
    subtitle: 'Το απόρρητό σας είναι βασική μας αρχή. Συλλέγουμε μόνο τα απαραίτητα δεδομένα για να επικοινωνούμε μαζί σας και να παρέχουμε καλύτερη εξυπηρέτηση.',
    lastUpdatedLabel: 'Τελευταία ενημέρωση:',
    lastUpdated: '19 Μαρτίου 2026',
    legalNav: [
      { path: '/privacy', label: 'Απόρρητο' },
      { path: '/terms', label: 'Όροι' },
      { path: '/cookies', label: 'Cookies' },
    ],
    sections: [
      {
        title: 'Ποια δεδομένα συλλέγουμε',
        body: 'Συλλέγουμε στοιχεία που μας παρέχετε εθελοντικά, όπως ονοματεπώνυμο, email, τηλέφωνο και μήνυμα μέσω της φόρμας επικοινωνίας. Κατά την περιήγηση μπορεί να καταγράφονται βασικά τεχνικά δεδομένα (π.χ. τύπος browser και IP) για λόγους ασφαλείας και σταθερότητας.',
      },
      {
        title: 'Γιατί τα χρησιμοποιούμε',
        body: 'Χρησιμοποιούμε τα δεδομένα αποκλειστικά για να απαντούμε σε αιτήματα, να βελτιώνουμε τις υπηρεσίες και να διασφαλίζουμε την εύρυθμη λειτουργία του site. Δεν πωλούμε και δεν ενοικιάζουμε προσωπικά δεδομένα σε τρίτους.',
      },
      {
        title: 'Νομική βάση και χρόνος διατήρησης',
        body: 'Η επεξεργασία βασίζεται σε έννομο συμφέρον και, όπου απαιτείται, στη συγκατάθεσή σας. Τα στοιχεία επικοινωνίας διατηρούνται μόνο για όσο χρειάζεται ώστε να ολοκληρωθεί η επικοινωνία ή η συνεργασία.',
      },
      {
        title: 'Τα δικαιώματά σας',
        body: 'Μπορείτε να ζητήσετε πρόσβαση, διόρθωση, διαγραφή, περιορισμό επεξεργασίας ή φορητότητα των δεδομένων σας. Για οποιοδήποτε αίτημα, επικοινωνήστε στο ubdgrofficial@gmail.com και θα απαντήσουμε το συντομότερο δυνατό.',
      },
      {
        title: 'Υπηρεσίες τρίτων και ασφάλεια',
        body: 'Χρησιμοποιούμε αξιόπιστες υπηρεσίες προστασίας και υποδομής (όπως reCAPTCHA) για την ασφάλεια της φόρμας επικοινωνίας. Εφαρμόζουμε τεχνικά και οργανωτικά μέτρα για την προστασία των πληροφοριών σας από μη εξουσιοδοτημένη πρόσβαση.',
      },
    ],
  },
  en: {
    pageTitle: 'Privacy Policy | UBD',
    pageDescription: 'Learn how UBD collects and handles personal data with transparency and security.',
    badge: 'LEGAL INFORMATION',
    title: 'Privacy Policy',
    subtitle: 'Your privacy is a core principle. We only collect the data we need to communicate with you and provide better service.',
    lastUpdatedLabel: 'Last updated:',
    lastUpdated: 'March 19, 2026',
    legalNav: [
      { path: '/privacy', label: 'Privacy' },
      { path: '/terms', label: 'Terms' },
      { path: '/cookies', label: 'Cookies' },
    ],
    sections: [
      {
        title: 'What data we collect',
        body: 'We collect information you provide voluntarily, such as full name, email, phone, and message through our contact form. During browsing, basic technical data may be logged (for example browser type and IP) for security and reliability.',
      },
      {
        title: 'Why we use it',
        body: 'We use your data only to respond to requests, improve services, and maintain website performance. We do not sell or rent personal data to third parties.',
      },
      {
        title: 'Legal basis and retention',
        body: 'Processing is based on legitimate interest and, where required, your consent. Contact details are retained only for as long as needed to complete communication or collaboration.',
      },
      {
        title: 'Your rights',
        body: 'You may request access, correction, deletion, processing restriction, or data portability. For any request, contact us at ubdgrofficial@gmail.com and we will respond promptly.',
      },
      {
        title: 'Third-party services and security',
        body: 'We use trusted security and infrastructure services (such as reCAPTCHA) to protect our contact workflow. We apply technical and organizational safeguards to protect your information from unauthorized access.',
      },
    ],
  },
};

const PrivacyPage = ({ language }) => {
  const t = PRIVACY_TRANSLATIONS[language] || PRIVACY_TRANSLATIONS.el;
  return <LegalPageLayout t={t} currentPath="/privacy" />;
};

export default PrivacyPage;
