import React from 'react';
import LegalPageLayout from '@/components/legal/LegalPageLayout';

const COOKIES_TRANSLATIONS = {
  el: {
    pageTitle: 'Πολιτική Cookies | UBD',
    pageDescription: 'Δείτε ποια cookies χρησιμοποιεί η UBD, για ποιο σκοπό και πώς μπορείτε να διαχειριστείτε τις προτιμήσεις σας.',
    badge: 'ΝΟΜΙΚΕΣ ΠΛΗΡΟΦΟΡΙΕΣ',
    title: 'Πολιτική Cookies',
    subtitle: 'Χρησιμοποιούμε μια λιτή και διαφανή προσέγγιση στα cookies, δίνοντας προτεραιότητα στον έλεγχό σας και στην ιδιωτικότητα.',
    lastUpdatedLabel: 'Τελευταία ενημέρωση:',
    lastUpdated: '19 Μαρτίου 2026',
    legalNav: [
      { path: '/privacy', label: 'Απόρρητο' },
      { path: '/terms', label: 'Όροι' },
      { path: '/cookies', label: 'Cookies' },
    ],
    sections: [
      {
        title: 'Τι cookies χρησιμοποιούμε',
        body: 'Χρησιμοποιούμε απαραίτητα cookies για βασικές λειτουργίες, όπως την αποθήκευση της προτίμησής σας στο banner cookies (αποδοχή ή απόρριψη), ώστε να μην εμφανίζεται συνεχώς σε κάθε επίσκεψη.',
      },
      {
        title: 'Cookies ανάλυσης και marketing',
        body: 'Εάν επιλέξετε αποδοχή, ενδέχεται να ενεργοποιηθούν cookies ανάλυσης ή βελτιστοποίησης για να κατανοούμε καλύτερα τη χρήση του site. Δεν ενεργοποιούνται χωρίς τη δική σας συναίνεση.',
      },
      {
        title: 'Τι δεν χρησιμοποιούμε χωρίς συναίνεση',
        body: 'Δεν χρησιμοποιούμε επιθετικά tracking scripts ή διαφημιστικά cookies τρίτων χωρίς προηγούμενη επιλογή σας από το cookie banner.',
      },
      {
        title: 'Πώς αλλάζετε προτιμήσεις',
        body: 'Μπορείτε να αλλάξετε ή να ανακαλέσετε την επιλογή σας οποιαδήποτε στιγμή, διαγράφοντας το cookie consent από τον browser ή επανεπιλέγοντας μέσω του cookie banner όταν εμφανιστεί ξανά.',
      },
      {
        title: 'Επικοινωνία για cookies',
        body: 'Για απορίες σχετικά με τη χρήση cookies ή τη διαχείριση προσωπικών δεδομένων, επικοινωνήστε μαζί μας στο ubdgrofficial@gmail.com.',
      },
    ],
  },
  en: {
    pageTitle: 'Cookie Policy | UBD',
    pageDescription: 'See which cookies UBD uses, why they are used, and how you can control your preferences.',
    badge: 'LEGAL INFORMATION',
    title: 'Cookie Policy',
    subtitle: 'We follow a transparent and minimal cookie approach, giving you control and prioritizing privacy.',
    lastUpdatedLabel: 'Last updated:',
    lastUpdated: 'March 19, 2026',
    legalNav: [
      { path: '/privacy', label: 'Privacy' },
      { path: '/terms', label: 'Terms' },
      { path: '/cookies', label: 'Cookies' },
    ],
    sections: [
      {
        title: 'What cookies we use',
        body: 'We use essential cookies for core functionality, such as storing your cookie banner preference (accept or decline), so the banner does not reappear on every visit.',
      },
      {
        title: 'Analytics and marketing cookies',
        body: 'If you explicitly accept them, analytics or optimization cookies may be enabled to help us understand website usage. They are not enabled without your consent.',
      },
      {
        title: 'What we do not use without consent',
        body: 'We do not enable aggressive tracking scripts or third-party advertising cookies without your prior choice in the cookie banner.',
      },
      {
        title: 'How to change preferences',
        body: 'You can update or revoke your choice at any time by clearing stored cookie consent in your browser, or by setting preferences again when the cookie banner is shown.',
      },
      {
        title: 'Cookie-related contact',
        body: 'For questions about cookie usage or personal data handling, contact us at ubdgrofficial@gmail.com.',
      },
    ],
  },
};

const CookiesPage = ({ language }) => {
  const t = COOKIES_TRANSLATIONS[language] || COOKIES_TRANSLATIONS.el;
  return <LegalPageLayout t={t} currentPath="/cookies" />;
};

export default CookiesPage;
