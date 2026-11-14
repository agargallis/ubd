// Google reviews of UBD, transcribed verbatim from Antonis' screenshots
// (only stray spaces before punctuation tidied). **text** = highlighted phrase.
// avatar: { project } = logo from the site's PROJECTS, { image } = file/path,
// or a Google-style letter avatar { letter, color }.

export const GOOGLE_REVIEWS = [
  {
    name: 'Λιοτρίβι',
    category: 'Παραδοσιακό Εστιατόριο',
    avatar: { image: 'liotrivi' },
    text: 'Ο Αντώνης κατάφερε να μας δημιουργήσει μια όμορφη ψηφιακή παρουσία ως "Λιοτρίβι", καθώς εμείς δεν γνωρίζουμε από αυτά και δεν είμαστε τόσο κοντά με την τεχνολογία. Μας ανανέωσε το προφίλ μας στο Google, μας δημιούργησε από το μηδέν Instagram, μας δημιούργησε μια απλή και καθωσπρέπει ιστοσελίδα με φόρμα κρατήσεων και πολλά πολλά ακόμη. Πλέον νιώθουμε πως **η νέα γενιά μπορεί να μας μάθει** μέσα από το Ίντερνετ αλλά και να ανακαλύψει τι προσφέρουμε, πιο καλά από ποτέ. Ευχαριστούμε για όλα.',
  },
  {
    name: 'aggelos myriounis',
    category: 'Κάτοχος Σύγχρονου Ψητοπωλείου',
    avatar: { project: 'Άσπρο Πρόβατο Κρεατοφαγείον', fill: '#fff' }, // transparent sheep → white
    text: 'Πολύ φιλικός ο Αντώνης, συνεργάσιμος, έκατσε και άκουσε τι ήθελα και **το αποτέλεσμα ήταν εκπληκτικό!!!**',
  },
  {
    name: 'Eprepe',
    category: 'Παραθαλάσσια Ταβέρνα',
    avatar: { project: 'Έπρεπε' },
    text: 'Μια φρέσκια παρουσία σε ο,τι αφορά computing, programming και online στήσιμο που αξιοποιήσαμε στο εστιατόριό μας. Ο Αντώνης κατασκεύασε **πολύ έξυπνα και γρήγορα** για εμάς μια όμορφη και φιλική για τον επισκέπτη ιστοσελίδα, καθώς επίσης και κάποιες πολύτιμες παρεμβάσεις στο instagram και το google προφίλ της επιχείρησής μας! Ευχαριστούμε πολύ!!',
  },
  {
    name: 'Μεταξύ μας',
    category: 'Ψητοπωλείο & Ζωντανή Μουσική',
    avatar: { image: '/2.png' },
    text: 'Μια πολύ καλή δουλειά κ προσεγμένη από **ένα νέο παιδί γεμάτο όρεξη** να σου προσφέρει ότι χρειαστείς..!',
  },
];

// Reviews per slide (2 slides).
export const REVIEW_SLIDES = [[0, 1], [2, 3]];

// Heading per slide, so the title is not repeated.
export const REVIEW_HEADINGS = [
  { prefix: 'Τι λένε για', accent: 'εμάς;', suffix: '' },
  { prefix: 'Κι άλλες', accent: 'γνώμες…', suffix: '' },
];

export const REVIEWS_COPY = {
  source: 'Κριτικές στο Google',
  cta: 'Δες όλες τις κριτικές στο Google',
};
