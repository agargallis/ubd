import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { FileText, Database, Shield, UserCheck, Cookie, Lock, Users, Edit, Mail } from 'lucide-react';

const PRIVACY_TRANSLATIONS = {
  el: {
    pageTitle: 'Πολιτική Απορρήτου | UBD',
    pageDescription: 'Η Πολιτική Απορρήτου της UBD περιγράφει πώς συλλέγουμε, χρησιμοποιούμε και προστατεύουμε τα προσωπικά σας δεδομένα.',
    title: 'Πολιτική Απορρήτου',
    lastUpdatedLabel: 'Τελευταία ενημέρωση:',
    lastUpdated: '14 Νοεμβρίου 2025',
    tableOfContents: 'Πίνακας Περιεχομένων',
    sections: [
      { id: 'introduction', title: 'Εισαγωγή', content: 'Καλώς ήρθατε στην UBD ("εμείς", "μας"). Δεσμευόμαστε να προστατεύουμε το απόρρητό σας. Αυτή η Πολιτική Απορρήτου εξηγεί πώς συλλέγουμε, χρησιμοποιούμε, αποκαλύπτουμε και προστατεύουμε τις πληροφορίες σας όταν επισκέπτεστε την ιστοσελίδα μας. Διαβάστε προσεκτικά αυτήν την πολιτική απορρήτου. Εάν δεν συμφωνείτε με τους όρους αυτής της πολιτικής απορρήτου, παρακαλούμε μην έχετε πρόσβαση στον ιστότοπο.' },
      { id: 'data-collection', title: 'Συλλογή Δεδομένων', content: 'Συλλέγουμε προσωπικές πληροφορίες που μας παρέχετε οικειοθελώς όταν εκφράζετε ενδιαφέρον για τις υπηρεσίες μας ή επικοινωνείτε μαζί μας. Οι πληροφορίες που συλλέγουμε περιλαμβάνουν: <ul><li><strong>Προσωπικά Στοιχεία:</strong> Ονοματεπώνυμο, διεύθυνση email, αριθμός τηλεφώνου και όνομα εταιρείας που παρέχονται μέσω της φόρμας επικοινωνίας μας.</li><li><strong>Δεδομένα Χρήσης:</strong> Πληροφορίες που συλλέγονται αυτόματα κατά την πλοήγησή σας, όπως η διεύθυνση IP, ο τύπος του προγράμματος περιήγησης και οι σελίδες που επισκέπτεστε, για σκοπούς ανάλυσης.</li></ul>' },
      { id: 'data-usage', title: 'Χρήση Δεδομένων', content: 'Χρησιμοποιούμε τις πληροφορίες που συλλέγουμε για διάφορους επιχειρηματικούς σκοπούς, όπως: <ul><li>Για να απαντήσουμε στα ερωτήματά σας και να παρέχουμε υποστήριξη πελατών.</li><li>Για να βελτιώσουμε την ιστοσελίδα μας και τις υπηρεσίες μας.</li><li>Για την αποστολή ενημερωτικών δελτίων ή προωθητικού υλικού, με τη συγκατάθεσή σας.</li><li>Για την πρόληψη δόλιων δραστηριοτήτων και τη διασφάλιση της ασφάλειας του ιστότοπου.</li></ul>' },
      { id: 'user-rights', title: 'Τα Δικαιώματά σας', content: 'Σύμφωνα με τον Γενικό Κανονισμό για την Προστασία Δεδομένων (GDPR), έχετε τα ακόλουθα δικαιώματα: <ul><li>Το δικαίωμα πρόσβασης στα προσωπικά σας δεδομένα.</li><li>Το δικαίωμα διόρθωσης ανακριβών δεδομένων.</li><li>Το δικαίωμα διαγραφής των δεδομένων σας ("δικαίωμα στη λήθη").</li><li>Το δικαίωμα περιορισμού της επεξεργασίας.</li><li>Το δικαίωμα στη φορητότητα των δεδομένων.</li><li>Το δικαίωμα εναντίωσης στην επεξεργασία.</li></ul><p>Για να ασκήσετε οποιοδήποτε από αυτά τα δικαιώματα, παρακαλούμε επικοινωνήστε μαζί μας στα στοιχεία που παρέχονται παρακάτω.</p>' },
      { id: 'cookies', title: 'Cookies & Τεχνολογίες Παρακολούθησης', content: 'Χρησιμοποιούμε cookies για να βελτιώσουμε την εμπειρία περιήγησής σας. Τα cookies είναι μικρά αρχεία δεδομένων που αποθηκεύονται στη συσκευή σας. Χρησιμοποιούμε απαραίτητα cookies για τη λειτουργία του ιστότοπου, καθώς και cookies ανάλυσης και marketing με τη συγκατάθεσή σας. Μπορείτε να διαχειριστείτε τις προτιμήσεις σας για τα cookies μέσω του banner cookie.' },
      { id: 'security', title: 'Ασφάλεια Δεδομένων', content: 'Έχουμε εφαρμόσει κατάλληλα τεχνικά και οργανωτικά μέτρα ασφαλείας για την προστασία των προσωπικών σας δεδομένων από τυχαία ή παράνομη καταστροφή, απώλεια, αλλοίωση, μη εξουσιοδοτημένη αποκάλυψη ή πρόσβαση.' },
      { id: 'third-party', title: 'Υπηρεσίες Τρίτων', content: 'Ο ιστότοπός μας χρησιμοποιεί το Google reCAPTCHA v3 για την προστασία από spam και κακόβουλη χρήση στη φόρμα επικοινωνίας μας. Η χρήση του reCAPTCHA υπόκειται στην <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">Πολιτική Απορρήτου</a> και τους <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">Όρους Χρήσης</a> της Google.' },
      { id: 'changes', title: 'Αλλαγές στην Πολιτική', content: 'Ενδέχεται να ενημερώνουμε αυτήν την Πολιτική Απορρήτου από καιρό σε καιρό. Θα σας ειδοποιήσουμε για τυχόν αλλαγές δημοσιεύοντας τη νέα Πολιτική Απορρήτου σε αυτή τη σελίδα και ενημερώνοντας την ημερομηνία "Τελευταία ενημέρωση".' },
      { id: 'contact', title: 'Επικοινωνία', content: 'Εάν έχετε ερωτήσεις ή σχόλια σχετικά με αυτήν την Πολιτική Απορρήτου, παρακαλούμε επικοινωνήστε μαζί μας στο: <a href="mailto:ubdgrofficial@gmail.com" class="text-primary hover:underline">ubdgrofficial@gmail.com</a>' },
    ],
  },
  en: {
    pageTitle: 'Privacy Policy | UBD',
    pageDescription: 'UBD Privacy Policy explains how we collect, use, and protect your personal data.',
    title: 'Privacy Policy',
    lastUpdatedLabel: 'Last updated:',
    lastUpdated: 'November 14, 2025',
    tableOfContents: 'Table of Contents',
    sections: [
      { id: 'introduction', title: 'Introduction', content: 'Welcome to UBD ("we", "us"). We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and protect your information when you visit our website. Please read this policy carefully. If you do not agree with the terms of this policy, please do not access the site.' },
      { id: 'data-collection', title: 'Data Collection', content: 'We collect personal information that you voluntarily provide when you express interest in our services or contact us. This may include: <ul><li><strong>Personal Data:</strong> Full name, email address, phone number, and company name provided through our contact form.</li><li><strong>Usage Data:</strong> Information collected automatically during browsing, such as IP address, browser type, and pages visited for analytics purposes.</li></ul>' },
      { id: 'data-usage', title: 'How We Use Data', content: 'We use collected information for business purposes such as: <ul><li>Responding to your requests and providing support.</li><li>Improving our website and services.</li><li>Sending newsletters or promotional material with your consent.</li><li>Preventing fraudulent activity and maintaining website security.</li></ul>' },
      { id: 'user-rights', title: 'Your Rights', content: 'Under GDPR, you have rights including: <ul><li>Access to your personal data.</li><li>Correction of inaccurate data.</li><li>Deletion of your data ("right to be forgotten").</li><li>Restriction of processing.</li><li>Data portability.</li><li>Objection to processing.</li></ul><p>To exercise any of these rights, contact us using the details below.</p>' },
      { id: 'cookies', title: 'Cookies & Tracking Technologies', content: 'We use cookies to improve your browsing experience. Cookies are small files stored on your device. We use essential cookies for website functionality, and analytics/marketing cookies based on your consent. You can manage cookie preferences through our cookie banner.' },
      { id: 'security', title: 'Data Security', content: 'We apply appropriate technical and organizational measures to protect your personal data against accidental or unlawful destruction, loss, alteration, unauthorized disclosure, or access.' },
      { id: 'third-party', title: 'Third-Party Services', content: 'Our website uses Google reCAPTCHA v3 for spam and abuse protection in the contact form. Use of reCAPTCHA is subject to Google\'s <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">Privacy Policy</a> and <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">Terms of Service</a>.' },
      { id: 'changes', title: 'Policy Changes', content: 'We may update this Privacy Policy from time to time. Any changes will be posted on this page and the "Last updated" date will be revised.' },
      { id: 'contact', title: 'Contact', content: 'If you have questions or comments about this Privacy Policy, contact us at: <a href="mailto:ubdgrofficial@gmail.com" class="text-primary hover:underline">ubdgrofficial@gmail.com</a>' },
    ],
  },
};

const SECTION_ICONS = {
  introduction: <FileText className="h-8 w-8 text-primary" />,
  'data-collection': <Database className="h-8 w-8 text-primary" />,
  'data-usage': <Shield className="h-8 w-8 text-primary" />,
  'user-rights': <UserCheck className="h-8 w-8 text-primary" />,
  cookies: <Cookie className="h-8 w-8 text-primary" />,
  security: <Lock className="h-8 w-8 text-primary" />,
  'third-party': <Users className="h-8 w-8 text-primary" />,
  changes: <Edit className="h-8 w-8 text-primary" />,
  contact: <Mail className="h-8 w-8 text-primary" />,
};

const PrivacyPolicy = ({ language }) => {
  const t = PRIVACY_TRANSLATIONS[language] || PRIVACY_TRANSLATIONS.el;
  const sections = t.sections.map(section => ({ ...section, icon: SECTION_ICONS[section.id] }));

  return (
    <>
      <Helmet>
        <title>{t.pageTitle}</title>
        <meta name="description" content={t.pageDescription} />
      </Helmet>
      <div className="py-24 md:py-32 bg-background text-foreground">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {t.title}
            </h1>
            <p className="text-muted-foreground">{t.lastUpdatedLabel} {t.lastUpdated}</p>
          </motion.div>

          <div className="grid lg:grid-cols-4 gap-12">
            <aside className="lg:col-span-1 lg:sticky top-28 self-start hidden lg:block"> {/* Hide on small screens, show sticky on large */}
              <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-white mb-4">{t.tableOfContents}</h3>
                <ul className="space-y-3">
                  {sections.map(section => (
                    <li key={section.id}>
                      <a 
                        href={`#${section.id}`} 
                        className="text-gray-300 hover:text-primary transition-colors duration-200 font-semibold"
                      >
                        {section.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-3 space-y-8"
            >
              {sections.map((section, index) => (
                <motion.div
                  key={section.id}
                  id={section.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-8 transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10"
                >
                  <div className="flex items-center mb-6">
                    <div className="mr-4">{section.icon}</div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white">{section.title}</h2>
                  </div>
                  <div
                    className="prose prose-invert max-w-none prose-p:font-medium prose-p:text-gray-300 prose-ul:list-disc prose-ul:pl-6 prose-li:text-gray-300 prose-li:font-medium prose-strong:text-white prose-a:text-primary prose-a:no-underline hover:prose-a:underline leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: section.content }}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;